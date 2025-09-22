
export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  longDescription: string;
  videoUrl: string;
}

// FIX: Add Experience interface to define the shape of experience objects.
export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

// FIX: Add FaqItem interface to resolve import error in Faq.tsx.
export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// FIX: Add Testimonial interface to define the shape of testimonial objects.
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
}
