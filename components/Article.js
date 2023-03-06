import React from "react";
import Image from "next/image";
import medium1 from "../public/medium1.png";

let articles = [];
const Article = ({ article }) => {
  // return(<h1>{article.name}</h1>)
  return (
    <>
      <div
        key={article.id}
        className="p-6 w-full bg-gray-200 rounded-xl shadow-lg flex justify-between space-x-4"
      >
        <div>
          <div className="flex gap-1">
            <div>
              <Image
                width="30"
                height="30"
                className="rounded-full"
                src={medium1}
                alt=""
              />
            </div>
            <h3 className="text-gray-800 text-sm">name</h3>
          </div>
          <div>
            <p className="text-2xl">{article.name}</p>
            <p className="text-base">
              Hopping and pouncing into the new year with two furry zodiacs
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <p className="text-blue-500 text-sm">Dec 25, 2022</p>
              <p className="text-green-500 text-sm">7 min read</p>
              <div className="bg-red-200 px-2 py-1 rounded-full">
                <p className="text-green-500 text-sm">funny</p>
              </div>
            </div>
            <div className="text-red-500 text-sm">bookmark</div>
          </div>
        </div>
        <div>
          <Image width={200} height={300} src={medium1} alt="" />
        </div>
      </div>
    </>
  );
};

export default Article;
