import React from "react";
import Image from "next/image";
import medium1 from "../public/medium1.png";



let articles=[]
const Article = ({article}) => {
  let date=new Date(article.date)?.toLocaleDateString();
  console.log(new Date(article.date)?.toLocaleDateString(),"article")
  // return(<h1>{article.name}</h1>)
  return (
    <>
      <div key={article.id} className="p-6 w-1/2 bg-gray-200 rounded-xl shadow-lg flex justify-between space-x-4">
       <div>
          <div className='flex gap-1'>
         <div> <img alt="img" width="30" height="30" className='rounded-full' src={article.avatarurl}></img></div>
              <h3 className='text-gray-800 text-sm'>{article.name}</h3>
          </div>
          <div>
              <p className='text-2xl'>{article.title}</p>
              <p className='text-base'>{article.description}</p>
          </div>
          <div className='flex justify-between items-center'>
             <div className='flex gap-4 items-center'>
             <p className='text-blue-500 text-sm'>{date}</p>
              <p className='text-green-500 text-sm'>{article.readtime} min read</p>
              <div className='bg-red-200 px-2 py-1 rounded-full'><p className='text-green-500 text-sm'>{article.category}</p></div>
             </div>
              <div className='text-red-500 text-sm'>{article.bookmark}</div>
          </div>
       </div>
       <div><img alt="img" width={200} height={300} src={article.imgurl} ></img></div>
     </div>
   </>
  )
}

export default Article





  


