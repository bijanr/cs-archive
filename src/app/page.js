import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center -mt-16"> 

      <h1 className="text-5xl md:text-7xl font-bold text-emerald-50">
        CS/ Archive
      </h1>

      <p className="mt-4 text-lg md:text-xl text-cyan-50 max-w-xl">
        A collection of books, pyqs and notes.
      </p>

      <Link 
        href="/resources" 
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Explore Resources
      </Link>
    </div>
  );
}


