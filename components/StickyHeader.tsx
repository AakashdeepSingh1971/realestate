'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
interface StickyHeaderProps {

    show: boolean;
}
export default function StickyHeader({ show }: StickyHeaderProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 bg-transparent z-[100000] transition-transform duration-300 ease-in-out transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <nav className="container mx-auto px-6 py-2">
                <div className="flex justify-between items-center bg-white rounded-3xl p-[1rem] pr-[2rem]">
                    <Link href="/" className="text-xl font-semibold text-gray-800">
                        Serenity Estates
                    </Link>
                    <div className="hidden md:flex space-x-4">
                        <Link href="#properties" className="text-sm text-gray-600 hover:text-gray-800">Properties</Link>
                        <Link href="#amenities" className="text-sm text-gray-600 hover:text-gray-800">Spa Amenities</Link>
                        <Link href="#blog" className="text-sm text-gray-600 hover:text-gray-800">Blog</Link>
                        <Link href="#contact" className="text-sm text-gray-600 hover:text-gray-800">Contact</Link>
                        <Link href="#about" className="text-sm text-gray-600 hover:text-gray-800">About</Link>
                    </div>
                    <button
                        className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white mt-2 rounded-3xl p-4 shadow-lg">
                    <Link href="#properties" className="block py-2 text-sm text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>Properties</Link>
                    <Link href="#amenities" className="block py-2 text-sm text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>Spa Amenities</Link>
                    <Link href="#blog" className="block py-2 text-sm text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>Blog</Link>
                    <Link href="#contact" className="block py-2 text-sm text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>Contact</Link>
                    <Link href="#about" className="block py-2 text-sm text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>About</Link>
                </div>
            </div>
        </header>
    )
}

