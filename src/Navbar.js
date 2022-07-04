import React from 'react'
import logo from './logo2.svg'
import avatar from './image-avatar.png'
import cart from './icon-cart.svg'

export default function Navbar() {
  return (
    <div className="flex flex-row items-center align-middle lg:mx-28 lg:py-4 mx-0 py-5 xl:pr-48">
        <img src={logo} className="lg:ml-12 lg:mr-5 " alt="" />
        <div className=" ">
          <ul className="space-x-4 hidden  lg:block  w:5 h:5">
            <a href="/" className="text-sm text-gray-500">Collections</a> 
            <a href="/" className="text-sm text-gray-500" >Men</a> 
            <a href="/" className="text-sm text-gray-500" >Women</a> 
            <a href="/" className="text-sm text-gray-500" >About</a> 
            <a href="/" className="text-sm text-gray-500" >Contact</a> 
          </ul>
        </div>
        <div className="flex flex-row space-x-2 lg:pl-60 lg:pr-10 lg:ml-28 lg:mr-0 items-center align-middle
           ml-28 pl-10 mr-0 md:ml-80 md:pl-48 2xl:pl-56 justify-self-end">{/* Cart-icon and avatar*/}
          <img src={cart} className="lg:w-5 lg:h-5 w-7 h-7" alt="" />
          <img src={avatar} className="lg:w-10 w-7 h-7" alt="" />
        </div>
      </div>
  )
}
