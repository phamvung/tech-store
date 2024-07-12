import React from "react";

function Button({ mode = "default", className, children, onClick }) {
  let classBtn;

  if (mode === "default") {
    classBtn += " px-4 py-2 rounded-md border hover:border-[#f00]";
  }

  if (mode === "red") {
    classBtn +=
      " border border-[#f00] text-[#f00] rounded-md py-2 px-5 hover:bg-[#f00] hover:text-white";
  }

  if (mode === "dark-red") {
    classBtn +=
      "  border border-[#f00] bg-[#f00] text-white rounded-md py-2 px-5 " +
      className;
  }

  if (mode === "custom") {
    classBtn = className;
  }

  return (
    <button className={classBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
