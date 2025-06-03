import ContactUsForm from "@/app/pages/contact-us/ContactUsForm"
import Image from "next/image"
import truck from '@/public/images/truck.png'


const index = () => {
  return (
        <div className="relative xl:flex xl:justify-center xl:items-center xl:h-[calc(100vh-5rem-5rem)]  xl:w-1/2 ">
            <ContactUsForm/>
        </div>
  )
}

export default index