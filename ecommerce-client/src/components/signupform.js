import React, { useState } from 'react'
import { SIGN_UPUSER } from '../gqlOperations/mutation';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [signUpUser, { loading, error, data }] = useMutation(SIGN_UPUSER);

    //Loading and Error JSX Resolvers
    if (loading) {
        return (
            <>
                <h2>Loading ......</h2>
            </>
        )
    }
    if (data) {
        localStorage.setItem("jwt", data.register.jwt);
        navigate('/');
    }
    // forms handler Functions
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        signUpUser({
            variables: {
                input: formData
            }
        })

    }
    return (
        <>
            <div className='container' style={{ maxWidth: "500px" }}>
                {error && <div className='card-panel red'><span>{error.message}</span></div>}
                <h3>SignUp</h3>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Username' name="username" required onChange={changeHandler} />
                    <input type="text" placeholder='Email' name="email" required onChange={changeHandler} />
                    <input type="password" placeholder='password' name="password" required onChange={changeHandler} />
                    <button type="submit" className='btn #00897b teal darken-1 '>SignUp</button>
                </form>
            </div>
        </>
    )
}
