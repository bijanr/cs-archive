import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <main className="grow">
        <div className="max-w-screen mx-auto p-8 md:p-12">
          <h1 className="flex items-center justify-center text-4xl font-bold mb-6 text-white/80 hover:text-purple-300">
            About Us
          </h1>
          <div className="flex items-center justify-center text-center space-y-4 text-lg text-gray-900 dark:text-gray-300">
            <p>
              A resource library made for students thriving to find the right resources to study.<br></br>
              <span className="flex flex-col text-center my-10">By the students, for the students.</span>
            </p>
          </div>
          <div className=" group flex items-center justify-center text-2xl font-poppins mt-6">
            <Link 
              href='https://github.com/bijanr/cs-archive' target='_blank'
              className=" group flex items-center gap-3  text-gray-400 font-semibold rounded-lg p-0.5 bg-linear-to-r from-purple-500 to-pink-500 shadow-md transition-colors hover:bg-zinc-900">
                
                <span className=" flex flex-row items-center gap-2 rounded-md bg-zinc-900 px-6 py-3 font-semibold text-purple-300 text-shadow-lg/50 transition-colors hover:bg-zinc-800">
                <FaGithub/>
                  Github
                <FaExternalLinkAlt/>
                </span>
            </Link>
          </div>
        </div>
      </main>
      <footer className="w-full text-center p-6 text-gray-400">
        Made with ❤️.
      </footer>
    </div>
    
  );
}