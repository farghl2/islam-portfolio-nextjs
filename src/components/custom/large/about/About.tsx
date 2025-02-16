import Image from 'next/image'
import React from 'react'
import { Minus } from 'lucide-react';
import CustomButton from '../../atoms/CustomButton/customButton';

export default function About() {
  return (
    
    <section className='bg-primary min-h-[300px] px-2 py-8 sm:py-20'>
        <div className='w-11/12 mx-auto 
    flex flex-col-reverse sm:flex-row gap-8  items-center justify-evenly 
    '  > 
        <Image src={'logo.svg'} width={500} height={500} alt='about image' />
        <div className='flex flex-col items-center sm:items-start '>
        <h3 className='flex items-center gap-1 text-xl sm:text-3xl font-bold'> <Minus className='text-xl text-secondary mr-3'/>About Me</h3>
        <p className='text-3xl sm:text-4xl mt-1'>Who is<span className='text-secondary'> Islm Farghl</span></p> 
        <p className='text-center sm:text-start text-xl sm:text-2xl tracking-wide mt-4 sm:mt-8'>dssssssssss ssssssssssss sssssssss sssssssssssses</p>
        <CustomButton title='Download CV' styles='mt-8 sm:mt-20' />
        </div>
        </div>

    </section>
  )
}


