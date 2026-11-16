export interface Company {
  id: string;
  name: string;
  tagline: string;
  description: string;
  vision: string;
  mission: string;
  values: string[];
  logo: string;
  heroImage: string;
  sector: string;
}

export interface Product {
  id: string;
  companyId: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  specifications?: Record<string, string>;
  category: string;
  stockStatus: 'in-stock' | 'out-of-stock' | 'on-request';
}

export interface Property {
  id: string;
  name: string;
  location: string;
  type: string;
  description: string;
  features: string[];
  price?: string;
  status: 'available' | 'sold' | 'reserved';
  images: string[];
  video?: string;
}

export interface Project {
  id: string;
  companyId: string;
  name: string;
  description: string;
  location: string;
  status: string;
  images: string[];
  video?: string;
}

export interface MediaItem {
  id: string;
  companyId: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  category: string;
}
