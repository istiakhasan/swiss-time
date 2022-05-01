import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';


const SingleInventoryItem = ({product,handleDelteItem}) => {

    return (
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
                                <button onClick={()=>handleDelteItem(product._id)} className='bg-[#E62143] mx-auto px-3 py-2 text-white font-bold rounded-lg flex justify-center items-center'><TrashIcon className='w-4 h-4' />Delete </button>
                            </td>
                        </tr>
    );
};

export default SingleInventoryItem;