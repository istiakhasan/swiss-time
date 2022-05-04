import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../../hooks/useProducts";
import Footer from "../../Shared/Footer/Footer";
import Menubar from "../../Shared/Menubar/Menubar";
import SingleInventoryItem from "../SingleInventoryItem/SingleInventoryItem";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();

  const navigate = useNavigate();
  //delete inventory item
  const handleDelteItem = (id) => {
    
   
      const url = `https://lit-depths-84419.herokuapp.com/inventory/${id}`;
      axios.delete(url).then((res) => {
        const data = res.data;
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          const rest = products.filter((product) => product._id !== id);
          setProducts(rest);
        }
      });
    
  };

  return (
    <>
      <Menubar />
      <main>
        <Helmet>
          <title>manage-inventory</title>
        </Helmet>
        <section>
          <div className="flex justify-between items-center w-[80%] mx-auto mt-5">
            <p className="lg:text-3xl text-2xl ">Inventory List</p>
            <button
              onClick={() => navigate("/addinventory")}
              className="bg-[#332CF2] text-white font-bold px-2 lg:px-10 md:px-8 py-3 rounded-lg"
            >
              Add New Item{" "}
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-11/12 mx-auto border-2 my-10 text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 text-center py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 text-center py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <SingleInventoryItem
                    handleDelteItem={handleDelteItem}
                    key={product._id}
                    product={product}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ManageInventory;
