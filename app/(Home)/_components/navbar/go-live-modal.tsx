// components/Modal.js
import { Check, Plus, X } from "lucide-react";
import { useState } from "react";

export const GoLiveModalBox = ({ showModal, setShowModal }: any) => {
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
  const [showAll, setShowAll] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);

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
    <>
      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0  opacity-50 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
          <div
            className={` rounded-lg border border-[#364BFF] bg-[#11151e] overflow-hidden lg:w-7/12 md:w-9/12 sm:10/12 w-full z-50`}
          >
            <div className="sm:px-16 px-4 border border-red-200 max-h-[70vh] overflow-y-auto overflow-x-hidden z-20">
              <div className="flex items-center justify-center p-5  relative">
                <h3 className="text-2xl text-center font-semibold">Go Live</h3>
                <button
                  //   className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className=" h-6 w-6 text-2xl block outline-none focus:outline-none absolute right-2 top-5">
                    <X size={24} />
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative mb-6 flex flex-col gap-2">
                <label htmlFor="" className="font-medium">
                  What event are you commenting on:
                </label>
                <input
                  type="text"
                  className="px-5 py-3 rounded-full border border-gray-600 outline-none text-sm w-full"
                  placeholder="Search... "
                />
              </div>
              <div className="">
                <div className="flex flex-wrap gap-3 mb-10">
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
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
