import type { ImageMetadata } from 'astro';

export type TCommonComponentProps = {
  className?: string;
};

export type TTestimonial = {
  author: string;
  text: string;
  role: string;
};

export type TImage = {
  data: ImageMetadata;
  alt: string;
};

export type TCompany = {
  name: string;
  logo: ImageMetadata;
};

export type TExperience = {
  company: TCompany;
  isRemote: boolean;
  location: string;
  title: string;
  startDate: string;
  endDate: string | null;
  bulletPoints: string[];
  tech: string[];
  images: ImageMetadata[];
};

export type TCoreSkill = {
  name: string;
  description: string;
  image: TImage;
};
