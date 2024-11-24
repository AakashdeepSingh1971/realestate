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
            className={`fixed top-0 left-0 right-0  bg-white  z-[100000] transition-transform duration-300 ease-in-out  transform ${isVisible ? 'translate-y-0' : '-translate-y-full'

                }`}
        >
            <nav className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center ">
                    <Link href="/" className="text-2xl font-semibold text-gray-800">
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
                        className="md:hidden z-[1000000000] text-gray-600 hover:text-gray-800 focus:outline-none"
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
            <div
                className={`fixed inset-y-0 right-0 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-screen justify-center items-center space-y-8 pt-20">
                    <Link href="#properties" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>Properties</Link>
                    <Link href="#amenities" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>Spa Amenities</Link>
                    <Link href="#blog" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>Blog</Link>
                    <Link href="#contact" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>Contact</Link>
                    <Link href="#about" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>About</Link>
                </div>
            </div>
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 h-screen bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={toggleMobileMenu}
                ></div>
            )}
        </header>
    )
}

