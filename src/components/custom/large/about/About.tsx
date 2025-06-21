"use client";
import { saveAs } from "file-saver";

import Image from "next/image";
import React from "react";
import CustomButton from "../../atoms/CustomButton/customButton";
import SectionHeader from "../../atoms/sectionHeader/SectionHeader";
import { Fade } from "react-awesome-reveal";

const descrition = `A front end developer with 1+ year of experience in freelance work`;
export default function About() {
  return (
    <section className="bg-primary min-h-[300px] px-2 py-8 sm:py-20">
      <div
        className="w-11/12 mx-auto 
    flex flex-col-reverse sm:flex-row gap-8  items-center justify-evenly 
    "
      >
        <Fade damping={0} cascade direction="left">
          
        <Image src={"/islam.png"} className="rounded-full" width={500} height={500} alt="about image" />
        </Fade>
        <div className="flex flex-col items-center sm:items-start text-white ">
          <SectionHeader title="About Me">
            Who is <span className="text-secondary"> Islm Farghl</span>
          </SectionHeader>
          <Fade cascade damping={0} direction="down" >

          <p className="text-center sm:text-start text-xl sm:text-2xl tracking-wide mt-4 ">
            {descrition}
          </p>
          </Fade>
          <CustomButton
            onClick={() => saveAs("/Islam_mohamed_farghl_CV.pdf", "/Islam_mohamed_farghl_CV.pdf")}
            title="Download CV"
            styles="mt-8 sm:mt-12 text-black"
          />
        </div>
      </div>
    </section>
  );
}
