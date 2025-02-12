import Hero from "@/components/custom/hero/hero";
import LineCarsoul from "@/components/custom/lineCarsoul/LineCarsoul";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative ">
        <LineCarsoul />
        <div className="w-[100rem] -left-5 h-[70px] bg-primary absolute top-0 transform -rotate-3 z-[-1]" />
      </div>
    </>
  );
}
