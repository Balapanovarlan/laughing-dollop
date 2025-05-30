import { LayoutProps } from '@/app/types/types'
import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({children}: LayoutProps ) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='flex-col items-center justify-center gap-25 overflow-hidden'>
        <Header setIsOpen = {setIsOpen}/>
        <Sidebar isOpen = {isOpen} setIsOpen = {setIsOpen}/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout