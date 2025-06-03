import NewsCard from "@/app/components/NewsCard/NewsCard"
import { testData } from "./testData"
import Pagination from "@/app/components/Pagination/Pagination"

const NewsCardListSection = () => {
  
  return (
      <div className="flex flex-wrap gap-6 px-4 justify-center xl:9">
        {testData.map((data)=>(

          <NewsCard testData={data}/>      

        ))}
      </div>
  )
}

export default NewsCardListSection