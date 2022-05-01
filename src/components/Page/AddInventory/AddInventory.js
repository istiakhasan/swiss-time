import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addinventory.css'

const AddInventory = () => {
const { register, handleSubmit,reset } = useForm();
const onSubmit = data => {
    axios.post('http://localhost:4000/inventory',data)
    .then(res=>{
        const data=res.data
        if(data.insertedId){
         reset()
        }
    })
    
    console.log(data)};
return (
<main className='w-4/12 shadow-lg custom-shadow p-5  mx-auto my-4'>
    <form className='flex flex-col mb-10' onSubmit={handleSubmit(onSubmit)}>
        <input required className=' input-shadow  outline-none mb-3 border pl-5 py-3' placeholder='Product Name' type="text" {...register("name", { required: true })} />
        <input required className=' input-shadow border  outline-none mb-3 pl-5 py-3' placeholder='Supplier Name' type="text" {...register("supplier", { required: true })} />
        <textarea required className=' input-shadow border  outline-none mb-3 pl-5 py-3' placeholder='Description' type="text" {...register("description")} />
        <input required className=' input-shadow border  outline-none mb-3 pl-5 py-3' placeholder='Your Email' type="email" {...register("email")} />
        <input required className=' input-shadow border  outline-none mb-3 pl-5 py-3' placeholder='Status' type="text" {...register("status")} />
        <input required className=' input-shadow border  outline-none mb-3 pl-5 py-3' placeholder='Enter price' type="number" {...register("price")} />
        <input required className=' input-shadow border  outline-none mb-3 pl-5 py-3' placeholder='Enter quantity' type="number" {...register("quantity")} />
        <input required className=' input-shadow border  outline-none mb-3 pl-5 py-3' placeholder='Photo URL' type="text" {...register("image")} />
        <input required className='  border border-[#332CF2] rounded hover:bg-[#332CF2] hover:text-white font-bold cursor-pointer pl-5 py-4' type="submit" />
    </form>
</main>
);
};

export default AddInventory;