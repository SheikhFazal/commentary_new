import Image from "next/image";
import React from "react";

const Category = () => {
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
  return (
    <div>
      <div className="pb-8">
        <span className="font-semibold text-xl">Categories</span>
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:gap-10 sm:gap-7 gap-3">
        {categoryData?.map((ele) => (
          <div className="flex flex-col" key={ele?.id}>
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
      </div>
      <div className="flex justify-center items-center gap-4 my-10">
        <div className="border border-[#3F495F] w-[45%]"></div>
        <button className="text-[#001BFF] text-xs">Show More</button>
        <div className="border border-[#3F495F] w-[45%]"></div>
      </div>
    </div>
  );
};

export default Category;
