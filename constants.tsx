import { Layout, Code, ShoppingCart, Palette, ShieldCheck, TrendingUp, Smartphone, Rocket } from 'lucide-react';
import { Service, Project, TeamMember, BlogPost, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Website Design',
    description: 'Stunning, user-centric designs that capture your brand essence and engage visitors instantly.',
    deliverables: ['Custom UI Design', 'Interactive Prototypes', 'Mobile-First Layouts', 'Design Systems'],
    benefits: ['Increased Brand Value', 'Better User Retention', 'Distinct Market Identity'],
    icon: Layout
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Robust, scalable, and high-performance coding using modern technologies.',
    deliverables: ['React/Next.js Development', 'API Integration', 'CMS Implementation', 'Performance Optimization'],
    benefits: ['Fast Load Times', 'Secure Architecture', 'Future-Proof Code'],
    icon: Code
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Stores',
    description: 'Turn visitors into buyers with seamless shopping experiences optimized for conversion.',
    deliverables: ['Shopify/WooCommerce', 'Payment Gateway Setup', 'Inventory Management', 'Cart Optimization'],
    benefits: ['Higher Sales Volume', 'Streamlined Operations', 'Secure Transactions'],
    icon: ShoppingCart
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Data-driven interfaces designed to guide users effortlessly to your goals.',
    deliverables: ['User Research', 'Wireframing', 'Usability Testing', 'User Flow Mapping'],
    benefits: ['Reduced Bounce Rates', 'Higher Satisfaction', 'Intuitive Navigation'],
    icon: Palette
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Keep your digital assets running smoothly with 24/7 monitoring and updates.',
    deliverables: ['Security Patches', 'Content Updates', 'Server Monitoring', 'Bug Fixes'],
    benefits: ['Peace of Mind', 'Maximum Uptime', 'Consistent Performance'],
    icon: ShieldCheck
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MedCare Portal',
    category: 'Healthcare',
    imageUrl: 'https://picsum.photos/id/1/800/600',
    description: 'Patient appointment scheduling system.',
    result: 'Reduced wait times by 40%'
  },
  {
    id: '2',
    title: 'Urban Outfitters',
    category: 'E-Commerce',
    imageUrl: 'https://picsum.photos/id/2/800/600',
    description: 'Fashion retail storefront overhaul.',
    result: '150% increase in mobile sales'
  },
  {
    id: '3',
    title: 'TechCorp Global',
    category: 'Corporate',
    imageUrl: 'https://picsum.photos/id/3/800/600',
    description: 'Enterprise corporate branding site.',
    result: 'Generated 500+ B2B leads'
  },
  {
    id: '4',
    title: 'LearnEasy LMS',
    category: 'Education',
    imageUrl: 'https://picsum.photos/id/4/800/600',
    description: 'Interactive learning management platform.',
    result: 'Over 10,000 active students'
  },
  {
    id: '5',
    title: 'EcoStart',
    category: 'Startup',
    imageUrl: 'https://picsum.photos/id/5/800/600',
    description: 'Green energy SaaS dashboard.',
    result: 'Secured Series A funding'
  },
  {
    id: '6',
    title: 'Dr. Smith Clinic',
    category: 'Healthcare',
    imageUrl: 'https://picsum.photos/id/6/800/600',
    description: 'Local clinic website with telemedicine.',
    result: '2x increase in remote consults'
  },
    {
    id: '7',
    title: 'Luxe Home Decor',
    category: 'E-Commerce',
    imageUrl: 'https://picsum.photos/id/7/800/600',
    description: 'High-end furniture store.',
    result: '30% conversion rate boost'
  },
  {
    id: '8',
    title: 'FinanceFlow',
    category: 'Corporate',
    imageUrl: 'https://picsum.photos/id/8/800/600',
    description: 'Fintech banking solution landing page.',
    result: '20k signups in first month'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Creative Director',
    bio: 'Award-winning designer with 10+ years helping brands find their visual voice.',
    imageUrl: 'https://picsum.photos/id/64/300/300'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Lead Developer',
    bio: 'Full-stack wizard specializing in scalable React architectures and performance.',
    imageUrl: 'https://picsum.photos/id/65/300/300'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'UX Strategist',
    bio: 'Psychology background turned UX expert, focused on human-centric design.',
    imageUrl: 'https://picsum.photos/id/66/300/300'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '10 Web Design Trends for 2025',
    excerpt: 'From glassmorphism to AI-generated imagery, discover what is shaping the web next year.',
    date: 'Oct 15, 2024',
    author: 'Sarah Jenkins',
    imageUrl: 'https://picsum.photos/id/10/800/400',
    category: 'Design'
  },
  {
    id: '2',
    title: 'Why Your Business Needs an E-Commerce Store',
    excerpt: 'The retail landscape has changed forever. Here is why you cannot afford to wait.',
    date: 'Oct 10, 2024',
    author: 'David Chen',
    imageUrl: 'https://picsum.photos/id/20/800/400',
    category: 'Business'
  },
  {
    id: '3',
    title: 'SEO Tips for Better Website Rankings',
    excerpt: 'Technical SEO guide for business owners looking to dominate local search results.',
    date: 'Sep 28, 2024',
    author: 'Elena Rodriguez',
    imageUrl: 'https://picsum.photos/id/30/800/400',
    category: 'Marketing'
  },
  {
    id: '4',
    title: 'Mobile-First Design: Why It Matters',
    excerpt: 'Google prioritizes mobile. Your users are on mobile. Why aren\'t you designing for mobile first?',
    date: 'Sep 15, 2024',
    author: 'Sarah Jenkins',
    imageUrl: 'https://picsum.photos/id/40/800/400',
    category: 'Design'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'James Wilson',
    company: 'Apex Logistics',
    quote: "Skyline transformed our outdated site into a lead generation machine. Professional, fast, and creative."
  },
  {
    id: '2',
    clientName: 'Maria Garcia',
    company: 'Bloom Boutique',
    quote: "Our online sales doubled within three months of launching the new e-commerce store. Highly recommended!"
  },
  {
    id: '3',
    clientName: 'Robert Fox',
    company: 'TechStart Inc',
    quote: "They understood our startup culture and delivered a product that impressed our investors immensely."
  }
];

export const BENEFITS = [
  { title: 'Fast Loading', icon: Rocket, desc: 'Optimized for speed to keep users engaged.' },
  { title: 'Mobile Optimized', icon: Smartphone, desc: 'Perfect experience on every device.' },
  { title: 'SEO-Friendly', icon: TrendingUp, desc: 'Built to rank high on search engines.' },
  { title: 'Conversion Focused', icon: ShoppingCart, desc: 'Designed to turn visitors into customers.' },
];
