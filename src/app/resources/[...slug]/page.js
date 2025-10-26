import Link from 'next/link';
import { FaFolder, FaFile } from 'react-icons/fa6';
import { structure } from '../../../lib/folderStructure'; // Import the structure
import { supabase } from '../../../lib/supabaseClient'; // Import supabase

export const revalidate = 60; // Re-fetch data every 60 seconds

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
        <Link href="/resources" className="hover:underline uppercase">Resources</Link>
        {slug.map((part, index) => {
          const href = `/resources/${slug.slice(0, index + 1).join('/')}`;
          return (
            <span key={index} className="flex items-center space-x-2">
              <span>/</span>
              <Link href={href} className="hover:underline uppercase">{part.replace('-', ' ')}</Link>
            </span>
          )
        })}
      </div>

      <h1 className="text-4xl font-bold mb-8">{currentFolder.name}</h1>

      {/* subfolders rendering */}
      {subfolders.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-emerald-50 mb-4">Folders</h2>
          <div className="flex flex-col  gap-4">
            {subfolders.map((folder) => (
              <Link 
                key={folder.id} 
                href={`/resources/${[...slug, folder.id].join('/')}`} // appends to the current path
                className="flex flex-row items-center p-4 border rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
              >
                <FaFolder className="w-6 h-6 text-blue-600 mb-2 mr-5" />
                <span className="text-gray-800 font-medium text-center">{folder.name}</span>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* files rendering previously fetched from supabase */}
      {files.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-12">Files</h2>
          <div className="flex flex-col space-y-2">
            {files.map((file) => (
              <a
                key={file.id}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors border"
              >
                <FiFileText className="w-5 h-5 text-gray-500 shrink-0" />
                <span className="font-medium">{file.title}</span>
                {file.author && <span className="text-sm text-gray-500">- {file.author}</span>}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}