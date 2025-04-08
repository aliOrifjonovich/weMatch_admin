import React from "react";

const Modal = ({ children, close }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity  bg-[#00000096] duration-300 opacity-100"
      onClick={() => {
        document.body.style.overflowY = "auto";
        close(false);
      }}
    >
      <div
        className="relative z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;