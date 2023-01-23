import React from 'react'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'

const home = () => {
  return (
    <div className="text-3xl font-bold">
      <Head>
        <title>Medium</title>
      </Head>
      <h1 className='text-2xl'>Home</h1>
      <ArticleList/>
    </div>
  )
}

export default home