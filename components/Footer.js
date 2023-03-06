import React from "react";

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

export default function Footer() {
  return (
    <>
      <div className=" grid grid-rows-2 grid-flow-col gap-2 mt-10">
        {list.map((item, index) => {
          return (
            <div key={index} className="text-gray-500 text-sm">
              {item.text}
            </div>
          );
        })}
      </div>
    </>
  );
}
