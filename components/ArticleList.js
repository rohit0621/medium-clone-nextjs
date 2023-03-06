import React from 'react'
import Article from './Article'

const ArticleList = ({articles}) => {
  return (
    <div className='flex flex-col gap-4'>
      {articles.map((article)=>(
        <Article key={article.id} article={article} />))}
        {/* <articles key={article.id} article={article} />))} */}
    </div>
  )
}

export default ArticleList