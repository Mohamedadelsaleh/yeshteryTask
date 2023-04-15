import React from 'react';
import "./style.scss"

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <h2>My Cart</h2>
            <div className="cartSummary">
                <h3> Cart Summary</h3>
                    {cartItems.length === 0 ? 
                        (
                            <p className="cartEmpty">Your cart is empty</p>
                        ) : 
                        (
                            <div className="productContainer">
                                {cartItems.map((item,idx) => (
                                    <div className='product' key={idx}>
                                        <div className='productImage'>
                                            <img src={item.images[0]} alt="productImage" />
                                        </div>
                                        <div className='productCartDetails'>
                                            <p>{item.summary}</p>
                                            <p>Quantity: 1</p>
                                            <h2>{item.price} LE</h2>
                                        </div>
                                        <div className='removeBTN'>
                                            <button>Remove</button>
                                        </div>
                                    </div>
                                    ))}
                                    <h2>Total: 19,999 LE</h2>
                                    <div className='cartBTNS'>
                                        <button className='reviewCart'>Review Cart</button>
                                        <button className='completeOrder'>Complete Checkout</button>
                                    </div>
                            </div>
                        )}
            </div>

        </div>
    );
};

export default CartDropdown;