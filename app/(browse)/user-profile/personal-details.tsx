import React from "react";

export const PersonalDetails = ({ ele }: any) => {
  return (
    <div>
      <div className="flex flex-col md:mb-3 mb-5 ">
        <span className="text-[#778195] ">{ele?.heading}</span>
        <span className=" font-semibold">{ele?.details}</span>
      </div>
    </div>
  );
};
