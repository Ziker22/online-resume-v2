import type { ImageMetadata } from 'astro';

export type TCommonComponentProps = {
  className?: string;
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
  title: string;
  startDate: string;
  endDate: string | null;
  description: string;
  tech: string[];
  images: ImageMetadata[];
};

export type TCoreSkill = {
  name: string;
  description: string;
  image: TImage;
};