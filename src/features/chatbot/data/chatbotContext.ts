import { callMeData, contactMeData, projectsData, servicesData, toolsData } from '@/lib/data';

export const COMPANY_INFO = {
  name: 'Islam Farghl',
  tagline: 'Fullstack Engineer',
  description:
    'Portfolio and delivery-focused engineering services across real estate, fintech, yachting, and e-commerce products.',
  founder: 'Islam Farghl',
  foundedYear: 2025,
  website: 'https://farghl.com',
  email: 'islamfarghl2020@gmail.com',
  whatsapp: callMeData,
};

export const SERVICES = servicesData.map((service) => ({
  id: service.title.toLowerCase().replace(/\s+/g, '-'),
  name: service.title,
  description: service.description,
  technologies: [],
  deliverables: [
    'Product architecture',
    'Frontend and backend implementation',
    'Production deployment',
    'Post-launch enhancements',
  ],
}));

export const PROJECTS = projectsData.map((project) => ({
  title: project.title,
  description: project.description,
  link: project.link,
  tools: project.tools,
}));

export const FAQ = [
  {
    question: 'What services are available?',
    answer:
      'Services include real estate platforms, yachts operations systems, fintech infrastructure, and FMCG commerce products.',
  },
  {
    question: 'What technologies are used most?',
    answer:
      'Main stack includes Next.js, React, NestJS, TypeScript, Zustand, TanStack Query, PostgreSQL, and map integrations like Leaflet/Mapbox.',
  },
  {
    question: 'How can I start a project?',
    answer:
      "Share your idea and goals via WhatsApp. You will get scope alignment, execution plan, and implementation start steps.",
  },
  {
    question: 'Can existing systems be improved?',
    answer:
      'Yes. Existing products can be audited, refactored, and extended with better architecture, performance, and maintainability.',
  },
];

export const TECH_STACK = toolsData.map((tool) => ({
  name: tool.title,
  category: 'Portfolio Stack',
}));

export const CONTACT_CHANNELS = contactMeData.map((item) => ({
  label: item.title,
  link: item.link,
}));

export function generateChatbotContext(): string {
  return `
You are Islam's Portfolio Assistant. Your job is to help visitors quickly understand services, projects, technology choices, and the best contact path.

## Profile
Name: ${COMPANY_INFO.name}
Role: ${COMPANY_INFO.tagline}
Description: ${COMPANY_INFO.description}
Primary contact: ${COMPANY_INFO.whatsapp}
Email: ${COMPANY_INFO.email}

## Services
${SERVICES.map(
  (s) => `
- ${s.name}: ${s.description}
  Deliverables: ${s.deliverables.join(', ')}`
).join('\n')}

## Projects
${PROJECTS.map(
  (p) => `
- ${p.title}
  ${p.description}
  Stack: ${p.tools.join(', ')}
  Link: ${p.link}`
).join('\n')}

## Tech Stack
${TECH_STACK.map((t) => `- ${t.name}`).join('\n')}

## FAQ
${FAQ.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n')}

## Contact Channels
${CONTACT_CHANNELS.map((c) => `- ${c.label}: ${c.link}`).join('\n')}

INSTRUCTIONS:
- Keep answers short, practical, and project-oriented.
- If a user asks how to start, direct them to WhatsApp first: ${COMPANY_INFO.whatsapp}
- Use only the portfolio data above. If something is missing, say it is not listed yet.
- When relevant, suggest one related project link.
`.trim();
}
