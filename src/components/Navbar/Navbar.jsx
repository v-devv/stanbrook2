import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>

        <ul className="navbar-menu">
            <li>Home</li>
            <li>About</li>
            <li>Destination</li>
            <li>Philippines Cruises</li>
            <li>Mice & Wedding</li>
            <li>Ultra Luxury</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
export default Navbar