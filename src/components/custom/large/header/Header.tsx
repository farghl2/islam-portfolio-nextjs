
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../../ui/button";
import { callMeData, navData } from "@/lib/data";
// import { useTheme } from "next-themes";
// import { Contrast, Moon, Sun } from "lucide-react";


import MobileSidbar from "./MobileSidbar";



function Header() {
  // const {setTheme, theme} = useTheme()


  return (
    <header className="rounded-[20px] bg-primary w-[100%] h-[49px] sm:h-[54px]  sticky top-0 z-50">
      <div className="w-11/12 lg:w-10/12 h-full mx-auto flex justify-between items-center">
        <Link
        
        href={"/"}  className="flex justify-center gap-3 items-center">
          <Image alt="logo" src={"/logo.svg"} width={36} height={36} />
          <h1 className="text-xl md:text-3xl text-white font-bold tracking-wider">I<span className="inline-block animate-bounce ">
            s
            </span>lam</h1>
        </Link>

        <MobileSidbar />
        <nav className="hidden sm:flex justify-between items-center gap-4">
          <ul className=" flex justify-center items-center gap-4">
            {navData.map((item) => (
              <li className={`relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
              before:bg-secondary before:transition-all hover:before:w-full
              `} key={item.title}>
                <Link
                  className=" text-white text-[1.01rem] hover:text-secondary  transition-all"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="bg-white text-black font-bold tracking-wide rounded-[30px] hover:bg-slate-300 transition-all">
            <Link href={callMeData}
            target="_blank"
            >
            
            Contact Me
            </Link> 
          </Button>
         {/* <div className="w-[1px] h-6 rounded-xl bg-white "/>
          <Button  className="shadow-none" onClick={()=>theme === 'light'?setTheme('dark'):setTheme('light')}>
            {theme === 'dark'&& <Sun className="text-white"/>}
           {theme === 'light'&& <Moon className="text-white"/>}
           {theme === 'system'&& <Contrast className="text-white"/>}
          </Button> */}

        </nav>
      </div>
    </header>
  );
}

export default Header;
