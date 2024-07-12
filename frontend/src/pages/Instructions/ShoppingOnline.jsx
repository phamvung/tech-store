import React from "react";
import { Link } from "react-router-dom";

function ShoppingOnline() {
  return (
    <div className="max-w-[1300px] m-auto mt-3 mb-20">
      <div>
        <Link to="/">Trang chủ</Link>
        <span> / </span>
        <Link to="/shopping-guide-online" className="text-gray-400">
          Hướng dẫn mua hàng Online
        </Link>
      </div>

      <h1 className="my-10 text-3xl">Hướng dẫn mua hàng Online</h1>
      <ol>
        <li className="mb-5">
          <h2 className="font-bold text-xl mb-3">1. HÌNH THỨC THANH TOÁN</h2>
          <p className="mb-2">
            Để thuận tiện nhất cho khách hàng mua sắm online với Techstore,
            chúng tôi hỗ trợ các hình thức thanh toán sau
          </p>
          <p>
            <strong className="mb-2">Thanh toán tiền mặt khi giao hàng</strong>
          </p>
          <b className="mb-2">Thanh toán trước bằng các hình thức:</b>
          <ul className="ml-10 list-disc">
            <li>Thẻ ATM Nội Địa</li>
            <li>Thẻ tín dụng / Thẻ ghi nợ / VISA / MASTER / JCB / AMEX</li>
            <li>Ví điện tử MOMO</li>
            <li>Ví điện tử Zalo Pay</li>
          </ul>
        </li>

        <li className="mb-5">
          <h2 className="font-bold text-xl mb-3">2. HỦY ĐƠN HÀNG</h2>
          <p>
            Đơn hàng của khách hàng sẽ được xử lý ngay khi thực hiện xác nhận
            thanh toán. Để được hỗ trợ về việc hủy đơn hàng, vui lòng liên hệ
            chúng tôi:
          </p>
          <ul className="ml-10 list-disc">
            <li>
              Tổng đài <strong>1900 989877 (8:00-18:00)</strong>
            </li>
            <li>
              Email: <strong>support@tech.com</strong>
            </li>
          </ul>
        </li>

        <li className="mb-5">
          <h2 className="font-bold text-xl mb-3">
            3. THỜI GIAN VÀ PHÍ GIAO HÀNG
          </h2>
          <p>
            Chúng tôi luôn cố gắng để giao đơn hàng sớm nhất đến khách hàng với
            cách hình thức giao hàng sau:
          </p>
          <b>Giao hàng tận nơi:</b>
          <ul className="ml-10 list-disc">
            <li>Miễn phí giao hàng cho đơn hàng trên 500.000 VNĐ</li>
            <li>Đơn đặt hàng dưới 500.000 VND sẽ có phí giao hàng như sau:</li>
            <li>
              Trong TP. Hồ Chí Minh: 19.000 VND. Thời gian giao hàng dự kiến từ
              1-3 ngày làm việc
            </li>
            <li>
              Các tỉnh thành khác của Việt Nam: 49.000 VND. Thời gian giao hàng
              dự kiến từ 3 - 7 ngày làm việc
            </li>
            <li>
              Miễn phí giao hàng đến địa chỉ cửa hàng khách hàng chọn với thời
              gian giao hàng từ 3 - 5 ngày làm việc
            </li>
          </ul>
        </li>

        <li className="mb-5">
          <h2 className="font-bold text-xl mb-3">
            4. CHÍNH SÁCH TRẢ HÀNG & HOÀN TIỀN
          </h2>
          <p className="mb-2">
            Chúng tôi luôn cố gắng giao đến khách hàng sản phẩm trong tình trạng
            tốt nhất và chính xác theo đơn hàng đã đặt. Những trường hợp trả
            hàng và hoàn tiền được xem xét như sau:
          </p>
          <ul className="list-disc ml-10 mb-3">
            <li>
              Sản phẩm bị lỗi, sai loại sản phẩm, sai kích cỡ, sai màu sắc,
              thiếu sản phẩm so với đơn hàng được đặt
            </li>
            <li>Sản phẩm bị hết hạn sử dụng</li>
          </ul>
          <p className="mb-2">
            Khách hàng có thể trả hàng trong vòng 14 ngày kể từ ngày nhận được
            hàng và thực hiện theo hướng dẫn trên Phiếu đính kèm trong kiện hàng
          </p>

          <ul className="list-disc ml-10 mb-3">
            <li>
              Đơn hàng trả cần hoàn trả đầy đủ sản phẩm đã đặt, các quà tặng,
              phiếu mua hàng và phiếu giảm giá đính kèm (nếu có)
            </li>
            <li>
              Sản phẩm chưa có dấu hiệu sử dụng, không bị hư hỏng, trầy xước
              hoặc có vết dơ trên bao bì sản phẩm
            </li>
            <li>
              Sau khi kiện hàng được hoàn trả thành công và được kiểm tra đầy
              đủ, khoản tiền hoàn lại sẽ được hoàn trong vòng 30 ngày làm việc
            </li>
          </ul>
          <p>
            Mọi thông tin cần hỗ trợ vui lòng liên hệ tổng đài{" "}
            <strong>1900 989877 (8:00-18:00)</strong> hoặc Email:{" "}
            <strong>support@tech.com</strong>{" "}
          </p>
        </li>
      </ol>
    </div>
  );
}

export default ShoppingOnline;
