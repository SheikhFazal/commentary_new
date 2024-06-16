import { UserAvatar } from "@/components/user-avatar";
import { Check } from "lucide-react";
import React from "react";

export const ProfileVideo = () => {
  const profileVideosData = [
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
      <h2 className="font-semibold text-xl mb-5">Videos</h2>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-3">
        {profileVideosData?.length &&
          profileVideosData?.map((ele) => (
            <div key={ele?.id} className=" mb-5">
              <div className="overflow-hidden h-50 rounded-3xl w-full ">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src={ele?.thumbnailUrl} alt="" className="h-full w-full" />
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
                    username={ele?.name}
                    imageUrl={ele?.imageUrl}
                    isLive={false}
                  />
                  <div className="flex flex-col text-sm overflow-hidden">
                    <p className="truncate font-semibold hover:text-blue-500 flex gap-2 item-center">
                      {ele?.isGreenChecked && (
                        <Check color="#00D247" size={16} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
