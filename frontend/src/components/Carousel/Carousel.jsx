import React from "react";
import Slider from "react-slick";
import SampleArrow from "../../UI/SampleArrow/SampleArrow";

function Carousel({ children }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleArrow next={true} />,
    prevArrow: <SampleArrow prev={true} />,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default Carousel;
