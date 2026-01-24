'use client'
import React from 'react'
import { motion } from 'motion/react'
import { carsoulData } from '@/lib/data'

function LineCarsoul() {
  return (
    <div className='w-full overflow-hidden py-10 sm:py-20 bg-background'>
        <motion.div 
          className='flex items-center gap-8 sm:gap-12 whitespace-nowrap'
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {[...carsoulData, ...carsoulData, ...carsoulData].map((item, index) => (
            <div key={index} className='px-8 py-4 sm:px-12 sm:py-6 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 backdrop-blur-md flex items-center justify-center group hover:border-primary transition-all duration-300'>
              <span className='text-xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                 {item}
              </span>
            </div>
          ))}
        </motion.div>
    </div>
  )
}

export default LineCarsoul
