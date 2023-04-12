import { Link } from 'react-router-dom';
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import { useState } from 'react';

const Menu = ({ ChangeState }) => {
    return (
        <div className='fixed flex min-w-full min-h-[100%] z-10 backdrop-blur-sm items-center justify-center top-0'>
            <div className='flex flex-col gap-5 p-[10%] items-center relative border-2 border-gray-400 rounded-xl font-mono max-sm:text-3xl text-4xl md:text-6xl bg-neutral-900/95'>
                <button onClick={() => ChangeState(false)}><img src={close} className='absolute top-2 right-2 h-10 max-md:h-9' alt='Close Menu' /></button>
                <Link to="/" onClick={() => ChangeState(false)} className='hover:border-b-2 hover:text-blue-500 border-solid border-blue-500 duration-75 rounded-sm'>Home</Link>
                <Link to="/contact" onClick={() => ChangeState(false)} className='hover:border-b-2 hover:text-blue-500 border-solid border-blue-500 duration-75 rounded-sm'>Help</Link>
                <div className='grid grid-cols-2 gap-5 text-center pt-10'>
                    <Link to="https://www.linkedin.com/in/maharshi-choksi-155143208/" target='_blank' className='socialmedia'>LinkedIn</Link>
                    <Link to="https://github.com/GDeveloper22/" target='_blank' className='socialmedia'>Github</Link>
                    <Link to="https://discordapp.com/users/694116811712626728" target='_blank' className='socialmedia'>Discord</Link>
                    <Link to="https://www.instagram.com/maharshi_2003/" target='_blank' className='socialmedia'>Instagram</Link>
                </div>
            </div>
        </div>
    )
}

export const Header = () => {
    const [isVisible, setVisiblity] = useState(false);

    return (
        <div className="font-sans font-bold flex justify-evenly align-baseline w-screen p-10 gap-10 pt-20 max-lg:justify-center">
            <h1 className="text-6xl max-md:text-4xl">AGENDA</h1>
            <button><img src={menu} className="h-10 max-md:h-8 max-sm:h-6 max-lg:visible lg:hidden" alt="Menu" onClick={() => setVisiblity(!isVisible)} /></button>
            {isVisible && <Menu ChangeState={setVisiblity} />}

            <span className="flex justify-between min-h-fit gap-10 text-2xl max-lg:hidden">
                <Link to="/" className='hover:border-b-2 hover:text-blue-500 border-solid border-blue-500 duration-75 rounded-sm'>Home</Link>
                <Link to="/contact" className='hover:border-b-2 hover:text-blue-500 border-solid border-blue-500 duration-75 rounded-sm'>Help</Link>
            </span>
        </div>
    )
}
