import React, { useEffect, useState } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mt-16 w-10/12 mx-auto">
      <h1 className="text-5xl text-center my-16">OUr Products</h1>
      <div className="grid lg:grid-cols-2  gap-5">
        {products.slice(0, 6).map((product) => (
          <InventoryItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
