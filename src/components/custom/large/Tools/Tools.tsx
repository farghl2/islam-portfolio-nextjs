'use client';
import { toolsData } from '@/lib/data'
import React from 'react'
import SectionHeader from '../../atoms/sectionHeader/SectionHeader'
import ToolCard from './ToolCard'
import { motion } from 'motion/react'

function Tools() {
    // Group tools by category logic could go here in future
    
    return (
        <section id="Tools" className='w-11/12 max-w-7xl mx-auto py-16 sm:py-24'>
            <SectionHeader title='Tech Stack'>
                My <span className='text-secondary'>Arsenal</span>
            </SectionHeader>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-12'
            >
                {toolsData.map((tool, index) => (
                    <ToolCard 
                        key={tool.title} 
                        tool={tool} 
                        index={index}
                    />
                ))}
            </motion.div>
        </section>
    )
}

export default Tools
