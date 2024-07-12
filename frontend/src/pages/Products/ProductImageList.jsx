import React, { useState } from "react";

function ProductImageList({ imageList }) {
  const [activeImage, setActiveImage] = useState(0);

  const handleChangeActiveImage = (index) => {
    setActiveImage(index);
  };

  return (
    <>
      <div className="w-full h-96 flex justify-center items-center">
        <img src={imageList[activeImage]} alt="product" />
      </div>

      <div className="w-max flex">
        {imageList.map((image, index) => (
          <div
            draggable={false}
            key={index}
            onClick={() => handleChangeActiveImage(index)}
            className={
              index === activeImage
                ? "border w-[100px] h-[100px] flex items-center border-red-500"
                : " w-[100px] h-[100px] flex items-center hover:border-red-500"
            }
          >
            <img src={image} alt="product" />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductImageList;
