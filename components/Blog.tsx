import Image from 'next/image'

const blogPosts = [
  { id: 1, title: 'Top 5 Homes with Spa Amenities', image: '/Discover_the_most_luxurious_pr.jpeg', excerpt: 'Discover the most luxurious properties featuring world-class spa facilities.' },
  { id: 2, title: 'Creating a Zen Space at Home', image: '/Discover_the_most_luxurious_pr.jpeg', excerpt: 'Learn how to transform any room into a peaceful retreat with these simple tips.' },
  { id: 3, title: 'Wellness Trends in Real Estate', image: '/Discover_the_most_luxurious_pr.jpeg', excerpt: 'Explore the latest wellness features that homebuyers are looking for in 2023.' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

