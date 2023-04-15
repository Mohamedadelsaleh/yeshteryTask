import React from 'react';
import cartIcon from "../../images/shopping-cart.png"
import "./style.scss"

const CartIcon = ({ cartItems, onCartIconClick }) => {
    
    const itemCount = cartItems.length;
    console.log();

    return (
        <div className="cart-icon" onClick={onCartIconClick}>
            <img src={cartIcon} alt="Cart" />
            {itemCount >= 0 && <span className="cart-badge">{itemCount}</span>}
        </div>
    );
};

export default CartIcon;