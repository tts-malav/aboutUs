import React from 'react'
import './Navbar1.css'

const Navbar1 = () => {
  return (
    <>
    <nav className='fixed-top'>
      <a href='/'>
        <img id="navicon" 
          src='https://neevay.com/assets/business/web-homepage-Neevay-new-logo.svg' 
          alt=''
        />
      </a>
      <div id="navdiv">
        <ul id="navlist">
          <li><a className='hidden lg:block' href="/">Register as Vendor</a></li>
          <li><a href="/">Sign In</a></li>
          <li><button className="bg-black rounded-md text-white font-bold px-4 py-2" >Get Started Free</button></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar1

