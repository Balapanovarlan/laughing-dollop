import OurMissionSection from '@/app/pages/our-mission/OurMissionSection'
import ValuesSection from '@/app/pages/our-mission/ValuesSection'
import React from 'react'

const OurMission = () => {
  return (
    <div className='flex flex-col gap-20.5 pt-8 pb-20 xl:pt-25 xs:gap-30 xl:gap-50'>
      <OurMissionSection/>
      <ValuesSection/>
    </div>
  )
}

export default OurMission