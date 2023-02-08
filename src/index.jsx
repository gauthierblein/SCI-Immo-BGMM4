import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login/login'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard/dashboard'
import Product from './pages/Product'
import Error404 from './pages/Error404'
import '../src/utils/main.css'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:Id" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
