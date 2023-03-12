import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="flex pb-2 justify-evenly align-baseline font-mono text-2xl max-lg:text-lg max-sm:text-xs  sticky bottom-0 w-screen bg-slate-900">
            <span>Todo List app &copy; 2023 </span>
            <span className='max-xs:hidden'>Version ~ 1.0</span>
            <span className='max-sm:hidden'>Developed by ~Maharshi Choksi</span>
            <span className='text-yellow-400 hover:text-sky-500'><Link to='https://github.com/GDeveloper22' target='_blank'>GitHub</Link></span>
        </div>
    )
}
