import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.config";
import Footer from "../../Shared/Footer/Footer";
import Menubar from "../../Shared/Menubar/Menubar";
import SingleInventoryItem from "../SingleInventoryItem/SingleInventoryItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
 //find product by user email  and jwt token
  useEffect(() => {
    const email = user?.email;

    axios
      .get(`https://lit-depths-84419.herokuapp.com/myitems?email=${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        if (
          error?.response?.status === 403 ||
          error?.response?.status === 401
        ) {
          signOut(auth);
          navigate("/login");
        }
      });
  }, [user]);

  //handle remove
  const handleDelteItem = (id) => {
    const confirm = window.confirm("Are you sure to delete this item?");
    if (confirm) {
      const url = `https://lit-depths-84419.herokuapp.com/inventory/${id}`;
      axios.delete(url).then((res) => {
        const data = res.data;
        if (data.deletedCount > 0) {
          const rest = products.filter((product) => product._id !== id);
          setProducts(rest);
        }
      });
    }
  };
  return (
    <>
      <Menubar />
      <main className="min-h-[40vh]">
        <Helmet>
          <title>my products</title>
        </Helmet>
        <section className="mb-10">
          <p className="lg:text-3xl text-2xl text-center mt-10">My Item List</p>

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
      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
};

export default MyItems;
