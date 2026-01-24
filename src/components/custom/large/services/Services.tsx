'use client';
import React from 'react'
import SectionHeader from '../../atoms/sectionHeader/SectionHeader'
import { servicesData } from '@/lib/data'
import ServiceCard from './ServiceCard'




function Services() {
  return (
    <section className='w-11/12 mx-auto'> 
        <SectionHeader title='Services'>
        <span  className='text-secondary mr-2'>
          Services 
          </span> 
          I Provide
        </SectionHeader>

        <div className='flex flex-wrap gap-6 justify-center my-8 sm:my-16'> 
            {servicesData.map((service, index)=>
            <ServiceCard service={service} key={service.title} index={index} />
           )}
        </div>
    </section>
  )
}

export default Services
