import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, NavLink, useParams } from "react-router-dom";
import { IoGiftSharp, IoCartOutline } from "react-icons/io5";
import { FaRegStar, FaPlusCircle } from "react-icons/fa";

import { getProductDetail, getProductsType } from "../../util/http";
import Promotions from "../../components/Promotions/Promotions";
import Button from "../../UI/Button/Button";
import Specifications from "./Specifications";
import ProductImageList from "./ProductImageList";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import ProductCard from "../../UI/Card/ProductCard";
import Modal from "../Modal/Modal";
import CustomNumberInput from "../../UI/CustomNumberInput/CustomNumberInput";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import { toast, ToastContainer } from "react-toastify";

function ProductsDetail() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [isColor, setIsColor] = useState(undefined);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { data, isPending, error } = useQuery({
    queryKey: ["product-detail", { id }],
    queryFn: getProductDetail,
  });

  const {
    data: purchasedTogetherProductData,
    isPending: isPendingPurchasedTogetherProductData,
    error: errorPurchasedTogetherProductData,
  } = useQuery({
    queryKey: ["product-type", { type: "smart-watch" }],
    queryFn: getProductsType,
  });

  useEffect(() => {
    if (data && data.productInfo) {
      setIsColor(data?.productInfo[0]?.colors[0]);
    }
  }, [data]);

  if (isPending) {
    return <p>Loading page...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const product = data?.productInfo[0];
  let salePercent;

  if (product?.price_sale !== null) {
    salePercent = Math.ceil(100 - (product?.price_sale * 100) / product?.price);
  }

  const handleShowModal = () => {
    setModal(true);
  };

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: Math.random(),
        id_product: product.id,
        name: product.name,
        image: product.images[0],
        color: isColor,
        quantity: quantity,
        price: product.price_sale ?? product.price,
      })
    );

    toast.success("Thêm vào giỏ hàng thành công!");
  };

  console.log(isColor, quantity);

  return (
    <div className="bg-stone-100 pt-2 pb-10">
      <div className="max-w-[1300px] m-auto px-2 mt-2">
        <div>
          <NavLink to="/">Trang chủ</NavLink>
          <span> / </span>
          <NavLink to="/products/hot">Sản phẩm</NavLink> <span> / </span>
          <NavLink className="text-gray-400">{product?.name}</NavLink>
        </div>

        <div className="flex mt-10">
          <div className="flex-auto flex gap-5 p-3 bg-white">
            <div className="w-[400px] overflow-hidden">
              <ProductImageList imageList={product.images} />
            </div>
            <div className="flex-auto">
              <p className="text-xl font-bold">{product.name}</p>
              <div className="flex gap-1 text-yellow-500 text-xl my-2">
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
              </div>
              <p>
                Thương hiệu:{" "}
                <Link className="text-blue-700">{product?.trade_mark}</Link>
                <span className="ml-4"></span>
                Mã sản phẩm:{" "}
                <span className="text-blue-700">{product?.id}</span>
              </p>

              <div className="flex gap-3">
                <p className="text-2xl font-bold text-[#f00]">
                  {product?.price_sale !== null
                    ? product?.price_sale.toLocaleString("en-US")
                    : product?.price.toLocaleString("en-US")}
                  ₫
                </p>
                {product?.price_sale !== null && (
                  <div className="flex items-end">
                    <p className="text-gray-500 line-through text-xl">
                      {product?.price.toLocaleString("en-US")}₫
                    </p>
                    <div className="ml-2 font-bold text-white bg-[#f00] rounded-md p-1">
                      -{salePercent}
                    </div>
                  </div>
                )}
              </div>
              {product?.price_sale !== null && (
                <p>
                  ( Tiết kiệm:{" "}
                  <span className="text-[#f00]">
                    {" "}
                    {(product.price - product.price_sale).toLocaleString(
                      "en-US"
                    )}
                    ₫
                  </span>
                  )
                </p>
              )}
              <div className="mt-5 bg-stone-100 rounded-xl p-3">
                <h3 className="text-white bg-red-500 w-fit px-2 py-1 rounded-md font-bold flex items-center gap-1">
                  <IoGiftSharp className="text-2xl" /> KHUYỄN MÃI - ƯU ĐÃI
                </h3>
                <ul className="list-disc py-2 px-6 bg-white mt-3">
                  <li>Nhập mã EGANY thêm 5% đơn hàng</li>
                  <li>Giảm giá 10% khi mua từ 5 sản phẩm</li>
                  <li>Tặng phiếu mua hàng khi mua từ 500k</li>
                </ul>
              </div>

              {product?.colors && product?.colors.length !== 0 && (
                <div className="mt-3 flex items-center gap-10">
                  <p>Màu sắc: </p>
                  <ul className="flex gap-4">
                    {product.colors.map((color) => (
                      <li
                        key={color?.value}
                        className="w-8 h-8 rounded-full bg-red-500"
                        style={{ backgroundColor: `${color?.style}` }}
                      ></li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="my-4 flex items-center gap-3">
                <p>Số lượng:</p>
                <CustomNumberInput
                  value={quantity}
                  onChange={(newValue) => {
                    setQuantity(Number(newValue));
                  }}
                />
              </div>

              <Button mode="dark-red" className="w-full">
                <p>
                  <span className="font-bold uppercase flex justify-center items-center">
                    <IoCartOutline className="text-3xl" /> Mua ngay
                  </span>
                  <span className="text-sm">
                    Giao hàng tận nơi hoặc nhận tại cửa hàng
                  </span>
                </p>
              </Button>

              <div className="grid grid-cols-2 mt-3 gap-3">
                <Button mode="red" onClick={() => handleAddToCart(product)}>
                  <span className="font-bold">THÊM VÀO GIỎ</span>
                </Button>
                <Button mode="red">
                  <p>
                    <span className="font-bold">MUA TRẢ GÓP</span>
                    <br />
                    Duyệt hồ sơ trong 5 phút
                  </p>
                </Button>
              </div>

              <p className="mt-3 text-center">
                Gọi đặt mua{" "}
                <a href="tel/18000000" className="text-[#f00] font-bold">
                  1800.0000
                </a>{" "}
                (7:30 - 22:00)
              </p>
            </div>
          </div>
          <div className="max-w-[300px] ml-5 bg-white p-3">
            <Promotions col={true}></Promotions>
          </div>
        </div>

        <div className="flex mt-10 gap-7">
          <div className="bg-white flex-auto p-5 h-fit">
            <h2 className="uppercase font-bold text-2xl mb-5">
              Đặc điểm nổi bật
            </h2>
            <p>Đang cập nhật...</p>
          </div>

          {product?.specifications && (
            <div className="w-[450px] bg-white p-5">
              <div className="overflow-hidden h-[400px]">
                <Specifications />
              </div>

              <Button
                mode="custom"
                className="w-full bg-slate-300 py-2 relative outline-none"
                onClick={handleShowModal}
              >
                <div className="absolute w-full bottom-full left-0 h-[100px] bg-gradient-to-t from-[#ffffff]"></div>
                <p className="flex justify-center items-center gap-1">
                  <FaPlusCircle /> Xem thêm
                </p>
              </Button>
            </div>
          )}
        </div>

        <div className="bg-white mt-10 p-5">
          <h2 className="text-2xl font-bold">Đánh giá sản phẩm</h2>
          <div>
            <div className="flex gap-1 text-yellow-500 text-xl mb-2">
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
            </div>
            <p>Dựa trên 0 đánh giá</p>
          </div>

          <div>
            <p className="w-fit py-1 font-bold border-b-4 border-black ">
              Đánh giá <span className="px-1 ml-1 bg-gray-300">0</span>
            </p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
        </div>

        <SectionContainer
          title="SẢN PHẨM THƯỜNG MUA CÙNG"
          className="bg-white p-5 rounded-md"
          seeAll={false}
        >
          <ul className="grid grid-cols-5">
            {purchasedTogetherProductData.products
              .slice(0, 5)
              .map((product) => (
                <li key={product.code} className="border">
                  <ProductCard product={product} />
                </li>
              ))}
          </ul>
        </SectionContainer>
      </div>

      {modal && (
        <Modal>
          <div className="bg-white pb-4 pl-4 pr-2 rounded-lg">
            <h2 className="text-2xl font-semibold py-3">Thông số kĩ thuật</h2>
            <div className=" max-w-[500px] h-[650px] overflow-y-auto pr-2 custom-scroll-y">
              <Specifications />
            </div>
          </div>
        </Modal>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
}

export default ProductsDetail;
