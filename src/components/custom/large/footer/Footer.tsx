'use client';
import React from "react";
import CustomButton from "../../atoms/CustomButton/customButton";
import Image from "next/image";
import { callMeData, contactMeData, navData, socialData } from "@/lib/data";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative pt-24 pb-12 overflow-hidden bg-slate-950 text-white mt-24 rounded-t-[3rem]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        
        {/* Giant CTA Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-white/10 pb-16 mb-16">
            <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 mb-6">
                    Let's work together
                </h2>
                <p className="text-slate-400 text-lg max-w-xl">
                    Have a project in mind? I specialize in building robust, scalable web applications with Next.js and Nest.js.
                </p>
            </div>
            <div className="flex-shrink-0">
               <Link href={callMeData} target="_blank">
                  <div className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 cursor-pointer">
                      Hire Me
                      <div className="bg-black text-white p-2 rounded-full transition-transform group-hover:rotate-45">
                          <ArrowUpRight size={20} />
                      </div>
                  </div>
               </Link>
            </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-8">
                <Link href={'/'} className="inline-flex items-center gap-3">
                    <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                         {/* Replace with actual logo logic if needed or just use current */}
                         <Image width={28} height={28} alt="logo" src={"/logo.svg"} />
                    </div>
                    <span className="text-2xl font-bold tracking-tight">Islam</span>
                </Link>
                <p className="text-slate-400 leading-relaxed">
                    A passionate Fullstack Developer crafting digital experiences with precision and creativity. Specialized in the bleeding-edge React ecosystem.
                </p>
                <div className="flex gap-4">
                    {socialData.map((item) => (
                        <Link
                            key={item.link}
                            href={item.link}
                            target="_blank"
                            className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-primary hover:border-primary transition-all duration-300 group"
                        >
                            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Links Column */}
            <div className="lg:col-span-2 lg:col-start-6 space-y-6">
                <h4 className="text-lg font-bold text-white">Navigation</h4>
                <ul className="space-y-4">
                    {navData.map((item) => (
                        <li key={item.url}>
                            <Link href={item.url} className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Services Column (Static for now based on data) */}
             <div className="lg:col-span-2 space-y-6">
                <h4 className="text-lg font-bold text-white">Services</h4>
                <ul className="space-y-4 text-slate-400">
                    <li className="hover:text-primary transition-colors cursor-default">Web Development</li>
                    <li className="hover:text-primary transition-colors cursor-default">E-Commerce</li>
                    <li className="hover:text-primary transition-colors cursor-default">UI/UX Design</li>
                    <li className="hover:text-primary transition-colors cursor-default">API Integration</li>
                </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3 space-y-6">
                <h4 className="text-lg font-bold text-white">Contact</h4>
                <ul className="space-y-6">
                    {contactMeData.map((item) => (
                        <li key={item.link}>
                            <Link href={item.link} target="_blank" className="flex items-start gap-4 group">
                                <div className="p-2 bg-white/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1 group-hover:text-slate-300 transition-colors">Contact</p>
                                    <p className="text-white font-medium group-hover:text-primary transition-colors">{item.title}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {currentYear} Islam Farghl. All rights reserved.</p>
            <div className="flex gap-6">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
