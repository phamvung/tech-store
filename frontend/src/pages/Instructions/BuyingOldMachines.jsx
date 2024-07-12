import React from "react";
import { Link } from "react-router-dom";

function BuyingOldMachines() {
  return (
    <div className="max-w-[1300px] m-auto mt-3 mb-20">
      <div>
        <Link to="/">Trang chủ</Link>
        <span> / </span>
        <Link to="/buying-old-machines" className="text-gray-400">
          Hướng dẫn bán máy cũ
        </Link>
      </div>

      <h1 className="my-10 text-3xl">Hướng dẫn bán máy cũ</h1>
      <ol>
        <li className="mb-5">
          <h2 className="font-bold text-3xl mb-3">
            1. Bán lại điện thoại cho Techstore được không?
          </h2>
          <p className="mb-2">
            Việc bạn mua và sử dụng nhiều thiết bị điện tử, công nghệ và muốn
            bán lại để nâng cấp đời mới hơn đã không còn là điều quá xa lạ. Hiểu
            được điều đó, Techstore sẵn sàng thu mua lại sản phẩm khi khách hàng
            của mình có nhu cầu.
          </p>
          <p className="mb-2">
            Chính vì vậy, bạn <b>có thể bán lại</b> điện thoại cho Techstore ,
            tuy nhiên cần phải <b>đáp ứng được đầy đủ các điều kiện</b> được đề
            ra. Chỉ cần một điều kiện không đáp ứng được bạn sẽ không thể bán
            lại điện thoại cho Techstore.
          </p>
          <p className="mb-2">
            Khi đáp ứng đầy đủ các điều kiện được đề ra bạn có thể bán lại điện
            thoại cho Techstore.
          </p>
        </li>
        <li className="mb-5">
          <h2 className="font-bold text-3xl mb-3">
            2. Điều kiện để Techstore thu mua điện thoại, máy tính cũ
          </h2>
          <ul className="ml-10 list-disc">
            <li>Sản phẩm phải được mua mới tại Techstore. </li>
            <li>
              Sản phẩm được khách hàng mua trong 12 tháng. Sản phẩm phải đảm bảo
              không trầy xước, cấn móp, bị ngấm nước, bị mắc lỗi do người dùng.
            </li>
            <li>
              Chỉ áp dụng cho những sản phẩm mua cá nhân, không áp dụng sản phẩm
              có mục đích thương mại.
            </li>
            <li>
              Còn đủ phụ kiện và khuyến mãi đi kèm nếu mất sẽ phụ thu thêm phí.
            </li>
          </ul>
        </li>
        <li className="mb-5">
          <h2 className="font-bold text-3xl mb-3">
            3. Mức phí thu mua sản phẩm cũ tại Techstore
          </h2>
          <p className="mb-2">
            Mức phí thu mua sản phẩm cũ tại Techstore trong
            <b>tháng đầu tiên là 20% giá trị hoá đơn.</b>
          </p>
          <p className="mb-2">
            Tháng thứ 2 trở đi mức phí <b>tăng lên 10%/tháng.</b>
          </p>
          <b>Ví dụ:</b>
          <p className="mb-2">
            Bạn mua chiếc điện thoại Samsung Galaxy Z Fold3 5G 256GB với giá
            41.990.000₫ vào ngày 30/09/2021.
          </p>
          <ul className="list-disc ml-10 mb-3">
            <li>
              Vào ngày 30/09/2021 bạn muốn đổi, trả hàng, Techstore sẽ thu phí
              20% (tương đương 8.398.000đ). Tức là bạn bán lại điện thoại với
              giá 41.990.000₫ - 8.398.000đ = 33.592.000đ.
            </li>
            <li>
              Từ tháng 10 mức phí tăng lên 30%, tháng 11 tăng lên 40%, tháng 12
              tăng lên 50%,...
            </li>
          </ul>
          <p className="mb-2">
            Mọi thông tin cần hỗ trợ vui lòng liên hệ tổng đài{" "}
            <strong>1900 989877 (8:00-18:00)</strong> hoặc Email:{" "}
            <strong>support@egany.com</strong>
          </p>
        </li>
      </ol>
    </div>
  );
}

export default BuyingOldMachines;
