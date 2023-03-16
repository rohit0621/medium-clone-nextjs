import React from "react";
import Head from "next/head";
import WriteFooter from "../components/WriteFooter";
import Question from "../components/Questions";

const list = [
  {
    image: "",
    name: "Barack Obama",
    work: "Dad, husband, President, citizen",
  },
  {
    image: "",
    name: "Micheel Chabon",
    work: "Novelist, screenwriter, and columnist",
  },
  {
    image: "",
    name: "Camille Fournier",
    work: "Engineer, CTO, and author",
  },
  {
    image: "",
    name: "Carvell Wallace",
    work: "New York Times Bestselling author and podcaster",
  },
  {
    image: "",
    name: "Devon Price",
    work: "Social psychologist and author",
  },
  {
    image: "",
    name: "Susan Orlean",
    work: "Writer for The New Yorker, author",
  },
];
const write = () => {
  return (
    <div className="text-3xl font-bold">
      <Head>
        <title>Create a blog and start writing</title>
      </Head>
      <div className=" bg-write-page w-full flex px-6">
        <div className="container px-10 py-16">
          <p className="text-sm text-white">START A BLOG FOR FREE</p>
          <p className="text-4xl font-semibold text-left font-medium pt-4">
            Publish, grow, and earn, all in one place.
          </p>
          <p className="text-md font-medium text-left font-thin pt-4">
            If you have a story to tell, knowledge to share, or a perspective to
            offer — welcome home. Sign up for free so your writing can thrive in
            a network supported by millions of readers — not ads.
          </p>
          <button className="rounded-full bg-white text-black text-sm font-medium py-2 px-6 mt-10 ">
            Start Writing
          </button>
        </div>
      </div>
      <div className="bg-black grid grid-cols-2 gap-4 px-6 py-24 flex space-x-10 px-10 justify-between">
        <p className=" text-white font-4xl font-bold ">
          Join a network of curious minds.
        </p>
        <div className="divide-y ">
          {list.map((item, index) => {
            return (
              <>
                <div className="" key={index}>
                  {/* <image>{item.image}</image> */}
                  <p className="text-white text-md">{item.name}</p>
                  <p className="text-white text-sm">{item.work}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Question />
      <WriteFooter />
    </div>
  );
};

export default write;
