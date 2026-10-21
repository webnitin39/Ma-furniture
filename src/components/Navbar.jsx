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
          <div className="w-[50%] flex flex-1 items-center gap-2 rounded-lg border border-white/30 px-3 py-2 text-[16px] transition-colors focus-within:border-[#987654] md:w-[60%] md:flex-none"><i className="ri-search-2-line"></i><input className="w-full min-w-0 bg-transparent text-white outline-none placeholder:text-white/70" type="text" value={search} placeholder='search' onChange={(e)=>{
            setSearch(e.target.value)
          }}/></div>
          <div className='w-[30%] flex items-center justify-between cursor-pointer '>

     <Link
  to="/cart"
  className="relative inline-flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-80"
>
  <i className="ri-shopping-cart-line text-[25px]"></i>

  <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#987654] px-1 text-xs font-semibold text-white">
    {cartCount}
  </span>
</Link>
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