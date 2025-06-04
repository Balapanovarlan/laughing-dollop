import Image from 'next/image'
import ourMissionImage from '@/public/images/filtered_mission.svg'

import { ArrowUpRight } from 'lucide-react'

const OurMissionSection = () => {
  return (
    <section className='flex justify-center px-4 xl:px-0 overflow-hidden'>
        <div className=' flex flex-col gap-4  w-full max-w-[700px] xl:flex-row-reverse xl:justify-between xl:max-w-full xl:items-center'>
            <div className='relative flex justify-center xl:overflow-hidden'> 
                <Image src={ourMissionImage} alt='pexels' className='w-full min-w-[328px] xss:max-w-[544px] xm:min-w-[700px] xl:h-dvw xl:max-h-120 xl:max-w-175 object-cover rounded-l-3xl xxl:max-h-170 xxl:max-w-240 xxxl:max-w-300'/>
                <h1 className=' absolute top-16 bottom-24.25 uppercase text-3xl text-white xl:hidden'>
                    <span className='bg-main-green px-2'>Наша</span>{' '}
                    <span className='bg-secondary-green px-2'>Миссия</span>
                </h1>
            </div>
            <div className='flex flex-col gap-8 xl:pl-40'>
               <div className='flex flex-col gap-4'>
                    <h1 className='uppercase text-5xl hidden xl:flex xl:gap-2'>
                        <span className='text-main-green'>Наша</span>
                        <span>Миссия</span>
                    </h1>
                    <div className='flex '>
                        <p className='w-full max-w-[513px]'>Мы кормим мир, помогая фермерам внедрять и применять инновационные решения для развития сельского хозяйства и производства продукции наивысшего качества</p>
                    </div>
               </div>
                <a href='/contact-us' className='flex gap-2 w-full justify-center py-4.5 border border-main-green rounded-[50px] uppercase text-main-green xl:max-w-60'>
                    Связаться с нами 
                <ArrowUpRight/> </a>    
            </div>
        </div>

    </section>
  )
}

export default OurMissionSection