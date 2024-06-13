"use client";
// import { getStreams } from "@/lib/feed-service";
import { Skeleton } from "@/components/ui/skeleton";

import { ResultCard, ResultCardSkeleton } from "./result-card";
import Slider from "react-slick";
import { useRef, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { MoveRight, MoveLeft, Mic, Radio } from "lucide-react";
import { CustomSlider } from "./slider";
import { UserAvatar } from "@/components/user-avatar";

export const YouMightLike = () => {
  const youMightLikeData = [
    { id: 1, name: "Audio Only", icon: <Mic />, isSelected: true },
    { id: 2, name: "Group Commentary", icon: <Mic />, isSelected: false },
    { id: 3, name: "Celebrity Commentary", icon: <Mic />, isSelected: false },
    { id: 4, name: "Get Involved", icon: <Mic />, isSelected: false },
    { id: 5, name: "Audio Only", icon: <Mic />, isSelected: false },
    { id: 6, name: "Audio Only", icon: <Mic />, isSelected: false },
  ];
  const [youMightLike, setMightLike] = useState(youMightLikeData);
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  // const data = await getStreams();

  const data = [
    {
      id: 1,
      user: "John Smith",
      title: "FIFA WorldCup 2024",
      isLive: true,
      name: "CricketOnline",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 2,
      user: "John Smith",
      title: "FIFA WorldCup 2024",
      isLive: true,
      name: "CricketOnline",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 3,
      user: "John Smith",
      title: "FIFA WorldCup 2024",
      isLive: true,
      name: "CricketOnline",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 4,
      user: "John Smith",
      title: "FIFA WorldCup 2024",
      isLive: true,
      name: "CricketOnline",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 5,
      user: "John Smith",
      title: "FIFA WorldCup 2024",
      isLive: false,
      name: "CricketOnline",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 6,
      user: "John Smith",
      title: "FIFA WorldCup 2024",
      isLive: false,
      name: "CricketOnline",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
  ];
  const handleClick = (id: any) => {
    const updatedCategories = youMightLike.map((category) =>
      category.id === id
        ? { ...category, isSelected: true }
        : { ...category, isSelected: false }
    );
    setMightLike(updatedCategories);
  };
  return (
    <div>
      {data?.length === 0 ? (
        <div className="text-muted-foreground text-sm">No streams found.</div>
      ) : (
        <div className="">
          <div className="flex  items-center gap-5 mb-5">
            <span className="text-2xl font-semibold ">You Might Like</span>
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
          <div className="mb-10">
            <CustomSlider
              array={youMightLike}
              sliderRef={sliderRef}
              handleSelect={handleClick}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-3">
            {/* {data?.map((result: any) => (
              <ResultCard key={result.id} data={result} />
            ))} */}
            {data?.map((ele) => (
              <div key={ele?.id} className="mb-3">
                <div className="overflow-hidden h-40 rounded-3xl w-full relative">
                  {ele?.isLive && (
                    <div className="absolute left-5 top-5 rounded-full text-sm flex items-center gap-1 py-2 justify-center w-[70px] bg-[#E2454C]">
                      <Radio size={17} /> Live
                    </div>
                  )}
                  {/*  eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ele?.thumbnailUrl} alt="" className="w-full" />
                </div>
                <div className="my-2">
                  <span className="font-semibold ">{ele?.title}</span>
                </div>

                <div className="mt-3 flex flex-wrap justify-between items-center">
                  <div className="flex items-center gap-x-3">
                    <UserAvatar
                      username=""
                      imageUrl={ele?.imageUrl}
                      isLive={false}
                    />
                    <div className="flex flex-col text-xs overflow-hidden">
                      <p className="truncate  hover:text-blue-500 flex gap-2 item-center">
                        {ele?.name}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <button
                      type="button"
                      className="py-3 px-3 text-xs  rounded-full  bg-[#001BFF]"
                    >
                      Listen Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 my-10">
            <div className="border border-[#3F495F] w-[45%]"></div>
            <button className="text-[#001BFF] text-xs">Show More</button>
            <div className="border border-[#3F495F] w-[45%]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
