"use client";
import React from 'react';
import SectionHeader from '../../atoms/sectionHeader/SectionHeader';
import { motion } from 'motion/react';
import { BriefcaseBusiness, Code, Globe, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    company: 'RockaiDev',
    role: 'Fullstack Engineer',
    period: 'Dec 2025 - Present',
    points: [
      'Engineered PropAI CRM with role-based access, AI lead insights, and KPI dashboards.',
      'Built Done Egypt, a multilingual real-estate platform with map integrations and AI assistant.',
      'Architected KMC Medical full-stack e-commerce workflows across storefront, admin, and backend.',
    ],
  },
];

function About() {
  return (
    <section id="About" className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden'>
      <SectionHeader title='Experience'>
        My Professional <span className='text-secondary'>Experience</span>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
        <motion.div
          className="md:col-span-12 lg:col-span-7"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full p-8 bg-white/60 dark:bg-slate-900/80 backdrop-blur-md border border-primary/15 dark:border-slate-700/70 hover:border-primary/40 transition-colors rounded-[2rem]">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BriefcaseBusiness className="text-secondary" /> Fullstack Engineer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Full-Stack Engineer focused on building modern web applications using
              <span className="text-primary dark:text-secondary font-semibold"> Next.js</span>,
              <span className="text-primary dark:text-secondary font-semibold"> React</span>,
              <span className="text-primary dark:text-secondary font-semibold"> NestJS</span>, and
              <span className="text-primary dark:text-secondary font-semibold"> TypeScript</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build scalable frontends, multilingual systems, map-based experiences,
              and backend architectures with secure authentication, payments, and admin workflows.
            </p>
          </Card>
        </motion.div>

        <motion.div
          className="md:col-span-12 lg:col-span-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {experiences.map((item) => (
            <Card
              key={item.company}
              className="h-full p-6 bg-white/60 dark:bg-slate-900/80 backdrop-blur-md border border-primary/15 dark:border-slate-700/70 hover:border-primary/40 rounded-[1.5rem]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-xl font-bold">{item.role}</h4>
                  <p className="text-secondary font-semibold mt-1">{item.company}</p>
                </div>
                <span className="text-xs text-secondary font-bold bg-secondary/15 dark:bg-secondary/20 px-2 py-1 rounded-full whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="text-sm text-muted-foreground leading-relaxed">
                    - {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </motion.div>

        <motion.div
          className="md:col-span-12 lg:col-span-7"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full p-8 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/20 border border-primary/15 dark:border-slate-700/70 rounded-[2rem] flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Rocket className="text-secondary" /> What I Focus On
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 dark:bg-slate-800 rounded-lg text-primary dark:text-secondary"><Code size={20} /></div>
                <div>
                  <h5 className="font-bold text-sm">Clean Architecture</h5>
                  <p className="text-xs text-muted-foreground mt-1">Maintainable and scalable code structure.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 dark:bg-slate-800 rounded-lg text-primary dark:text-secondary"><Globe size={20} /></div>
                <div>
                  <h5 className="font-bold text-sm">Multilingual Systems</h5>
                  <p className="text-xs text-muted-foreground mt-1">Arabic/English products with RTL and LTR support.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 dark:bg-slate-800 rounded-lg text-primary dark:text-secondary"><Code size={20} /></div>
                <div>
                  <h5 className="font-bold text-sm">Business Workflows</h5>
                  <p className="text-xs text-muted-foreground mt-1">Role-based systems, dashboards, and automation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 dark:bg-slate-800 rounded-lg text-primary dark:text-secondary"><Rocket size={20} /></div>
                <div>
                  <h5 className="font-bold text-sm">Production Delivery</h5>
                  <p className="text-xs text-muted-foreground mt-1">Fast iterations with quality-focused implementation.</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

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
              Let&apos;s turn your idea into a real product.
            </p>

            <button
              className="relative z-10 px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Detailed Contact Below
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About

