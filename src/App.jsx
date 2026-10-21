import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import { CartProvider } from './contexts/CartContext';
import { SearchProvider } from './contexts/SearchContext';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <SearchProvider> 

    <CartProvider>

    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/product/:id' element={<ProductDetails/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>
    </SearchProvider>
  )
}

export default App