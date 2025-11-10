import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AppHeader } from './cmps/AppHeader.jsx'
import { ProductIndex } from './pages/ProductIndex.jsx'
import { CartList } from './pages/CartList.jsx'
import { AboutProduct } from './pages/AboutProduct.jsx'
import { ContactUs } from './pages/ContactUs.jsx'
import {UserMsg} from "./cmps/UserMsg.jsx"


export function RootCmp() {

  return (
      <section className="app">
        <main>
          <Routes>
            <Route path="/" element={<ProductIndex />} />
            <Route path="/cart" element={<CartList />} />
            <Route path="/about" element={<AboutProduct />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <UserMsg />
      </section>
  )
}

