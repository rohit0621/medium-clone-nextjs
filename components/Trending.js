import React from "react";

const data = [
  {
    number: "01",
    by: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "02",
    by: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "03",
    by: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "04",
    by: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "05",
    by: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "06",
    by: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },
];

const Trending = (props) => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-3 px-20 pt-5">
      {data.map((item, index) => {
        return (
          <>
            <div className="grid grid-rows-2 grid-flow-col" key={index}>
              <div className="text-black">{item.number}</div>
              <div className="text-black">{item.by}</div>
            </div>
            <div className="text-black">{item.topic}</div>
            <div className="columns-2">
              <p className="text-sm text-gray-400">{item.date}</p>
              <p className="text-sm text-gray-400">{item.time} read</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Trending;

{
  /* <Image width="30" height="30" className="rounded-full" src={medium1} alt="" />; */
}
