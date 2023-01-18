import { useQuery } from '@apollo/client'
import React from 'react'
import Card from '../components/Card';
import { GET_ALLPRODUCTS } from '../gqlOperations/queries'

export default function Home() {
    const { loading, error, data } = useQuery(GET_ALLPRODUCTS);
    if (loading) {
        return (
            <h2>Loading .....</h2>
        )
    }
    if (error) {
        throw new Error(error.message)
    }
    if (data) {
        console.log(data)
    }
    return (
        <div className="homeroot">
            {
                data.products.data.map(({ id, attributes }) => {
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
    )
}
