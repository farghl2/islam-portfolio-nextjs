
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
    'Real Estate Platforms',
    'Yachts Operations Platforms',
    'Fintech Infrastructure',
    'FMCG AI Commerce',
]

export const servicesData: Service[] =[
    {icon:Building2 ,title:'Real Estate',description:'Next-generation real estate platforms and intelligent asset management.'},
    {icon:Globe ,title:'Yachts',description:'Building intelligent transportation and operations platforms.'},
    {icon:ServerCog,title:'Fintech',description:'Modern fintech infrastructure for businesses and digital services.'},
    {icon:Package,title:'FMCG',description:'Smart commerce and FMCG infrastructure powered by AI.'},
  
]

export const projectsData: Project[] = [
    {
      img: '/projects/yacht.jpg',
      title: 'Yacht Booking - Travel & Hospitality',
      description: 'Luxury yacht chartering marketplace with AI-driven pricing, smart matching, instant booking, and itinerary planning.',
      link: 'https://yacht-pi.vercel.app',
      tools: ['Next.js', 'AI', 'NestJS', 'Stripe', 'Yachting']
    },
    {
      img: '/projects/done.jpg',
      title: 'Done Egypt - Real Estate Platform',
      description: 'Production-grade multilingual real-estate platform with advanced search, map exploration, and AI assistant features.',
      link: 'https://doneeg.com',
      tools: ['Nest.js','Next.js 16', 'React 19', 'TypeScript', 'Mapbox', 'Leaflet', 'AI Assistant']
    },
    {
      img: '/projects/propai.jpg',
      title: 'PropAI CRM - SaaS',
      description: 'Role-based CRM frontend for real-estate teams with lead management, analytics dashboards, and AI-driven insights.',
      link: 'https://propaicrm.com',
      tools: ['Nest.js','React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand']
    },
    {
      img: '/projects/kmc.jpg',
      title: 'KMC Medical - Full-Stack E-commerce',
      description: '3-part architecture with storefront, admin dashboard, and scalable backend including auth, payments, and admin workflows.',
      link: 'https://kandilmedicalortho.com',
      tools: ['Next.js', 'React', 'NestJS', 'TypeScript', 'JWT', 'SendGrid']
    },
    {
      img: '/projects/bariq.jpg',
      title: 'Bariqe Al-Tamyoz - Corporate E-commerce',
      description: 'Bilingual Saudi corporate e-commerce platform with RTL/LTR support, product workflows, auth, and map-enabled forms.',
      link: 'https://bariqealtamyoz.com',
      tools: ['node.js', 'Next.js 16', 'React 19', 'TypeScript', 'next-intl', 'React Leaflet', 'Zustand']
    },
    {
      img: '/projects/nourborsa.jpg',
      title: 'Nourborsa FinTech Platform',
      description: 'Stock market analysis platform with real-time data, dynamic charting, and high-performance backend processing.',
      link: 'https://nourborsa.com',
      tools: ['Nest.js','Next.js', 'React', 'Node.js', 'TypeScript', 'Financial Charts']
    },
    {
      img: '/projects/ryada.png',
      title: 'ReyadaAI - SaaS Frontend',
      description: 'AI entrepreneurship platform frontend with multilingual RTL/LTR support, interactive modules, and modern UI animations.',
      link: 'https://reyada.vercel.app',
      tools: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand']
    },
    {
      img: '/projects/ramsa.jpg',
      title: 'Ramsa E-commerce Platform',
      description: 'Arabic-first e-commerce platform with advanced cart logic, tracking integrations, and responsive product experience.',
      link: 'https://ramsa.vercel.app',
      tools: ['Next.js', 'React', 'TypeScript', 'Zustand', 'Tailwind CSS']
    },
]

export const toolsData =[
    {img:'/tools-images/nestjs.png',title:'Nest.js'},
    {img:'/tools-images/nextjslogo.png',title:'Next.js'},
    {img:'/tools-images/reactjs.png',title:'React.js'},
    {img:'/tools-images/zustand.jpeg',title:'Zustand'},
    {img:'/tools-images/Redux.png',title:'Redux.js'},
    {img:'/tools-images/typescript.png',title:'Js/Ts'},
    {img:'/tools-images/mysql.png',title:'MySQL'},
    {img:'/tools-images/postgresql.png',title:'PostgreSQL'},
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

