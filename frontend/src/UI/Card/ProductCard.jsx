import React from "react";
import Button from "../Button/Button";
import { FaRegStar, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import icons from "../../assets/icons";

function ProductCard({ product, flashSale, outstanding }) {
  let salePercent;

  if (product?.price_sale !== null) {
    salePercent = Math.ceil(100 - (product?.price_sale * 100) / product?.price);
  }

  return (
    <div className="bg-white p-2">
      {salePercent >= 50 ? (
        <img
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${product?.images[0]})` }}
          src="https://theme.hstatic.net/200000458129/1001199679/14/frame_1.png?v=35"
          alt="image product"
        />
      ) : (
        <div
          className="bg-cover bg-no-repeat bg-center w-full h-60"
          style={{ backgroundImage: `url(${product?.images[0]})` }}
        />
      )}
      <p className="py-3 h-16 font-semibold line-clamp-2 hover:text-[#f00]">
        <Link to={`/products/detail/${product?.id}`}>{product?.name}</Link>
      </p>
      <div className="flex gap-1 text-yellow-500 text-xl mb-2">
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>
      </div>
      <div className="flex justify-between items-center">
        <div className="h-20 flex flex-col justify-center">
          <p className="text-xl font-medium text-[#f00]">
            {product?.price_sale !== null
              ? product?.price_sale.toLocaleString("en-US")
              : product?.price.toLocaleString("en-US")}
            ₫
          </p>
          {product?.price_sale !== null && (
            <div className="flex">
              <p className="text-gray-500 line-through">
                {product?.price.toLocaleString("en-US")}₫
              </p>
              <div className="ml-2 text-sm font-bold text-white bg-[#f00] rounded-md p-1">
                -{salePercent}
              </div>
            </div>
          )}
        </div>
        <Button
          mode="custom"
          className="h-8 w-8 rounded-full bg-[#f00] text-white flex justify-center items-center"
        >
          <FaPlus />
        </Button>
      </div>
      {flashSale && (
        <div className="mt-10 mb-3">
          <p className="text-sm flex items-center gap-1">
            <img src={icons.fire_icon} className="w-5" alt="Fire icon" />

            {product.quantity - product.sold <= 5 ? (
              <span>Sắp cháy hàng</span>
            ) : (
              <span>Đã bán {product?.sold} sản phẩm</span>
            )}
          </p>
          <div className="h-3 mt-1 w-full bg-red-300 rounded-full overflow-hidden relative">
            <div
              style={{ width: `${(product.sold * 100) / product.quantity}%` }}
              className="absolute top-0 left-0 h-full rounded-full bg-red-500"
            ></div>
          </div>
        </div>
      )}

      {outstanding && (
        <div className="shadow-[1px_0px_5px_1px_rgba(0,0,0,0.1)] rounded-md overflow-hidden mt-5 mb-3">
          <p className="text-xs text-gray-500 py-2 pl-2  border-l-[6px] border-red-500">
            Tặng gói bảo hành Gold trị giá 300K
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
