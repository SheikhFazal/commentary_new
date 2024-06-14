"use client";
import React, { useRef } from "react";
import { MoveLeft, MoveRight, Radio, Eye } from "lucide-react";

import Slider from "react-slick";


const liveStreamData = [
    {id:1,imageUrl:'',}
]

export const LiveStreamingSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 1000,
    // rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1224,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 760,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       // initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div>
      <div className="border flex justify-center items-center overflow-hidden relative">
        <div className="flex gap-2 absolute right-14 top-14  border border-red-600 z-10">
          <button
            className="border border-white rounded-full bg-[#222938] flex items-center justify-center h-6 w-6 p-1"
            onClick={previous}
          >
            <MoveLeft />
          </button>
          <button
            className="border border-white rounded-full bg-[#222938] flex items-center justify-center h-6 w-6 p-1"
            onClick={next}
          >
            <MoveRight />
          </button>
        </div>
        <div className="slider-container max-w-[77vw] ">
          <Slider ref={sliderRef} {...settings}>
            {[0, 1, 2]?.map((ele) => (
              <div
                key={ele}
                className="h-[60vh] rounded-2xl p-2 flex flex-col justify-between border border-white z-10"
              >
                <div className="border flex gap-3 p-5">
                  <div className=" rounded-full text-sm flex items-center gap-1 p-2 justify-center w-[70px] bg-[#E2454C]">
                    <Radio size={17} /> Live
                  </div>
                  <div className=" rounded-full text-sm flex items-center gap-1 p-2 justify-center w-[80px] bg-[#877DE2]">
                    <Eye size={17} /> 10,256
                  </div>
                </div>
                <div className="border">{ele}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
