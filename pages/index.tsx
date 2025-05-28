import { useMainCompany } from "@/app/hooks/useMainCompany";

// interface Company{
//   description : string;
//   image: string;
//   title: string;
// }

export default function Home() {
  
  const {data: mainInfo, isLoading, isError} = useMainCompany();
  
  console.log(mainInfo);
  

  if (isLoading) {
    return <span>Loading</span>
  }

  if (isError){
    return <span>Error!</span>
  }

  return (
   <div className="flex p-4">
    <div className="flex justify-center items-center py-2">
      <div className="flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">{mainInfo.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mainInfo.description }} />
      </div>
      <img src={mainInfo.image} alt="Фото компании" className="mb-4" />
    </div>
</div>
  );
}
