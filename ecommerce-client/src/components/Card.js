import React from 'react'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../config'

export default function Card({ id, name, description, price, image }) {
    return (
        <Link className='p-card' to={`/product/${id}`}>
            <div className="card">
                <div className="card-image">
                    <img className="cimg" src={`${BACKEND_URL + image}`} />
                </div>
                <div className="card-content">
                    <span className="card-title truncate black-text">{name}</span>
                    <p className='truncate black-text'>{description}</p>
                    <h4 className='green-text'>${price}</h4>
                </div>
            </div>
        </Link>

    )
}
