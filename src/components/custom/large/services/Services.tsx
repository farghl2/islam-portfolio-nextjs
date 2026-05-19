'use client';
import React from 'react'
import SectionHeader from '../../atoms/sectionHeader/SectionHeader'
import { servicesData } from '@/lib/data'
import ServiceCard from './ServiceCard'




function Services() {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> 
        <SectionHeader title='Services'>
        <span  className='text-secondary mr-2'>
          Services 
          </span> 
          I Provide
        </SectionHeader>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 sm:my-16'> 
            {servicesData.map((service, index)=>
            <ServiceCard service={service} key={service.title} index={index} />
           )}
        </div>
    </section>
  )
}

export default Services
