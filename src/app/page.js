import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { metadata } from "./layout";
// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-center -mt-16 bg-zinc-900"> 

//       <h1 className="text-5xl md:text-7xl font-bold text-emerald-50">
//         CS/ Archive
//       </h1>

//       <p className="mt-4 text-lg md:text-xl text-cyan-50 max-w-xl">
//         A collection of books, pyqs and notes.
//       </p>

//       <Link 
//         href="/resources" 
//         className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
//       >
//         Explore Resources
//       </Link>
//     </div>
//   );
// }


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center -mt-16 bg-zinc-900">
    <div className="max-w-screen mx-auto p-4 md:grid md:grid-cols-2 md:gap-x-12 md:items-center md:text-left lg:border md:rounded-4xl md:border-gray-700/50  md:px-10 md:py-20 lg:mx-10">
        {/*hero*/}
        <div className="md:col-start-1 md:row-start-1">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-500 to-pink-500 mb-10 text-transparent bg-clip-text mt-20">The Alchemist's Shelf</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/60">Every book and resource you need, meticulously organized.</p>
        </div>

        {/*image */}
        <div className="mb-8 md:mb-0 md:col-start-2 md:row-start-1 md:row-span-2 mx-10">
            <Image 
              src="/hero.png" 
              width={500} 
              height={500} 
              alt="Some random image"
              className="mx-auto w-full max-w-2xl bg-blend-overlay"
              quality={80}
              priority={true}
            />
        </div>

        {/*button*/}
        <div className="md:col-start-1 md:row-start-2">
          <Link 
            href="/resources" 
            className="mt-8 inline-block rounded-lg p-0.5 bg-linear-to-r from-purple-500 to-pink-500 shadow-md">
              <span className=" flex flex-row items-center gap-2 rounded-md bg-zinc-900 px-6 py-3 font-semibold text-purple-300 text-shadow-lg/50 transition-colors hover:bg-zinc-800">
                Explore Resources
                <FaExternalLinkAlt />
              </span>
          </Link>
        </div>
        
    </div>
</div>
  );
}
