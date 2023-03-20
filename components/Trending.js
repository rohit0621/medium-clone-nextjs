import React from "react";
import DateFunction from "./DateFunction";
import { FiTrendingUp } from "react-icons/fi";

const Trending = ({ articles }) => {
  let trendingArr = articles.sort(
    (a, b) => parseFloat(b.hits) - parseFloat(a.hits)
  );
  return (
    <>
      <div className="px-28 pt-10 flex gap-4 items-center">
        <div className="border border-black rounded-full">
          <FiTrendingUp className="m-0.5 h-4 w-4" />
        </div>
        <p className="text-lg font-semibold text-left"> Trending on Medium</p>
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-3 px-28 pt-5">
        {trendingArr.map((item, index) => {
          const formattedDate = DateFunction(item.date);
          let rank = "0" + (index + 1);
          if (index < 6) {
            return (
              <div key={index} className="flex flex-row gap-4 mb-8">
                <div className="text-gray-300 text-3xl">{rank}</div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2">
                    <div className="flex items-center pt-1.5">
                      <img
                        alt="img"
                        className="rounded-full h-5 w-5"
                        src={item.imgurl}
                      ></img>
                    </div>
                    <div className="text-black">{item.name}</div>
                  </div>
                  <div className="text-black font-bold">{item.title}</div>
                  <div className="flex direction-row gap-2 items-center">
                    <p className="text-sm text-gray-500">{formattedDate}</p>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <p className="text-sm text-gray-500">
                      {item.readtime} min read
                    </p>
                  </div>
                </div>
              </div>
            );
          } else null;
        })}
      </div>
      <div className="w-full h-px bg-gray-200 mt-4"></div>
    </>
  );
};

export default Trending;
