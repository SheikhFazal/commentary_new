import { Suspense } from "react";

import { ResultsSkeleton, YouMightLike } from "./_components/you-might-like";
import Categories from "./_components/categories";
import FeatureClips from "./_components/feature-clips";

export default function Page() {
  return (
    <div 
    // className="h-full  max-w-screen-2xl mx-auto"
    className="mx-auto min-h-[100vh]"
    >
      <Suspense fallback={<ResultsSkeleton />}>
        <Categories />
        <YouMightLike />
        <FeatureClips />
      </Suspense>
    </div>
  );
}
