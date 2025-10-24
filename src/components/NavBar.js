import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 px-8 bg-white shadow-sm border-b">
      {/* cs archice logo */}
      <Link href="/" className="text-xl font-bold text-gray-900">
        CS/ Archive
      </Link>

      {/* navigation hrefs */}
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="/resources" className="text-gray-600 hover:text-gray-900">
          Resources
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900">
          About Us
        </Link>
      </div>
    </nav>
  );
}