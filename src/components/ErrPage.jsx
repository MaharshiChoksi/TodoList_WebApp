import React from 'react'
import img from '../assets/404.jpg'
import { Link } from 'react-router-dom'

export default function ErrPage() {
    return (<div className="flex flex-grow w-full h-full items-center justify-center" >
        <div className="flex flex-col gap-5 items-center w-full h-fit m-5">
            <div className='font-bold font-mono text-center lg:text-5xl text-2xl'>Oops! Page Not Found</div>
            <img src={img} alt="Error Page" className='border rounded-2xl animate-inout' width="400px" />
            <span className='font-bold font-mono'>Return <Link to={"/"} className="text-cyan-400">Home</Link></span>
        </div>
    </div>
    )
}