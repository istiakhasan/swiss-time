import React from 'react';

const NewArrival = ({product}) => {
    return (
        <div className="rounded h-auto  seller-card overflow-hidden shadow-lg bg-[#1C1B19]">
        <img
          className="w-full h-[30vh] object-cover"
          src={product.image}
          alt="Mountain"
        />
        <div className="px-6 py-8 text-white ">
          <div className="font-bold text-xl mb-2 text-center m-auto">
            {product.name}
          </div>
          <p className="text-white  text-center text-base  seller-text">
          {product.description}
          </p>
        </div>
      </div>
    );
};

export default NewArrival;