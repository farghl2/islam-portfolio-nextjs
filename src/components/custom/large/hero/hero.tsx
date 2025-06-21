'use client'
import Image from "next/image";
import CustomButton from "../../atoms/CustomButton/customButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { callMeData} from "@/lib/data";
import { Fade } from "react-awesome-reveal";


const Hero = () => {
  const router= useRouter()
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-evenly items-center   w-11/12 lg:w-10/12 mx-auto py-8">
      <div className="flex flex-col gap-2">
        <Fade cascade damping={0}>

        <Image
          className="hidden sm:block dark:hidden -rotate-3"
          src={"hero-hello.svg"}
          alt="hero-hello"
          width={130}
          height={130}
        />
        <Image
          className="hidden dark:sm:block -rotate-3"
          src={"hero-hello-dark.svg"}
          alt="hero-hello"
          width={130}
          height={130}
        />
          </Fade>
        <Fade cascade direction="down">

        <h2 className={`font-semibold text-2xl sm:text-3xl lg:text-4xl text-center sm:text-start sm:w-9/12 mt-8`}>
          I’m <span className=" relative underline text-secondary">Islam Farghl</span>
          <br /> Front-End developer Based in Eygpt{" "}
          <strong className="text-secondary text-xl">.</strong>
        </h2>
        </Fade>
        <Fade cascade direction="up">
          
        <p className="text-2xl  text-center sm:text-start  sm:text-3xl pt-8 sm:w-10/12">
          I’m a front-end developer <b />
          special in Nextjs frame work
        </p>
        </Fade>
        <div className="flex items-center justify-start mx-auto gap-2 sm:gap-7 mt-8">
       
          <CustomButton title="View my portfolio" 
          onClick={()=>router.push('/projects')}
          />
         
          <Fade damping={0} cascade>

          <button 
          
          className={`animate-wiggle text-[1.2rem] border-[3px] w-[6rem] h-11 rounded-2xl border-primary font-semibold transition-opacity hover:bg-slate-200 backdrop-blur-md`}
          >
            <Link href={callMeData}
            target="_blank"
            >
            
            Hire Me
            </Link>
          </button>
            </Fade>
        </div>
      </div>
      <Fade cascade damping={0} direction="down">
        <Image src={"/islam.png"} className="rounded-full animate-out" alt="hero image" width={450} height={450} />
      </Fade>
    </section>
  );
};

export default Hero;
