'use client'
import React from 'react';
import Image from "next/image";
import CustomButton from "../../atoms/CustomButton/customButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { callMeData } from "@/lib/data";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  const router = useRouter();
  const handleSeeMore = () => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center py-12 pb-24 sm:py-20 sm:pb-24 lg:py-0 lg:pb-12">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-8">
        
        {/* Text Content */}
        <motion.div 
          className="flex flex-col items-center lg:items-start gap-6 lg:w-1/2 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20 block w-fit">
              Available for Work
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight text-center lg:text-start">
            Hello, I’m <br/>
            <span className="text-secondary relative inline-block">
              Islam Farghl
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 127.352 2.65163 194.208 2.05353" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="text-lg sm:text-xl text-muted-foreground text-center lg:text-start max-w-xl h-[60px] sm:h-auto">
             A <strong>Fullstack Developer</strong> specializing in{' '}
             <span className="text-foreground font-semibold">
               <Typewriter
                 words={['Next.js', 'Angular','Nest.js', 'React', 'Modern Web Apps']}
                 loop={0}
                 cursor
                 cursorStyle='_'
                 typeSpeed={70}
                 deleteSpeed={50}
                 delaySpeed={1000}
               />
             </span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
            <CustomButton 
              title="View Projects" 
              onClick={() => router.push('/projects')}
              styles="shadow-lg hover:shadow-xl transition-shadow"
            />
            
            <Link href={callMeData} target="_blank" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300 font-medium">
              Hire Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px]">
            {/* Organic blobs behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse -z-10" />
            
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out glass group">
              <Image 
                src={"/hero-bg.webp"} 
                className="object-cover w-full h-full bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-700" 
                alt="Islam Farghl" 
                width={500} 
                height={500} 
                priority
              />
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:top-10 md:-right-10 bg-white dark:bg-slate-100 p-3 rounded-2xl shadow-xl "
            >
              <Image src="/nextjs.svg" width={40} height={40} alt="Next.js" className="w-10 h-10 object-contain" />
            </motion.div>
            
             <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-6 md:bottom-20 md:-left-12 bg-white dark:bg-slate-100 p-3 rounded-2xl shadow-xl "
            >
               <Image src="/nestjs.svg" width={40} height={40} alt="Nest.js" className="w-10 h-10 object-contain" />
            </motion.div>

          </div>
        </motion.div>

      </div>

      <motion.button
        type="button"
        onClick={handleSeeMore}
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:block absolute bottom-4 sm:bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full border border-secondary/30 bg-background/70 p-2.5 sm:p-3 text-secondary backdrop-blur-md transition-colors hover:bg-secondary/15"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
