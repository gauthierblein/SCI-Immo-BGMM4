import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Error404 from './pages/Error404'
import Header from './components/Header'
import Footer from './components/Footer'
import '../src/utils/main.css'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='main'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:Id" element={<Product />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
