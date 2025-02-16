import Hero from "@/components/custom/large/hero/hero";
import LineCarsoul from "@/components/custom/atoms/lineCarsoul/LineCarsoul";
import Services from "@/components/custom/large/services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative mb-[20px] sm:mb-[70px]">
        <LineCarsoul />
        <div className="w-full h-[60px] sm:h-[70px] bg-primary absolute -top-1 sm:top-0 transform -rotate-3 z-[-1]" />
      </div> 
      <div id="Services">

      <Services />
      </div>
    </>
  );
}
