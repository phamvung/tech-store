import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import { useQuery } from "@tanstack/react-query";
import { getCoupons, getNewsList } from "../../util/http";
import { IoClose } from "react-icons/io5";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Modal from "../../pages/Modal/Modal";

function Promotions({ col }) {
  const { data, isLoading, isPending, error } = useQuery({
    queryKey: ["coupons"],
    queryFn: getCoupons,
  });

  let className = "my-10 grid gap-5";

  const [modal, setModal] = useState(false);
  const [couponShow, setCouponShow] = useState(null);
  const [codeCopy, setCodeCopy] = useState(null);

  const handleCloseModal = () => {
    document.body.style.overflow = "auto";
    setModal(false);
    setCouponShow(null);
  };

  if (!col) {
    className += " grid-cols-4";
  }

  if (col) {
    className += " grid-cols-1";
  }

  const handleChangeCondition = (coupon) => {
    document.body.style.overflow = "hidden";
    setModal(true);
    setCouponShow(coupon);
  };

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCodeCopy(code);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCodeCopy(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SkeletonTheme>
        <section className={className}>
          {isLoading && (
            <>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="shadow-[1px_0px_5px_-2px_rgba(0,0,0,0.3)] rounded-md flex relative"
                >
                  <div className="w-[150px] flex justify-center items-center bg-red-500 px-2">
                    <Skeleton height={80} width={50} />
                  </div>
                  <div className="p-2 w-full">
                    <h1 className="font-bold text-[#f00]">
                      <Skeleton width="100%" />
                    </h1>
                    <p className="text-sm text-gray-600 py-2">
                      <Skeleton count={2} />
                    </p>
                    <div className="flex justify-between items-center">
                      <Skeleton width={60} height={30} />
                      <Skeleton width={60} height={20} />
                    </div>

                    <div
                      className="absolute top-0 -left-1 h-full w-[10px] text-red-500"
                      style={{
                        background:
                          "repeating-linear-gradient(#e5e5e5,#e5e5e5 5px,transparent 0,transparent 9px,#e5e5e5 0,#e5e5e5 10px) 0/1px 100% no-repeat,radial-gradient(circle at 0 7px,transparent,transparent 2px,#e5e5e5ee 0,#e5e5e5 3px,currentColor 0) 1px 0/100% 10px repeat-y",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </>
          )}

          {data?.coupons.map((cp) => (
            <div
              key={cp.code}
              className="shadow-[1px_0px_5px_-2px_rgba(0,0,0,0.3)] rounded-md flex relative"
            >
              {!col && (
                <div className="w-[150px] flex justify-center items-center bg-red-500 px-2">
                  <img className="w-80%" src={cp.img} alt="promotion" />
                </div>
              )}
              <div className="w-auto p-2">
                <h1 className="font-bold text-[#f00]">NHẬP MÃ: {cp.code}</h1>
                <p className="text-sm text-gray-600 py-2">{cp.condition[0]}</p>
                <div className="flex justify-between">
                  <Button
                    mode="custom"
                    className="bg-[#f00] px-3 py-1 rounded-full text-white hover:bg-[#f00]/[0.7]"
                    onClick={() => handleCopy(cp.code)}
                  >
                    {codeCopy === cp.code ? "Đã chép" : "Sao chép"}
                  </Button>
                  <Button
                    mode="custom"
                    className="underline text-blue-700 text-sm"
                    onClick={() => handleChangeCondition(cp)}
                  >
                    Điều kiện
                  </Button>
                </div>

                {!col && (
                  <div
                    className="absolute top-0 -left-1 h-full w-[10px] text-red-500"
                    style={{
                      background:
                        "repeating-linear-gradient(#e5e5e5,#e5e5e5 5px,transparent 0,transparent 9px,#e5e5e5 0,#e5e5e5 10px) 0/1px 100% no-repeat,radial-gradient(circle at 0 7px,transparent,transparent 2px,#e5e5e5ee 0,#e5e5e5 3px,currentColor 0) 1px 0/100% 10px repeat-y",
                    }}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </section>
      </SkeletonTheme>

      {modal && (
        <Modal>
          <div className="bg-white w-[500px] h-[300px] rounded-xl relative">
            <div
              className="absolute top-3 right-3 text-xl cursor-pointer"
              onClick={handleCloseModal}
            >
              <IoClose />
            </div>
            <h2 className="text-center uppercase text-2xl py-5 text-[#f00] font-medium">
              Nhập mã: {couponShow?.code}
            </h2>
            <p className="bg-stone-200 px-5 py-3">
              Mã khuyễn mãi: <span>{couponShow?.code}</span>
            </p>
            <p className="px-5 py-3">Điều kiện:</p>
            <ul className="ml-5">
              {couponShow?.condition.map((cd) => (
                <li>- {cd}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Promotions;
