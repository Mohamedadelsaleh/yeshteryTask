import React, { useState, lazy, Suspense } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import CartDropdown from '../components/CartDropdown/CartDropdown';
import {productData} from '../services/api';
import Navbar2 from '../components/Navbars/Navbar2';
import Navbar1 from '../components/Navbars/Navbar1';
import Navbar3 from '../components/Navbars/Navbar3';
import './style.scss'

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCartIconClick = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

  return (
    <div>
      <Navbar1 />
      <Navbar2         
        cartItems={cartItems}
        onCartIconClick={handleCartIconClick} 
      />
      <Navbar3 />
      {isCartDropdownOpen ? (
        cartItems.length === 0 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <CartDropdown cartItems={cartItems} />
          </Suspense>
        ) : (
          <CartDropdown cartItems={cartItems} />
        )
      ) : null}
      <div className="product-list">

          {productData.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}

      </div>
    </div>
  );
};

export default HomePage;
