import { Link } from 'react-router-dom';
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import { useState } from 'react';

const Menu = ({ChangeState}) => {

    return (
        <div className='absolute flex min-w-full min-h-screen z-10 backdrop-blur-sm items-center justify-center top-0'>
            <div className='relative border-2 border-gray-400 p-5 rounded-xl'>
                <button onClick={()=>ChangeState(false)}><img src={close} className='absolute text-xl font-bold top-2 right-2 h-10 max-md:h-8 max-sm:h-8' alt='Close Menu' /></button>

            </div>
        </div>
    )
}

export const Header = () => {
    const [isVisible, setVisiblity] = useState(false);

    return (
        <div className="font-sans font-bold flex justify-evenly align-baseline w-screen p-10 gap-10 pt-20 max-lg:justify-center">
            <h1 className="text-6xl max-md:text-4xl">TODO LIST</h1>

            <button><img src={menu} className="h-10 max-md:h-8 max-sm:h-6 max-lg:visible lg:hidden" alt="Menu" onClick={() => setVisiblity(!isVisible)} /></button>
            {isVisible && <Menu ChangeState={setVisiblity} />}

            <span className="flex justify-between min-h-fit gap-10 text-2xl max-lg:hidden">
                <Link to="/" className='hover:border-b-2 hover:text-blue-500 border-solid border-blue-500 duration-75 rounded-sm'>Home</Link>
                <Link to="/contact" className='hover:border-b-2 hover:text-blue-500 border-solid border-blue-500 duration-75 rounded-sm'>Help</Link>
            </span>
        </div>
    )
}
