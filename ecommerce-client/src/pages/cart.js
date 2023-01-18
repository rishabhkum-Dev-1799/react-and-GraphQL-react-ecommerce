import React, { useState } from 'react'
import { useCart } from 'react-use-cart'

export default function Cart() {
    const { isEmpty, items, cartTotal } = useCart();

    if (isEmpty) {
        return (
            <h3>Your Cart Is Empty</h3>
        )
    }

    return (
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
                                <i className=" secondary-content material-icons red-text">remove_circle</i>
                            </li>

                        )
                    })
                }
            </ul>
            <div className='col m3 offset-m1' style={{ position: 'sticky', top: '20px' }}>
                <h4>Total Price</h4>
                <h4>${cartTotal}</h4>
                <button className='btn #00897b teal darken-1'>Checkout</button>

            </div>
        </div>
    )
}
