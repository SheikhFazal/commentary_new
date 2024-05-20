"use client";
import { getStreams } from "@/lib/feed-service";
import { Skeleton } from "@/components/ui/skeleton";

import { ResultCard, ResultCardSkeleton } from "./result-card";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoveRight, MoveLeft, Mic } from "lucide-react";
import { CustomSlider } from "./slider";

export const Results = () => {
  const youMightLikeData = [
    { id: 1, name: "Audio Only", icon: <Mic />, isSelected: true },
    { id: 2, name: "Group Commentary", icon: <Mic />, isSelected: false },
    { id: 3, name: "Celebrity Commentary", icon: <Mic />, isSelected: false },
    { id: 4, name: "Get Involved", icon: <Mic />, isSelected: false },
    { id: 5, name: "Audio Only", icon: <Mic />, isSelected: false },
    { id: 6, name: "Audio Only", icon: <Mic />, isSelected: false },
    { id: 7, name: "Audio Only", icon: <Mic />, isSelected: false },
    { id: 8, name: "Audio Only", icon: <Mic />, isSelected: false },
  ];

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
      user: "",
      isLive: true,
      name: "nam",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 2,
      user: "",
      isLive: true,
      name: "nam",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 3,
      user: "",
      isLive: true,
      name: "nam",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 4,
      user: "",
      isLive: true,
      name: "nam",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 5,
      user: "",
      isLive: false,
      name: "nam",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
    {
      id: 6,
      user: "",
      isLive: false,
      name: "nam",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU",
      thumbnailUrl:
        "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    },
  ];

  return (
    <div>
      {data?.length === 0 ? (
        <div className="text-muted-foreground text-sm">No streams found.</div>
      ) : (
        <div className="">
          <div className="flex  items-center gap-5 mb-5">
            <span className="text-lg font-semibold ">You Might Like</span>
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
          <div className="">
            <CustomSlider array={youMightLikeData} sliderRef={sliderRef} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8">
            {data?.map((result: any) => (
              <ResultCard key={result.id} data={result} />
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 my-5">
            <div className="border border-[#3F495F] w-[45%]"></div>
            <div className="text-[#001BFF] text-xs">Show More</div>
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
