
'use client';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Tool } from "./Tool";
import CustomButton from "@/components/custom/atoms/CustomButton/customButton";
import { Project } from "@/lib/types";
import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

type ProjectCardProps ={
  project: Project;
  index: number;
}




function ProjectCard({project, index}:ProjectCardProps) {
  const {description, img, link, title, tools}= project
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-full h-full"
    >
      <Link href={link} target="_blank">
        <Card className="group h-full flex flex-col overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/95 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
          
          {/* Image Container */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-border/50 dark:border-slate-700/80">
             <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* View Button Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="px-6 py-2 bg-white/90 dark:bg-slate-950/90 backdrop-blur rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                View Project
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 flex flex-col flex-grow gap-4">
            <div className="flex justify-between items-start">
               <div>
                 <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors">
                  {title}
                </h2>
                <div className="h-1 w-12 bg-primary rounded-full" />
               </div>
               <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {tools.slice(0, 4).map((tool)=> (
                <span key={tool} className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-200 border border-slate-200 dark:border-slate-600/80">
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </Card>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;

