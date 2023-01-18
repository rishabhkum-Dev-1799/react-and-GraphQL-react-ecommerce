import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { BACKEND_URL } from '../config';
import { GET_PRODUCTBYID } from '../gqlOperations/queries';

export default function Products() {
    const { pid } = useParams();
    const { addItem } = useCart();
    const { loading, error, data } = useQuery(GET_PRODUCTBYID, {
        variables: {
            productId: pid
        }
    })
    if (loading) {
        return (
            <h2>Loading....</h2>
        )
    }
    if (error) {
        throw new Error(error.message)
    }
    const { Name, description, image, price } = data.product.data.attributes;
    const imageUrl = `${BACKEND_URL + image.data[0].attributes.url}`;
    const addtoCartHandler = () => {
        addItem({
            id: pid,
            Name,
            price,
            image: imageUrl
        })
    }
    return (
        <div className='container '>
            <div className='center'>
                <img style={{ height: "50vh" }} src={imageUrl} alt={Name} />
            </div>
            <div>
                <h3>{Name}</h3>
                <h4 className='green-text' style={{ fontWeight: "bold" }}>${price}</h4>
                <p>{description}</p>
                <button className='btn #00897b teal darken-1' onClick={addtoCartHandler}>Add to Cart</button>
            </div>

        </div>
    )
}
