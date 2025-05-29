import React from 'react'

const UniqueSolutionSection = () => {
  const solutions = [
    { number: '3,6', text: '.млн га засеваются решениями для посева John Deere' },
    { number: '6,5', text: '.млн га убираются решениями для уборки John Deere' },
    { number: '2,5', text: '.млн га оцифровано решениями John Deere' },
    { number: '16,3', text: '.тысячи га орошается решениями для полива' },
    { number: '>2K', text: '.фермеров зарабатывают с нашими решениями' },
  ]
  
  return (
    <section className='flex flex-col gap-17.5 items-center pb-50'>
        <div className='flex flex-col gap-6 items-center justify-center'>
            <h1 className='text-5xl font-normal text-text-gray uppercase'>Уникальные решения</h1>
            <p className='w-full max-w-[522px] text-center text-[18px]'>За эти годы мы создали развитую сеть по обеспечению фермеров уникальными комплексными решениями 
            в сельском хозяйстве Казахстана и Кыргызстана</p>
        </div>
        <div className='flex flex-wrap justify-center gap-12.5 '>
            {solutions.map((item,index)=>(
                <div key={index} 
                className='flex justify-center items-center gap-5 py-5'
                > 
                    <span className='text-8xl text-main-green'>{item.number}</span>
                    <p className='text-[18px] max-w-[285px] w-full'>{item.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default UniqueSolutionSection