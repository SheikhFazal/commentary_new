import { Suspense } from "react";

import { Results, ResultsSkeleton } from "./_components/results";
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
        <Results />
        <FeatureClips />
      </Suspense>
    </div>
  );
}
