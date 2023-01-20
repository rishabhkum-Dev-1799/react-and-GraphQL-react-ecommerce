import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';


// shippingAddress, city, state, amount, pin, items, token
const stripePromise = loadStripe('pk_test_51MS0i2SF5PLUhtWZ0yMsefagzhpCmpLmv4ToiJqtWL8sDwT9yz99YwCp80tKNmAMxhz4YZ4Ihki8yfC4BvwMK3sx00GQjJvIMQ');
const CheckoutFormProvider = () => {
    const [formData, setFromData] = useState({});
    const stripe = useStripe();
    const elements = useElements();

    //Functions and handler 
    const changeHandler = (e) => {
        setFromData((prevformData) => {
            return {
                ...prevformData,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    return (
        <>
            <div>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        required
                        placeholder='Shipping Address'
                        name='shippingAddress'
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        required
                        placeholder='City'
                        name='city'
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        required
                        placeholder='State'
                        name='state'
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        required
                        placeholder='PinCode'
                        name='pin'
                        onChange={changeHandler}
                    />
                    <br />
                    <CardElement />
                    <br />
                    <button type="submit" className="btn #00897b teal darken-1" disabled={!stripe || !elements}>
                        Pay
                    </button>
                </form>

            </div>
        </>
    )
}

export default function CheckoutForm() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutFormProvider />
        </Elements>
    )
}
