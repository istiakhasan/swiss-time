import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const ManageInventory = () => {
    const [products]=useProducts();
    const navigate=useNavigate();
return (
<main>
    <section>
        <div className='flex justify-between items-center w-[80%] mx-auto mt-5'>
           <p className='lg:text-3xl text-2xl '>Inventory List</p>
            <button onClick={()=>navigate('/addinventory')} className='bg-[#332CF2] text-white font-bold px-2 lg:px-10 md:px-8 py-3 rounded-lg'>Add New Item </button>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        
            <table class="w-11/12 mx-auto border-2 my-10 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 text-center py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 text-center py-3">
                            Delete
                        </th>
                      
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>(
                            <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6  py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                               {product.name}
                            </th>
                            <td class="px-6 py-4">
                               {product.email}
                            </td>
                            <td class="px-6 py-4 ">
                               {product.status}
                            </td>
                            <td class="px-6 py-4">
                                ${product.price}
                            </td>
                            <td class="px-6 py-4 text-center">
                                <button className='bg-[#E62143] mx-auto px-3 py-2 text-white font-bold rounded-lg flex justify-center items-center'><TrashIcon className='w-4 h-4' />Delete </button>
                            </td>
                        </tr>
                        ))
                    }
               
                    
                    
                </tbody>
            </table>
        </div>

    </section>
</main>
);
};

export default ManageInventory;