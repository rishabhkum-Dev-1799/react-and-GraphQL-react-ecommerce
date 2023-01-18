import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const logoutHandler = () => {
        localStorage.removeItem('jwt');
        navigate('/login')
    }
    return (
        <div>
            <nav>
                <div className="nav-wrapper #00897b teal darken-1">
                    <Link to='/' className="brand-logo-left">
                        <span>BUY IT QUICK</span>
                    </Link>
                    <ul id="nav-mobile" className="right">

                        {
                            jwt ?
                                <>
                                    <li>
                                        <Link to='/cart'>
                                            <i style={{ padding: "0 20px", cursor: "pointer" }} className="material-icons #004d40 teal darken-4">add_shopping_cart</i>
                                        </Link>
                                    </li>
                                    <li> <i onClick={logoutHandler} style={{ padding: "0 20px", cursor: "pointer" }} className="material-icons red">logout</i></li>
                                </>
                                :
                                <>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/signup'>Signup</Link></li>
                                </>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    )
}
