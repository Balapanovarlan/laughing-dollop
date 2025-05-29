import { MainInfo } from "@/app/types/types"
import { ArrowUpRight } from "lucide-react"

const AboutUsSection = ({mainInfo} :{ mainInfo : MainInfo}) => {

  const [firstWordTitle, secondWordTitle] = mainInfo.title.split(' ');
  
  return (
    <section className="flex justify-center items-center gap-65 pl-40">
      <div className="max-w-[539px] w-full  flex flex-col gap-8 justify-center items-start ">
        <div className="flex flex-col gap-4">
          <h1 className="text-[60px] font-bold uppercase font-sans">
            <span className="text-main-green">{firstWordTitle}{' '}</span> 
            <span>{secondWordTitle}</span>
          </h1>
          <div className="flex flex-col text-[18px] gap-4 content-styles text-text-gray/87" dangerouslySetInnerHTML={{ __html: mainInfo.description }} />
        </div>
        <button className="flex py-4.5 pl-6 pr-5.25 border-2 text-main-green border-main-green rounded-[50px] hover:bg-main-green/20">
          Связаться c нами <ArrowUpRight/>
        </button>
      </div>
      <img src={mainInfo.image} alt="Фото компании" className="rounded-l-3xl" />
    </section>
  )
}

export default AboutUsSection