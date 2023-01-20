import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../gqlOperations/mutation';

export default function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);

    //Loading and Error JSX Resolvers
    if (loading) {
        return (
            <>
                <h2>Loading ......</h2>
            </>
        )
    }
    if (data) {
        localStorage.setItem("jwt", data.login.jwt);
        navigate('/');
    }

    // forms handler Functions
    const submitHandler = (e) => {
        e.preventDefault();
        loginUser({
            variables: {
                input: formData
            }
        })
    }
    const changeHandler = (e) => {
        setFormData((prevformData) => {
            return {
                ...prevformData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <div className='container' style={{ maxWidth: "500px" }}>
                {error && <div className='card-panel red'><span>{error.message}</span></div>}
                <h3>Login</h3>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Email or Username' name="identifier" required onChange={changeHandler} />
                    <input type="password" placeholder='password' name="password" required onChange={changeHandler} />
                    <button type="submit" className='btn #00897b teal darken-1 '>Login</button>
                </form>
            </div>
        </>
    )
}
