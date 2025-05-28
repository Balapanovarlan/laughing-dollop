import { Equal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Logo from '@/public/logo.svg'

const Header = () => {
  return (
    <header className='flex justify-between'>
        <Equal></Equal>
        <Image src={Logo} width={100} height={100} alt='Logo'></Image>
        <button>RU</button>
    </header>
  )
}

export default Header