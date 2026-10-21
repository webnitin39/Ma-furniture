import React from 'react'
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-300 md:hover:-translate-y-1 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg transition duration-300 md:group-hover:scale-[1.02]"
      />

      <h2 className="mt-3 text-lg font-semibold">
        {product.name}
      </h2>

      <p className="text-gray-500 text-sm">
        {product.category}
      </p>

      <div className="mt-2 flex items-center gap-2">
        <span className="font-bold">
          ₹{product.price.toLocaleString("en-IN")}
        </span>

        <span className="text-gray-400 line-through text-sm">
          ₹{product.oldPrice.toLocaleString("en-IN")}
        </span>
      </div>
      <Link to={`/product/${product.id}`} className="mt-4 block w-full rounded-lg bg-[#987654] py-2 text-center text-white transition-colors duration-300 hover:bg-[#806044]">View details</Link>
    </div>
  );
};

export default ProductCard;