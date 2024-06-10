import { Check, Link2, Mic, Plus, Radio, Video, X } from "lucide-react";
import { useState } from "react";

const interestCategoryData = [
  { id: 1, title: "Funny" },
  { id: 2, title: "adult humour" },
  { id: 3, title: "score updates" },
  { id: 4, title: "highlights" },
  { id: 5, title: `live match` },
  { id: 6, title: "group commentray" },
  { id: 7, title: "solo commentray" },
];
export const GoLiveModalBox = ({ showModal, setShowModal }: any) => {
  const [showAll, setShowAll] = useState(false);
  const [liveTypeData, setLiveTypeData] = useState([
    {
      id: 1,
      icon: <Video size={18} />,
      name: "Enable Video",
      isSelected: true,
    },
    { id: 2, icon: <Mic size={18} />, name: "Audio Only", isSelected: false },
    { id: 3, icon: <Link2 size={18} />, name: "By Link", isSelected: false },
  ]);
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

  const handleClickLiveType = (id: any) => {
    const updatedCategories = liveTypeData?.map((category) =>
      category?.id === id
        ? { ...category, isSelected: true }
        : { ...category, isSelected: false }
    );
    setLiveTypeData(updatedCategories);
  };

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
            <div className=" max-h-[70vh] overflow-y-auto overflow-x-hidden z-20">
              <div className="flex items-center justify-center p-5 my-5 relative">
                <h3 className="text-2xl text-center font-semibold">Go Live</h3>
                <button
                  //   className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className=" h-6 w-6 text-2xl block outline-none focus:outline-none absolute right-5 top-5">
                    <X size={24} />
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="sm:px-16 px-4 ">
                <div className="relative mb-6 flex flex-col gap-2">
                  <label htmlFor="" className="font-medium">
                    What event are you commenting on:
                  </label>
                  <input
                    type="text"
                    className="px-5 py-3 rounded-full bg-transparent border border-gray-600 outline-none text-sm w-full"
                    placeholder="Search... "
                  />
                </div>
                <div className="">
                  <div className="pb-3">
                    <span className="font-medium ">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {displayedCategories?.map((category) => {
                      const isSelected = selectedCategories.includes(
                        category.id
                      );
                      return (
                        <button
                          key={category?.id}
                          className={`py-[7px] px-4 text-sm rounded-full flex items-center justify-center gap-1 ${
                            isSelected ? "bg-[#001bff] " : "bg-[#343e52] "
                          }`}
                          onClick={() => toggleCategory(category.id)}
                        >
                          {category?.title}

                          {isSelected ? (
                            <Check size={12} />
                          ) : (
                            <Plus size={12} />
                          )}
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
                {/* Grid System */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  {/* 1st grid */}
                  <div className="">
                    <div className="mb-5">
                      <div className="pb-3">
                        <span className="font-medium">Type:</span>
                      </div>
                      <div className="flex gap-3 flex-wrap">
                        {liveTypeData?.map((ele: any) => (
                          <button
                            key={ele?.id}
                            onClick={() => handleClickLiveType(ele?.id)}
                            type="button"
                            className={` flex items-center text-[13px] rounded gap-1 justify-center font-light px-3 py-4 ${
                              ele?.isSelected ? "bg-[#001BFF]" : "bg-[#222938]"
                            }`}
                          >
                            {ele?.icon}
                            {ele?.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="pb-3">
                        <label
                          className="font-medium"
                          htmlFor="timeOfCommentary"
                        >
                          Time of commentary:
                        </label>
                      </div>
                      <div className="mb-5">
                        <input
                          type="time"
                          name=""
                          id="timeOfCommentary"
                          placeholder="Select Time"
                          className="px-5 py-2 bg-[#343E52] rounded-full border border-gray-600 outline-none text-sm w-full"
                        />
                      </div>

                      <div className=" flex items-center gap-2 my-2">
                        <input
                          type="checkbox"
                          name=""
                          className="h-[17px] w-[17px]"
                          id="showViewersYourTime"
                        />
                        <label
                          htmlFor="showViewersYourTime"
                          className="text-[12px] "
                        >
                          Show viewers your approx time stamp
                        </label>
                      </div>
                      <div className=" flex items-center gap-2 my-2">
                        <input
                          type="checkbox"
                          name=""
                          className="h-[17px] w-[17px]"
                          id="notifyFollowers"
                        />
                        <label
                          htmlFor="notifyFollowers"
                          className="text-[12px] "
                        >
                          Notify followers you are going live
                        </label>
                      </div>
                      <div className=" flex items-center gap-2 my-2">
                        <input
                          type="checkbox"
                          name=""
                          className="h-[17px] w-[17px]"
                          id="rankThisStream"
                        />
                        <label
                          htmlFor="rankThisStream"
                          className="text-[12px] "
                        >
                          Rank this stream as 18+
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* 2nd grid */}
                  <div className="">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="chatMediators">
                        Appoint chat mediators:
                      </label>
                      <input
                        type="text"
                        name=""
                        id="chatMediators"
                        placeholder="Search..."
                        className="px-5 py-3 bg-transparent rounded-full border border-gray-600 outline-none text-sm w-full"
                      />
                      <div className="flex flex-wrap my-2 gap-2">
                        {[0, 1, 2, 3]?.map((mediators) => (
                          <div
                            className="h-8 w-8 rounded-full overflow-hidden"
                            key={mediators++}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg`}
                              alt=""
                              className="h-full w-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <label htmlFor="blockWords">Block words from chat:</label>
                      <input
                        type="text"
                        name=""
                        id="blockWords"
                        placeholder="Type here..."
                        className="px-5 py-3 bg-transparent rounded-full border border-gray-600 outline-none text-sm w-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-[13px]">Retards, Fake, Shit</span>
                        <span className="text-[10px] font-light">
                          Separate words/sentences by comma eg. hate, disgusting
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-center p-6">
                  <button
                    className="flex gap-1 items-center text-xs px-6 py-3 bg-[#001BFF] rounded-full"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Radio size={16} /> Go Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
