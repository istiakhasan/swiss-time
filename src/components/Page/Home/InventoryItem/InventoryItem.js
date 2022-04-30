import React from "react";
import { useNavigate } from "react-router-dom";

const InventoryItem = ({ product }) => {
    const navigate=useNavigate()
  return (
    <div className="flex w-full border-2   flex-col md:flex-row md:max-w-xl mx-auto rounded-lg bg-white shadow-lg">
      <img
        className="object-cover w-full h-96 md:h-auto  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={product.image}
        alt=""
      />
      <div className="p-6 flex flex-col justify-start relative">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
        <p className="text-gray-700 text-base mb-4">{product.description.slice(0,100)}...</p>
        <p className=" text-semibold">${product.price}</p>
        <p className=" text-xs">Quantity: {product.quantity}</p>
        <p className="text-gray-600 text-xs mt-2">Supplier:{product.supplier}</p>

        <button onClick={()=>navigate(`inventory/${product._id}`)} className="bg-[#A2D0C1] button-85 font-bold mt-10 w-6/12 mx-auto py-2 rounded-lg  px-10 text-white">
          Update
        </button>
      </div>
    </div>
  );
};

export default InventoryItem;
