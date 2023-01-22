import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BYCATEGORY } from '../gqlOperations/queries';
import Card from './Card';

export default function ProductByCategory() {
    const { cid } = useParams();
    const { loading, data, error } = useQuery(GET_PRODUCT_BYCATEGORY, {
        variables: {
            categoryId: `${cid}`
        }
    });
    if (loading) {
        return (
            <h2>Loading ....</h2>
        )
    }
    if (error) {
        console.log(error.message);
    }
    if (data) {
        console.log(data);
    }
    return (
        <>
            <div className='homeroot'>
                {
                    data.category.data.attributes.products.data.map(({ id, attributes }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                name={attributes.Name}
                                description={attributes.description}
                                price={attributes.price}
                                image={attributes.image.data[0].attributes.url} />
                        )
                    })
                }
            </div>
        </>
    )
}
