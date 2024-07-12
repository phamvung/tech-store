import React from "react";
import { LuMenuSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import MENU from "../../util/menu";

function ProductPrortfolio({ hidden }) {
  let classMenu =
    "absolute w-full left-0 border rounded-md group-hover/main:block bg-white z-30";

  if (hidden) {
    classMenu += " hidden";
  }

  return (
    <div className="min-w-[300px] relative  group/main ">
      <h1 className="uppercase font-semibold flex items-center gap-2 bg-sky-900 text-white px-3 py-2 text-lg">
        <LuMenuSquare className="text-3xl" /> Danh mục sản phẩm
      </h1>
      <div className={classMenu}>
        {MENU.map((item) => (
          <div
            key={item.title}
            className="border-b flex justify-between items-center group/item"
          >
            <Link
              to={item.link}
              className="flex justify-between items-center p-2  visited:text-black hover:text-[#f00] active:text-[#f00] w-full"
            >
              <p className="flex gap-2">
                <span>
                  <img src={item.icon} alt={item.title} />
                </span>
                {item.title}
              </p>
              {item?.children && <IoIosArrowForward />}
            </Link>

            {item?.children && (
              <ul className="absolute top-0 left-full hidden group-hover/item:grid bg-white w-[1000px] h-full px-5 py-2 grid-cols-3 gap-2 shadow-[10px_3px_10px_-10px_rgba(0,0,0,0.3)] z-20">
                {item?.children?.map((item, index) => (
                  <li key={index}>
                    <h3 className="text-md font-semibold">{item.title}</h3>

                    {item?.children && (
                      <ul>
                        {item?.children.map((item, index) => (
                          <li key={index}>{item.title}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPrortfolio;
