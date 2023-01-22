import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import { GET_ALLPRODUCTS } from '../gqlOperations/queries'

export default function Home() {
    const [page, setPage] = useState(1);
    const { loading, error, data, refetch } = useQuery(GET_ALLPRODUCTS, {
        variables: {

            "pagination": {
                "page": page,
                "pageSize": 3
            }
        }
    });

    //Functions and handler 
    const updatePage = (page) => {
        setPage(page);
    }

    //refetech using useEffect 
    useEffect(() => {
        if (page != 1) {
            refetch();
        }
    }, [page])

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
        <>
            <div className='container'>
                <Search />
            </div>
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
            <div>
                <Pagination updatePage={updatePage} pageCount={data.products.meta.pagination.pageCount} />
            </div>

        </>
    )
}
