import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Products from '../data/Products'
import { useSearch } from '../contexts/SearchContext';
import { useSearchParams } from 'react-router-dom';


const Shop = () => {
  const [searchParams , setSearchParams] = useSearchParams()
  const category =searchParams.get('category') 
  const {search,setSearch} = useSearch();
  const [ShortOrder, setShortOrder] = useState("default")

  const filteredProduct = Products.filter((product)=>{
    const matchesSearch =product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? category.toLowerCase().includes(product.category.toLowerCase()):true;
    return matchesSearch && matchesCategory;
})

const ShortedProducts =[...filteredProduct].sort((a,b)=>{
  if(ShortOrder === "Low-high"){
    return a.price - b.price ;
  }

  if(ShortOrder === "High-low"){
    return b.price - a.price ;
  }
  return 0;
})

  return  (
    
    <section>
      <h1 className='text-2xl md:text-3xl font-bold mb-6'>our furniture collection </h1>

      
<div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
  <p className="text-sm text-gray-600">
    {ShortedProducts.length} products found
  </p>

  <select
    value={ShortOrder}
    onChange={(e) => setShortOrder(e.target.value)}
    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-[#987654]"
  >
    <option value="default">Default Sorting</option>
    <option value="Low-high">Price: Low to High</option>
    <option value="High-low">Price: High to Low</option>
  </select>
</div>



      <button className="mb-5 text-sm text-[#987654] underline" onClick={()=>{
        window.history.replaceState({},'',"/shop")
        window.dispatchEvent(new PopStateEvent("popstate"))
      }}>Rimove Category filters</button>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5'>
        {
           ShortedProducts.length === 0 ? (
           <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
  <h2 className="text-xl font-semibold text-gray-800">
    No Furniture Found
  </h2>

  <p className="mt-2 text-sm text-gray-500">
    Try searching with a different product name.
  </p>

  <button
  onClick={()=>setSearch("")}
    className="mt-5 rounded-lg bg-[#987654] px-5 py-2 text-white transition hover:bg-[#806044]"
  >
    Clear Search
  </button>
</div>
          ):
          ShortedProducts.map((product)=>{
            return  <ProductCard key={product.id} product={product}/>
          })
         
        }

      </div>
    </section>
  )
}

export default Shop