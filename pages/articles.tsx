import React from 'react'
import Image from 'next/image'
import medium1 from '../public/medium1.png'
import { supabase } from './../lib/supabaseClient';



let articles=[]
const Article = ({articles}) => {
//   console.log(articles,"articles")
  return(<h1>Demo</h1>)
  return (
    <>
    {articles.map((article)=>(
      <div className="p-6 w-1/2 bg-gray-200 rounded-xl shadow-lg flex justify-between space-x-4">
      <div>
          <div className='flex gap-1'>
         <div> <Image width="30" height="30" className='rounded-full' src={medium1}></Image></div>
              <h3 className='text-gray-800 text-sm'>Name</h3>
          </div>
          <div>
              <p className='text-2xl'>Inclusive Design for the 2023 Lunar New Year</p>
              <p className='text-base'>Hopping and pouncing into the new year with two furry zodiacs</p>
          </div>
          <div className='flex justify-between items-center'>
             <div className='flex gap-4 items-center'>
             <p className='text-blue-500 text-sm'>Dec 25, 2022</p>
              <p className='text-green-500 text-sm'>7 min read</p>
              <div className='bg-red-200 px-2 py-1 rounded-full'><p className='text-green-500 text-sm'>funny</p></div>
             </div>
              <div className='text-red-500 text-sm'>bookmark</div>
          </div>
      </div>
      <div><Image width={200} height={300} src={medium1} ></Image></div>
  </div>
  ))}
   </>
  )
}

export async function getServerSideProps() {
  let { data } = await supabase.from('articles').select()
  console.log(data,"article")
  return {
    props: {
     articles: data,
    },
  }
}

export default Article





  

