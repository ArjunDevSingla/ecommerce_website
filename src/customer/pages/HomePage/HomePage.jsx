import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from "../../../data/mens_kurta"
import TestingCarousel from '../../components/HomeSectionCarousel/TestingCarousel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            {/* <TestingCarousel/> */}
        </div>
    </div>
  )
}

export default HomePage