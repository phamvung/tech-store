import React from "react";
import Slider from "react-slick";

import imgs from "../../assets/imgs";
import SampleArrow from "../../UI/SampleArrow/SampleArrow";

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow next={true} />,
    prevArrow: <SampleArrow prev={true} />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <img src={imgs.slide_1} alt="Sale hot" />
        <img src={imgs.slide_2} alt="Samsung galaxy Z Flip3" />
      </Slider>
    </div>
  );
}

export default SimpleSlider;
