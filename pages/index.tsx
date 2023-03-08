import React from "react";
import ArticleList from "../components/ArticleList";
import Trending from "../components/Trending";
import { supabase } from "./../lib/supabaseClient";
import Footer from "../components/Footer";
import Link from 'next/link'

const list = [
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


 const home = ({articles,persons}) => {
  // console.log(persons,'persons')
  // console.log(articles,'articles')
  return (
    <>
      <div className=" px-20 py-12 bg-yellow-500">
        <h1 className="text-8xl font-bold">Stay curious.</h1>
        <p className="text-lg pt-2 ">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="rounded-full bg-black text-white p-1 w-40 mt-10">
         <Link href='/login' className='text-md'>
           Start Reading
         </Link>
        </button>
      </div>
      <div className="px-20 pt-10 columns-2  ">
        <p className="text-lg font-semibold text-left"> Trending on Medium</p>
      </div>
      <Trending />
      <div className="grid grid-cols-2 gap-16 px-20 py-20 ">
        <div>
          <ArticleList articles={articles} />
        </div>
        <div>
          <h2 className="text-center font-medium text-sm ">
            Discover more of what matters to you
          </h2>
          <div className="grid grid-cols-3 gap-2 mt-5">
            {list.map((item, index) => {
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  let { data } = await supabase.from('articles').select()
  let  persons  =  (await supabase.from('persons').select()).data
  // console.log(data,"index")
  return {
    props: {
     articles: data,
     persons: persons,
    },
  };
}

export default home;

{
  /* <Trending /> */
}
