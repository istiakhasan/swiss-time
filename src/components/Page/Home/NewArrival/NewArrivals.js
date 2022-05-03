import React from "react";
import best1 from "../../../../images/newarribal1.jpg";
import best2 from "../../../../images/newarribal2.jpg";
import best3 from "../../../../images/newarribal3.jpg";

import './newarrival.css'
import NewArrival from "./SingleProducts/NewArrival";


const NewArrivals = () => {
    const newProducts=[
        {id:1,image:best1,name:" Frederique Constant",description:" Frederique Constant offers not only exceptional timepieces of high quality, but also makes them accessible to watch lovers. Live your passion!"},
        {id:2,image:best2,name:"  Balmain",description:"  Balmain has redefined elegance and class with its fashion-forward design. Their watches speak of luxury and charisma in every cut."},
        {id:3,image:best3,name:"  Garmin",description:"Today, Garmin is the renowned leader in the aviation, marine, automotive, outdoor, and fitness markets."},
    ]

  return (
    <section>
      <h1 className="text-5xl text-center my-16">New Arrivals</h1>
      <div className="p-10 bottom-2 border-red-600 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {
              newProducts.map(product=>(
               <NewArrival key={product.id} product={product} />
              ))
          }
      
      
      </div>
    </section>
  );
};

export default NewArrivals;
