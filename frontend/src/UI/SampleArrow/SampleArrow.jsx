import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function SampleArrow({ next, prev, onClick }) {
  let className =
    "absolute top-2/4 -translate-y-2/4 bg-stone-200/[0.8] hover:bg-stone-200 w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center cursor-pointer z-10";

  if (next) {
    className += " right-2";
  }

  if (prev) {
    className += " left-2";
  }

  return (
    <div className={className} onClick={onClick}>
      {next && <IoIosArrowForward className="text-2xl" />}
      {prev && <IoIosArrowBack className="text-2xl" />}
    </div>
  );
}

export default SampleArrow;
