import Link from 'next/link';
import { FaFolder } from "react-icons/fa6";
import { structure } from '../../lib/folderStructure'; // import folder structure

export default function ResourcesRootPage() {
  // top level children
  const topLevelFolders = structure.children;

  return (
    <div className="max-w-5xl mx-auto p-8 md:p-12 bg-red">
      <h1 className="text-4xl font-bold mb-8 text-white/80 hover:text-purple-500/90">Resources</h1>

      {/* column view */}
      <div className="flex flex-col gap-4">
        {topLevelFolders.map((folder) => (
          <Link 
            key={folder.id} 
            href={`/resources/${folder.id}`} // route to /resources/books or /resources/pyqs
            className="flex flex-row items-center p-4 border rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
          >
            <FaFolder className="w-12 h-12 mr-5 text-purple-300 mb-2" />
            <span className="text-white font-medium text-center">{folder.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
