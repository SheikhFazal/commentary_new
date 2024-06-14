"use client";
import React, { useRef } from "react";
import { MoveLeft, MoveRight, Radio, Eye } from "lucide-react";

import Slider from "react-slick";
import { UserAvatar } from "@/components/user-avatar";

const liveStreamData = [
  {
    id: 1,
    imageUrl: "home-live-stream-1.png",
    streamTitle: "FIFA WorldCup 2026",
    isLive: true,
    onlineWatchingCount: "10,486",
    username: "CricketOnline",
    profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU`,
  },
  {
    id: 2,
    imageUrl: "home-live-stream-2.png",
    streamTitle: "FIFA WorldCup 2026",
    isLive: false,
    onlineWatchingCount: "1800",
    username: "CricketOnline",
    profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU`,
  },
  {
    id: 3,
    imageUrl: "home-live-stream-3.png",
    streamTitle: "FIFA WorldCup 2026",
    isLive: true,
    onlineWatchingCount: "3200",
    username: "CricketOnline",
    profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU`,
  },
];

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
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesPerRow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="mb-10">
      <div className=" flex justify-center items-center overflow-hidden relative">
        <div className=" max-w-[77vw] p-2 relative">
          <div className="flex gap-2 absolute right-14 sm:top-10 top-24   z-10">
            <button
              className=" rounded-full bg-white flex items-center justify-center h-6 w-6 p-1"
              onClick={previous}
            >
              <MoveLeft color={"#222938"} />
            </button>
            <button
              className=" rounded-full bg-white flex items-center justify-center h-6 w-6 p-1"
              onClick={next}
            >
              <MoveRight color={"#222938"} />
            </button>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {liveStreamData?.map((ele) => (
              <React.Fragment key={ele?.id}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 10)), url(${ele.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center ",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between ",
                  }}
                  className="h-[60vh] rounded-2xl p-2 "
                >
                  <div className="flex gap-3 p-5">
                    {ele?.isLive && (
                      <div className=" rounded-full text-sm flex items-center gap-1 p-2 justify-center w-[70px] bg-[#E2454C]">
                        <Radio size={17} /> Live
                      </div>
                    )}
                    <div className=" rounded-full text-sm flex items-center gap-1 p-2 justify-center w-[80px] bg-[#877DE2]">
                      <Eye size={17} /> {ele?.onlineWatchingCount}
                    </div>
                  </div>
                  <div className=" flex justify-between items-center flex-wrap sm:gap-0 gap-4 bg-transparent p-5 ">
                    <div className="flex flex-col gap-2">
                      <h1 className="font-bold text-3xl">{ele?.streamTitle}</h1>
                      <div className="flex items-center gap-x-3">
                        <UserAvatar
                          username=""
                          imageUrl={ele?.profileImg}
                          isLive={false}
                        />
                        <div className="flex flex-col text-xs overflow-hidden">
                          <p className="truncate  hover:text-blue-500 flex gap-2 item-center">
                            {ele?.username}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="py-3 px-3 text-xs  rounded-full  bg-[#001BFF]"
                      >
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
