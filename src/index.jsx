import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Page404 from './pages/Page404'
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
          <Route path="/products/:productNumber" element={<Products />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
