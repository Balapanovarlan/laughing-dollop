import { ArrowLeft, Equal } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import { HeaderProps } from '@/app/types/types'

const Header = ({setIsOpen, isContactPage}: HeaderProps&{isContactPage?:boolean}) => {

  return (
    <header className= {`${
      isContactPage ? 'bg-transparent ': 'bg-background text-text-gray'
    } pl-6 pr-9 sticky top-0 z-50`}>
        <div className={`flex justify-between py-6 border-b border-text-gray/10 ${isContactPage ? 'xl:border-b-transparent':''}`}>
          <button onClick={()=>setIsOpen(true)}><Equal/></button>
          <Image src={Logo} alt='Logo' className= {`w-full max-w-[118px] xs:max-w-[183px]
          `}/>
          <div className={`${isContactPage ? 'flex xl:w-1/2 xl:justify-between xl:px-9 ':''}`}>
            <a href='/' className={`hidden border border-white text-white rounded-[50px] hover:bg-white/50 
              transition duration-300 ease-in-out
              ${isContactPage?'xl:flex uppercase py-2.5 px-4  gap-1.5':''}`}><ArrowLeft/> На главную </a>
            <div>
              <button className={`p-1.5 bg-text-gray/10 rounded-full text-text-gray/74 font-bold ${isContactPage?'xl:bg-white/40 ':''} `}>RU</button>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header