import Hero from "@/components/custom/large/hero/hero";
import LineCarsoul from "@/components/custom/atoms/lineCarsoul/LineCarsoul";
import Services from "@/components/custom/large/services/Services";
import About from "@/components/custom/large/about/About";
import Portfolio from "@/components/custom/large/portfolio/Portfolio";
import { Tools } from "@/components/custom/large/Tools/Tools";
import ContactMe from "@/components/custom/large/contactMe/ContactMe";
import Footer from "@/components/custom/large/footer/Footer";

import { Fade } from "react-awesome-reveal";

import React from 'react'

const Home = async() => {
  await new Promise((resolve) => {
    setTimeout(()=>resolve('sdfsfd'), 2000)
  })
  return (
    
    <Fade direction="left"  duration={500} triggerOnce={true}>

    
      <Hero />
      <div className="relative mb-[20px] sm:mb-[70px]">
        <LineCarsoul />
        <div className="w-full h-[60px] sm:h-[70px] bg-primary absolute -top-1 sm:top-0 transform -rotate-3 z-[-1]" />
      </div> 
      <div id="Services">

      <Services />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Projects">
        <Portfolio />
      </div>
      <Tools />
      <ContactMe />
      <LineCarsoul />
      <Footer />
    </Fade >
   
  )
}

export default Home
