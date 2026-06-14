'use client'
import React from 'react'
import { motion } from 'motion/react'
import { carsoulData } from '@/lib/data'

function LineCarsoul() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)')
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener('change', updateIsMobile)

    return () => mediaQuery.removeEventListener('change', updateIsMobile)
  }, [])

  return (
    <div className='w-full overflow-hidden py-10 sm:py-20 bg-background'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <motion.div 
          className='flex w-max items-center whitespace-nowrap'
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: isMobile ? 12 : 18,
            ease: "linear"
          }}
        >
          {[0, 1].map((group) => (
            <div key={group} className='flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12'>
              {carsoulData.map((item, index) => (
                <div key={`${group}-${index}`} className='px-8 py-4 sm:px-12 sm:py-6 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 backdrop-blur-md flex items-center justify-center group hover:border-primary transition-all duration-300'>
                  <span className='text-xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default LineCarsoul
