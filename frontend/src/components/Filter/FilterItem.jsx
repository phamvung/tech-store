import React from "react";
import classes from "./FilterItem.module.css";

function FilterItem({ title, array }) {
  return (
    <>
      <h2 className="text-lg my-3">{title}</h2>
      <ul className="flex flex-col gap-2 border-b border-dashed pb-5">
        {array.map((element) => {
          const classColor = `relative appearance-none rounded-full w-5 h-5 border checked:border-black cursor-pointer`;
          const checkedStyle = {
            "--tw-bg-opacity": "1",
            backgroundColor: element.style,
          };

          return (
            <li className="flex items-center gap-1" key={element.value}>
              {title === "MÀU SẮC" ? (
                <input
                  type="checkbox"
                  style={checkedStyle}
                  className={`${classColor} ${classes["tick"]}`}
                />
              ) : (
                <input type="checkbox" className="w-4 h-4 cursor-pointer" />
              )}

              <span>{element.value}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilterItem;
