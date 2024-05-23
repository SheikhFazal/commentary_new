"use client";
import { Mic, MoveLeft, MoveRight } from "lucide-react";
import React, { useRef, useState } from "react";

import Slider from "react-slick";
import { ChevronRight } from "lucide-react";

const categoriesData = [
  { id: 1, name: "Football", icon: <Mic />, isSelected: true },
  { id: 2, name: "Cricket", icon: <Mic />, isSelected: false },
  { id: 3, name: "Tennis", icon: <Mic />, isSelected: false },
  { id: 4, name: "Hockey", icon: <Mic />, isSelected: false },
  { id: 5, name: "Golf", icon: <Mic />, isSelected: false },
  { id: 6, name: "Badminton", icon: <Mic />, isSelected: false },
  { id: 7, name: "Boxing", icon: <Mic />, isSelected: false },
  { id: 8, name: "Horse Racing", icon: <Mic />, isSelected: false },
];
const Categories = () => {
  const [categories, setCategories] = useState(categoriesData);
  const handleClick = (id: any) => {
    const updatedCategories = categories.map((category) =>
      category.id === id
        ? { ...category, isSelected: true }
        : { ...category, isSelected: false }
    );
    setCategories(updatedCategories);
  };
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
    slidesToShow: 4,
    speed: 1000,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
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
    <div className="">
      <div className="flex  items-center gap-5 mb-5">
        <span className="text-2xl font-semibold ">Categories</span>
        <div className="flex gap-2">
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
      </div>
      <div className="overflow-hidden">
        {/* <CustomSlider isSlidePerRow array={categoriesData} sliderRef={sliderRef} settingData={settings} /> */}
        <div className="slider-container max-w-[77vw] overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {categories?.length &&
              categories?.map((ele) => (
                <div key={ele?.id} className="px-2">
                  <button
                    onClick={() => handleClick(ele?.id)}
                    key={ele?.id}
                    className={`w-full flex items-center rounded-md gap-2 justify-between font-medium px-3 py-5 mb-5  ${
                      ele?.isSelected ? "bg-[#001BFF]" : "bg-[#222938]"
                    }`}
                    type="button"
                  >
                    {ele?.icon}
                    {ele?.name}
                    <ChevronRight
                      color={ele?.isSelected ? "#ffff" : "#394257"}
                    />
                  </button>
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 my-16">
        <div className="border border-[#3F495F] w-[45%]"></div>
        <button className="text-[#001BFF] text-xs">Show More</button>
        <div className="border border-[#3F495F] w-[45%]"></div>
      </div>
    </div>
  );
};

export default Categories;
