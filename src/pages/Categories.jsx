
import React from "react";
import { useNavigate } from "react-router-dom";
import  products  from "../data/Products";

const categories = [
  {
    name: "Study Table",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600",
  },
  {
    name: "Chair",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=600",
  },
  {
    name: "Sofa",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
  },
  {
    name: "Bed",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
  },
];

const Category = () => {
  const navigate = useNavigate();
  const getProductCount = (categoryName)=> {
    return products.filter((product)=>product.category === categoryName).length 
  };

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
            Ma Furniture
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Our Categories
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Find furniture that makes every corner of your home special.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() =>
                navigate(
                  `/shop?category=${encodeURIComponent(category.name)}`
                )
              }
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <h2 className="text-xl font-semibold text-gray-900">
                  {category.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  { getProductCount(category.name) }{ " "}
                  { getProductCount(category.name) === 1 ? 'Product' :'Products'}
                </p>

              <span className="text-sm font-semibold text-amber-700 transition group-hover:translate-x-1">
               Explore →
              </span>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
