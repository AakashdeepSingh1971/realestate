import Link from 'next/link'

interface StickyHeaderProps {
    show: boolean
}

export function StickyHeader({ show }: StickyHeaderProps) {
    return (
        <header
            className={`fixed top-0 left-0 right-0 bg-transparent  z-[100000] transition-transform duration-300 ease-in-out transform ${show ? 'translate-y-0' : '-translate-y-full'
                } hidden md:block`}
        >
            <nav className="container mx-auto px-6 py-2">
                <div className="flex justify-between items-center bg-white rounded-3xl p-[1rem]">
                    <Link href="/" className="text-xl font-semibold text-gray-800">
                        Serenity Estates
                    </Link>
                    <div className="flex space-x-4">
                        <Link href="#properties" className="text-sm text-gray-600 hover:text-gray-800">Properties</Link>
                        <Link href="#amenities" className="text-sm text-gray-600 hover:text-gray-800">Spa Amenities</Link>
                        <Link href="#blog" className="text-sm text-gray-600 hover:text-gray-800">Blog</Link>
                        <Link href="#contact" className="text-sm text-gray-600 hover:text-gray-800">Contact</Link>
                        <Link href="#about" className="text-sm text-gray-600 hover:text-gray-800">About</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

