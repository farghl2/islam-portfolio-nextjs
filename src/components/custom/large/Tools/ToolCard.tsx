'use client';
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";

type ToolCardProps = {
  tool: {
    title: string;
    img: string;
  };
  index: number;
}

const ToolCard = ({tool, index}: ToolCardProps) => {
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.03, duration: 0.3 }}
    >
        <Card className="flex items-center gap-3 p-3 bg-white/40 dark:bg-slate-900/75 backdrop-blur-sm border border-slate-200 dark:border-slate-700/80 hover:border-primary/50 hover:bg-white/60 dark:hover:bg-slate-800/85 transition-all duration-300 group cursor-default">
          <div className="relative w-10 h-10 min-w-[2.5rem] p-2 bg-white dark:bg-slate-800/90 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
             <Image
                alt={tool.title}
                fill
                src={tool.img}
                className="object-contain p-1"
              />
          </div>
          <h5 className="font-medium text-sm text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors whitespace-nowrap">
            {tool.title}
          </h5>
        </Card>
    </motion.div>
  );
};

export default ToolCard;

