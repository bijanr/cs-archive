"use client"; //to make the component more shitty

import { useState } from 'react'; 
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  // i dont know what use state is, jk no one knows
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-50 backdrop-blur-sm bg-zinc-900/90 text-gray-300 shadow-sm border-b border-zinc-800">
      <div className="max-w-screen mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/*left */}
          <div className="shrink-0 flex items-center gap-3">
            <Link href='/' className='text-xl font-bold text-gray-200 hover:text-gray-50 px-4 py-2'>
              CS/ Archive
            </Link>
          </div>

          {/* right */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              <Link href='/resources' className="text-gray-400 hover:text-purple-300 font-semibold transition-colors">
                Resources
              </Link>
              <Link href='/about' className="text-gray-400 hover:text-purple-300 font-semibold transition-colors">
                About
              </Link>
            </nav>

            <div className="hidden md:flex gap-2">
              <Link 
                href='https://github.com/bijanr/cs-archive' target='_blank'
                className="px-4 mx-4 py-2 text-gray-400 hover:text-gray-50 border-l border-gray-700 transition-colors text-2xl"
              >
                <FaGithub />
              </Link>
            </div>
            
            {/* burger menu */}
            <button 
              type="button"
              className="md:hidden p-2 text-gray-200 hover:text-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)} //on click open menu
              aria-label="Toggle menu"
            >
              <CiMenuBurger />
            </button>

          </div>
        </div>


        { /*no transition innit */}
        {/* {isMenuOpen && (
          <div className="md:hidden mt-4 ">
            <nav className="flex flex-col gap-2">
              <Link 
                href='/resources' 
                className="block px-4 py-3 text-gray-400 hover:text-gray-50 font-semibold transition-colors rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)} // Close menu on navigation
              >
                Resources
              </Link>
              <Link 
                href='/about' 
                className="block px-4 py-3 text-gray-400 hover:text-gray-50 font-semibold transition-colors rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)} // Close menu on navigation
              >
                About
              </Link>
              <Link 
                href='https://github.com/bijanr/cs-archive' 
                className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-gray-50 font-semibold transition-colors rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)} // Close menu on navigation
              >
                <FaGithub className="text-xl" />
                GitHub
              </Link>
            </nav>
          </div>
        )}   */}


        <div className={` md:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'} `}>
            <nav className='flex flex-col gap-2'>
              <Link 
               href='/resources' 
                className="block px-4 py-3 text-gray-400 hover:text-gray-50 font-semibold transition-colors rounded-lg hover:bg-zinc-900"
                onClick={() => setIsMenuOpen(false)} >
              Resources
             </Link>
             <Link 
              href='/about' 
              className="block px-4 py-3 text-gray-400 hover:text-gray-50 font-semibold transition-colors rounded-lg hover:bg-zinc-900"
              onClick={() => setIsMenuOpen(false)} 
            >
              About
            </Link>
            <Link 
              href='https://github.com/bijanr/cs-archive' target='_blank'
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-gray-50 font-semibold transition-colors rounded-lg hover:bg-zinc-900"
              onClick={() => setIsMenuOpen(false)} 
            >
              <FaGithub/>
              GitHub
            </Link>
            </nav>
          </div>
        
      </div>
    </header>
  );
}