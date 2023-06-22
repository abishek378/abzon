import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';
import Checkout from '../Pages/Checkout/Checkout'
import Login from '../Pages/Login/Login'
import Header from '../components/Header/Header'
import Home from '../Pages/Home/Home';
const Router = () => {
  return (
<BrowserRouter>
<Routes>
<Route path="/checkout" element={<Checkout />} />
      <Route path="/" element={<Login />} />
       <Route exact path="/header" element={<Header />} />
       <Route path="/home" element={<Home />} />
</Routes>
</BrowserRouter>
  )
}

export default Router