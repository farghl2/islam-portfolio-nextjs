
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../../ui/button";
import { navData } from "@/lib/data";


import "./header.module.css";
import MobileSidbar from "./MobileSidbar";




function Header() {


  return (
    <header className="rounded-[20px] bg-primary w-[100%] h-[46px] sm:h-[54px] ">
      <div className="w-11/12 lg:w-10/12 h-full mx-auto flex justify-between items-center">
        <Link
        
        href={"/"} className="flex justify-center gap-3 items-center">
          <Image alt="logo" src={"/logo.svg"} width={36} height={36} />
          <h1 className="text-xl md:text-3xl text-white font-bold ">Islam</h1>
        </Link>

        <MobileSidbar />
        <nav className="hidden sm:flex justify-between items-center gap-7">
          <ul className=" flex justify-center items-center gap-4">
            {navData.map((item) => (
              <li className="relative" key={item.title}>
                <Link
                  className=" text-white text-[1.01rem] hover:text-secondary  transition-all"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="bg-white text-black font-bold tracking-wide rounded-[30px] hover:bg-slate-300 transition-all">
            Contact Me
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
