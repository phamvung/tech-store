import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline, IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavBar() {
  const totalQuantityInCart = useSelector((state) => state.cart.total_quantity);

  return (
    <nav className="text-white flex gap-5">
      <div className="flex items-center gap-3">
        <div className="text-3xl">
          <FiPhoneCall />
        </div>
        <div>
          <p>Gọi mua hàng</p>
          <p>
            <a className="font-bold hover:text-yellow-400" href="">
              0999999999
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-3xl">
          <IoLocationOutline />
        </div>
        <p>
          <Link to="/system-stores" className="hover:text-yellow-400">
            Hệ thống <br /> cửa hàng
          </Link>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-3xl">
          <FaRegUser />
        </div>
        <div>
          <p>
            <Link className="hover:text-yellow-400">Tài khoản</Link>
          </p>
          <p className="text-sm">
            <Link className="hover:text-yellow-400">Đăng nhập</Link>
          </p>
        </div>
      </div>
      <Link
        to="/cart"
        className="flex items-center gap-2 border-2 border-white rounded-md px-2 hover:bg-blue-800"
      >
        <div className="text-3xl relative">
          <IoCartOutline />
          <div className="absolute -top-1 -right-2 bg-yellow-400 text-sm text-black w-5 h-5 rounded-full text-center">
            {totalQuantityInCart}
          </div>
        </div>
        <p>Giỏ hàng</p>
      </Link>
    </nav>
  );
}

export default NavBar;
