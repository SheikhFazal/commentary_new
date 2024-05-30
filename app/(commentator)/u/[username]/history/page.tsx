import { UserAvatar } from "@/components/user-avatar";
import { Check } from "lucide-react";
import React from "react";

const History = () => {
  const data = [
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

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Watch History</h2>
      {data?.length === 0 && (
        <p className="text-muted-foreground text-sm">
          No results found. Try searching for something else
        </p>
      )}
      <div className="flex flex-col gap-y-4">
        {data?.length &&
          data?.map((ele) => (
            <div key={ele?.id} className="px-3 mb-5 grid grid-cols-12 sm:gap-8 gap-3">
              <div className="overflow-hidden md:h-40 rounded-xl lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src={ele?.thumbnailUrl} alt="" className="h-full w-full" />
              </div>
              <div className="lg:col-span-9 md:col-span-8 sm:col-span-6 col-span-12">
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
                <div className="md:mt-10 mt-5">
                  <span className="font-semibold text-lg">{ele?.title}</span>
                </div>
                <div className="text-xs flex items-center gap-2 my-2">
                  <span>{ele?.views} views -</span>
                  <span>{ele?.time} ago</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default History;
