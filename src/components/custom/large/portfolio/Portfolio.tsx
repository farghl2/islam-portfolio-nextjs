import React from 'react'
import CustomButton from '../../atoms/CustomButton/customButton'
import { Minus } from 'lucide-react';
import ProjectCard from '../../atoms/projectCard/ProjectCard';

const Portfolio = () => {
  return (
    <section className='my-4   sm:my-12 mx-auto w-11/12'>
      <div className='flex flex-col sm:flex-row gap-7 sm justify-between items-center'>
        <div>
          <h3 className='flex justify-center sm:justify-start items-center gap-1 text-xl sm:text-3xl font-bold'> <Minus className='text-xl text-secondary mr-3'/>MY  Portfolio </h3>
          <p className='text-3xl sm:text-4xl mt-1'>My Latest <span className='text-secondary'>
            
            Projects
            </span> 
            </p>
        </div>
        <CustomButton title='View All Projects' styles='lg:mr-[10rem]'/>
      </div>
        <div className='mt-5'>
          <ProjectCard />
        </div>
          
    </section>
  )
}

export default Portfolio   