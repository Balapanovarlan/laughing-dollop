import { Heart, Layers2, Stars } from 'lucide-react'
import React from 'react'
import starsIcon from '@/public/icons/double_stars.svg';
import stonksIcon from '@/public/icons/stonks.svg'
import lampIcon from '@/public/icons/lamp_idea.svg'
import peopleIcon from '@/public/icons/people_heart.svg'
import flowerIcon from '@/public/icons/flower.svg'
import Image from 'next/image';

const ValuesSection = () => {
 
  return (
    <section>
        <div className='flex w-full pl-4 text-left pb-6 '>
            <div className='w-full min-w-[224px] flex flex-col justify-center gap-4 xs:items-center'>
                <h2 className='text-3xl text-main-green uppercase xs:text-10'>Ценности</h2>
                <p className='text-text-gray xs:text-xl'>которые помогают выполнять нашу миссию</p>
            </div>
        </div>
        <div className='w-full flex justify-center text-white'>
          <div className='w-1/2 bg-main-green pt-5 xs:pt-11 xl:py-20'>
              <div className='flex flex-col gap-2.5 border-b-2 px-4 pt-4 pb-10 border-background/20 xs:px-9'>
                <Image src={starsIcon} alt='stars icon' className='xl:w-8'/>
                <h2 className='uppercase xss:text-xl xs:text-8 '>Голод к успеху</h2>
                <p className='text-xs text-white/87 xl:text-xl'>Мы всегда амбициозны, страстны и энергичны в наших мечтах и достижениях</p>
              </div>
              <div className='flex flex-col justify-center gap-2.5 border-b-2 py-5 px-4  border-background/20 xs:px-9 xl:py-12.5'>
                <Image src={peopleIcon} alt='people icon' className='xl:w-8'/>
                <h2 className='uppercase xss:text-xl xs:text-8 '>команда</h2>
                <p className='text-xs text-white/87 xl:text-xl'>Мы высокомотивированные на успех профессионалы, эксперты и консультанты, всегда готовы прийти на помощь и оказать поддержку</p>
              </div>
              <div className='flex flex-col justify-center gap-2.5 border-b-2 px-4 py-5 border-background/20 xs:px-9 xl:py-12.5'>
                <Image src={lampIcon} alt='Lamp icon' className='xl:w-8'/>
                <h2 className='uppercase xss:text-xl xs:text-8 '>Осознанность</h2>
                <p className='text-xs text-white/87 xl:text-xl'>Мы четко знаем, чего мы хотим в жизни, зачем пришли в нашу компанию и что необходимо для наших любимых клиентов и партнеров</p>
              </div>
              <div className='flex flex-col justify-center gap-2.5 px-4 pt-5 pb-4.5 xs:px-9 xl:py-12.5'>
                <Layers2/>
                <h2 className='uppercase xss:text-xl xs:text-8 '>Синергия</h2>
                <p className='text-xs text-white/87 xl:text-xl'>Наши жизненные цели и ценности совпадают с целями и ценностями нашей компании</p>
              </div>
          </div>
          
          <div className='w-1/2 bg-secondary-green pt-5 xs:pt-11 xl:py-20'>
            <div className='flex flex-col justify-center gap-2.5 border-b-2 pt-4 pb-5 px-4  border-background/20 xs:px-9 xl:pb-12.5'>
              <Heart/>
              <h2 className='uppercase xss:text-xl'>любовь</h2>
              <p className='text-xs text-white/87 xl:text-xl'>Любовь - это фундамент, на котором мы строим наш бизнес, отношения в команде, с клиентами и партнёрами</p>
            </div>
            <div className='flex flex-col justify-center gap-2.5 border-b-2 py-5 px-4  border-background/20 xs:px-9 xl:py-12.5'>
              <Image src={stonksIcon} alt='Graph' className='xl:w-8'/>
              <h2 className='uppercase xss:text-xl'>инновации</h2>
              <p className='text-xs text-white/87 xl:text-xl'>Инноавции - неотъемлемая часть нашей жизни, а безграничность в росте и развитии всего, что нас окружает, делает нас уникальными</p>
            </div>
            <div className='flex flex-col justify-center gap-2.5 py-5 px-4 xs:px-9 xl:py-12.5'>
              <Image src={flowerIcon} alt='Flower' className='xl:w-8'/>
              <h2 className='uppercase xss:text-xl xs:text-8 '>благосостояния</h2>
              <p className='text-xs text-white/87 xl:text-xl'>Мы постоянно работаем над тем, чтобы увеличить прибыль наших клиентов партнеров, сотрудников и акционеров. Партнерство с нами - это взаимовыгодное сотрудничество, которое приводит к росту благосостояния всех сторон</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ValuesSection