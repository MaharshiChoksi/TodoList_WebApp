import { useForm } from "react-hook-form";
import { Footer } from "../Layout/Footer";
import { Header } from "../Layout/Header";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'

const HelpForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const NoError = (FormData) => {
        // get the response of the mail and if success then show success message and reset form or else show error message
        emailjs.send(
            // .env
            'service_r4tbp7f',
            'template_ke6tefm',
            FormData,
            'ZUqNt19M8ssKcfSOa'
        ).then((result) => {
            toast.success("Response Sent Successfully", { position: toast.POSITION.TOP_RIGHT });
            console.log(result);
            reset();
        }).catch((err) => {
            toast.error("Server Error! Please try again letter", { position: toast.POSITION.TOP_RIGHT });
            console.log(err);
        });
    }

    // create toaster showing the status of the email send or not (if success green/ red)
    const SubmitStatus = (data, event) => {
        // preventing default submission behaviour
        event.preventDefault();
        // Checking errors
        (errors.name || errors.Email || data.Message.trim() == '') ?
            // If error found in the form
            toast.warning("Please Enter Valid values in the form!", { position: toast.POSITION.TOP_RIGHT }) : NoError(data);;
    }

    return (
        <div className="flex flex-col flex-grow min-w-full items-center p-10 bg-black font-mono font-bold">
            <ToastContainer autoClose={3000} />
            <form onSubmit={handleSubmit(SubmitStatus)} className='grid grid-cols-half gap-5 p-5 items-start h-fit justify-center border-2 border-gray-400 rounded-xl font-mono bg-violet-900/30'>
                <div className="col-span-2 text-center pb-7 text-5xl max-xs:text-2xl">Contact Form</div>
                <label>Name </label>
                <input type="text" name="Name" placeholder="Name" {...register("Name", { required: true, })} className="rounded-2xl pl-2 font-medium text-black" maxLength={25} size={27} />
                <label>Email </label>
                <input type="email" name="Email" placeholder="Email" {...register("Email", { required: true, })} className="rounded-2xl pl-2 font-medium text-black" size={27} />
                <label>Message </label>
                <textarea name="Message" placeholder="Your message goes Here..." {...register("Message", { required: true, })} className="rounded-2xl pl-2 font-medium text-black" size={27} rows={5} />
                <input type="submit" className="socialmedia col-span-2 bg-lime-600 text-black font-bold" />
            </form>
            <div className='max-md:grid grid-cols-2 grid-row-2 max-md:rounded-3xl inline-flex gap-5 text-center mt-12 p-5 border-2 border-white borer-solid rounded-full'>
                <Link to="https://www.linkedin.com/in/maharshi-choksi-155143208/" target='_blank' className='socialmedia'>LinkedIn</Link>
                <Link to="https://github.com/GDeveloper22/" target='_blank' className='socialmedia'>Github</Link>
                <Link to="https://discordapp.com/users/694116811712626728" target='_blank' className='socialmedia'>Discord</Link>
                <Link to="https://www.instagram.com/maharshi_2003/" target='_blank' className='socialmedia'>Instagram</Link>
            </div>
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