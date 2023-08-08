import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';
// import image from './Images/1.jpg'


function Product({ id, title, image, price, rating=0}) {
 const [{ basket }, dispatch] = useStateValue();

  console.log("this is the Basket", basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const formattedPrice = price.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    // style: 'currency',
    // currency: 'INR',
  });


  return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>₹</small>
                <strong>{formattedPrice}</strong>
                
            </p>
            
            <div className="product_rating">
              {
                Array(rating).fill().map((_, i) =>(
                  <p key={i}>⭐</p>
                ))}
                
                
            </div>
        </div>
        <img src={image} alt="productImage" />
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product