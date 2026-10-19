import SectionHeader from '@/components/custom/atoms/sectionHeader/SectionHeader'
import React from 'react'
import ProjectCard from './projectCard/ProjectCard'
import { projectsData } from '@/lib/data'

const Projects = () => {
  return (
  <section className='my-4 sm:my-12 mx-auto w-[95%] sm:w-[90%] max-w-7xl px-4 sm:px-6 lg:px-8'>
        
          
        <SectionHeader title='MY  Portfolio'>
        My Latest <span className='text-secondary'>
              
              Projects
              </span> 
        </SectionHeader>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto'>
        {projectsData.map((project, index)=><ProjectCard 
          key={project.link}
          project={project}
          index={index}
          />)}
          
        </div>
        </section >
  )
}

export default Projects
