
import React from 'react';
import ArticleList from '../components/ArticleList';
import Trending from '../components/Trending';
import { supabase } from './../lib/supabaseClient';

 const home = ({articles,persons}) => {
  // console.log(persons,'persons')
  // console.log(articles,'articles')
  return (
    <>
      <div className=' px-20 py-12 bg-yellow-500'>
        <h1 className='text-8xl font-bold'>Stay curious.</h1>
        <p className='text-lg pt-2 '>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className='rounded-full bg-black text-white p-1 w-40 mt-10'>
          Start Reading
        </button>
      </div>
      <div className='px-20 pt-10'>
        <p className='text-lg font-semibold text-left'> Trending on Medium</p>
      </div>
      <div className='px-20 '>
        {/* <Trending /> */}
        <ArticleList articles={articles}/>
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
  }
}

export default home;
