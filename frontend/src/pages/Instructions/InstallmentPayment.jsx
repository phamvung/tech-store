import React from "react";
import { Link } from "react-router-dom";

function InstallmentPayment() {
  return (
    <div className="max-w-[1300px] m-auto mt-3 mb-20">
      <div>
        <Link to="/">Trang chủ</Link>
        <span> / </span>
        <Link to="/installment-payment-instructions" className="text-gray-400">
          Hướng dẫn bán máy cũ
        </Link>
      </div>

      <h1 className="my-10 text-3xl">Hướng dẫn trả góp</h1>
      <img
        src="https://bizweb.dktcdn.net/100/441/086/files/huong-dan-tra-gop-900b899a-c5f9-4ed5-95c9-728243dfb9f5.jpg?v=1639904629119"
        alt="Trả góp qua công ty tài chính"
      />
      <img
        src="https://bizweb.dktcdn.net/100/441/086/files/huong-dan-tra-gop-900b899a-c5f9-4ed5-95c9-728243dfb9f5.jpg?v=1639904629119"
        alt="Trả góp qua thẻ tín dụng"
      />
    </div>
  );
}

export default InstallmentPayment;
