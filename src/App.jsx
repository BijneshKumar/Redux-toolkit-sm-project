import React from 'react'
import Counter from './components/counter';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

{/* <Counter/> */ }

const App = () => {
  return (
    <BrowserRouter basename="/Redux-toolkit-sm-project/">

      <Navbar />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;