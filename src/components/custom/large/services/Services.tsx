import React from 'react'
import SectionHeader from '../../atoms/sectionHeader/SectionHeader'
import { servicesData } from '@/lib/data'
import ServiceCard from '../../atoms/serviceCard/ServiceCard'

function Services() {
  return (
    <section className='w-11/12 mx-auto'> 
        <SectionHeader title='Services' desc='Services I Provide'/>
        <div className='flex flex-wrap gap-3 justify-center my-5 sm:my-8'> 
            {servicesData.map((service)=><ServiceCard key={service.title} />)}
        </div>
    </section>
  )
}

export default Services
