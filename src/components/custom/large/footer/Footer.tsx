import React from "react";
import CustomButton from "../../atoms/CustomButton/customButton";
import Image from "next/image";
import { callMeData, contactMeData, navData, socialData } from "@/lib/data";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-wrap gap-5 mb-5 items-center justify-between">
          <h4 className="text-3xl">Let’s Connect There</h4>
          <Link href={callMeData} target="_blank">
          <CustomButton title="Hire Me" 
          />
          </Link>
          
        </div>
        <div className="flex justify-evenly items-center flex-wrap gap-4">
          <div>
            <Link href={'/'} className="text-secondary flex items-center gap-2 text-2xl">
              <Image width={32} height={32} alt="logo" src={"logo.svg"} />
              Islam
            </Link>
            <p className="text-xl p-4 ">
              I’m a front-end developer <br className="hidden md:block"/> special in Nextjs frame work
            </p>
            <div className="flex justify-center items-center gap-3">
              {socialData.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="text-3xl p-4 bg-slate-200 rounded-full"
                >
                  {<item.icon />}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl">Navigation</h4>
            <div className="flex flex-wrap md:flex-col ">
              {navData.map((item) => (
                <Link href={item.url} key={item.url}
                className="flex p-2 items-center justify-start gap-4"
                >
                    {<item.icon />}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl">Contact</h4>
            <div className="flex flex-wrap md:flex-col ">
              {contactMeData.map((item) => (
                <Link href={item.link} key={item.link}
                className="flex p-2 items-center justify-start gap-4"
                >
                    <item.icon />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      <footer  className="rounded-[20px] bg-primary w-[100%] h-[46px] sm:h-[54px] mt-6 flex items-center justify-center">
      <p className="text-center text-sm text-white">
  &copy; 2025 Islam. All rights reserved.
</p>
      </footer>
    </section>
  );
};

export default Footer;
