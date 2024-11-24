'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import StickyHeader from './StickyHeader'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showStickyHeader, setShowStickyHeader] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowStickyHeader(scrollPosition > 50) // Show after 100px of scrolling
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header id="main-header" className={`shadow-md bg-white ${mobileMenuOpen ? 'relative z-40' : 'relative z-[10000000]'}`}>
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold text-gray-800">
              Serenity Estates
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <Link href="#properties" className="text-gray-600 hover:text-gray-800">Properties</Link>
              <Link href="#amenities" className="text-gray-600 hover:text-gray-800">Spa Amenities</Link>
              <Link href="#blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link>
            </div>
            {/* Hamburger Menu Icon */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-800 z-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full justify-center items-center space-y-8 pt-20">
            <Link href="#properties" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>Properties</Link>
            <Link href="#amenities" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>Spa Amenities</Link>
            <Link href="#blog" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>Blog</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>Contact</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-800 text-lg" onClick={toggleMobileMenu}>About</Link>
          </div>
        </div>
        {/* Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleMobileMenu}
          ></div>
        )}
      </header>
      <StickyHeader show={showStickyHeader} />
    </>
  )
}

