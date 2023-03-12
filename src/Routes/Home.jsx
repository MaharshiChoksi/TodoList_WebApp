import { Routes, Route } from 'react-router-dom'
import { Header } from '../Layout/Header'
import { Content } from '../Layout/Content'
import { Footer } from '../Layout/Footer'
import { ErrPage } from '../Routes/ErrPage';


export const Home = () => {
    return <>
        <div className='w-full bg-red-600 text-white text-center text-lg font-mono max-sm:text-xs'> This is Beta Version only. Check More on Github</div>
        <Header />
        <Routes>
            <Route path="/" element={<Content />} />
            <Route path="*" element={<ErrPage />} />
        </Routes>
        <Footer />
    </>
}
