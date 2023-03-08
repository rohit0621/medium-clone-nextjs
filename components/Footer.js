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

export default function Footer() {
  return (
    <>
      <div className=" grid grid-rows-2 grid-flow-col gap-2 mt-10">
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
    </>
  );
}
