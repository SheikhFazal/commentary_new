"use client";
import React, { useState } from "react";
import { Plus, Check } from "lucide-react";
import { useRouter } from "next/navigation";

const interestCategoryData = [
  { id: 1, title: "World Cup" },
  { id: 2, title: "Super Bowl" },
  { id: 3, title: "Tour de France" },
  { id: 4, title: "Gran Prix" },
  { id: 5, title: `Women's World Cup` },
  { id: 6, title: "Commonwealth Games" },
  { id: 7, title: "Wimbledon" },
  { id: 8, title: "Cricket World Cup" },
  { id: 9, title: "Olympics" },
  { id: 10, title: "NBA Finals" },
  { id: 11, title: "Stanley Cup" },
  { id: 12, title: "Stanley Cup" },
  { id: 13, title: "Stanley Cup" },
];
const JustFewSteps = () => {
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const router = useRouter();
  const [dob, setDob] = useState("");
  const [showAll, setShowAll] = useState(false);

  const toggleCategory = (id: any) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(
        selectedCategories.filter((categoryId) => categoryId !== id)
      );
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handleShowMore = () => setShowAll(!showAll);

  const displayedCategories = showAll
    ? interestCategoryData
    : interestCategoryData.slice(0, 10);

  return (
    <div className="lg:col-span-5 md:col-span-6 col-span-12 py-5 lg:px-16 md:px-12 px-8 bg-[#11151E] min-h-screen">
      <div className="">
        <p className="text-4xl   pt-16 py-20 text-center font-semibold">
          Just a few more details
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <span>What are your main interests</span>

        <div className="flex flex-wrap gap-3 mb-5">
          {displayedCategories?.map((category) => {
            const isSelected = selectedCategories.includes(category.id);
            return (
              <button
                key={category?.id}
                className={`py-[7px] px-4 text-sm rounded-full flex items-center justify-center gap-1 ${
                  isSelected ? "bg-[#001bff] " : "bg-[#343e52] "
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                {category?.title}

                {isSelected ? <Check size={12} /> : <Plus size={12} />}
              </button>
            );
          })}
          {interestCategoryData.length > 10 && (
            <div className="w-full px-10 h-full flex justify-end">
              <button
                onClick={handleShowMore}
                className="my-1 text-xs text-blue-500"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
        <div className="">
          <label
            htmlFor="dob"
            className="text-sm p-2 flex flex-col gap-3 text-gray-300"
          >
            Date of Birth
          </label>
          <input
            onChange={(e) => setDob(e.target.value)}
            className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
            placeholder="Email"
            required
            type="date"
            id="dob"
            value={dob}
          />
        </div>

        <button
          type="submit"
          onClick={() => router.push("/sign-in")}
          className="py-[15px] mb-20 font-semibold text-lg px-8 rounded-full w-full bg-[#001BFF]"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default JustFewSteps;
