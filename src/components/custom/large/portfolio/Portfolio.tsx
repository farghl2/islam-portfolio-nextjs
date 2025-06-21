'use client';
import React from 'react'
import CustomButton from '../../atoms/CustomButton/customButton'
import ProjectCard from '../../../../app/projects/projectCard/ProjectCard';
import SectionHeader from '../../atoms/sectionHeader/SectionHeader';
import { useRouter } from 'next/navigation';
import { projectsData } from '@/lib/data';


const Portfolio = () => {
  const router = useRouter();
  return (
    <section className='my-4   sm:my-12 mx-auto w-11/12'>
      <div className='flex flex-col sm:flex-row gap-7 sm justify-between items-center'>
        <div>
      <SectionHeader title='MY  Portfolio'>
      My Latest <span className='text-secondary'>
            
            Projects
            </span> 
      </SectionHeader>
          
          
        </div>
        <CustomButton title='View All Projects' styles='lg:mr-[10rem]' 
        onClick={()=>router.push('/projects')}
        />
      </div>
        <div className='mt-5 flex flex-col gap-3 justify-center items-center'>
          {projectsData.slice(0,2).map((project)=>
          // <Fade key={project.link}  direction='left'>
            
          <ProjectCard 
          key={project.link}
          project={project}

          />
          
      
          )}
          
        </div>
          
    </section>
  )
}

export default Portfolio   