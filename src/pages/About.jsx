import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#f3e9dc] px-4 py-16 text-center md:py-24">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">
          About <span className="text-[#c49a6c]">Ma Furniture</span>
        </h1>

        <p className="mx-auto max-w-2xl text-gray-700 md:text-lg">
          Discover furniture that brings comfort, style, and warmth
          to your living space.
        </p>
      </section>

      {/* Our Story */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
          alt="Comfortable modern living room"
          className="h-72 w-full rounded-2xl object-cover shadow-md md:h-96"
        />

        <div>
          <h2 className="mb-5 text-3xl font-bold">Our Story</h2>

          <p className="mb-4 leading-7 text-gray-600">
            At Ma Furniture, we believe furniture is more than just
            something you place in a room. It helps make a house feel
            like home.
          </p>

          <p className="leading-7 text-gray-600">
            Our goal is to help customers explore furniture options
            that balance design, comfort, and everyday functionality.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-3xl font-bold">Our Mission</h2>

          <p className="leading-7 text-gray-600 md:text-lg">
            Our mission is to make furniture shopping simple by
            presenting useful product information, thoughtful designs,
            and options for different living spaces.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Find Furniture for Your Home
        </h2>

        <p className="mb-7 text-gray-600">
          Explore our collection and discover your next favourite piece.
        </p>

        <Link
          to="/shop"
          className="inline-block rounded-lg bg-[#c49a6c] px-7 py-3 font-semibold text-white transition hover:bg-[#ad8054]"
        >
          Explore Shop
        </Link>
      </section>
    </div>
  );
};

export default About;