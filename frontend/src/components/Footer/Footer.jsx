import React from "react";
import icons from "../../assets/icons";
import imgs from "../../assets/imgs";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import policies from "../../util/policies";

function Footer() {
  return (
    <footer>
      <section className="bg-stone-800 text-white">
        <div className="max-w-[1300px] m-auto flex justify-between items-center py-2">
          <ul className="flex gap-3">
            {icons.social_network.map((icon, index) => (
              <li key={index}>
                <img src={icon} alt="Icon social network" />
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-3">
            <img src={icons.email_icon} alt="Sign up email" />
            <p className="text-nowrap">
              Bạn muốn nhận khuyến mãi đặc biệt?
              <br /> Đăng ký ngay
            </p>

            <div className="w-full h-10 flex bg-white rounded-lg   overflow-hidden">
              <input
                type="text"
                placeholder="Nhập sản phẩn cần tìm ..."
                className="flex-auto outline-none px-4 text-black"
              />
              <button className="bg-yellow-400 w-20 text-black hover:bg-yellow-300 px-2">
                Đăng kí
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1300px] m-auto grid grid-cols-4 py-10 gap-5">
        <div className="flex flex-col gap-2">
          <Link to="/">
            <img src={imgs.logo_red} alt="Home" />
          </Link>

          <div className="flex gap-3">
            <span className="mt-1">
              <FaLocationDot />
            </span>
            <p>
              <b>Địa chỉ:</b>
              <span>150/8 Nguyễn Duy Cung, Phường 12, Tp.HCM</span>
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span>
              <MdOutlinePhoneIphone />
            </span>
            <p>
              <b>Số điện thoại: </b>
              <a className="hover:text-[#f00]" href="tel:0999999999">
                0999999999
              </a>
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span>
              <IoIosMail />
            </span>
            <b>Email: </b>
            <a className="hover:text-[#f00]" href="mailto:support@tech.com">
              support@tech.com
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl">
            <strong>Hỗ trợ khách hàng</strong>
          </h2>
          <ul>
            {policies.SUPPORTS_CUSTOMMER.map((support) => (
              <li key={support.name}>
                <Link to={support.link}>{support.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl">
            <strong>Hỗ trợ khách hàng</strong>
          </h2>
          <ul>
            {policies.POLICIESLIST.map((policy) => (
              <li key={policy.name}>
                <Link to={policy.link}>{policy.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl">
            <strong>Tổng đài hỗ trợ</strong>
          </h2>
          <ul>
            <li>
              Gọi mua hàng:{" "}
              <a
                className="font-bold text-blue-600 hover:text-[#f00]"
                href="tel:0999999999"
              >
                0999999999
              </a>
            </li>
            <li>
              Gọi bảo hành:{" "}
              <a
                className="font-bold text-blue-600 hover:text-[#f00]"
                href="tel:0999999999"
              >
                0999999999
              </a>
            </li>
            <li>
              Gọi khiếu nại:{" "}
              <a
                className="font-bold text-blue-600 hover:text-[#f00]"
                href="tel:0999999999"
              >
                0999999999
              </a>
            </li>
          </ul>

          <h2 className="text-xl">
            <strong>Phương thức thanh toán</strong>
          </h2>
          <img src={imgs.footer_trustbadge} alt="Payment methods" />
        </div>
      </section>
      <p className="max-w-[1300px] m-auto">
        © Bản quyền thuộc về Me | Cung cấp bởi Me
      </p>
    </footer>
  );
}

export default Footer;
