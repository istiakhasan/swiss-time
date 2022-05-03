import React from 'react';
import background from '../../../../images/background2.jpg'

const LatestBlog = () => {
    const date=new Date()
    return (
        <section>
            <h1 className='text-5xl text-center my-16'>Latest Blog</h1>

        <div className='flex items-center flex-col md:flex-row content-around  mt-5'>
            <div className='flex-1'>
                 <div className='w-[70%] mx-auto'>
                 <p className='text-xs text-gray-500'>{date.toDateString()}</p>
                <p className='text-4xl mt-6'>Types of Watch Movements</p>
                <p className='mt-3 text-lg '>Watch Movements The movement , or caliber, is the engine whice powers a watch and its functions.This internal mechanism of the timepiece moves the hands and powers all features of the watch such as the chronograph, annual calendar, moon phase...</p>
                 </div>
            </div>
            <div className='flex-1 mt-4 md:mt-0'>
                <img className='w-[70%] mx-auto' src={background} alt="" />
            </div>
            
        </div>
        </section>
    );
};

export default LatestBlog;