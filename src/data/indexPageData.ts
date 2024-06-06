import esetLogo from '../images/esetLogo.svg';
import sevenBridgesLogo from '../images/sevenBridgesLogo.svg';
import simplicityLogoSimple from '../images/simplicityLogoSimple.svg';
import ciklumLogo from '../images/ciklumLogo.svg';
import type { TCoreSkill, TExperience } from '../types/TTypes';
import reactIcon from '../images/reactIcon.svg';
import pythonIcon from '../images/pythonIcon.svg';
import mouseIcon from '../images/mouseIcon.svg';
const simplicityScreen2 = 'src/images/simplicityScreen2.webp';
const simplicityScreen3 = 'src/images/simplicityScreen3.jpg';
const simplicityScreen1 = 'src/images/simplicityScreen1.jpg';
const ciklumScreen1 = 'src/images/ciklumScreen1.jpg';
const ciklumScreen2 = 'src/images/ciklumScreen2.jpg';
const esetScreen1 = 'src/images/esetScreen1.png';
const esetScreen2 = 'src/images/esetScreen2.png';
const sevenBridgesSreen1 = 'src/images/7bScreen1.jpg';
const sevenBridgesSreen2 = 'src/images/7bScreen2.jpg';

export enum IndexPageSectionId {
  INTRO = 'intro',
  EXPERIENCES = 'experiences',
  CORE_SKILLS = 'core-skills',
  TESTIMONIALS = 'testimonials',
}

export const CONTACT_DATA = [
  {
    name: 'Email',
    link: 'mailto:juraj.slavicek@gmail.com',
  },
  {
    name: 'Calendly',
    link: 'https://calendly.com/juraj-slavicek/60-minute-meeting',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/juraj-slavicek-9204b196/',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Ziker22',
  },
  {
    name: 'Resume',
    link: '/resume.pdf',
  },
];

export const CORE_SKILLS: TCoreSkill[] = [
  {
    name: 'Software Development',
    description:
      'Lead Software Engineer with 10+ years in full-stack development, excelling in problem-solving, code quality, and agile practices.',
    image: {
      data: mouseIcon,
      alt: 'Computer mouse icon',
    },
  },
  {
    name: 'Frontend engineering',
    description:
      'Expert in frontend development, crafting scalable web and mobile apps with React, React Native and Next.js, focused on top-tier user experiences.',
    image: {
      data: reactIcon,
      alt: 'React icon',
    },
  },
  {
    name: 'Backend engineering',
    description:
      'Competent in backend engineering, experienced with Node.js, Django, and PostgreSQL, focusing on integrating front-end solutions and managing APIs.',
    image: {
      data: pythonIcon,
      alt: 'Python icon',
    },
  },
];

export const EXPERIENCES: TExperience[] = [
  {
    company: {
      name: '7bridges',
      logo: sevenBridgesLogo,
      url: 'https://www.the7bridges.com/',
    },
    isRemote: true,
    startDate: '2022',
    location: 'London, UK',
    endDate: 'Now',
    bulletPoints: [
      'Led technical efforts at 7Bridges, an AI-powered supply chain management innovator, enhancing customer experience and automation for clients like Philipp Plein and Huel.',
      'Led a significant refactoring and modernization of a complex JavaScript codebase, transitioning to TypeScript while maintaining ongoing production operations and shipping new features. Enhanced code maintainability, and reduced runtime errors. Increased TypeScript integration from 14% to 87%.',
      'Successfully introduced a 75% improvement in support time by introducing state-of-the-art engineering practices, which dramatically improved productivity and allowed for greater focus on core development tasks.',
    ],
    images: [sevenBridgesSreen1, sevenBridgesSreen2],
    tech: ['React', 'GraphQL', 'Django', 'Python', ' TypeScript'],
    title: 'Lead Software Engineer',
  },
  {
    company: {
      name: 'Simplicity',
      logo: simplicityLogoSimple,
      url: 'https://www.onesimplicity.com/',
    },
    isRemote: false,
    startDate: '2021',
    endDate: '2022',
    bulletPoints: [
      "Contributed to Simplicity’s mission of transforming cities into AI-powered hubs by leading the development of web and mobile applications, enhancing the urban experience for over 50 million residents across 120 cities worldwide. I joined the team following a major capital raise and played a pivotal role in the company's rapid expansion from inception to operations in all major U.S. cities, including New York, Los Angeles, and Miami.",
      'Led a team of 5 front-end engineers in the greenfield development of multiple complex web applications for city officials and a native mobile app for residents on iOS and Android, establishing the entire front-end architecture.',
      'Utilized a tech stack comprising Next.js, React, React Native, Expo Cypress, Node.js, and GraphQL to build robust, maintainable, and highly scalable applications.',
    ],
    images: [simplicityScreen2, simplicityScreen3, simplicityScreen1],
    tech: ['React', 'React Native', ' Expo', 'Cypress', 'Node.js', 'GraphQL'],
    title: 'Lead Frontend Engineer ',
    location: 'Bratislava, Slovakia',
  },
  {
    company: {
      name: 'Ciklum',
      logo: ciklumLogo,
      url: 'https://www.ciklum.com/',
    },
    isRemote: false,
    startDate: '2018',
    endDate: '2021',
    bulletPoints: [
      'In Ciklum I was part of multiple high-profile software development projects across fashion, real estate, e-commerce, and financial sectors as both a senior and lead engineer, guiding architectural and technical direction for global platforms like Peek-Cloppenburg, Der Standard, and others.',
      'Designed and implemented modern frontend architectures and established robust testing frameworks, introducing CI/CD pipelines and code quality systems to ensure scalable and maintainable software solutions.',
      'Delivered high-performance software, both in greenfield projects and legacy rewrites, capable of handling tens of HTTP requests per second, demonstrating exceptional efficiency and scalability.',
      'Led and mentored a substantial number of full-stack developers across three distinct projects.',
    ],
    images: [ciklumScreen1, ciklumScreen2],
    location: 'Bratislava, Slovakia',
    tech: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Java', 'Spring Boot', 'Scala', 'Docker', 'Azure'],
    title: 'Senior Fullstack Engineer',
  },
  {
    company: {
      name: 'ESET',
      logo: esetLogo,
      url: 'https://www.eset.com/',
    },
    isRemote: false,
    startDate: '2015',
    endDate: '2018',
    bulletPoints: [
      'In ESET a global leader in digital security, providing advanced antivirus and cybersecurity solutions I transitioned from a junior to a senior developer role, taking ownership of a handful of critical features that impacted millions of users.',
      'Introduced and integrated React into the existing Java codebase, modernizing the application architecture and improving maintainability while also enabling a transition from on-premise to cloud.',
      'Participated in creating a company-wide component library, standardizing UI components, and promoting reusability across different projects.',
    ],
    location: 'Bratislava, Slovakia',
    images: [esetScreen1, esetScreen2],
    tech: ['TypeScript', 'Java', 'GWT (Google web toolkit)', 'gRPC'],
    title: 'Software Engineer',
  },
];

export const INTRO_COMPONENT_DATA = [
  {
    src: sevenBridgesLogo,
    title: 'The 7bridges company',
    alt: 'The 7 bridges',
    href: 'https://www.the7bridges.com/',
  },
  {
    src: simplicityLogoSimple,
    title: 'Simplicity',
    alt: 'Simplicity company',
    href: 'https://www.onesimplicity.com/',
  },
  {
    src: ciklumLogo,
    title: 'Ciklum western europe',
    alt: 'Ciklum western europe company',
    href: 'https://www.dream.jobs',
  },
  {
    src: esetLogo,
    title: 'ESET',
    alt: 'ESET company',
    href: 'https://www.eset.com/',
  },
];
