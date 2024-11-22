import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-gray-800">
            Serenity Estates
          </Link>
          <div className="flex space-x-4">
            <Link href="#properties" className="text-gray-600 hover:text-gray-800">Properties</Link>
            <Link href="#amenities" className="text-gray-600 hover:text-gray-800">Spa Amenities</Link>
            <Link href="#blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

