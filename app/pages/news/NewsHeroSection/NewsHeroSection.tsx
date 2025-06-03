import React from 'react'

const NewsHeroSection = () => {
  return (
    <section className='flex flex-col items-center gap-8 px-4 pt-12'>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-3xl uppercase text-text-gray xs:text-5xl xl:text-16'>что нового</h1>
            <p className='text-black/75 text-center text-[14px] xss:max-w-104 xs:129 xl:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
        </div>
        <div className='flex flex-col items-center gap-2 xss:flex-row  '>
            <button className='text-text-gray text-bold  py-2 px-5 border border-text-gray rounded-[50px]'>Новости партнеров</button>
            <button className=' text-white bg-main-green py-2 px-5 border border-main-green rounded-[50px]'>Новости в сельском хозяйстве</button>
        </div>
    </section>
  )
}

export default NewsHeroSection