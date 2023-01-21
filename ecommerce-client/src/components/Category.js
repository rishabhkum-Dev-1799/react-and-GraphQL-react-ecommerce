import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALLCATEGORIES } from '../gqlOperations/queries'

export default function Category() {
    const { data, loading, error } = useQuery(GET_ALLCATEGORIES);

    if (loading) {
        return (
            <>
                <h2>Loading....</h2>
            </>
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
            <div className='category  '>
                {data.categories.data.map((d) => {
                    return (
                        <h5 className='chip btn blue white-text '>{d.attributes.name}</h5>
                    )
                })}
            </div>
        </>
    )
}
