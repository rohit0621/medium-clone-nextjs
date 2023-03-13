import React from "react";
import DateFunction from "./DateFunction";

const Article = ({ article }) => {
  const formattedDate = DateFunction(article.date);
  return (
    <>
      <div key={article.id} className="p-4 flex justify-between space-x-4">
        <div>
          <div className="flex gap-2">
            <img
              alt="img"
              className="rounded-full w-5 h-5"
              src={article.avatarurl}
            ></img>
            <h3 className="text-black text-sm font-medium">{article.name}</h3>
          </div>
          <div className="mt-2.5">
            <p className="text-2xl font-bold">{article.title}</p>
            <p className="text-base text-gray-500">{article.description}</p>
          </div>
          <div className="flex justify-between items-center mt-2.5">
            <div className="flex direction-row gap-2 items-center">
              <p className="text-gray-500 text-sm">{formattedDate}</p>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <p className="text-gray-500 text-sm">
                {article.readtime} min read
              </p>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="bg-gray-200 px-2 py-1 rounded-full">
                <p className="text-gray-500 text-sm">{article.category}</p>
              </div>
            </div>
            <div className="text-red-500 text-sm">{article.bookmark}</div>
          </div>
        </div>
        <div>
          <img alt="img" width={200} height={300} src={article.imgurl}></img>
        </div>
      </div>
    </>
  );
};

export default Article;
