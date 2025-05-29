import React from 'react'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import { MainInfo } from "@/app/types/types"
import DigitsSection from './DigitsSection/DigitsSection'
import UniqueSolutionSection from './UniqueSolutionSection/UniqueSolutionSection'

const HomePage = ({mainInfo} : {mainInfo: MainInfo}) => {
  return (
    <div className='flex flex-col gap-37.5 pt-25 '>
        <AboutUsSection mainInfo={mainInfo}/>
        <DigitsSection/>
        <UniqueSolutionSection/>
    </div>
  )
}

export default HomePage