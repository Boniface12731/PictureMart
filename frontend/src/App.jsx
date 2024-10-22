import React from 'react'
import { Routes, Route} from 'react-router-dom'
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
  <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
    <NavBar/>
      <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path ='/about' element={<About/>}/>
          <Route path ='/cart' element={<Cart/>}/>
          <Route path ='/collection' element={<Collection/>}/>
          <Route path ='/contact' element={<Contact/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/orders' element={<Orders/>}/>
          <Route path ='/place-order' element={<PlaceOrder/>}/>
          <Route path ='/product/:productId' element={<Product/>}/>
      </Routes>
    </div>
  )
}
export default App