"use client";
import { UserAvatar } from "@/components/user-avatar";
import { MoveLeft, MoveRight, Check } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";

const featureData = [
  {
    id: 1,
    title: `ACC Men's Premier Cup
| Oman vs Cambodia...`,
    views: "3.6M",
    time: "2 Years",
    isGreenChecked: true,

    isLive: true,
    name: "Asian Cricket Council",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
    thumbnailUrl:
      "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
  {
    id: 2,
    title: `ACC Men's Premier Cup
| Oman vs Cambodia...`,
    views: "3.6M",
    time: "2 Years",
    isGreenChecked: true,

    isLive: true,
    name: "Asian Cricket Council",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
    thumbnailUrl:
      "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
  {
    id: 3,
    title: `ACC Men's Premier Cup
| Oman vs Cambodia...`,
    views: "3.6M",
    time: "2 Years",
    isGreenChecked: true,

    isLive: true,
    name: "Asian Cricket Council",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
    thumbnailUrl:
      "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
  {
    id: 4,
    title: `ACC Men's Premier Cup
| Oman vs Cambodia...`,
    views: "3.6M",
    time: "2 Years",
    isGreenChecked: true,

    isLive: true,
    name: "Asian Cricket Council",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
    thumbnailUrl:
      "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
  {
    id: 5,
    title: `ACC Men's Premier Cup
| Oman vs Cambodia...`,
    views: "3.6M",
    time: "2 Years",
    isGreenChecked: true,

    isLive: false,
    name: "Asian Cricket Council",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
    thumbnailUrl:
      "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
  {
    id: 6,
    title: `ACC Men's Premier Cup
| Oman vs Cambodia...`,
    views: "3.6M",
    time: "2 Years",
    isGreenChecked: true,

    isLive: false,
    name: "Asian Cricket Council",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
    thumbnailUrl:
      "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
  {
    id: 7,
    title: `ACC Men's Premier Cup
| Oman vs Cambodia...`,
    views: "3.6M",
    time: "2 Years",
    isGreenChecked: true,

    isLive: false,
    name: "Asian Cricket Council",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
    thumbnailUrl:
      "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
  {
    id: 8,
    title: `ACC Men's Premier Cup
| Oman vs Cambodia...`,
    views: "3.6M",
    time: "2 Years",
    isGreenChecked: true,

    isLive: false,
    name: "Asian Cricket Council",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
    thumbnailUrl:
      "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
];

const FeatureClips = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
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
          rows: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex  items-center gap-5 mb-10">
        <span className="text-2xl font-semibold ">Featured Clips</span>
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
      <div className="slider-container max-w-[77vw] overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {featureData?.length &&
            featureData?.map((ele) => (
              <div key={ele?.id} className="px-3 mb-5">
                <div className="overflow-hidden h-50 rounded-3xl w-full ">
                  {/*  eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ele?.thumbnailUrl}
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <div className="my-2">
                  <span className="font-semibold text-lg">{ele?.title}</span>
                </div>
                <div className="text-xs flex items-center gap-2 my-2">
                  <span>{ele?.views} views -</span>
                  <span>{ele?.time} ago</span>
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-x-3">
                    <UserAvatar
                      username=""
                      imageUrl={ele?.imageUrl}
                      isLive={false}
                    />
                    <div className="flex flex-col text-sm overflow-hidden">
                      <p className="truncate font-semibold hover:text-blue-500 flex gap-2 item-center">
                        {ele?.name}
                        {ele?.isGreenChecked && (
                          <Check color="#00D247" size={16} />
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <div className="flex justify-center items-center gap-4 py-14">
        <div className="border border-[#3F495F] w-[45%]"></div>
        <button className="text-[#001BFF] text-xs">Show More</button>
        <div className="border border-[#3F495F] w-[45%]"></div>
      </div>
    </div>
  );
};

export default FeatureClips;
