import Image from "next/image";
import "./hero.module.css";
import CustomButton from "../../atoms/CustomButton/customButton";


const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-evenly items-center   w-11/12 lg:w-10/12 mx-auto py-8">
      <div className="flex flex-col gap-2">
        <Image
          className="hidden sm:block"
          src={"hero-hello.svg"}
          alt="hero-hello"
          width={130}
          height={130}
        />
        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-center sm:text-start sm:w-9/12 mt-8">
          I’m <span className="relative text-secondary">Islam Farghl</span>
          <br /> Front-End developer Based in Eygpt <strong className="text-secondary text-xl">.</strong>
        </h2>
        <p className="text-2xl text-center sm:text-start  sm:text-3xl pt-8 sm:w-10/12">I’m a front-end developer <b/>special in Nextjs 
        frame work</p>
        <div className="flex items-center justify-start mx-auto gap-2 sm:gap-7 mt-8"> 
            <CustomButton title="View my portfolio" />
            <button className={` text-primary text-[1.2rem] border-[3px] w-[6rem] h-11 rounded-2xl border-primary font-semibold transition-opacity hover:bg-slate-200 backdrop-blur-md`}>Hire Me</button>
        </div>
      </div>
      <div>
        <Image src={"logo.svg"} alt="hero image" width={450} height={450} />
      </div>
    </section>
  );
};

export default Hero;
