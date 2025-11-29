import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  benefits: string[];
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: 'Healthcare' | 'E-Commerce' | 'Corporate' | 'Education' | 'Startup';
  imageUrl: string;
  description: string;
  result: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  quote: string;
  logoUrl?: string;
}