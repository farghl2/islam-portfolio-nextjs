import { Card } from '@/components/ui/card'
import { Service } from '@/lib/types'
import { cn } from '@/lib/utils'
import React from 'react'



type ServiceCardProps ={
  service: Service;
}
function ServiceCard({service}:ServiceCardProps) {
  const {title, description}= service
  return (
    <Card className={`${cn(`hover:translate-y-1 transition-transform bg-[#F8F8F8] rounded-full min-w-[16.75rem]  w-1/12 
    flex flex-col items-center justify-evenly min-h-[25rem]  backdrop-blur-md p-3`)}`} >

          {< service.icon className='block mb-4 size-20 rounded-full text-secondary'  />} 
        
        
        <h4 className='text-2xl font-semibold capitalize'>{title}</h4>

        <p className='text-xl tracking-wide  break-words text-center px-4 mb-5'>{description}</p>

        
      
    </Card>
  )
}

export default ServiceCard
