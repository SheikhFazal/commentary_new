import { Suspense } from "react";
import { redirect } from "next/navigation";

import { Results, ResultsSkeleton } from "./_components/results";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
};

const SearchPage = ({
  searchParams,
}: SearchPageProps) => {
  if (!searchParams?.term) {
    redirect("/");
  }

  return ( 
    <div className=" max-w-screen-2xl ">
      <Suspense fallback={<ResultsSkeleton />}>
        <Results term={searchParams?.term} />
      </Suspense>
    </div>
  );
};
 
export default SearchPage;
