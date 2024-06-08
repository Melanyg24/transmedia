import React from "react";
import { FaTimes } from "react-icons/fa";

const GameModal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
      ${open ? "visible" : "invisible"}
      `}
    >
      {/* Modal */}
      <div className="flex justify-center items-center w-full h-full">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-black/80 rounded-xl shadow p-6 transition-all w-[350px] xl:w-[600px] h-[430px] backdrop-blur-sm ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-lg text-[#D31010] text-xl bg-white hover:bg-[#D31010] hover:text-white transition duration-300 ease-in-out"
          >
            <FaTimes />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GameModal;
