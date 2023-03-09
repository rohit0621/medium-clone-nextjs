import React from "react";

const data = [
  {
    number: "01",
    name: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "02",
    name: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "03",
    name: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "04",
    name: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "05",
    name: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },

  {
    number: "06",
    name: "Tom Cooper",
    topic: "Ukraine War, 17 January 2023: Klishchivka",
    date: "Jan 17",
    time: "5 min",
  },
];

const Trending = (props) => {
  return (
    <>
     <div className="px-28 pt-10 columns-2  ">
        <p className="text-lg font-semibold text-left"> Trending on Medium</p>
      </div>
    <div className="grid grid-rows-2 grid-flow-col gap-3 px-28 pt-5">
      {data.map((item, index) => {
        return (
            <div key={index} className="flex direction-row gap-4 mb-8" >
              <div className="text-gray-300 text-3xl">{item.number}</div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <div className="flex items-center" >
                  <img alt="img" className='rounded-full h-5 w-5' src='https://miro.medium.com/fit/c/400/268/1*Q61lOFBFU65hoNjUCL81wA.jpeg'></img>
                  </div>
                  <div className="text-black">{item.name}</div>
                </div>
                <div className="text-black font-bold">{item.topic}</div>
                <div className="flex direction-row gap-2 items-center">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <p className="text-sm text-gray-500">{item.time} read</p>
                </div>
              </div>
            </div>
        );
      })}
    </div>
    <div className="w-full h-px bg-gray-200 mt-4"></div>
    </>
  );
};

export default Trending;

{
  /* <Image width="30" height="30" className="rounded-full" src={medium1} alt="" />; */
}
