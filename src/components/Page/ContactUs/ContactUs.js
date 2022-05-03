import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';

const ContactUs = () => {
    
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
     axios.post('https://lit-depths-84419.herokuapp.com/sendmessage',data)
     .then(res=>{
       
         const data=res.data 
         if(data.insertedId){
             toast.success("Sent message successfully")
         }
         reset()
     })
    reset()
    
    }
    return (
        <>
        <Menubar />
        <main className='md:w-4/12  border-gray-300 border-2 p-5  mx-auto my-4'>
        <Helmet>
                <title>add-product</title>
              </Helmet>
            <form className='flex flex-col mb-10' onSubmit={handleSubmit(onSubmit)}>
                <input required className='  outline-none mb-3 border pl-5 py-3' placeholder='Your Name' type="text" {...register("name", { required: true })} />
                <input required className=' border  outline-none mb-3 pl-5 py-3' placeholder='Phone Number' type="tel" {...register("phone", { required: true })} />
                <input required className=' border  outline-none mb-3 pl-5 py-3' placeholder='Your email' type="email" {...register("email")} />
                <textarea required className=' border  outline-none mb-3 pl-5 py-3' rows={"5"} placeholder='Message' type="text" {...register("message")} />
                <input required className='  border border-[#332CF2] rounded hover:bg-[#332CF2] hover:text-white font-bold cursor-pointer pl-5 py-4' value="Send" type="submit" />
            </form>
         
        </main>
        <Footer />
        </>
    );
};

export default ContactUs;