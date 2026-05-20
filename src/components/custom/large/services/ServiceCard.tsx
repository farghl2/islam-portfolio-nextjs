'use client'
import { Card } from '@/components/ui/card'
import { Service } from '@/lib/types'
import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'motion/react'

type ServiceCardProps ={
  service: Service;
  index: number;
}

function ServiceCard({service, index}:ServiceCardProps) {
  const {title, description}= service
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className={`${cn(`
        relative overflow-hidden
        dark:bg-white/5 bg-white/70 
        backdrop-blur-xl border border-white/20 dark:border-white/10
        rounded-3xl 
        w-[92%] mx-auto sm:w-full
        flex flex-col items-center justify-between
        min-h-[5rem] p-6
        transition-all duration-300
        hover:shadow-2xl hover:shadow-primary/10
        group
      `)}`} >
        
        {/* Gradient Blob Background */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500 delay-100" />

        <div className='relative z-10 flex flex-col items-center flex-grow'>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-white/60 to-white/20 dark:from-slate-800 dark:to-slate-900 border border-white/20 dark:border-slate-700/80 mb-6 shadow-sm dark:shadow-black/30 group-hover:scale-110 transition-transform duration-300">
            <service.icon className='size-10 text-primary dark:text-secondary group-hover:text-secondary dark:group-hover:text-primary transition-colors duration-300' />
          </div>
          
          <h4 className='text-2xl font-bold capitalize mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            {title}
          </h4>

          <p className='text-muted-foreground text-center leading-relaxed'>
            {description}
          </p>
        </div>

        <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-6 group-hover:via-secondary/50 transition-all duration-500" />
      </Card>
    </motion.div>
  )
}

export default ServiceCard
