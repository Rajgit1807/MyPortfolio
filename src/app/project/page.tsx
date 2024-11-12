import Footer from '@/components/Footer/Footer'
import React from 'react'
import { ProjectData } from '@/components/Projects/ProjectData'
import Project2 from '@/components/Projects/Project2'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center px-5 pt-6 sm:px-10 sm:pt-8 lg:px-16 lg:pt-10'>
  <div className='py-5 md:py-8 flex flex-col justify-center items-center '>
    <p className='text-white text-[50px] md:text-[62px] font-semibold tracking-wider'>Projects</p>
    <div className="w-full md:px-4 lg:px-16 mt-16 sm:mt-24 max-sm:gap-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {ProjectData.map((item,index)=>(
        <Project2 key ={index} image={item.image} title={item.title} content={item.content} link={item.link}/>
        ))}
      </div>
  </div>
  <Footer nomodal={true}/>
    </div>
  )
}

export default page