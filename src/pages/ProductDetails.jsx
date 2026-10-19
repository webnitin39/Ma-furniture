import React from 'react'
import products from '../data/Products'
import { useNavigate, useParams} from 'react-router-dom'
import { useCart } from "../contexts/CartContext";



const ProductDetails = () => {
  const{ addToCart }= useCart()
  const navigate = useNavigate()
  const {id} = useParams()
  const product = products.find(
    (item)=>{
      return( item.id===Number(id) )
    }
  )
  if(!product){
    return (
    <div className="px-4 py-16 text-center">
      <h2 className="text-2xl font-bold">
        Product Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        Sorry, this product does not exist.
      </p>

      <button
        onClick={() => navigate("/shop")}
        className="mt-5 rounded-lg bg-gray-900 px-6 py-3 text-white"
      >
        Back to Shop
      </button>
    </div>
  )
  }
  return (
      <section className="min-h-screen bg-gray-50 px-4 py-10 md:px-8 lg:px-16">
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-10 lg:gap-16">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full rounded-xl object-cover md:h-[450px] lg:h-[520px]"
        />

        <div>
          <p className="text-gray-500">{product.category}</p>

          <h1 className="text-2xl md:text-3xl font-bold mt-2">
            {product.name}
          </h1>

           <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-xl font-bold">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            <span className="text-gray-400 line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>

          {/* discount nikalne ke liye  */}
          {product.oldPrice > product.price && (
  <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
    {Math.round(
      ((product.oldPrice - product.price) / product.oldPrice) * 100
    )}% OFF
  </span>
)}

          </div>

          <p className="mt-5 text-gray-600">
            {product.description}
          </p>
          {/* shop per vapis jaane ke liye  */}
          <button
  onClick={() => navigate("/shop")}
  className="mt-6 block text-sm font-medium text-gray-600 underline underline-offset-4 transition hover:text-[#c49a6c]"
>
  ← Continue Shopping
</button>

          <button className="mt-7 w-full cursor-pointer rounded-lg bg-[#c49a6c] px-8 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#ad8054] md:w-auto" onClick={()=>{
            addToCart(product)
            navigate("/cart")
          }}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails