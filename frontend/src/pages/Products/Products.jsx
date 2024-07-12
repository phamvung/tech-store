import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Promotions from "../../components/Promotions/Promotions";
import Filter from "../../components/Filter/Filter";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../util/http";
import ProductCard from "../../UI/Card/ProductCard";

// import Modal from "../../components/Modal/Modal";
// import { AnimatePresence } from "framer-motion";
// import { FaArrowLeft } from "react-icons/fa6";

function Products() {
  //   const [modalFilter, setModalFilter] = useState(false);

  //   const handleShowModalFilter = () => {
  //     setModalFilter(true);
  //     document.body.style.overflow = "hidden";
  //   };

  //   const handleCloseModalFilter = () => {
  //     setModalFilter(false);
  //     document.body.style.overflow = "auto";
  //   };
  const { data, isPending, error } = useQuery({
    queryKey: ["producs"],
    queryFn: getProducts,
  });

  return (
    <div className="max-w-[1300px] m-auto px-2 mt-2">
      <div>
        <NavLink to="/">Trang chủ</NavLink>
        <span> / </span>
        <NavLink to="/products/hot" className="text-gray-400">
          Tất cả sản phẩm
        </NavLink>
      </div>

      <Promotions />

      <div className="my-6 flex justify-between items-center">
        <h1 className="text-4xl">Tất cả sản phẩm</h1>
        <div className="text-lg flex gap-2">
          <span>Sắp xếp: </span>
          <select className="border border-black" name="sort" id="sort">
            <option value="a-z">Tên A &#8594; Z</option>
            <option value="z-a">Tên Z &#8594; A</option>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
            <option value="new">Hàng mới</option>
          </select>
          {/* <div
            className="hidden cursor-pointer gap-1 items-center max-[1000px]:flex"
            onClick={handleShowModalFilter}
          >
            <FaFilter />
            Lọc
          </div> */}
        </div>
      </div>

      <div className="flex gap-2 my-10">
        <div className="max-[1000px]:hidden">
          <Filter />
        </div>

        <div className="flex-1">
          {isPending && <p>Loading data...</p>}
          {error && <p>An error has occurred.</p>}

          {!isPending && !error && (
            <ul className="grid grid-cols-4 max-[500px]:grid-cols-2">
              {data?.products.map((item) => (
                <li className="border" key={item?.id}>
                  <ProductCard product={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* 
      <AnimatePresence>
        {modalFilter && (
          <Modal mode="right" onClose={handleCloseModalFilter}>
            <div className="bg-black text-white p-2 flex items-center gap-3">
              <button onClick={handleCloseModalFilter}>
                <FaArrowLeft />
              </button>
              <h2 className="text-center text-2xl">Tìm theo</h2>
            </div>
            <Filter />
          </Modal>
        )}
      </AnimatePresence> */}
    </div>
  );
}

export default Products;
