import React from 'react'
import SectionHeader from '../../atoms/sectionHeader/SectionHeader'
import { servicesData } from '@/lib/data'
import ServiceCard from './ServiceCard'
import { Fade } from 'react-awesome-reveal'



function Services() {
  return (
    <section className='w-11/12 mx-auto'> 
        <SectionHeader title='Services'>
        <span  className='text-secondary mr-2'>
          Services 
          </span> 
          I Provide
        </SectionHeader>

        <Fade triggerOnce direction='left'>
        <div className='flex flex-wrap gap-3 justify-center my-5 sm:my-8'> 
            {servicesData.map((service)=>
 


            <ServiceCard service={service} key={service.title} 
            
            />
   

            
          )}
        </div>
        </Fade>
    </section>
  )
}

export default Services
