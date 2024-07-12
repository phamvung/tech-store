import React from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function SystemStores() {
  return (
    <div className="max-w-[1300px] m-auto px-2 mt-2">
      <div>
        <NavLink to="/">Trang chủ</NavLink>
        <span> / </span>
        <NavLink to="/system-stores" className="text-gray-400">
          Hệ thống cửa hàng
        </NavLink>
      </div>

      <div className="mb-20">
        <h1 className="text-center text-3xl my-10">Danh sách cửa hàng</h1>
        <div className="flex gap-5 max-sm:flex-col">
          <div className="w-80 p-8 border rounded-lg max-sm:w-full">
            <h2 className="text-2xl text-center py-5">Tìm cửa hàng</h2>
            <div className="flex flex-col gap-2">
              <label className="text-lg mt-3">Chọn tỉnh thành</label>
              <select
                className="border rounded-lg px-2 py-1 outline-none"
                name="province"
                id="province"
              >
                <option value="ho-chi-minh">Hồ Chí Minh</option>
                <option value="ha-noi">Hà Nội</option>
              </select>
              <label className="text-lg mt-3">Chọn cửa hàng</label>
              <select
                className="border rounded-lg px-2 py-1 outline-none"
                name="brand"
                id="brand"
              >
                <option value="go-vap">Chi nhánh Gò Vấp</option>
                <option value="phu-nhuan  ">Chi nhánh Phú Nhuận</option>
              </select>
              <h2 className="flex items-center gap-1 text-3xl my-6">
                <FaLocationDot /> Địa chỉ
              </h2>
              <p className="ml-6">
                150 Nguyễn Duy Cung, phường 15, quận Gò Vấp, HCM
              </p>
            </div>
          </div>
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7837.263359712375!2d106.642364!3d10.839473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299cc282f5d9%3A0x7a1a1342b1de2f3f!2zMTUwIE5ndXnhu4VuIER1eSBDdW5nLCBQaMaw4budbmcgMTIsIEfDsiBW4bqlcCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcyNzAxMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1715661781727!5m2!1svi!2sus"
              height="450"
              className="border-none w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemStores;
