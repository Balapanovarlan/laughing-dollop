import { MainInfo } from "@/app/types/types"
import { ArrowUpRight } from "lucide-react"

const AboutUsSection = ({mainInfo} :{ mainInfo : MainInfo}) => {

  const [firstWordTitle, secondWordTitle] = mainInfo.title.split(' ');
  
  return (
    <section className="w-full flex justify-center xs:pt-8">
      <div className="flex flex-col-reverse justify-center items-center gap-4 px-4 w-full xm:flex-row xm:max-w-full xm:px-0 xs:max-w-[700px] xm:justify-between xxxl:gap-65 xxxl:pl-40">
        <div className="max-w-[539px] w-full  flex flex-col gap-8 justify-center items-start xm:pl-9">
          <div className="flex flex-col gap-4">
            <h1 className="hidden text-[40px] xl:text-[64px] font-bold uppercase xm:flex xm:gap-2">
              <span className="text-main-green">{firstWordTitle}</span> 
              <span>{secondWordTitle}</span>
            </h1>
            <div className="flex flex-col text-[14px] gap-4 content-styles text-text-gray/87 xxl:text-lg" dangerouslySetInnerHTML={{ __html: mainInfo.description }} />
          </div>
          <button className="flex justify-center w-full py-4.5 pl-6 pr-5.25 border-2 text-main-green border-main-green rounded-[50px] hover:bg-main-green/20 xm:w-fit">
            Связаться c нами <ArrowUpRight/>
          </button>
        </div>
        <div className="relative flex flex-col items-center w-full xs:max-w-[544px] xm:max-w-[600px] xl:max-w-[700px] xxl:max-w-[800px] xxxl:max-w-[960px]">
          <img src={mainInfo.image} alt="Фото компании" className="rounded-3xl xm:rounded-l-3xl xm:rounded-r-none " />
          <h1 className="text-white text-3xl font-bold uppercase absolute top-[70px] bottom-[98px] xs:bottom-[158px] xm:hidden">
              <span className=" bg-main-green ">{firstWordTitle}</span> 
              {' '}
              <span className="bg-secondary-green">{secondWordTitle}</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection