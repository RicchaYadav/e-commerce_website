import React, { useEffect, useState } from 'react';
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import {Link} from "react-router-dom"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reducer';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { db } from './firebase';


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate();
    const stripe = useStripe();
    const element = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    // useEffect(() => {
    //     // 'generate the stripe secret which allows us to charge'

    //     const getClientSecret = async () => {
    //         const response = await axios({
    //             method: 'post',
    //             url: `/payments/create?total=${getBasketTotal(basket)}`
    //         });
    //         setClientSecret(response.data.clientSecret);
    //     }

    //     getClientSecret();
    // }, [basket])

    // console.log("the secret id >> ", clientSecret)

    // const handleSubmit = async(event) => {
    //     // Stripe
    //     event.preventDefault();
    //     setProcessing(true);

    //     const payload = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: element.getElement(CardElement)
    //         }
    //     }).then(({ paymentIntent }) => {
    //         //paymentIntent = payment Confirmation

    //         db
    //           .collection('users')
    //           .doc(user?.uid)
    //           .collection('orders')
    //           .doc(paymentIntent.id)
    //           .set({
    //               basket: basket,
    //               amount: paymentIntent.amount,
    //               created: paymentIntent.created
    //           })

    //         setSucceeded(true)
    //         setError(null)
    //         setProcessing(false)

    //         // navigate.replace('/order')
    //         dispatch({
    //             type: 'EMPTY_BASKET'
    //         })
    //         navigate('/order');
    //     })

    // }
    // const handleChange = event => {
    //     // Stripe
    //     setDisabled(event.empty);
    //     setError(event.error ? event.error.message : "");
        
    // }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        navigate('/continue');
    }
  return (
    <div className='payment'>
        <div className="payment_container">
            <h1>
                Checkout (
                    <Link to = "/checkout">{basket?.length} items</Link>
                )
            </h1>

            {/* Payment section- delivery address */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p> xyz road</p>
                    <p>Ayodhya, Uttar Pradesh</p>
                </div>
            </div>

            {/* Payment section- Products*/}
            <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
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

            {/* Payment section- Paymtn method */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    <form action="" >
                        {/* <CardElement onChange={handleChange} /> */}

                        <div className="payment_priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )} 
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                                />

                                <button disabled={processing || disabled ||
                                succeeded} onClick={e => navigate('/continue',{replace:true})}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                        </div>

                        {/* Error: Says: if there is an error only then show the error message*/}
                        {error && <div>{error}</div>}
                        
                    </form>
                    
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment