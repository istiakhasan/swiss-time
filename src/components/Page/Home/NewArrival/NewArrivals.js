import axios from "axios";
import React, { useEffect, useState } from "react";
import "./newarrival.css";
import NewArrival from "./SingleProducts/NewArrival";

const NewArrivals = () => {
  const [newProducts,setNewProduct]=useState([])
  useEffect(()=>{
    axios.get('https://lit-depths-84419.herokuapp.com/new')
    .then(res=>{
      setNewProduct(res.data)
    })
  })

  return (
    <section>
      <h1 className="text-5xl text-center my-16">New Arrivals</h1>
      <div className="p-10 bottom-2 border-red-600 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {newProducts.map((product) => (
          <NewArrival key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
