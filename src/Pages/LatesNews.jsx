import React from 'react'
import NewCard from '../Compunents/NewCard'
import '../PagesStyle/LatestNews.css'

const LatesNews = () => {
  return (
    <>
        <div className='w-[100%] h-auto'>
            <div>
                <h2 className='small__heading'>Latest News & Blogs</h2>
                <h1 className='main__header'>Read Our Every Single<br/> Articles And Blogs </h1>
            </div>
            <div className='py-5'>
                <NewCard />
            </div>
        </div>
    </>
   

  )
}

export default LatesNews