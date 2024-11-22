'use client'
import { useState } from 'react'
import Image from 'next/image'

const properties = [
  { id: 1, name: 'Zen Garden Retreat', price: '$1,200,000', image: '/Discover_the_most_luxurious_pr.jpeg', features: ['Hot Tub', 'Sauna', 'Meditation Room'] },
  { id: 2, name: 'Coastal Spa Villa', price: '$2,500,000', image: '/Discover_the_most_luxurious_pr.jpeg', features: ['Infinity Pool', 'Steam Room', 'Yoga Deck'] },
  { id: 3, name: 'Mountain Wellness Lodge', price: '$1,800,000', image: '/Discover_the_most_luxurious_pr.jpeg', features: ['Indoor Pool', 'Massage Room', 'Fitness Center'] },
]

export default function PropertyListings() {
  const [filter, setFilter] = useState('')

  const filteredProperties = properties.filter(property =>
    property.features.some(feature => feature.toLowerCase().includes(filter.toLowerCase()))
  )

  return (
    <section id="properties" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Properties</h2>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Filter by spa feature..."
            className="w-full p-2 border rounded"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={property.image} alt={property.name} width={400} height={300} style={{ objectFit: 'cover' }} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                <p className="text-gray-600 mb-4">{property.price}</p>
                <ul className="text-sm text-gray-500">
                  {property.features.map(feature => (
                    <li key={feature} className="mb-1">• {feature}</li>
                  ))}
                </ul>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

