import React from 'react'
import { useCart } from "../contexts/CartContext";
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cart,removeFromCart,updateQuantity} = useCart()
  const totalPrice = cart.reduce((total,item)=>total+item.quantity*item.price,0);
  return (
    <div className='p-6'>
      <h1>My Cart</h1>

    {cart.length === 0 ? (  <div className="text-center py-16">
    <h2 className="text-2xl font-semibold mb-3">
      Your cart is empty
    </h2>

    <p className="text-gray-500 mb-6">
      Discover furniture for your home.
    </p>

    <Link
      to="/shop"
      className="inline-block bg-black text-white px-6 py-3 rounded-lg"
    >
      Shop Now
    </Link>
  </div>):
    (
      <div className='grid gap-4'>

         {
        cart.map((item)=>{
          return(
          <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border p-4 rounded-lg">

            <img src={item.image} alt={item.name}className="w-full h-48 sm:w-20 sm:h-20 object-cover rounded" />

            <div className='flex-1'>

              <h2>{item.name}</h2>
              <p>Price : ₹{item.price} </p>
              {/* <p> Quantity : {item.quantity}</p> */}

              <div className='flex gap-3 items-center my-2'>
                <button  className="bg-gray-200 px-3 py-1 rounded" onClick={()=>updateQuantity(item.id,-1)}>-</button>
                <span>Quantity : {item.quantity}</span>
                <button  className="bg-gray-200 px-3 py-1  rounded" onClick={()=>updateQuantity(item.id,1)}>+</button>
              </div>

              <p>SubTotal : ₹{item.price*item.quantity}</p>
              

            </div>
            
            <button onClick={()=>{
              removeFromCart(item.id)
             
            }}>
              remove
            </button>
          </div>
          
          )
        })
      }
      </div>
      
    )}
    <div className='mt-6 border-t pt-4'>
                <h2 className='font-bold text-xl'> Total Amount : ₹{totalPrice.toLocaleString("en-IN")}</h2>
              </div>
    </div>
  )
}

export default Cart