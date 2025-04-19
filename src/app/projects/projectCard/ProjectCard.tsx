

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import Image from "next/image";
import React from "react";
import { Tool } from "./Tool";
import CustomButton from "@/components/custom/atoms/CustomButton/customButton";
import { Project } from "@/lib/types";
import Link from "next/link";

type ProjectCardProps ={
  project: Project
}

function ProjectCard({project}:ProjectCardProps) {
  const {description, img, link, title, tools}= project
  return (
    <Card
      className={`${cn(
        ` hover:translate-y-1 transition-transform flex p-2  md:w-10/12   justify-center items-center flex-col lg:justify-normal gap-7 lg:items-start lg:flex-row`
      )}`}
    >
      <Image
        width={400}
        height={350}

        alt="image card"
        src={img}
        className="rounded-lg max-h-[350px]  bg-slate-100"
      />
      <div className="mt-2 flex flex-col justify-center items-center lg:justify-normal lg:items-start">
        <p className="text-xl font-semibold">Tools</p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          {tools.map((tool)=>
          <Tool 
          key={tool}
          title={tool}
          />)}
          
        </div>
        <h2 className="capitalize text-2xl font-medium mt-5 tracking-wider ">
          {title}
        </h2>
        <p className="font-[18px] my-2 lg:ml-2 text-center md:text-start leading-relaxed ">
          {description}
        </p>
        <Link href={link} target="_blank">
        
      <CustomButton title="View Details"  styles="mt-2"/>
        </Link>
      </div>
    </Card>
  );
}

export default ProjectCard;
