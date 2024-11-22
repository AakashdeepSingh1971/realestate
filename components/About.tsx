export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">About Serenity Estates</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            At Serenity Estates, we specialize in luxury properties that seamlessly blend opulent living with wellness-focused amenities. Our team of experts is dedicated to helping you find the perfect sanctuary that aligns with your lifestyle and well-being goals.
          </p>
          <p className="text-gray-600 mb-6">
            With years of experience in both real estate and wellness living trends, we curate a selection of homes that offer more than just a place to live – they provide a retreat for the mind, body, and soul.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  )
}

