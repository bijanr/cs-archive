import Link from 'next/link';
import { FaFolder, FaFile } from 'react-icons/fa6';
import { structure } from '../../../lib/folderStructure'; // structure of the folder and subfolders inside them
import { supabase } from '../../../lib/supabaseClient'; 

export const revalidate = 60; // refetech data every 60 seconds

// find current folder in the slug
function findCurrentFolder(slug) {
  if (!slug) return structure; 

  let currentFolder = structure;
  for (const part of slug) {
    const nextFolder = currentFolder.children.find(f => f.id === part);
    if (nextFolder) {
      currentFolder = nextFolder; // change current folder
    } else {
      return null; 
    }
  }
  return currentFolder;
}

// fetch files from db
async function getFiles(folder) {
// fetch from the deepest folder
  if (folder.children.length > 0) {
    return [];
  }

  const { data, error } = await supabase
    .from(folder.table) // use db table (book/ pyq) from folder
    .select('*')
    .eq('category', folder.id); //match folder id with category

  if (error) {
    console.error("Error fetching files:", error);
    return [];
  }
  return data;
}

// main folder page
export default async function FolderPage(props) {
  const { slug } = await props.params; // e.g., ['books', 'cd'] or ['pyq', 'dsa']
  const currentFolder = findCurrentFolder(slug);

  // fetch subfolders
  const subfolders = currentFolder.children;

  // fetch files
  const files = await getFiles(currentFolder);

  return (
    <div className="max-w-5xl mx-auto p-8 md:p-12">
      {/*path hrefs*/}
      <div className="flex items-center space-x-2 text-gray-500 mb-4">
        <Link href="/resources" className="hover:underline font-semibold uppercase">Resources</Link>
        {slug.map((part, index) => {
          const href = `/resources/${slug.slice(0, index + 1).join('/')}`;
          return (
            <span key={index} className="flex items-center space-x-2">
              <span>/</span>
              <Link href={href} className="hover:underline uppercase font-semibold">{part.replace('-', ' ')}</Link>
            </span>
          )
        })}
      </div>

      <h1 className="text-4xl font-bold mb-8 text-white/80 hover:text-purple-500/90">{currentFolder.name}</h1>

      {/* subfolders rendering */}
      {subfolders.length > 0 && (
        <>
          <div className="flex flex-col gap-3">
            {subfolders.map((folder) => (
              <Link 
                key={folder.id} 
                href={`/resources/${[...slug, folder.id].join('/')}`} // appends to the current path
                className="group flex flex-row items-center px-4 py-2 border rounded-lg shadow-2xl hover:bg-zinc-800 hover:border-purple-300/70 transition-colors"
              >
                <FaFolder className="w-6 h-6 text-purple-400 mb-2 mr-5" />    {/* sub folder*/}
                <span className="text-white/60 font-semibold text-left group-hover:text-purple-400">{folder.name}</span>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* files rendering previously fetched from supabase */}
      {files.length > 0 && (
        <>
          <div className="flex flex-col space-y-2">
            {files.map((file) => (
              <Link
                key={file.id}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-3 text-gray-700 hover:bg-zinc-800 rounded-2xl transition-colors border"
              >
                <FaFile className="w-5 h-5 text-purple-400 mb-2 mr-5 shrink-0" /> {/* file*/}
                <span className="font-semibold text-white/60 text-left group-hover:text-purple-400">{file.title}</span>
                {file.author && <span className="text-[16px] text-white/30 group-hover:text-white/50 font-medium"> {file.author}</span>}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}