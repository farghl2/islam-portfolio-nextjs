import React from 'react'
import Hero from "@/components/custom/large/hero/hero";
import LineCarsoul from "@/components/custom/atoms/lineCarsoul/LineCarsoul";
import Services from "@/components/custom/large/services/Services";
import About from "@/components/custom/large/about/About";
import Portfolio from "@/components/custom/large/portfolio/Portfolio";
import Tools from "@/components/custom/large/Tools/Tools";
import Footer from "@/components/custom/large/footer/Footer";

const Home = async() => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      
      <LineCarsoul />

      <div id="Services" className="relative z-10">
        <Services />
      </div>
      
      <div id="About" className="relative z-10">
        <About />
      </div>
      
      <div id="Projects" className="relative z-10">
        <Portfolio />
      </div>
 
      <Tools />
     
      <Footer />
    </main>
  )
}

export default Home
