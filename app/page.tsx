import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PropertyListings from '@/components/PropertyListings'
import SpaAmenities from '@/components/SpaAmenities'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic';

// Dynamically import the map component with ssr: false
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,  // Disable SSR for this component
});
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <PropertyListings />
      <SpaAmenities />
      <Blog />
      <Contact />
      <About />
      <InteractiveMap />
      <Footer />
    </main>
  )
}

