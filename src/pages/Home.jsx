import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  Products  from "../data/Products";
import  ProductCard  from "../components/ProductCard";

const Home = () => {
  const navigate = useNavigate()
  return (
    <main>
      <section className='min-h-[500px] md-min-h-[600px] flex items-center px-6 md:px-12 lg:px-20 p-y-16 bg-[#f5f0e8]'>
        <div className='w-full md:w-1/2'>
        <p className='uppercase text-sm tracking-[3px] text-gray-600 mb-4'>Comfort Meets Style</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900'>
          Make Your Home
          <span className="block text-[#987654]"> Beautiful</span>
        </h1>
        <p className='mt-5  text-gray-600 leading-7  max-w-md'>
          Discover thoughtfully  designed furniture that brings comfort , elegance and style to your space
        </p>
        <Link to='/shop' className='inline-block mt-7 px-6 py-3 bg-gray-900 text-white rounded hover:bg-[#987654] transition'>
        Shop Now
        </Link>

        </div>
        
<div className="hidden md:flex w-1/2 justify-center items-center mt-10 md:mt-0">
  <img
    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
    alt="Modern living room furniture"
    className="w-full max-w-lg h-[350px] lg:h-[450px] object-cover rounded-2xl shadow-xl"
  />
</div>

      </section>

      {/* second section category  */}


      
<section className="px-5 md:px-12 lg:px-20 py-16">
  <div className="text-center mb-10">
    <p className="text-sm uppercase tracking-[3px] text-[#987654]">
      Explore Our Collection
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mt-3">
      Shop By Category
    </h2>

    <p className="text-gray-500 mt-3">
      Find the perfect furniture for every corner of your home.
    </p>
  </div>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
    {[
      {
        name: "Study Tables",
        image: "photo-1518455027359-f3f8164ba6bd",
      },
      {
        name: "Chairs",
        image: "photo-1503602642458-232111445657",
      },
      {
        name: "Sofas",
        image: "photo-1555041469-a586c61ea9bc",
      },
      {
        name: "Beds",
        image: "photo-1505693416388-ac5ce068fe85",
      },
    ].map((category) => (
      <div key={category.name} className="group cursor-pointer"   onClick={() => navigate(`/shop?category=${encodeURIComponent(category.name)} `)}>
        <div className="h-48 md:h-64 overflow-hidden rounded-xl bg-gray-100">
          <img
            src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=600&q=80`}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <h3 className="text-lg font-semibold mt-4 text-center">
          {category.name}
        </h3>
      </div>
    ))}
  </div>
</section>


   {/* third section  */}




<section className="px-5 md:px-12 lg:px-20 py-16 bg-[#faf8f5]">
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
    <div>
      <p className="text-sm uppercase tracking-[3px] text-[#987654]">
        Our Selection
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mt-3">
        Featured Products
      </h2>

      <p className="text-gray-500 mt-3">
        Discover furniture made for your everyday comfort.
      </p>
    </div>

    <Link
      to="/shop"
      className="text-[#987654] font-semibold hover:underline"
    >
      View All Products →
    </Link>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {Products.slice(0, 4).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</section>


{/* forth section  */}






<section className="px-5 md:px-12 lg:px-20 py-16">
  <div className="text-center mb-12">
    <p className="text-sm uppercase tracking-[3px] text-[#987654]">
      The Difference
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mt-3">
      Why Choose Us?
    </h2>

    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
      We believe great furniture should combine comfort,
      quality and timeless design.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="text-center p-6">
      <i className="ri-award-line text-4xl text-[#987654]"></i>
      <h3 className="font-bold text-lg mt-4">Quality Furniture</h3>
      <p className="text-gray-500 text-sm mt-2">
        Thoughtfully selected designs for everyday living.
      </p>
    </div>

    <div className="text-center p-6">
      <i className="ri-truck-line text-4xl text-[#987654]"></i>
      <h3 className="font-bold text-lg mt-4">Reliable Delivery</h3>
      <p className="text-gray-500 text-sm mt-2">
        Convenient delivery options for your furniture.
      </p>
    </div>

    <div className="text-center p-6">
      <i className="ri-price-tag-3-line text-4xl text-[#987654]"></i>
      <h3 className="font-bold text-lg mt-4">Fair Pricing</h3>
      <p className="text-gray-500 text-sm mt-2">
        Beautiful furniture at transparent prices.
      </p>
    </div>

    <div className="text-center p-6">
      <i className="ri-customer-service-2-line text-4xl text-[#987654]"></i>
      <h3 className="font-bold text-lg mt-4">Customer Support</h3>
      <p className="text-gray-500 text-sm mt-2">
        Help to guide you towards the right choice.
      </p>
    </div>
  </div>
</section>


{/* CTA section  */}





<section className="px-5 md:px-12 lg:px-20 py-16">
  <div className="bg-[#e9dfd2] rounded-2xl px-6 py-12 md:py-16 md:px-12 text-center">
    <p className="text-sm uppercase tracking-[3px] text-[#806344]">
      Make It Yours
    </p>

    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900">
      Give Your Home a New Look
    </h2>

    <p className="text-gray-600 max-w-xl mx-auto mt-5 leading-7">
      Explore our furniture collection and find pieces
      that make your space feel more like home.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
      <Link
        to="/shop"
        className="px-7 py-3 bg-gray-900 text-white rounded hover:bg-[#987654] transition"
      >
        Explore Collection
      </Link>

      <Link
        to="/contact"
        className="px-7 py-3 border border-gray-900 text-gray-900 rounded hover:bg-white transition"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>


    </main>
  )
}

export default Home