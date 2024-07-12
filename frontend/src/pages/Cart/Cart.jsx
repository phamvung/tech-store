import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";

import imgs from "../../assets/imgs";
import Button from "../../UI/Button/Button";
import CustomNumberInput from "../../UI/CustomNumberInput/CustomNumberInput";
import { changeQuantity, removeFromCart } from "../../store/cart/cartSlice";
import { toast, ToastContainer } from "react-toastify";

function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleChangeValue = (id, newValue) => {
    dispatch(changeQuantity({ id, quantity: newValue }));
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
    toast.info("Đã xóa sản phẩm khỏi giỏ hàng.");
  };

  return (
    <div className="max-w-[1300px] m-auto">
      <div>
        <NavLink to="/">Trang chủ</NavLink>
        <span> / </span>
        <NavLink to="/cart" className="text-gray-400">
          Cửa hàng
        </NavLink>
      </div>

      {cart.total_quantity === 0 && (
        <>
          <p className="mt-10 p-2 text-lime-500 bg-gray-100 border border-dashed border-lime-500">
            Freeship với đơn hàng trên 30.000.000đ. Mua sắm ngay nào!!!
          </p>

          <div className="h-[500px] flex flex-col items-center">
            <img
              className="w-96 mt-20"
              src={imgs.cart_empty}
              alt="Cart empty"
            />
            <h3 className="text-2xl mt-4">"Hổng" có gì trong giỏ hết</h3>
            <p className="text-gray-500 mb-5">
              Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!
            </p>
            <Button mode="red">
              <NavLink to="/products/hot">Mua sắm ngay</NavLink>
            </Button>
          </div>
        </>
      )}

      {cart.total_quantity !== 0 && (
        <>
          <h1 className="my-7 font-bold text-2xl">Giỏ hàng</h1>

          <div className="flex gap-5 mb-20">
            <div className="flex-auto">
              <ul>
                {cart.products.map((product) => (
                  <li className="flex justify-between border-b">
                    <div className="flex items-center">
                      <CiCircleRemove
                        className="text-3xl hover:text-red-500 cursor-pointer mr-4"
                        onClick={() => handleRemoveProduct(product.id)}
                      />
                      <img className="w-28" src={product.image} alt="product" />
                      <NavLink
                        to={`/products/detail/${product.id_product}`}
                        className="text-lg font-semibold hover:text-red-500"
                      >
                        <p>{product.name}</p>
                      </NavLink>
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="text-xl text-red-500">
                        {Intl.NumberFormat("en-US").format(
                          product.price * product.quantity
                        )}
                        ₫
                      </p>
                      <CustomNumberInput
                        value={product.quantity}
                        onChange={(newValue) =>
                          handleChangeValue(product.id, newValue)
                        }
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-7 font-medium">Ghi chú đơn hàng</p>
              <textarea
                className="outline-none border rounded-md w-full p-2"
                name="note"
                id="note"
              ></textarea>
            </div>

            <div className="min-w-[400px] bg-stone-100 p-5">
              <h2 className="text-xl mb-5 text-red-500">HẸN GIỜ NHẬN HÀNG</h2>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label for="date">Ngày nhận hàng</label>
                  <input
                    className="px-3 py-1 outline-none rounded-md border"
                    id="date"
                    type="date"
                  />
                </div>

                <div className="flex flex-col">
                  <label for="time">Thời gian nhận hàng</label>
                  <input
                    className="px-3 py-1 outline-none rounded-md border"
                    id="time"
                    type="date"
                  />
                </div>
              </div>

              <div className="mt-7 flex justify-between">
                <p className="text-xl">TỔNG CỘNG</p>
                <p className="flex flex-col text-xl text-red-500">
                  {Intl.NumberFormat("en-US").format(cart.total_price)}₫
                  <span className="text-gray-500 text-sm italic">
                    (Đã bao gồm VAT)
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input className="w-5 h-5" id="bill" type="checkbox" />
                <label for="bill">Xuất hóa đơn</label>
              </div>

              <Button mode="dark-red" className="my-5 w-full">
                Thanh toán
              </Button>

              <p className="mb-2 font-bold">Phương thức thanh toán</p>
              <img src={imgs.footer_trustbadge} alt="Payment method" />
            </div>
          </div>
        </>
      )}

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default Cart;
