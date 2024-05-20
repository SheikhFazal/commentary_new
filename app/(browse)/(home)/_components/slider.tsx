import React from "react";
import Slider from "react-slick";

export const CustomSlider = ({ array, sliderRef }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    centerPadding: "120px",
    variableWidth: true,
    arrows: false,
    fade: true,
    waitForAnimate: false,


    // slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-10 max-w-[77vw]">
      {array?.length && (
        <Slider ref={sliderRef} {...settings}>
          {array?.map((ele: any) => (
            <div key={ele?.id} className="flex px-2 justify-center ">
              <button
                type="button"
                className={` flex items-center rounded-md gap-2 justify-center font-medium px-3 py-3 ${
                  ele?.isSelected ? "bg-[#001BFF]" : "bg-[#222938]"
                }`}
              >
                {ele?.name}
                {ele?.icon}
              </button>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};
