import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { LiaTableSolid } from "react-icons/lia";
import { IoList } from "react-icons/io5";
import { getProducts } from "../../util/http";

function Search() {
  const lastChange = useRef();
  const [textInput, setTextInput] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const { data, isPending, error } = useQuery({
    queryKey: ["products", { search: textInput }],
    queryFn: ({ signal, queryKey }) => getProducts({ signal, ...queryKey[1] }),
    enabled: isFocus && textInput.length > 0,
  });

  const handleChangeText = (event) => {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setTextInput(event.target.value);
    }, 500);
  };

  const handleSearch = () => {};

  return (
    <div className="relative">
      <div className="w-full h-11 flex bg-white rounded-md overflow-hidden">
        <input
          ref={lastChange}
          type="search"
          onChange={handleChangeText}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder="Nhập sản phẩn cần tìm ..."
          className="flex-auto outline-none px-4"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-400 w-14 text-3xl flex justify-center items-center hover:bg-yellow-300"
        >
          <IoIosSearch />
        </button>
      </div>
      <div className="flex gap-2 text-sm py-1 text-white">
        <Link>iphone</Link>
        <Link>xiaomi</Link>
      </div>

      {isFocus && textInput !== "" && data?.products.length !== 0 && (
        <div className="absolute w-full rounded-md bg-white shadow-[-1px_3px_20px_2px] shadow-[#000000ac] z-50">
          <div className="px-3 py-2 flex justify-between items-center border-b">
            <h3 className="font-semibold text-lg text-blue-600">
              Kết quả tìm kiếm cho{" "}
              <span className="text-[#f00]">{textInput}</span>
            </h3>
            <div className="flex text-3xl">
              <IoList />
              <LiaTableSolid />
            </div>
          </div>
          <ul className="grid grid-cols-1">
            {data?.products.slice(0, 5).map((product) => (
              <li key={product.id} className="flex gap-3 border-b">
                <img
                  className="w-28 h-full"
                  src={product.images[0]}
                  alt={product.name}
                />

                <div className="text-lg mt-2">
                  <p className="text-blue-600 hover:text-[#f00]">
                    <Link to={`/products/detail/${product.id}`}>
                      {product.name}
                    </Link>
                  </p>
                  <p className="text-[#f00]">
                    <span>
                      {product?.price_sale !== null
                        ? product?.price_sale.toLocaleString("en-US")
                        : product?.price.toLocaleString("en-US")}
                      ₫
                    </span>
                    <span className="ml-3 line-through text-gray-500">
                      {product?.price.toLocaleString("en-US")}₫
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-center p-2">Xem thêm kết quả</p>
        </div>
      )}

      {isFocus && data?.products.length === 0 && (
        <p className="absolute w-full rounded-md bg-white px-5 py-2 shadow-[-1px_3px_20px_2px] shadow-[#000000ac] z-50">
          Không tìm thấy sản phẩm
        </p>
      )}
    </div>
  );
}

export default Search;
