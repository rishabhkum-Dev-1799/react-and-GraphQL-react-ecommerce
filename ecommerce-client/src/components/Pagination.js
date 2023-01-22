import React from 'react'

export default function Pagination(props) {

    //Function and handler 

    return (
        <div className='container center'>
            {
                [...Array(props.pageCount).keys()].map((value) => {
                    return (
                        <button onClick={() => props.updatePage(value + 1)} key={value} className="chip btn">{value + 1}</button>
                    )
                })
            }
        </div>
    )
}
