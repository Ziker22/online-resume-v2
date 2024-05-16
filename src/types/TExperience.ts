import type { ImageMetadata } from 'astro';
import type { TCompany } from './TCompany';

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
