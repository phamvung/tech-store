import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

function CustomNumberInput({
  value = 0,
  onChange,
  min = 0,
  max = 999,
  step = 1,
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === "" || (/^\d+$/.test(value) && value.length <= 3)) {
      setInputValue(value);
      if (onChange) onChange(value);
    }
  };

  const handleIncrement = () => {
    const newValue = Math.min(max, Number(inputValue) + step);
    setInputValue(newValue);
    if (onChange) onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(min, Number(inputValue) - step);
    setInputValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="flex border rounded-sm">
      <button
        type="button"
        onClick={handleDecrement}
        className="p-3"
        disabled={inputValue <= min}
      >
        <IoMdRemove />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={(event) => {
          if (event.target.value === "") {
            setInputValue(1);
          }
        }}
        className="text-center w-12 outline-none text-xl"
      />
      <button
        type="button"
        onClick={handleIncrement}
        className="p-3"
        disabled={inputValue >= max}
      >
        <IoMdAdd />
      </button>
    </div>
  );
}

export default CustomNumberInput;
