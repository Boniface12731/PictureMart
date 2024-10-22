import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}
export default App
