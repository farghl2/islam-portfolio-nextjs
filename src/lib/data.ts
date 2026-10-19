
import { House, ServerCog, Info ,FolderGit, Phone, Mail ,Package, Building2, Globe   } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Project, Service } from './types';

export const callMeData = 'https://wa.me/%2B201122882154';
export const navData =[
    {title:'Home', url:'/', icon: House },
    {title:'Services', url:'#Services',icon:ServerCog },
    {title:'About', url:'#About', icon:Info },
    {title:'Projects', url:'#Projects', icon: FolderGit },
]

export const carsoulData = [
    'ERP & Enterprise Platforms',
    'CRM & Lead Management',
    'n8n AI Automation & Workflows',
    'Construction & Finishing Marketplaces',
    'Recruitment & HR Platforms',
    'Real Estate Platforms',
    'Fintech Infrastructure',
    'FMCG AI Commerce',
]

export const servicesData: Service[] =[
    {icon:Building2 ,title:'ERP & CRM Systems',description:'Enterprise Resource Planning, CRM platforms, and intelligent lead tracking architectures.'},
    {icon:ServerCog ,title:'n8n & AI Automation',description:'End-to-end workflow automation, custom AI agents, webhook pipelines, and operational integrations.'},
    {icon:Globe ,title:'Marketplaces & Portals',description:'High-scale digital marketplaces, contractor bidding platforms, and recruitment engines.'},
    {icon:Package ,title:'Fintech & AI Commerce',description:'Modern fintech infrastructure, AI-driven commerce, and scalable digital services.'},
]

export const projectsData: Project[] = [
    {
      img: '/projects/itashteeb.png',
      title: 'iTashteeb - Construction & Finishing Marketplace',
      description: 'Egypt-wide digital marketplace connecting clients with certified architectural, finishing, and contracting professionals with tender bidding and idea books.',
      link: 'https://itashteeb.com',
      tools: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'next-intl', 'Zustand']
    },
    {
      img: '/projects/itashteeb-dashboard.png',
      title: 'iTashteeb Contractor & Admin Dashboard',
      description: 'Comprehensive operations portal for contractors and admin teams with tender proposal submission, live quotation management, 3D interactive staging, and bilingual controls.',
      link: 'https://dashboard.itashteeb.com/',
      tools: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Zustand', 'REST APIs']
    },
    {
      img: '/projects/employermagazine.png',
      title: 'Employer Magazine - Job & Freelance Platform',
      description: 'Job discovery portal and freelance contract marketplace across Egypt. Features smart search by city/role, company directories, and an AI-guided interactive CV Builder with exportable templates.',
      link: 'https://employermagazine.com',
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AI CV Builder', 'Zustand']
    },
    {
      img: '/projects/employer-dashboard.png',
      title: 'Employer Magazine - Recruitment ATS Dashboard',
      description: 'Enterprise recruitment operations and applicant tracking system (ATS) for hiring teams. Built with granular Role-Based Access Control (RBAC), permission stores, vacancy workflows, and billing.',
      link: 'https://dashboard.employermagazine.com/sign-in?redirect=%2F',
      tools: ['React', 'Vite', 'TypeScript', 'RBAC', 'Zustand', 'Axios', 'Tailwind CSS']
    },
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
      img: '/projects/smartsuq.jpg',
      title: 'SmartSuq - Grocery & Local Commerce',
      description: 'Angular e-commerce storefront for browsing products, filtering categories, managing a persistent cart, placing delivery orders, and sending real-time Telegram order notifications through Firebase.',
      link: 'https://angular-smart-suq-app-gday.vercel.app',
      tools: ['Angular', 'Firebase', 'Firestore', 'Angular Material', 'Telegram Bot API']
    },
    {
      img: '/projects/nourborsa.jpg',
      title: 'Nourborsa FinTech Platform',
      description: 'Stock market analysis platform with real-time data, dynamic charting, and high-performance backend processing.',
      link: 'https://nourborsa.com',
      tools: ['Nest.js','Next.js', 'React', 'Node.js', 'TypeScript', 'Financial Charts']
    },
    {
      img: '/projects/bariq.jpg',
      title: 'Bariqe Al-Tamyoz - Corporate E-commerce',
      description: 'Bilingual Saudi corporate e-commerce platform with RTL/LTR support, product workflows, auth, and map-enabled forms.',
      link: 'https://bariqealtamyoz.com',
      tools: ['node.js', 'Next.js 16', 'React 19', 'TypeScript', 'next-intl', 'React Leaflet', 'Zustand']
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
    {img:'/tools-images/nextjslogo.png',title:'Next.js'},
    {img:'/tools-images/reactjs.png',title:'React.js'},
    {img:'/tools-images/n8n.svg',title:'n8n'},
    {img:'/tools-images/nestjs.png',title:'Nest.js'},
    {img:'/tools-images/ang.jpg',title:'Angular'},
    {img:'/tools-images/zustand.jpeg',title:'Zustand'},
    {img:'/tools-images/Redux.png',title:'Redux.js'},
    {img:'/tools-images/rxjs.svg',title:'RxJS'},
    {img:'/tools-images/typescript.png',title:'Js/Ts'},
    {img:'/tools-images/mysql.png',title:'MySQL'},
    {img:'/tools-images/postgresql.png',title:'PostgreSQL'},
    {img:'/tools-images/html.png',title:'HTML'},
    {img:'/tools-images/css.png',title:'CSS'},
    {img:'/tools-images/Tailwind.png',title:`Tailwind`},
    {img:'/tools-images/angmat.jpg',title:`Angular Material`},

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
    {icon:FaLinkedin, link:'https://www.linkedin.com/in/farghl2'},
    {icon:FaGithub, link:'https://github.com/farghl2'},
    {icon:FaTiktok, link:'https://www.tiktok.com/@farghl.com1'},
]

