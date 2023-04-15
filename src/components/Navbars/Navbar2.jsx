import React from 'react'
import CartIcon from '../CartIcon/CartIcon';
import addidasIcon from "../../images/Addidas.png"
import './style.scss'; 


const Navbar2 = ({ cartItems, onCartIconClick }) => {
  return (
    <div className="navbar">
      <div className="search">
        <input className="searchInput" type='search' placeholder="Search"  />      
      </div>
      <div className="storeIcon">
        <img src={addidasIcon} alt="storeIcon" />
      </div>
      <div className="Icons">
        <CartIcon cartItems={cartItems} onCartIconClick={onCartIconClick}/>
        <h2>Wishlist</h2>
        <h2>Login</h2>
      </div>
  </div>
  )
}

export default Navbar2