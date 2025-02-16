import Image from 'next/image'
import React from 'react'

function ServiceCard() {
  return (
    <div className='bg-[#F8F8F8] rounded-full min-w-[16.75rem] w-2/12 
    flex flex-col items-center justify-evenly min-h-[27.875rem]  backdrop-blur-md p-3'>
        <Image className='flex-1 rounded-full' width={120} height={120} alt='service image' src={'logo.svg'} />
        <div className='flex-1 flex flex-col items-center gap-5'>
        <h4 className='text-2xl font-semibold capitalize'>title</h4>
        <p className='text-xl tracking-wide  break-words text-center p-4'>detalssssssss ssssssssssdddd ddddddddd</p>

        </div>
      
    </div>
  )
}

export default ServiceCard
