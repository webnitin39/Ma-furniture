import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from "../contexts/CartContext";
import { useSearch } from '../contexts/SearchContext';

const Navbar = () => {
  const {cart} = useCart()
 const cartCount = cart.reduce((total,item)=>total + item.quantity,0)
  const [MenuOpen, setMenuOpen] = useState(false)
  const {search, setSearch} = useSearch()
  return (

    <nav className='w-full h-16 bg-gray-500 text-white relative '>

      <div className='w-full h-full px-4 md:8 lg:12 flex items-center justify-between gap-3'>

        <div className='w-[20%]  rounded-[13px] md:w-[6%] md:rounded-[10%] h-[70%]  flex items-center justify-center'><img className='w-full h-full rounded-[13px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmo1PCujMhqNLExUXJjLN_-vZN913yM_7NNWLwsKQwwQ&s=10" alt="logo" /></div>

        <div className='w-[50%] h-[70%] text-[17px]  hidden md:flex items-center justify-between'>
          <Link to='/' >Home</Link>
          <Link to='/shop' >Shop</Link>
          <Link to='/categories' >Categories</Link>
          <Link to='/about' >About</Link>
          <Link to='/contact' >Contact</Link>
         </div>

        <div className='w-[60%] h-[70%] md:w-[20%]  flex justify-between'>
          <div className='w-[50%]  flex gap-1 flex-1 items-center text-[16px] md:flex-none md:w-[60%]'><i className="ri-search-2-line"></i><input className='w-full min-w-0 outline-none' type="text" value={search} placeholder='search' onChange={(e)=>{
            setSearch(e.target.value)
          }}/></div>
          <div className='w-[30%] flex items-center justify-between cursor-pointer '>

         
          <Link to='/cart' className='w-[30%]  '><i className="ri-shopping-cart-line text-[25px]"></i><span  className="bg-gray text-white rounded-full sm:px-2  h-1/3 text-xs">{cartCount}</span></Link>
          <button className=' w-[30%] md:hidden  '><i className="ri-menu-line text-[25px]" onClick={()=>setMenuOpen(!MenuOpen) }></i></button>

           </div>

        </div>
      </div>
       {MenuOpen && (
  <div className=" absolute top-full left-0 z-50 w-1/2 md:hidden flex flex-col gap-4 p-4 bg-white text-black">
    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
    <Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link>
    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
  </div>
)}
      
    </nav>

  )
}

export default Navbar