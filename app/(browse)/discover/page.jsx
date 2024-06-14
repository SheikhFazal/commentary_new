
// "use client";
// import React, { Suspense, lazy } from "react";
// const Categories = lazy(() => import("../(home)/_components/categories"));
import PageLoader from "@/app/loading";
import Categories from "./_components/categories";
import FeatureClips from "../(home)/_components/feature-clips";
import { YouMightLike } from "../(home)/_components/you-might-like";


const Discover = () => {
  return (
    <div
      // className="h-full  max-w-screen-2xl mx-auto"
      className=" min-h-[100vh] overflow-hidden"
    >
      {/* <Suspense fallback={<PageLoader />}> */}
      <Categories />
      <YouMightLike />
      <FeatureClips  />
      {/* </Suspense> */}
    </div>
  );
};

export default Discover;
