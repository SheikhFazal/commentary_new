import React from "react";

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`animate-spin border-[#4231c8] rounded-full h-20 w-20 border-t-4 bg-transitions  border-b-4 
      
      `}
      ></div>
    </div>
  );
};

export default PageLoader;
