import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config';
import SingleInventoryItem from '../SingleInventoryItem/SingleInventoryItem'

const MyItems = () => {
    const [user]=useAuthState(auth);
    const[products,setProducts]= useState([]);
   
   
    useEffect(()=>{
         const email=user.email 
       
         axios.get(`http://localhost:4000/myitems?email=${email}`)
        .then(res=>{
            setProducts(res.data)
          
        })
    },[user])

    //handle remove 
    const handleDelteItem=(id)=>{
        const  confirm=window.confirm("Are you sure to delete this item?")
        if(confirm){
            const url=`http://localhost:4000/inventory/${id}`;
            axios.delete(url)
            .then(res=>{
             const data=res.data
                if(data.deletedCount>0){
                    const rest=products.filter(product=>product._id !==id)
                    setProducts(rest)
                }
                
            })
        }
    
    }
    return (
        <main>
    <section>
        
           <p className='lg:text-3xl text-2xl text-center mt-10'>My Item List</p>
            
      

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        
            <table className="w-11/12 mx-auto border-2 my-10 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 text-center py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                            Delete
                        </th>
                      
                    </tr>
                </thead>
                <tbody>
                 
                     {

                        
                        products.map(product=>(
                            <SingleInventoryItem 
                             handleDelteItem={handleDelteItem}
                            key={product._id} product={product} />
                        ))
                        
                    } 
               
                    
                    
                </tbody>
            </table>
        </div>

    </section>
</main>
    );
};

export default MyItems;