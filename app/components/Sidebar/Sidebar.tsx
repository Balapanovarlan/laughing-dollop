import { SidebarProps } from '@/app/types/types'
import { ArrowUpRight, X } from 'lucide-react'
import React from 'react'

const Sidebar = ({isOpen, setIsOpen}: SidebarProps) => {
  return (
    <>
        {isOpen && (
            <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
            />
        )}

        <div
        className={`fixed top-0 left-0 h-screen w-105 bg-white text-text-gray/87 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`} >
            <div className='relative text-5 text-text-gray/87 uppercase font-medium'>
                <button onClick={() => setIsOpen(false)} className='absolute top-5 right-5'>
                    <X/>
                </button>
            
                <div className='flex flex-col items-center gap-13.5'>
                    <nav className="flex flex-col items-center justify-center  pt-40.25">
                        <a href="/" className='flex py-8 px-34.75 border-b-1 border-t-1 border-text-gray/10'>O компании</a>
                        <a href="/our-mission" className='py-8 px-34.75 border-b-1  border-text-gray/10'>Наша миссия</a>
                        <a href="/news" className='py-8 px-34.75 border-b-1  border-text-gray/10'>Новости</a>
                    </nav>
                    <div className="p-4">
                        <a href='/contact-us' className="flex items-center gap-2 border border-text-gray/20 text-text-gray/85 rounded-[50px] py-4 pl-10 pr-10 hover:bg-text-gray/30">
                            Связаться с нами <ArrowUpRight />
                        </a>
                    </div>
                </div>  
            </div>
        </div>
    
    </>
    
  )
}

export default Sidebar