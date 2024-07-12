import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  return createPortal(
    <div className="fixed w-full h-full bg-black/50 z-50">
      <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
