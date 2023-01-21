import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useCart } from 'react-use-cart';
import { BACKEND_URL } from '../config';


// shippingAddress, city, state, amount, pin, items, token
const stripePromise = loadStripe('pk_test_51MS0i2SF5PLUhtWZ0yMsefagzhpCmpLmv4ToiJqtWL8sDwT9yz99YwCp80tKNmAMxhz4YZ4Ihki8yfC4BvwMK3sx00GQjJvIMQ');
const CheckoutFormProvider = () => {
    const [formData, setFromData] = useState({});
    const [payButton, setPayButton] = useState(true);
    const [error, setError] = useState(false);
    const [payProcessing, setPayProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { cartTotal, items, emptyCart } = useCart();

    /****************************************Functions and handlers Defined  */
    //Payment Handler 
    const makePayment = async (allFormData) => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/orders`, {
                method: 'post',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt"),
                },
                body: JSON.stringify(allFormData)
            });
            if (response.status != 200) throw Error("Payment Failed");
            return await response.json();
        }
        catch (err) {
            console.log(err);
            setError(true);
        }
    }
    //Change handler 
    const changeHandler = (e) => {
        setFromData((prevformData) => {
            return {
                ...prevformData,
                [e.target.name]: e.target.value
            }
        })
    }

    //Submit Handler
    const submitHandler = async (e) => {
        e.preventDefault()
        if (elements == null) {
            return
        }
        const card = elements.getElement(CardElement);
        const payload = await stripe.createToken(card);

        const allFormData = {
            ...formData,
            amount: cartTotal,
            items: items,
            token: payload.token.id
        }
        console.log(allFormData);
        setPayProcessing(true);
        await makePayment(allFormData);
        setPayProcessing(false);
        emptyCart();

    }
    /**JSX Return Statements  */
    if (payProcessing) {
        return (
            <>
                <h2>Payment is Processing ..........</h2>
            </>
        )
    }
    if (error) {
        return (
            <>
                <h2 className="red-text"> Payment Failed </h2>
            </>
        )
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
                    <CardElement onChange={(e) => {
                        if (e.complete) {
                            setPayButton(false);
                        }
                        else {
                            setPayButton(true);
                        }
                    }} />
                    <br />
                    <button type="submit" className="btn #00897b teal darken-1" disabled={(!stripe || !elements) || payButton}>
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
