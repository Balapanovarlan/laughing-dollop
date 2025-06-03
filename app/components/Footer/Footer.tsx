import Image from 'next/image'
import React from 'react'
import instaIcon from '@/public/icons/instagram.svg'
import facebookIcon from '@/public/icons/facebook.svg'
import youtubeIcon from '@/public/icons/youtube.svg'
import { Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = ({isContactPage}:{isContactPage?:boolean}) => {
  return (
    <section className='pl-6 pr-9 z-50 '>
      <div className='flex justify-between items-center pt-6.25 pb-6 border-t border-text-gray/10'>
        <span>© Eurasia Group 2022</span>
        <div className={`flex gap-6  ${isContactPage?'text-white':''}`}>
          <a href="www.instagram.com" className='p-2 rounded-full border border-white hover:bg-white/40 '>
            <Instagram width={20} height={20}/>
          </a>
          <a href="www.facebook.com" className='p-2 rounded-full border border-white hover:bg-white/40'>
            <Facebook width={20} height={20}/>
          </a>
          <a href="https://youtube.com" className='p-2 rounded-full border border-white hover:bg-white/40'>
            <Youtube width={20} height={20}/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer