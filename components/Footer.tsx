import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Serenity Estates</h3>
            <p className="text-sm">Luxury homes with built-in serenity</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="#properties" className="hover:underline">Properties</Link></li>
              <li><Link href="#amenities" className="hover:underline">Spa Amenities</Link></li>
              <li><Link href="#blog" className="hover:underline">Blog</Link></li>
              <li><Link href="#about" className="hover:underline">About Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm">123 Serenity Lane<br />Los Angeles, CA 90001<br />info@serenityestates.com<br />(555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2023 Serenity Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

