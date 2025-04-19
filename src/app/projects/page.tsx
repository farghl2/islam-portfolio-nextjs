import SectionHeader from '@/components/custom/atoms/sectionHeader/SectionHeader'
import React from 'react'
import ProjectCard from './projectCard/ProjectCard'
import { projectsData } from '@/lib/data'

const Projects = () => {
  return (
  <section className='my-4   sm:my-12 mx-auto w-11/12'>
        
          
        <SectionHeader title='MY  Portfolio'>
        My Latest <span className='text-secondary'>
              
              Projects
              </span> 
        </SectionHeader>
        <div className='mt-5 flex flex-col gap-3 justify-center items-center'>
        {projectsData.map((project)=><ProjectCard 
          key={project.link}
          project={project}

          />)}
          
        </div>
        </section >
  )
}

export default Projects
