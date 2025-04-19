
import { House, ServerCog, Info ,FolderGit, Phone, Mail ,Package, Building2, Globe   } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Project, Service } from './types';

export const callMeData = 'https://wa.me/%2B201122882154';
export const navData =[
    {title:'Home', url:'/', icon: House },
    {title:'Services', url:'#Services',icon:ServerCog },
    {title:'About', url:'#About', icon:Info },
    {title:'Projects', url:'#Projects', icon: FolderGit },
]

export const carsoulData = [
    'Website Dev', 'E-cmmerce Apps', 'Landing Pages', 'Real Estate Apps', 'Dashboards'
]

export const servicesData: Service[] =[
    {icon:Package,title:'E-Commerce',description:`Start selling online and reach more customers with ease and confidence.`},
    {icon:Building2 ,title:'Real Estate',description:'Explore verified listings for rent and sale — safe, simple, and tailored to your needs'},
    {icon:Globe ,title:'Portfolio',description:'Showcase your work and skills with a personalized, professional website'},
  
]

export const projectsData: Project[] = [
    {img: '/projects/01.svg', title:'Layal - E-commerce', description:'layal هو متجرالكتروني متخصص في بيع الطرح', link:'https://www.layal-shop.com' , tools:['React.js','TS' ,'html', 'css', 'tailwindCss','MUI', 'firebase']},
    {img: '/projects/02.jpeg', title:'Sakank - Real E-state', description:'هو موقع يخدم الطلبة بشكل اساسي في ايجاد سكن لهم بعيدا" عن النصب والاحتيال  في عملية تنظمية كاملة',link:'https://www.sakank.shop', tools:['React.js', 'Redux.js','TS' ,'html', 'css', 'tailwindCss', 'MUI', 'firebase']},
   
]

export const toolsData =[
    {img:'/tools-images/nextjslogo.png',title:'Next.js'},
    {img:'/tools-images/reactjs.png',title:'React.js'},
    {img:'/tools-images/Redux.png',title:'Redux.js'},
    {img:'/tools-images/typescript.png',title:'Js/Ts'},
    {img:'/tools-images/html.png',title:'HTML'},
    {img:'/tools-images/css.png',title:'CSS'},
    {img:'/tools-images/Tailwind.png',title:`Tailwind`},
    {img:'/tools-images/mui.png',title:'MUI'},
    {img:'/tools-images/shadcn.png',title:'Shadcn'},
    {img:'/tools-images/figma.png',title:'Figma'},

]

export const contactMeData =[
   {icon: Phone, title:'+20 1122882154' , link:'tel:+201122882154'}, 
   {icon: Mail, title:'islamfarghl2020@' , link:'mailto:islamfarghl2020@gmail.com'}, 
   {icon:FaLinkedin, title:'farghl2', link:'https://www.linkedin.com/in/farghl2'} 
]

export const socialData = [
    {icon:FaFacebook, link:'https://www.facebook.com/islam.farghl'},
    {icon:FaInstagram, link:'https://www.instagram.com/islammohammed11'},
    {icon:FaLinkedin, link:'https://www.linkedin.com/in/farghl2'},

]