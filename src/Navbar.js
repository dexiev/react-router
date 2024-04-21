import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
            <Link to ='/'><h1>Home</h1></Link>
            <Link to ='/menu'><h1>Menu</h1></Link>
            <Link to ='/contact'><h1>Contact</h1></Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
