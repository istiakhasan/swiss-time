import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [inputValue,setInputValue]=useState({
      restockItems:'',
      error:''
  })
  useEffect(() => {
    const url = `http://localhost:4000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  //reduct button

  const handleReducQuantity=()=>{
      if(product.quantity===0){
          alert("Quantity is 0 ")
          return
      }
      const newQuantity={...product}
      let quantity=newQuantity.quantity-1 
      newQuantity.quantity=quantity
      setProduct(newQuantity)
      console.log(product.quantity,"inside")
      fetch(`http://localhost:4000/inventory/${product._id}`,{
          method:"PATCH",
          headers:{"content-type":"application/json"},
          body:JSON.stringify({quantity:product.quantity,isReduce:true})
      })
    
    
     
  }
  //restock 

  const handleChange=(e)=>{
      const quantity=parseInt(e.target.value)
      if(quantity<=0){
        setInputValue({...inputValue, error: "Invalid email"})
         
      }else{
        setInputValue({...inputValue, error: "",restockItems:quantity})
      }
        
  }
  //handleSubmit
  const handleSubmit=(e)=>{
  e.preventDefault();
  const newAddedItems=inputValue.restockItems+product.quantity 
  const newQuantity={...product}
  let quantity=newAddedItems
  newQuantity.quantity=quantity
  setProduct(newQuantity)
  fetch(`http://localhost:4000/inventory/${product._id}`,{
    method:"PATCH",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({quantity:newAddedItems,isReduce:false})
})
.then(res=>res.json())
.then(data=>{
  if(data.modifiedCount){
    e.target.reset()
  }
})
 

  }

  return (
    <main className="my-10">
      <section className="mb-11">
        <div className="flex items-center justify-center">
          <img className="mr-10 w-[40%]" src={product.image} alt="" />
          <div className="w-[40%]">
            <p className="text-sm text-white font-bold px-3 rounded-sm bg-green-800 w-fit">
              {product.status}
            </p>
            <p className="text-sm text-gray-500">Product Id:{product._id}</p>
            <p className="text-2xl">Product Name:{product.name}</p>
            <p className="text-[16px] text-gray-600">{product.description}</p>
            <p className="mt-4 text-2xl">${product.price}</p>
            <p className="text-sm text-gray-500">Quantity:{product.quantity}</p>
            <p className="text-lg text-gray-700">
              Supplier: {product.supplier}
            </p>

            <div>
              <button onClick={handleReducQuantity} className="button-29">delivered</button>
            </div>
            {/* Restock Form */}
            <form onSubmit={handleSubmit} className="mt-5">
                <p className="text-2xl text-green-800 mb-2">Restock Items</p>
                <input onChange={handleChange} className="outline-none pl-8 py-2 border-gray-500 border-2 rounded-md" type="number" placeholder="Please enter a number" />
                
                    <p className="text-red-900 font-bold ">

                 {inputValue.error}    
                    </p>
                <button type="submit" className="px-16 py-2 rounded bg-green-700 shadow-md shadow-green-900 text-white  mt-2 ">Add</button>
                
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inventory;
