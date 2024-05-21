import esetLogo from '../images/esetLogo.svg';
import sevenBridgesLogo from '../images/sevenBridgesLogo.svg';
import simplicityLogoSimple from '../images/simplicityLogoSimple.svg';
import ciklumLogo from '../images/ciklumLogo.svg';
import type { TCoreSkill, TExperience } from '../types/TTypes';
import reactIcon from '../images/reactIcon.svg';
import pythonIcon from '../images/pythonIcon.svg';
import mouseIcon from '../images/mouseIcon.svg';

export const CORE_SKILLS: TCoreSkill[] = [
  {
    name: 'Software Development',
    description: 'I have experience in developing software in various languages and frameworks.',
    image: {
      data: mouseIcon,
      alt: 'Computer mouse icon',
    },
  },
  {
    name: 'Frontend engineering',
    description: 'I have experience in developing software in various languages and frameworks.',
    image: {
      data: reactIcon,
      alt: 'React icon',
    },
  },
  {
    name: 'Backend engineering',
    description: 'I have experience in developing software in various languages and frameworks.',
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
    },
    isRemote: true,
    startDate: "Jan 22'",
    endDate: 'Now',
    description: 'TBD',
    images: [],
    tech: [],
    title: 'Software Engineer',
  },
  {
    company: {
      name: 'Simplicity',
      logo: simplicityLogoSimple,
    },
    isRemote: false,
    startDate: "Jun 21'",
    endDate: "Jan 22'",
    description: 'TBD',
    images: [],
    tech: [],
    title: 'Software Engineer',
  },
  {
    company: {
      name: 'Ciklum',
      logo: ciklumLogo,
    },
    isRemote: false,
    startDate: "Aug 18'",
    endDate: "Jun 21'",
    description: 'TBD',
    images: [],
    tech: [],
    title: 'Software Engineer',
  },
  {
    company: {
      name: 'ESET',
      logo: esetLogo,
    },
    isRemote: false,
    startDate: "Aug 18'",
    endDate: "Jun 15'",
    description: 'TBD',
    images: [],
    tech: [],
    title: 'Software Engineer',
  },
];

export const INTRO_COMPONENT_DATA = [
  {
    src: sevenBridgesLogo,
    title: 'The 7bridges',
    alt: 'The 7 bridges logo',
    href: 'https://www.the7bridges.com/',
  },
  {
    src: simplicityLogoSimple,
    title: 'Simplicity',
    alt: 'Simplicity logo',
    href: 'https://www.onesimplicity.com/',
  },
  {
    src: ciklumLogo,
    title: 'Ciklum western europe',
    alt: 'Ciklum western europe logo',
    href: 'https://www.dream.jobs',
  },
  {
    src: esetLogo,
    title: 'ESET',
    alt: 'ESET logo',
    href: 'https://www.eset.com/',
  },
];
