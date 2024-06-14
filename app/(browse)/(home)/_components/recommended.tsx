"use client"
import React, { useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import Slider from "react-slick";

export const Recommended = () => {
  const categoryData = [
    {
      id: 1,
      imageUrl: "/category (1).png",
      title: "Rugby World...",
      viewers: "96K",
    },
    {
      id: 2,
      imageUrl: "/category (2).png",
      title: "World Series 20...",
      viewers: "54K",
    },
    {
      id: 3,
      imageUrl: "/category (3).png",
      title: "FIFA Women's...",
      viewers: "98.2K",
    },
    {
      id: 4,
      imageUrl: "/category (4).png",
      title: "RYDER Cup 2022",
      viewers: "349K",
    },
    {
      id: 5,
      imageUrl: "/category (5).png",
      title: "The Champio...",
      viewers: "48.4K",
    },
    {
      id: 6,
      imageUrl: "/category (6).png",
      title: "Masters Tourn...",
      viewers: "27.1K",
    },
    {
      id: 7,
      imageUrl: "/category (1).png",
      title: "Rugby World...",
      viewers: "96K",
    },
    {
      id: 8,
      imageUrl: "/category (2).png",
      title: "World Series 20...",
      viewers: "54K",
    },
    {
      id: 9,
      imageUrl: "/category (3).png",
      title: "FIFA Women's...",
      viewers: "98.2K",
    },
    {
      id: 10,
      imageUrl: "/category (4).png",
      title: "RYDER Cup 2022",
      viewers: "349K",
    },
    {
      id: 11,
      imageUrl: "/category (5).png",
      title: "The Champio...",
      viewers: "48.4K",
    },
    {
      id: 12,
      imageUrl: "/category (6).png",
      title: "Masters Tourn...",
      viewers: "27.1K",
    },
  ];

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
    slidesToShow: 6,
    speed: 1000,
    // rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="mb-10">
      <div className="flex  items-center gap-5 mb-5">
        <span className="text-2xl font-semibold ">Recommended</span>
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

      {/* <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:gap-10 sm:gap-7 gap-3"> */}
      <div className="slider-container max-w-[77vw] ">
      <Slider ref={sliderRef} {...settings}>
        {categoryData?.map((ele) => (
          <div className="flex flex-col md:pr-7 md:p-0 p-5 " key={ele?.id}>
            <div className="overflow-hidden  ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ele?.imageUrl} alt="" className="h-full w-full" />
            </div>
            <div className="flex flex-col mt-2 gap-1">
              <span className="font-semibold">{ele?.title}</span>
              <span className="text-xs">{ele?.viewers} viewers</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    // </div>
  );
};
