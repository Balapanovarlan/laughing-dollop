import { ISolutionsInfo } from '@/app/types/types'
import React from 'react'

const UniqueSolutionSection = ( {solutionInfo} : {solutionInfo : ISolutionsInfo} ) => {
  const solutions = [
    { number: '3,6', text: '.млн га засеваются решениями для посева John Deere' },
    { number: '6,5', text: '.млн га убираются решениями для уборки John Deere' },
    { number: '2,5', text: '.млн га оцифровано решениями John Deere' },
    { number: '16,3', text: '.тысячи га орошается решениями для полива' },
    { number: '>2K', text: '.фермеров зарабатывают с нашими решениями' },
  ]
  
  return (
    <section className='flex flex-col gap-6 pb-20 pl-4 xxl:gap-17.5 xs:items-center xxl:pb-50'>
        <div className='flex flex-col gap-6 items-center justify-center'>
            <h1 className='text-3xl xm:text-[40px] xxl:text-5xl font-normal text-text-gray uppercase'>Уникальные решения</h1>
            <p className='w-full max-w-[522px] text-[14px] xm:text-[16px] xxl:text-center xxl:text-lg'>За эти годы мы создали развитую сеть по обеспечению фермеров уникальными комплексными решениями 
            в сельском хозяйстве Казахстана и Кыргызстана</p>
        </div>
        <div className='flex flex-wrap gap-12.5 xs:justify-center xm:justify-around'>
            {solutions.map((item,index)=>(
                <div key={index} 
                className='flex flex-col gap-1 xm:flex-row xxl:gap-5 py-5'
                > 
                    <span className='text-5xl xm:text-[84px] xxl:text-8xl text-main-green'>{item.number}</span>
                    <p className=' max-w-[285px] w-full text-xs xm:text-lg  xxl:text-lg'>{item.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default UniqueSolutionSection