import React from 'react';
import { Link } from 'react-router-dom';

const FOOTERDUMMY_DATA = [
    {
        title: 'company',
        link: [
            'About',
            'Jobs',
            'Press',
            'Contact',
            'Blog',
        ]
    },
    {
        title: 'community',
        link: [
            'comm_link',
            'facebook_group',
            'forums',
            'meetups',
        ]
    },
    {
        title: 'legal',
        link: [
            'privacy',
            'use_terms',
            'license',
        ]
    },
    {
        title: 'profile',
        link: [
            'my_account',
            'checkout',
            'order_tracing',
            'support',
        ]
    }
]
export default function Footer() {
    return (
        <div>
            <footer className="footer-page">
                <div>
                    <div className='row'>
                        <div className='col l2 center s12 center'>
                            <h5 className='white-text'>BUY IT QUICK</h5>
                            <p className='white-text '>
                                You can use rows and columns here to organize your footer content
                            </p>
                        </div>
                        {
                            FOOTERDUMMY_DATA.map((data) => {
                                return (
                                    <>
                                        <div className='col l1 offset-l1 s6 center '>
                                            <h6 className='white-text'>{data.title}</h6>
                                            <ul>
                                                {data.link.map((li) => {
                                                    return (
                                                        <>
                                                            <Link to='/'>
                                                                <li className='grey-text'>{li}</li>
                                                            </Link>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                    <hr />
                    <div className='footer-copyright'>
                        <div className='row'>
                            <div className=' col l12 s12 center white-text'>
                                © 2023 BUY IT QUICK
                            </div>
                        </div>

                    </div>
                </div >
            </footer >
        </div >
    )
}
