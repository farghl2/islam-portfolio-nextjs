'use client';

import Link from "next/link";
import React from "react";
import { Button } from "../../../ui/button";
import { callMeData, navData } from "@/lib/data";
import { useTheme } from "next-themes";
import {  Moon, Sun } from "lucide-react";



import MobileSidbar from "./MobileSidbar";
import CustomButton from "../../atoms/CustomButton/customButton";



function Header() {
  const {setTheme, theme} = useTheme()


  return (
    <header className="rounded-[2rem] bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl w-[95%] sm:w-[90%] mx-auto h-[60px] sm:h-[70px] sticky top-4 z-50 transition-all border border-slate-200 shadow-sm dark:border-slate-800">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-full mx-auto flex justify-between items-center">
        <Link
        
        href={"/"}  className="flex justify-center gap-3 items-center group">
          {/* <Image alt="logo" src={"/logo.svg"} width={40} height={40} className="group-hover:rotate-12 transition-transform duration-300"/> */}
          <h1 className="text-xl md:text-3xl text-primary dark:text-white font-bold tracking-wider">I<span className="inline-block animate-bounce text-secondary">
            s
            </span>lam</h1>
        </Link>

        <MobileSidbar />
        <nav className="hidden sm:flex justify-between items-center gap-6">
          <ul className=" flex justify-center items-center gap-6">
            {navData.map((item) => (
              <li className={`relative group`} key={item.title}>
                <Link
                  className=" text-foreground/80 hover:text-primary dark:hover:text-secondary text-[1.05rem] font-medium transition-colors"
                  href={item.url}
                >
                  {item.title}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3">
            <Link href={callMeData} target="_blank">
               <CustomButton title="Contact Me" styles="h-10 sm:h-11 px-6 text-sm sm:text-base"/>
            </Link>
            
            <div className="w-[1px] h-6 bg-border mx-1"/>
            
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={()=>theme === 'light'?setTheme('dark'):setTheme('light')}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;
