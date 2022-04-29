import React, { useEffect, useState } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mt-16 w-10/12 mx-auto">
      <div class="grid lg:grid-cols-2  gap-5">
        {products.slice(0, 6).map((product) => (
          <InventoryItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;