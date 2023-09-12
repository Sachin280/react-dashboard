import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'
import Products from './pages/Product'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/settings' exact element={<Settings />} />
          <Route path='/products' exact element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
