import { IDigitsInfo } from '@/app/types/types'
import React from 'react'

const DigitsSection = ({digitsInfo} : {digitsInfo: IDigitsInfo[]}) => {

    const oddItems =  digitsInfo.filter((digit)=> digit.id % 2 !== 0);
    const evenItems =  digitsInfo.filter((digit)=> digit.id % 2 === 0);
    
return (
    <section className='flex flex-col justify-center xs:items-center gap-17.25'>
        <h1 className='uppercase pl-6 text-3xl xl:text-[40px] xxxl:text-5xl'>Мы в <span className='text-main-green'>цифрах</span></h1>
        <div className='flex w-full '>
            <div className='grid grid-cols-1  bg-main-green py-12.5 w-1/2 '>
                {
                oddItems.map((digit, index) =>
                {
                    const isLast = index === oddItems.length - 1;

                    let containerClasses = 'text-white flex flex-col justify-center items-center py-12.5 ';

                    if (!isLast) {
                        containerClasses += 'border-b-1 border-digits-border/50 '
                    }
                   
                    return(
                    <div key={digit.id} className={containerClasses}>
                        <p className='text-5xl xs:text-6xl xm:text-[84px] xxxl:text-8xl font-bold mb-2'>{digit.title}</p>
                        <p className='text-xs xs:text-[14px] xm:text-[16px] xxl:text-lg opacity-80'>.{digit.subtitle}</p>
                    </div>
                    )
                })}
            </div>
            <div className='grid grid-cols-1 grid- bg-secondary-green py-12.5  w-1/2 '>
                {evenItems.map((digit, index) => 
                {
                    const isLast = index === oddItems.length - 1;

                    let containerClasses = 'text-white flex flex-col justify-center items-center py-12.5 ';

                    if (!isLast) {
                        containerClasses += 'border-b-1 border-digits-border/50 '
                    }

                    return(
                        <div key={digit.id} className = {containerClasses}>
                        <p className=' text-5xl xs:text-6xl xm:text-[84px] xxxl:text-8xl font-bold mb-2'>{digit.title}</p>
                        <p className='text-xs xs:text-[14px] xm:text-[16px] xxl:text-lg opacity-80'>.{digit.subtitle}</p>
                        </div>
                    )
                }
            )}
            </div>
        </div>
    </section>
  )
}

export default DigitsSection