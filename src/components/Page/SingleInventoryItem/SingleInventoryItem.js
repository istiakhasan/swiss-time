import { TrashIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import PopUpModal from "../../Shared/PopUpModal/PopUpModal";

const SingleInventoryItem = ({ product, handleDelteItem }) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  return (
   <>
    <PopUpModal  closeModal={closeModal} modalIsOpen={modalIsOpen} product={product} handleDelteItem={handleDelteItem} />
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6  py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {product.name}
      </th>
      <td className="px-6 py-4">{product.email}</td>
      <td className="px-6 py-4 ">{product.status}</td>
      <td className="px-6 py-4">${product.price}</td>
      <td className="px-6 py-4 text-center">
        <button
          onClick={openModal}
          className="bg-[#E62143] mx-auto px-3 py-2 text-white font-bold rounded-lg flex justify-center items-center"
        >
          <TrashIcon className="w-4 h-4" />
          Delete
        </button>
        {/* <button
          onClick={() => handleDelteItem(product._id)}
          className="bg-[#E62143] mx-auto px-3 py-2 text-white font-bold rounded-lg flex justify-center items-center"
        >
          <TrashIcon className="w-4 h-4" />
          Delete
        </button> */}
      </td>
    </tr>
   </>
  );
};

export default SingleInventoryItem;
