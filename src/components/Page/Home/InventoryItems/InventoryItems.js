import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../../../hooks/useProducts";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = () => {
  const [products] = useProducts();
  const navigate=useNavigate()
  return (
    <div className="mt-16 w-10/12 mx-auto">
      <h1 className="text-5xl text-center my-16">OUr Products</h1>
      <div className="grid lg:grid-cols-2  gap-5">
        {products.slice(0, 6).map((product) => (
          <InventoryItem key={product._id} product={product} />
        ))}
      </div>
      <button onClick={()=>navigate('/manageinventory')} className=" button-29">Manage Inventories</button>
    </div>
  );
};

export default InventoryItems;
