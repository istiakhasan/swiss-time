import React from 'react';

const NewArrival = ({product}) => {
    return (
        <div class="rounded h-auto  seller-card overflow-hidden shadow-lg bg-[#1C1B19]">
        <img
          class="w-full h-[30vh] object-cover"
          src={product.image}
          alt="Mountain"
        />
        <div class="px-6 py-8 text-white ">
          <div class="font-bold text-xl mb-2 text-center m-auto">
            {product.name}
          </div>
          <p class="text-white  text-center text-base  seller-text">
          {product.description}
          </p>
        </div>
      </div>
    );
};

export default NewArrival;