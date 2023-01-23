import React from 'react'
import Article from './Article'

const ArticleList = () => {
  return (
    <div className='flex flex-col gap-4'>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
    </div>
  )
}

export default ArticleList