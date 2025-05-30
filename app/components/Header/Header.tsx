import { Equal } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import { HeaderProps } from '@/app/types/types'

const Header = ({setIsOpen}: HeaderProps) => {

  return (
    <header className='pl-6 pr-9 sticky top-0 bg-background'>
        <div className='flex justify-between py-6 border-b border-text-gray/10'>
          <button onClick={()=>setIsOpen(true)}><Equal/></button>
          <Image src={Logo} alt='Logo' className='w-full max-w-[118px] xs:max-w-[183px]'></Image>
          <button className='p-1.5 bg-text-gray/10 rounded-full text-text-gray/74 font-bold '>RU</button>
        </div>
    </header>
  )
}

export default Header