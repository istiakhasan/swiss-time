import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../../../hooks/useProducts";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  return (
    <section className="mt-16 w-10/12 mx-auto">
      <h1 className="text-5xl text-center my-16">Our Products</h1>
      <div className="grid lg:grid-cols-2  gap-5">
        {products.slice(0, 6).map((product) => (
          <InventoryItem key={product._id} product={product} />
        ))}
      </div>
      <button
        onClick={() => navigate("/manageinventory")}
        className=" button-29 mx-auto mt-16"
      >
        Manage Inventories
      </button>
    </section>
  );
};

export default InventoryItems;
