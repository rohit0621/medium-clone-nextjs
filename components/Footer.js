import React from "react";
import Link from 'next/link'

const list = [
  {
    text: "Help",
  },
  {
    text: "Stats",
  },
  {
    text: "Writers",
  },
  {
    text: "Blog",
  },
  {
    text: "Careers",
  },
  {
    text: "Privacy",
  },
  {
    text: "Terms",
  },
  {
    text: "About",
  },
];
const categories = [
  {
    text: "Programing",
  },
  {
    text: "Data Science",
  },
  {
    text: "Technology",
  },
  {
    text: "Improvement",
  },
  {
    text: "Writing",
  },
  {
    text: "Politics",
  },
];

export default function Footer() {
  // console.log(headerHeight)
  return (
    <div style={{position:"sticky",top:96}} className="pt-6">
     <h2 className="font-medium text-md ">
            Discover more of what matters to you
          </h2>
     <div className="grid grid-cols-3 gap-2 mt-5">
            {categories.map((item, index) => {
              // console.log(item, "");
              return (
                <button
                  className="bg-transparent text-gray-400 font-semibold hover:text-gray-500 py-1 px-4 border border-gray-300 hover:border-gray-300 "
                  key={index}
                >
                  {item.text}
                </button>
              );
            })}
          </div>
          <div className="w-full bg-gray-200 h-px my-8"></div>
      <div className=" grid grid-rows-2 grid-flow-col gap-2 ">
        {list.map((item, index) => {
          return (
            <div key={index} className="text-gray-500 text-sm">
              <Link href={`${item.text.toLowerCase()}`} className='text-md'>
               {item.text}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
