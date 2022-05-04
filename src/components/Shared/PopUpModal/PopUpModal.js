import { ExclamationIcon } from "@heroicons/react/outline";
import React from "react";
import Modal from "react-modal/lib/components/Modal";

const PopUpModal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  handleDelteItem,
  product,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex items-center">
        <ExclamationIcon className="w-12  mr-8" />
        <div>
          <h1>Confirm delete</h1>

          <p>Are you sure you wanna delete this?</p>
        </div>
      </div>

      <hr className="h-[2px]  bg-gray-300 my-5" />
      <div className="flex justify-end">
        <button
          onClick={closeModal}
          className="bg-gray-400 text-black px-3 py-1 rounded font-semibold"
        >
          Cancel
        </button>
        <button
          onClick={() => handleDelteItem(product._id)}
          className="bg-red-600 py-1 px-3 ml-3 font-semibold text-white rounded"
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default PopUpModal;
