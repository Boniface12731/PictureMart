import React from 'react'
import Logo from "../assets/logo.png"
  
const NavBar = () => {
  return (
  <div className='flex items-center justify-between py-5 font-medium'>
    <img src={Logo} 
         alt="Picture Mart" 
         className="w-36"/>
  </div>
  )
}
export default NavBar
