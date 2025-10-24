import Link from 'next/link';
import { FiFolder } from 'react-icons/fi';
import { structure } from '../../lib/folderStructure'; // import folder structure

export default function ResourcesRootPage() {
  // top level children
  const topLevelFolders = structure.children;

  return (
    <div className="max-w-5xl mx-auto p-8 md:p-12">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>

      {/* column view */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {topLevelFolders.map((folder) => (
          <Link 
            key={folder.id} 
            href={`/resources/${folder.id}`} // route to /resources/books or /resources/pyqs
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
          >
            <FiFolder className="w-12 h-12 text-blue-600 mb-2" />
            <span className="text-gray-800 font-medium text-center">{folder.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}