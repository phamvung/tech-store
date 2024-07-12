import React from "react";
import filterCategory from "../../util/filterCategory";
import FilterItem from "./FilterItem";

function Filter() {
  return (
    <div className="w-72 my-4 px-4">
      <FilterItem title="HÃNG SẢN XUẤT" array={filterCategory.TRADEMARK} />

      <FilterItem title="MÀU SẮC" array={filterCategory.COLOR_LIST} />

      <FilterItem title="MỨC GIÁ" array={filterCategory.PRICE_LIST} />

      <FilterItem title="LOẠI SẢN PHẨM" array={filterCategory.PRODUCT_TYPE} />

      <FilterItem title="BẢO HÀNH" array={filterCategory.GUARANTEE} />
    </div>
  );
}

export default Filter;
