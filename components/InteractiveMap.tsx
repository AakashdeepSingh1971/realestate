'use client'

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const properties = [
  { id: 1, name: 'Zen Garden Retreat', lat: 34.052235, lng: -118.243683 },
  { id: 2, name: 'Coastal Spa Villa', lat: 34.019454, lng: -118.491191 },
  { id: 3, name: 'Mountain Wellness Lodge', lat: 34.106676, lng: -118.412575 },
];

export default function InteractiveMap() {
  interface Property {
    id: number;
    name: string;
    lat: number;
    lng: number;
  }

  const [activeProperty, setActiveProperty] = useState<Property | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Properties</h2>
        <div className="h-96 rounded-lg overflow-hidden">
          <MapContainer
            center={[34.052235, -118.243683]}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
            className="leaflet-container"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {properties.map((property) => (
              <Marker
                key={property.id}
                position={[property.lat, property.lng]}
                icon={new L.Icon.Default()}
                eventHandlers={{
                  click: () => setActiveProperty(property),
                }}
              >
                <Popup>
                  <div>
                    <h3 className="font-semibold">{property.name}</h3>
                    <button className="text-blue-500 hover:underline" aria-label={`View details of ${property.name}`}>
                      View Details
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
