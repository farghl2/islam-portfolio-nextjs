'use client';
import React, { useState } from 'react'
import { Play } from 'lucide-react';
type CustomButtonProps = {
    styles?:string,
    title:string
}
function CustomButton({styles, title, ...props}:CustomButtonProps) {
  const [click, setClick] = useState(false);
  return (
    <button onMouseLeave={()=>setClick(false)} className={`rounded-3xl bg-secondary w-[12rem] h-11 ${styles}`}   {...props} onClick={()=>setClick(!click)}>
        <div className='flex justify-between items-center mx-[.1rem] relative '>
            <span className={`bg-primary text-white capitalize rounded-3xl  h-10 flex justify-center items-center w-[9rem] transition-all duration-[20s] absolute ease-in-out z-10 ${click?' translate-x-11 ':''} `}>

        {title}
            </span>
            <span className='flex justify-center items-center h-10 w-10 rounded-full  bg-white absolute z-0 right-0'>
            <Play className='w-6' />
            </span>
        </div>
    </button>
  )
}

export default CustomButton
