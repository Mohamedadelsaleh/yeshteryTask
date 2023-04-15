import React, { lazy, Suspense, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftIcon from "../../images/left-arrow.png";
import rightIcon from "../../images/right-arrow.png"
import './style.css'
import Rating from '../Rating/Rating';


const SmapleNextArrow = (props) => {
    const {onClick} = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='next'>
                <img className='icon' src={rightIcon} alt="rightIcon" />
            </button>
        </div>
    )
}

const SmaplePrevArrow = (props) => {
    const {onClick} = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='prev'>
                <img className='icon' src={leftIcon} alt="leftIcon" />
            </button>
        </div>
    )
}

const ProductCard = ({ product, addToCart }) => {
    
    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () => {
        setQuantity((prevCount) => prevCount + 1)
    }

    const handledecrease = () => {
        if(quantity === 0) return;
        setQuantity((prevCount) => prevCount - 1)
    }

    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SmapleNextArrow />,
        prevArrow: <SmaplePrevArrow />,
    };
    
    return (
        <div className="product-card">
            <div className="productImg">
                <img className='mainImag' src={product.images[0]} alt={product.title} />
                <Slider {...settings}>
                {product.images.map((image, index) =>(
                    <div key={index} className="imgSlider">
                        <img  src={image} alt={product.id} />
                    </div>
                ))}
                </Slider>
            </div>
            <div className="productDetails">
                <div className="section1">
                    <img className='brand' src={product.brand} alt="brand" />
                    <h2 className="title">{product.title}</h2>
                    <h2 className='category'>{product.category}</h2>
                    <div className='rating'>
                        <Rating rating={product.rating} />
                        <p>{product.rating} of 5</p>
                        <p className='peopleRating'>{product.peopleRating} Rates</p>
                    </div>
                    <div className='price'>
                        <h2>{product.price} LE</h2>
                        <p className='insteadof'>{product.isteadof} LE</p>
                        <p className='discount'>{product.discount}% Off</p>
                    </div>
                </div>
                <div className="section2">
                        <h2>Size</h2>
                        <div className='size'>
                        {product.sizes.map((size,idx) => (
                            <div key={idx}>
                                <p>{size}</p>
                            </div>
                        ))}
                        </div>
                </div>
                <div className="section3">
                    <h2>Color</h2>
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className='color'>
                        {product.colors.map((color,idx) => (
                            <div key={idx}>
                                <img className='colorImg' src={color} alt="color" />
                            </div>
                        ))}
                        </div>
                    </Suspense>
                </div>
                <div className="section4">
                    <h2>Quantity</h2>
                    <div className="quantity">
                        <button className='quantityBTN' onClick={handledecrease}>-</button>
                        <p>{quantity}</p>
                        <button className='quantityBTN' onClick={handleIncrease}>+</button>
                    </div>
                    <div className="buttons">
                        <button className='addToCart' onClick={() => addToCart(product)}>Add To Cart</button>
                        <button className='pickUp'>Pickup From Store</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;