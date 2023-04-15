import React from 'react'
import menuIcon from "../../images/menus.png"
import './style.scss'

const Navbar1 = () => {
  return (
    <div className="mainNav">
        <div className="brand">
            <img className='menuIcon' src={menuIcon} alt="menu" />
            <h2>Yeshtry</h2>
        </div>
        <div className="offers">
            <h2>  Offers </h2>
        </div>
        <div className="customer">
            <h2>Contact US</h2>
            <h2>Track Order</h2>
            <h2>Find A Store</h2>
        </div>
    </div>
  )
}

export default Navbar1