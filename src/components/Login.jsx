import React from 'react'
import { useReducer } from 'react';
import { Header } from '../Layout/Header';
import { Footer } from '../Layout/Footer';

export const Login = () => {
    return (
        <>
            <Header />
            <div className='flex-grow min-w-full justify-center'>
                <div className="bg-gray-200 rounded-lg p-5 max-w-md mx-auto mt-10 shadow-md">
                    <div className="text-center mb-5">
                        <h1 className="text-2xl text-gray-700">Login</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="block text-lg text-gray-600 mb-2">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    required
                                    className="w-full p-2 rounded bg-gray-300 text-lg text-gray-600 focus:shadow-md focus:outline-none"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="block text-lg text-gray-600 mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    className="w-full p-2 rounded bg-gray-300 text-lg text-gray-600 focus:shadow-md focus:outline-none"
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
            </div >
            <Footer />
        </>
    );
}

// Define the initial state for the form fields
const initialState = {
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
};

// Define the reducer function to handle state updates
const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
        default:
            return state;
    }
};

export const Register = () => {

    const [formData, dispatch] = useReducer(formReducer, initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FIELD', field: name, value });
    };

    const handleRegister = () => {
        // Implement your registration logic here using formData
    };

    return (
        <>
            <Header />
            <div className='flex-grow min-w-full justify-center'>
                <div className="bg-gray-200 rounded-lg p-5 max-w-md mx-auto mt-10 shadow-md">
                    <div className="text-center mb-5">
                        <h1 className="text-2xl text-gray-700">Register</h1>
                    </div>
                    <form>
                        {Object.entries(formData).map(([field, value]) => (
                            <div className="mb-3" key={field}>
                                <label htmlFor={field} className="block text-lg text-gray-600 mb-2">
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    id={field}
                                    name={field}
                                    required
                                    className="w-full p-2 rounded bg-gray-300 text-lg text-gray-600 focus:shadow-md focus:outline-none"
                                    value={value}
                                    onChange={handleInputChange}
                                />
                            </div>
                        ))}
                        <div className="">
                            <button
                                type="submit"
                                onClick={handleRegister}
                                className="bg-blue-500 rounded text-white text-lg p-2 w-full transition duration-300 hover:bg-blue-600">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
