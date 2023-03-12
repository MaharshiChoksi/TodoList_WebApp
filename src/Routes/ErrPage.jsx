import img from '../assets/404.jpg'
import { Link } from 'react-router-dom'

export const ErrPage = () => {
    return (
        <div className="flex flex-grow w-full h-full items-start justify-center">
            <div className="flex flex-col gap-5 items-center w-full h-fit m-5">
                <img src={img} alt="Error Page" className='border rounded-2xl animate-inout' width="400px" />
                <span className='font-bold font-mono'>Return <Link to={"/"} className="text-cyan-400">Home</Link></span>
            </div>
        </div>
    )
}
