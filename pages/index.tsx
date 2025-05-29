import { useDigitsCompany, useMainCompany, useSolutionCompany } from "@/app/hooks/useAboutCompany";
import AboutUsSection from "@/app/pages/home/AboutUsSection/AboutUsSection";
import DigitsSection from "@/app/pages/home/DigitsSection/DigitsSection";
import HomePage from "@/app/pages/home/HomePage";
import UniqueSolutionSection from "@/app/pages/home/UniqueSolutionSection/UniqueSolutionSection";

export default function Home() {
  
  const {data: mainInfo, isLoading: isMainLoading, isError: isMainError} = useMainCompany();
  const {data: digitsInfo, isLoading: isDigitsLoading, isError: isDigitsError} = useDigitsCompany();
  const {data: solutionsInfo, isLoading: isSolutionsLoading, isError: isSolutionsError} = useSolutionCompany();
  
  if (isMainLoading||isDigitsLoading) {
    return <span>Loading</span>
  }

  if (isMainError||isDigitsError){
    return <span>Error!</span>
  }

  // console.log(digitsInfo);
  // console.log(solutionsInfo);
  
  return (
   <section>
        {/* <AboutUsSection mainInfo={mainInfo}/>
        <UniqueSolutionSection/>
        <DigitsSection/> */}
        <HomePage mainInfo={mainInfo}/>
  </section>
  );
}
