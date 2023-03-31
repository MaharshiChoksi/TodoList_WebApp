import { Footer } from "../Layout/Footer";
import { Header } from "../Layout/Header";

const HelpForm = () => {
    return (
        <div className="flex flex-grow min-w-full justify-center align-middle bg-black font-mono font-bold">
            Hello
        </div>
    )
}

const Contact = () => {
    return (
        <>
            <Header />
            <HelpForm />
            <Footer />
        </>
    )
}


export default Contact;