import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Log from './pages/Log/login'
import Sign from './pages/Sign/sign'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard/dashboard'
import Product from './pages/Product/product'
import Create from './pages/Create/create'
import Error404 from './pages/Error404'
import '../src/utils/main.css'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Log />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/products/:Id" element={<Product />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/dashboard/:id/create" element={<Create />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
