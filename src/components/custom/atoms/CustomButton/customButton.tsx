import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    styles?: string;
    title: string;
    icon?: React.ElementType;
}

const CustomButton = ({ styles, title, icon: Icon = ArrowRight, ...props }: CustomButtonProps) => {
  return (
    <button
        className={cn(
            "group relative inline-flex h-12 sm:h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 sm:px-10 text-base sm:text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] hover:shadow-primary/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
            styles
        )}
        {...props}
    >
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

        <span className="relative z-10 flex items-center gap-2">
            {title}
            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
    </button>
  )
}

export default CustomButton
