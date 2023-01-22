import { useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SEARCH_PRODUCTS } from '../gqlOperations/queries'

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [hideResult, setHideResult] = useState(true);
    const [getProduct, { loading, error, data }] = useLazyQuery(SEARCH_PRODUCTS, {
        variables: {
            "filters": {
                "Name": {
                    "startsWith": `${searchQuery}`
                }
            }
        }
    })
    //Functions and Change handler
    const changeHandler = (e) => {
        // set Timeout is set to create the timeout for search functionality so that only one graphql network call occurs on every 5oo ms
        setTimeout(() => {
            setSearchQuery(e.target.value);
        }, 500);

    }

    useEffect(() => {
        if (searchQuery.length != 0) {
            getProduct();
            setHideResult(false)
        }
        else {
            setHideResult(true)
        }
    }, [searchQuery])

    //

    return (
        <>
            <div className="input-field">
                <input type="search" onChange={changeHandler} required />
                <label className="label-icon"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
            </div>
            <div hidden={hideResult} className="showSuggestion">
                {data &&
                    data.products.data.map(({ id, attributes }) => {
                        return (
                            <Link to={`product/${id}`}>
                                <h6 style={{ padding: "20px" }} className=" #00897b teal darken-1 white-text" key={id}>
                                    {attributes.Name}
                                </h6>
                            </Link>

                        )
                    })}
            </div>
        </>
    )
}
