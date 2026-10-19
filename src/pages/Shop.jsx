import React from 'react'
import ProductCard from '../components/ProductCard'
import Products from '../data/Products'
import { useSearch } from '../contexts/SearchContext';
import { useSearchParams } from 'react-router-dom';


const Shop = () => {
  const [searchParams , setSearchParams] = useSearchParams()
  const category =searchParams.get('category') 
  const {search} = useSearch();


  const filteredProduct = Products.filter((product)=>{
    const matchesSearch =product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? category.toLowerCase().includes(product.category.toLowerCase()):true;
    return matchesSearch && matchesCategory;
})

  return  (
    
    <section>
      <h1 className='text-2xl md:text-3xl font-bold mb-6'>our furniture collection </h1>
      <button className="mb-5 text-sm text-[#987654] underline" onClick={()=>{
        window.history.replaceState({},'',"/shop")
        window.dispatchEvent(new PopStateEvent("popstate"))
      }}>Rimove Category filters</button>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5'>
        {
           filteredProduct.length === 0 ? (
            <p>no furniture found</p>
          ):
          filteredProduct.map((product)=>{
            return  <ProductCard key={product.id} product={product}/>
          })
         
        }

      </div>
    </section>
  )
}

export default Shop