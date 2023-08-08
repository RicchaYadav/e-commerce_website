import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
// import myimage from './images/1.jpg';


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout_left">

            <div className="checkout_title">
              {/* <h3>{user?.email}</h3> */}
                <strong>Your Shopping Basket</strong>

              {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} 

                />
              ))}

            </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout