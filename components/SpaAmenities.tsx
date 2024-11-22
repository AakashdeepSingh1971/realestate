import { Sun, Droplet, Moon, Flower } from 'lucide-react'

const amenities = [
  { name: 'Saunas & Steam Rooms', icon: Sun },
  { name: 'Indoor & Outdoor Pools', icon: Droplet },
  { name: 'Yoga & Meditation Spaces', icon: Moon },
  { name: 'Zen Gardens', icon: Flower },
]

export default function SpaAmenities() {
  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Spa & Wellness Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.name} className="text-center">
              <amenity.icon className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
              <p className="text-gray-600">Experience ultimate relaxation with our curated wellness features.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

