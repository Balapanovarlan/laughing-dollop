import Image from 'next/image'
import React from 'react'
import instaIcon from '@/public/icons/instagram.svg'
import facebookIcon from '@/public/icons/facebook.svg'
import youtubeIcon from '@/public/icons/youtube.svg'

const Footer = () => {
  return (
    <section className='pl-6 pr-9 bg-background'>
      <div className='flex justify-between items-center pt-6.25 pb-6 border-t border-text-gray/10'>
        <span>© Eurasia Group 2022</span>
        <div className='flex gap-4'>
          <a href="www.instagram.com" className='p-2 rounded-full'>
            <Image src={instaIcon} height={14} width={14} alt='Instagram Link'></Image>
          </a>
          <a href="www.facebook.com" className='p-2 rounded-full'>
            <Image src={facebookIcon} height={14} width={14} alt='Facebook Link'></Image>
          </a>
          <a href="https://youtube.com" className='p-2 rounded-full'>
            <Image src={youtubeIcon} height={14} width={14} alt='Youtube Link'></Image>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer