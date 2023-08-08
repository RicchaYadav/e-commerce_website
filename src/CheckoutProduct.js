import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';


function CheckoutProduct({ id, image, title, price, rating }) {
  
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the items from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const formattedPrice = price.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        // style: 'currency',
        // currency: 'INR',
      });
    
    return (
    <div className="checkoutProduct">
    
  
        <img src={image} alt="" className="checkoutProduct_image" />

        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
                {title}
            </p>
            <p className="checkoutProduct_price">
                <small>₹</small>
                <strong>{formattedPrice}</strong>
            </p>

            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map(() => (
                  <p>⭐</p>
                ))}
            </div>

            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
        
    </div>

    
  )
}

export default CheckoutProduct