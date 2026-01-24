"use client";
import React from 'react';
import SectionHeader from '../../atoms/sectionHeader/SectionHeader';
import { motion } from 'motion/react';
import { Code, Coffee, Globe, Laptop, Rocket, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const stats = [
  { label: 'Experience', value: '1+', suffix: 'Years' },
  { label: 'Projects', value: '5+', suffix: 'Completed' },
  { label: 'Clients', value: '5+', suffix: 'Happy' },
]

function About() {
  return (
    <section id="About" className='w-11/12 mx-auto py-16 sm:py-24 overflow-hidden'> 
        <SectionHeader title='About Me'>
          Getting To Know <span className='text-secondary'>Me</span>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          
          {/* Main Bio Card - Large */}
          <motion.div 
            className="md:col-span-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full p-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-primary/10 hover:border-primary/30 transition-colors rounded-[2rem]">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Laptop className="text-secondary" /> Fullstack Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a passionate <strong>Fullstack Developer</strong> specializing in building robust web applications using 
                <span className="text-primary font-semibold"> Next.js</span>, 
                <span className="text-primary font-semibold"> Nest.js</span>, and modern web technologies. 
                My focus is on creating clean, efficient, and scalable code that delivers exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's crafting pixel-perfect UIs with <span className="text-primary font-semibold">TailwindCSS</span> or 
                architecting complex backends with <span className="text-primary font-semibold">Nest.js</span>, 
                I love turning ideas into reality.
              </p>
            </Card>
          </motion.div>

          {/* Stats Column - Vertical */}
          <motion.div 
            className="md:col-span-4 flex flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <Card key={i} className="flex-1 p-6 flex items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-primary/10 hover:border-primary/30 rounded-[1.5rem] group cursor-default">
                 <div>
                    <h4 className="text-3xl font-black text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
                      {stat.value}
                    </h4>
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
                 </div>
                 <div className="text-right">
                    <span className="text-xs text-secondary font-bold bg-secondary/10 px-2 py-1 rounded-full">
                      {stat.suffix}
                    </span>
                 </div>
              </Card>
            ))}
          </motion.div>

          {/* Capabilities / Philosophy - Wide */}
          <motion.div 
            className="md:col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-[2rem] flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Rocket className="text-secondary" /> Why Work With Me?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary"><Zap size={20} /></div>
                    <div>
                       <h5 className="font-bold text-sm">Fast Performance</h5>
                       <p className="text-xs text-muted-foreground mt-1">Optimized for speed and SEO.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary"><Code size={20} /></div>
                    <div>
                       <h5 className="font-bold text-sm">Clean Code</h5>
                       <p className="text-xs text-muted-foreground mt-1">Maintainable and scalable architecture.</p>
                    </div>
                 </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary"><Globe size={20} /></div>
                    <div>
                       <h5 className="font-bold text-sm">Modern Stack</h5>
                       <p className="text-xs text-muted-foreground mt-1">Latest tech for future-proof apps.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary"><Coffee size={20} /></div>
                    <div>
                       <h5 className="font-bold text-sm">Dedicated</h5>
                       <p className="text-xs text-muted-foreground mt-1">Committed to your project's success.</p>
                    </div>
                 </div>
              </div>
            </Card>
          </motion.div>

           {/* Call to Action - Small */}
           <motion.div 
            className="md:col-span-12 lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="h-full min-h-[250px] relative rounded-[2rem] overflow-hidden bg-slate-900 flex flex-col items-center justify-center text-center p-8 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/40 rounded-full blur-3xl animate-pulse" />
              
              <h3 className="text-3xl font-black text-white relative z-10 mb-2">
                Ready to Start?
              </h3>
              <p className="text-slate-300 relative z-10 mb-6 max-w-xs mx-auto">
                Let's turn your amazing idea into a digital reality today.
              </p>
              
              <button 
                className="relative z-10 px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Detailed Contact Below ↓
              </button>
            </div>
          </motion.div>

        </div>
    </section>
  )
}

export default About
