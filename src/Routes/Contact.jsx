import { useForm } from "react-hook-form";
import { Footer } from "../Layout/Footer";
import { Header } from "../Layout/Header";

const HelpForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // create toaster showing the status of the email send or not (if success green/ red)
    const SubmitStatus = () => {
        reset(values => ({
            ...values,
            Name: "",
            Email: "",
            Message: ""
        }))
    }

    return (
        <div className="flex flex-grow min-w-full justify-center items-start p-10 bg-black font-mono font-bold">
            <form onSubmit={handleSubmit(SubmitStatus)} className='grid grid-cols-half gap-5 p-5 items-start h-fit justify-center border-2 border-gray-400 rounded-xl font-mono bg-violet-900/30'>
                <div className="col-span-2 text-center pb-7">Contact Form</div>
                <label>Name </label>
                <input type="text" placeholder="Name" {...register("Name", { required: true, })} className="rounded-2xl pl-2 font-medium text-black" maxLength={25} size={27} />
                <label>Email </label>
                <input type="email" placeholder="Email" {...register("Email", { required: true, })} className="rounded-2xl pl-2 font-medium text-black" size={27} />
                <label>Message </label>
                <textarea placeholder="Your message goes Here..." {...register("Message", { required: true, })} className="rounded-2xl pl-2 font-medium text-black" size={27} rows={5} />
                <input type="submit" className="socialmedia col-span-2 bg-lime-600 text-black font-bold" />
            </form>
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