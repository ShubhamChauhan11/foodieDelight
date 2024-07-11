import React from "react";
import { IoCloseSharp } from "react-icons/io5";

function Modal({ isModalOpen, setIsModalOpen, setToEditData, children }) {
  return (
    <div className="w-[30%]  absolute top-[20%] left-[35%] bg-white rounded-lg overflow-y-auto no-scrollbar shadow-lg ">
      {children}

      <IoCloseSharp
        onClick={() => {
          setIsModalOpen(false);
          setToEditData({});
        }}
        className="text-gray-500  absolute top-4 right-4 w-6 h-6  text-center rounded-md cursor-pointer"
      />
    </div>
  );
}

export default Modal;
