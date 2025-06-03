import Pagination from '@/app/components/Pagination/Pagination'
import NewsCardListSection from '@/app/pages/news/NewsCardListSection/NewsCardListSection'
import NewsHeroSection from '@/app/pages/news/NewsHeroSection/NewsHeroSection'
import React from 'react'

const index = () => {
  return (
    <div className='flex flex-col items-center pb-20 gap-4 xm:gap-8 '>
      <NewsHeroSection/>
      <NewsCardListSection/>
      <Pagination currentPage={1} totalPages={5}/>
    </div>
  )
}

export default index