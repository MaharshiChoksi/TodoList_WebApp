import React from 'react'
import { useReducer } from 'react';
import { Header } from '../Layout/Header';
import { Footer } from '../Layout/Footer';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

const formvalidation = (formData) => {
    if (!/^[A-Za-z]+$/.test(formData.name.trim())) {
        throw new Error("Invalid name");
    }
    // add one more logic to match similar username found or not if yes then throw error 
    if (!/^[A-Za-z0-9]+$/.test(formData.username.trim())) {
        throw new Error("Invalid username");
    } if (!/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(formData.email.trim())) {
        throw new Error("Invalid email");
    } if (formData.password.trim().length < 8) {
        throw new Error("Password too short")
    } if (!(formData.password.trim() === formData.confirmPassword.trim())) {
        throw new Error("Password doesn't match");
    }
}

// Registration form
export const Register = () => {

    const [formData, dispatch] = useReducer(formReducer, initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FIELD', field: name, value });
    };

    const handleRegister = async (event) => {
        // Implement your registration logic here using formData
        event.preventDefault();

        try {
            formvalidation(formData);
            const response = await fetch('http://localhost:3000/insertdata/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    username: formData.username,
                    password: formData.password
                })
            });
            if (response.status == 201) {
                window.location.href = '/Login'
            }
            else {
                throw new Error("Registration Error");
            }
        }
        catch (error) {
            toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
        }
    };

    return (
        <>
            <Header />
            <div className='flex-grow min-w-full justify-center p-5'>
                <ToastContainer autoClose={3000} />
                <div className="bg-gray-200 rounded-lg p-5 max-w-md mx-auto mt-10 shadow-md bottom-5">
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
                                    type={field === 'email' ? 'email' : field === 'password' || 'confirmPassword' ? 'password' : 'text'}
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
                <div className='text-lg max-w-md mx-auto pt-4'>
                    Existing User? <Link to="/Login" className='text-blue-600' >Login</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
