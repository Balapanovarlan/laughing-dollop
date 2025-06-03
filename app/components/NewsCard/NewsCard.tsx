import { testData } from '@/app/types/types'
import Image from 'next/image'
import React from 'react'

const NewsCard = ({testData}:{testData: testData}) => {
  return (
    <div key={testData.id}
        className='flex flex-col gap-3 w-full max-w-80 xs:max-w-66 xm:max-w-128.5 xl:max-w-107 xxl:max-w-122 xxxl:max-w-128'
    >
        <Image src={testData.photo} alt='Фото' className='rounded-[8px]'/>
        <div className='flex flex-col gap-1.5 '>
            <h2 className='text-[18px] text-text-gray font-bold xm:text-2xl'>{testData.title}</h2>
            <p className='h-full max-h-[74px] text-text-gray text-[14px] line-clamp-3 xm:text-[16px]'>{testData.text}</p>
            <span className='text-text-gray/85 text-xs'>{testData.date}</span>
        </div>
    </div>
  )
}

export default NewsCard