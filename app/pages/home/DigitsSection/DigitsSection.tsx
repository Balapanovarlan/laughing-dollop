import React from 'react'

const DigitsSection = () => {
  return (
    <section className='flex flex-col justify-center xs:items-center gap-17.25'>
        <h1 className='uppercase pl-6 text-3xl xl:text-[40px] xxxl:text-5xl'>Мы в <span className='text-main-green'>цифрах</span></h1>
        <div className='flex w-full '>
            <div className='grid grid-cols-1  bg-main-green pt-12.5 pb-25 w-1/2 '>
                {[
                { number: '24', text: 'года на рынке' },
                { number: '10', text: 'лет на рынке ирригации' },
                { number: '20', text: 'лет как национальный дилер John Deere' },
                { number: '14', text: 'складов запчастей на сумму более $16 млн' },
                { number: '250', text: 'служебных автомобилей' },
                { number: '35%', text: 'доля рынка в Premium сегменте' },
            ].map((item, index) => (
                <div key={index} className='text-white flex flex-col justify-center items-center border-b-1 border-digits-border/50 py-12.5'>
                <p className='text-5xl xs:text-6xl xm:text-[84px] xxxl:text-8xl font-bold mb-2'>{item.number}</p>
                <p className='text-xs xs:text-[14px] xm:text-[16px] xxl:text-lg opacity-80'>.{item.text}</p>
                </div>
            ))}
            </div>
            <div className='grid grid-cols-1 grid- bg-secondary-green pt-12.5 pb-25 w-1/2 '>
                {[
                { number: '>12K', text: 'единиц техники' },
                { number: '>200', text: 'человек работают в Aftersales' },
                { number: '470', text: 'сотрудников во всех регионах' },
                { number: '14', text: 'представительств в Казахстане и 1 в Кыргызстане' },
                { number: '$65', text: 'млн прямые инвестиции в Казахстан' },
                { number: '35%', text: 'доля рынка в Premium сегменте' },
                ].map((item, index) => (
                    <div key={index} className='text-white flex flex-col justify-center items-center border-b-1 border-digits-border/30 py-12.5'>
                    <p className=' text-5xl xs:text-6xl xm:text-[84px] xxxl:text-8xl font-bold mb-2'>{item.number}</p>
                    <p className='text-xs xs:text-[14px] xm:text-[16px] xxl:text-lg opacity-80'>.{item.text}</p>
                    </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default DigitsSection