'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/An_aerial_view_of_an_upscale_s.jpeg',
  '/A_series_of_stylish_homes_with.jpeg',
  '/A_happy_family_of_four_walking.jpeg',
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`Luxury home ${index + 1}`}
            fill // This replaces the layout="fill" prop
            style={{ objectFit: 'cover' }} // This replaces objectFit prop
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Find Your Tranquil Escape</h1>
          <p className="text-xl text-white mb-8">Discover luxury homes with built-in serenity</p>
          <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
            Explore Wellness Living
          </button>
        </div>
      </div>
    </section>
  )
}
