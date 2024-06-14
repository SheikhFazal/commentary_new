import { ResultsSkeleton, YouMightLike } from "./_components/you-might-like";
import FeatureClips from "./_components/feature-clips";
import { Suspense } from "react";
import { Recommended } from "./_components/recommended";
import { LiveStreamingSlider } from "./_components/live-streaming-slider";

export default function Page() {
  return (
    <Suspense fallback={<ResultsSkeleton />}>
      <div className=" min-h-[100vh] overflow-hidden">
        <LiveStreamingSlider />
        <Recommended />
        <YouMightLike />
        <FeatureClips />
      </div>
    </Suspense>
  );
}
