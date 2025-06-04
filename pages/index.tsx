import { useDigitsCompany, useMainCompany, useSolutionCompany } from "@/app/hooks/useAboutCompany";
import AboutUsSection from "@/app/pages/home/AboutUsSection/AboutUsSection";
import DigitsSection from "@/app/pages/home/DigitsSection/DigitsSection";
import HomePage from "@/app/pages/home/HomePage";
import UniqueSolutionSection from "@/app/pages/home/UniqueSolutionSection/UniqueSolutionSection";
import { AboutCompany, getMain } from "@/app/services/about_company";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default function Home() {
  
  const {locale} = useRouter();
  const language = locale || 'ru';

  const {data: mainInfo, isLoading: isMainLoading, isError: isMainError} = useMainCompany();
  const {data: digitsInfo, isLoading: isDigitsLoading, isError: isDigitsError} = useDigitsCompany();
  const {data: solutionsInfo, isLoading: isSolutionsLoading, isError: isSolutionsError} = useSolutionCompany();
  
  if (isMainLoading||isDigitsLoading || isSolutionsLoading) {
    return <span>Loading</span>
  }

  if (isMainError||isDigitsError || isSolutionsError){
    return <span>Error!</span>
  }

  // console.log(digitsInfo);
  // console.log(solutionsInfo);
  
  return (
    <section className='flex flex-col gap-20 xxxl:gap-37.5 xxxl:pt-25 '>
      <AboutUsSection mainInfo={mainInfo}/>
      <DigitsSection digitsInfo={digitsInfo}/>
      <UniqueSolutionSection solutionInfo={solutionsInfo}/>
    </section>
  );
}

export const getServerSideProps:GetServerSideProps = async (context) =>{
  const language = context.locale || 'ru';

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({queryKey: ['about', language], queryFn:()=> AboutCompany.getMain(language)});
  await queryClient.prefetchQuery({queryKey: ['digits', language], queryFn:()=>AboutCompany.getDigits(language)});
  await queryClient.prefetchQuery({queryKey: ['unique-solution', language], queryFn:() =>  AboutCompany.getUniqueSolutions(language)});

  const dehydratedState = dehydrate(queryClient);

  return {
    props:{
      dehydratedState,
    }
  }
}
