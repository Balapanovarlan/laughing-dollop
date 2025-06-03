import { LayoutProps } from '@/app/types/types'
import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import Image from 'next/image'
import truck from '@/public/images/truck.png'

const Layout = ({children, isContactPage}: LayoutProps&{isContactPage?:boolean} ) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='flex-col items-center justify-center gap-25 overflow-hidden '>
        <Header setIsOpen = {setIsOpen} isContactPage = {isContactPage}/>
        <Sidebar isOpen = {isOpen} setIsOpen = {setIsOpen}/>
        <main>{children}</main>
        <Footer isContactPage = {isContactPage}/>
        <Image src={truck} alt='Трактор в поле' className={`hidden ${isContactPage? 'xl:flex h-full w-1/2 fixed top-0 right-0 -z-10': ''}`}/>
    </div>
  )
}

export default Layout