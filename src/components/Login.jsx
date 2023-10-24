import React from 'react'
import { useState } from 'react';
import { Header } from '../Layout/Header';
import { Footer } from '../Layout/Footer';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/getdata/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password
                })
            });
            if (response.ok) {
                const data = await response.json();
                if (data[0]) {
                    // encrypt the token values
                    toast.success("Login Successful!", { position: toast.POSITION.TOP_RIGHT });
                    window.localStorage.setItem('token', JSON.stringify({ username: data[0].username, password: data[0].password }));
                    window.location.href = '/'
                }
                else {
                    throw new Error('User not found');
                }
            }
            else {
                throw new Error('Error occured!');
            }
        }
        catch (error) {
            toast.error(`${error}`, { position: toast.POSITION.TOP_RIGHT });
        }
    }

    return (
        <>
            <Header />
            <div className='flex-grow min-w-full justify-center p-5'>
                <ToastContainer autoClose={3000} />
                <div className="bg-gray-200 rounded-lg p-5 max-w-md mx-auto mt-10 shadow-md">
                    <div className="text-center mb-5">
                        <h1 className="text-2xl text-gray-700">Login</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="block text-lg text-gray-600 mb-2">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    required
                                    className="w-full p-2 rounded bg-gray-300 text-lg text-gray-600 focus:shadow-md focus:outline-none"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="block text-lg text-gray-600 mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    autoComplete='on'
                                    className="w-full p-2 rounded bg-gray-300 text-lg text-gray-600 focus:shadow-md focus:outline-none"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="">
                                <button type="submit" className="bg-blue-500 rounded text-white text-lg p-2 w-full transition duration-300 hover:bg-blue-600">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='text-lg max-w-md mx-auto top-5 pt-4'>
                    New User? <Link to="/register" className='text-blue-600' >Register</Link>
                </div>
            </div >
            <Footer />
        </>
    );
}
