import React, { Fragment, useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



export default function Cart() {
    const [checkout, setCheckout] = useState(false);
    const { isEmpty, items, cartTotal, removeItem } = useCart();
    const jwt = localStorage.getItem("jwt");

    //Sub jsx Scripts 
    if (isEmpty) {
        return (
            <h3>Your Cart Is Empty</h3>
        )
    }
    if (checkout) {
        console.log(checkout)
        return (
            <div className="container">
                <h4>Checkout page</h4>
                <CheckoutForm />
                <br />
                <button className="btn red" onClick={() => setCheckout(false)}>Cancel</button>
            </div>
        )
    }
    // Function and Click handler 


    return (
        <>
            <div className='container row'>
                <ul className="collection col m8" >
                    {
                        items.map((item) => {
                            return (
                                <li className="collection-item avatar" key={item.id}>
                                    <img src={item.image} alt={item.Name} className="circle" />
                                    <span className="title truncate">{item.Name}</span>
                                    <p className='green-text'>Price - ${item.price}x{item.quantity}={item.itemTotal}
                                    </p>
                                    <i onClick={() => removeItem(item.id)} className=" secondary-content material-icons red-text" style={{ cursor: "pointer" }}>remove_circle</i>
                                </li>

                            )
                        })
                    }
                </ul>
                <div className='col m3 offset-m1' style={{ position: 'sticky', top: '20px' }}>
                    <h4>Total Price</h4>
                    <h4>${cartTotal}</h4>
                    {
                        jwt ?
                            <button className='btn #00897b teal darken-1' onClick={() => setCheckout(true)}>Checkout</button>
                            :
                            <>
                                <Link to='/login'>
                                    <button className='btn red'>Please Login to Checkout</button>
                                </Link>
                            </>
                    }


                </div>
            </div>
        </>
    )
}
