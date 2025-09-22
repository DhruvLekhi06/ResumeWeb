
import type { Project, Experience, FaqItem, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Financio - AI Cashflow tracker",
    category: "Fintech, web app",
    description: "A smart cashflow tracker using AI to provide insights and predictions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    longDescription: "Financio is a cutting-edge web application designed to simplify cash flow management for individuals and small businesses. Leveraging artificial intelligence, it automatically categorizes transactions, forecasts future financial states, and provides actionable insights to help users make smarter financial decisions. The goal was to create an interface that is both powerful and incredibly easy to use, turning complex financial data into clear, understandable visualisations.",
    videoUrl: "https://www.youtube.com/embed/lNlxu4b1tS0",
  },
  {
    id: 2,
    name: "Fintrack - Personal finance simplified",
    category: "Fintech, web app",
    description: "An intuitive mobile app to manage personal finances, track expenses, and set budgets.",
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iMzEyIiB2aWV3Qm94PSIwIDAgNTAwIDMxMiIgZmlsbD0ibm9uZSI+CiAgPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMTIiIHJ4PSIxNiIgZmlsbD0iIzFBMUEyRSIvPgogIDxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiMxNjIxM0UiLz4KICA8dGV4dCB4PSI0NSIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI0U5NDU2MCIgZm9udC13ZWlnaHQ9ImJvbGQiPkZJTlRSQUNLIERBU0hCT0FSRDwvdGV4dD4KICA8cmVjdCB4PSIzMCIgeT0iOTAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTkyIiByeD0iOCIgZmlsbD0iIzE2MjEzRSIvPgogIDxjaXJjbGUgY3g9IjEzMCIgY3k9IjE2MCIgcj0iNDAiIHN0cm9rZT0iIzBGMzQ2MCIgc3Ryb2tlLXdpZHRoPSI4IiBmaWxsPSJub25lIi8+CiAgPGNpcmNsZSBjeD0iMTMwIiB5PSIxNjAiIHI9IjMwIiBzdHJva2U9IiNFOTQ1NjAiIHN0cm9rZS13aWR0aD0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iMTI1LjYiIHN0cm9rZS1kYXNob2Zmc2V0PSIzMS40Ii8+CiAgPHRleHQgeD0iMTE1IiB5PSIxNjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIGZvbnQtd2VpZ2h0PSJib2xkIj43NSU8L3RleHQ+CiAgPHJlY3QgeD0iMjUwIiB5PSIzMCIgd2lkdGg9IjIyMCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiMxNjIxM0UiLz4KICA8dGV4dCB4PSIyNjUiIHk9IjExNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjQTlBOTlBOSI+VG90YWwgQmFsYW5jZTwvdGV4dD4KICA8dGV4dCB4PSIyNjUiIHk9IjE0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgZm9udC13ZWlnaHQ9ImJvbGQiPiQxMiwzNDUuNjc8L3RleHQ+CiAgPHJlY3QgeD0iMjUwIiB5PSIxOTAiIHdpZHRoPSIyMjAiIGhlaWdodD0iOTIiIHJ4PSI4IiBmaWxsPSIjMTYyMTNFIi8+CiAgPHRleHQgeD0iMjY1IiB5PSIyMTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI0E5QTlBOSI+TW9udGhseSBTcGVuZGluZzwvdGV4dD4KICA8cGF0aCBkPSJNMjcwIDI2NSBDIDMxMCAyMzUsIDM1MCAyNzUsIDM5MCAyNDUiIHN0cm9rZT0iI0U5NDU2MCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=",
    longDescription: "Fintrack is a mobile-first application designed to make personal finance management accessible and straightforward for everyone. From tracking daily expenses to setting long-term savings goals, Fintrack provides a comprehensive suite of tools in a clean, intuitive interface. We focused on a user-centric design process, conducting extensive user research to ensure the app addresses real-world financial challenges and empowers users to take control of their financial future.",
    videoUrl: "https://www.youtube.com/embed/YHsXpyjYacQ",
  },
  {
    id: 3,
    name: "Forex Screener",
    category: "Stock market tool",
    description: "A powerful tool for forex traders to screen currency pairs based on various technical indicators.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    longDescription: "The Forex Screener is a sophisticated web-based tool for serious traders. It allows users to scan the entire foreign exchange market in real-time based on a wide range of technical indicators and custom criteria. The primary design challenge was to present a vast amount of complex data in a way that is easy to digest and act upon. The resulting dashboard is highly customizable, performant, and provides traders with the critical information they need to make timely decisions.",
    videoUrl: "https://www.youtube.com/embed/LcohFwTi8Jo",
  },
];

export const SKILLS: string[] = [
  "UI Design", "UX Design", "User Research", "Figma", "Prototyping",
  "Design System", "Interaction Design", "Usability Testing",
  "Wireframing", "UI Animation", "Logo Design", "Framer Development"
];

// FIX: Add EXPERIENCES constant to fix import error in Experience.tsx
export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    role: "Senior Product Designer",
    period: "2020 - Present",
    description: "Led the design of several key products, focusing on user-centric design principles. Collaborated with cross-functional teams to deliver high-quality user experiences. Mentored junior designers and helped shape the design culture of the company."
  },
  {
    id: 2,
    company: "Creative Minds LLC",
    role: "UX/UI Designer",
    period: "2018 - 2020",
    description: "Designed and prototyped user interfaces for web and mobile applications. Conducted user research and usability testing to inform design decisions. Worked closely with developers to ensure faithful implementation of designs."
  },
  {
    id: 3,
    company: "Innovate Co.",
    role: "Junior Designer",
    period: "2016 - 2018",
    description: "Assisted in the creation of wireframes, mockups, and prototypes. Contributed to the development of design systems and style guides. Gained experience in a fast-paced agile environment."
  }
];

// FIX: Add FAQS constant to fix import error in Faq.tsx
export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "What is your design process?",
    answer: "My design process is centered around the user. I start with research and discovery to understand user needs and business goals. Then, I move to ideation, wireframing, and prototyping. I believe in iterative design, so I conduct usability testing at various stages to gather feedback and refine the design. Finally, I work closely with developers to ensure a high-quality implementation."
  },
  {
    id: 2,
    question: "What design tools do you use?",
    answer: "I am proficient in a variety of design and prototyping tools. My primary tools are Figma and Sketch for UI/UX design. I also use Adobe Creative Suite for graphic design and Protopie for advanced animations and interactions. I'm always eager to learn and adapt to new tools and technologies."
  },
  {
    id: 3,
    question: "Can you work with existing brand guidelines?",
    answer: "Absolutely. I have extensive experience working with established brand guidelines and design systems. I believe in maintaining consistency while also finding opportunities for creative expression within the brand's framework. I can also help develop or refine design systems if needed."
  },
  {
    id: 4,
    question: "What's your availability?",
    answer: "I am currently available for new projects. Feel free to reach out via the contact form or email to discuss your project in detail. I'm excited to learn about your ideas and how I can help bring them to life."
  }
];

// FIX: Add TESTIMONIALS constant to fix import error in Testimonials.tsx
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Working with Dhruv was a game-changer for our product. His design sense and attention to detail are exceptional. He truly understood our vision and translated it into a beautiful and user-friendly interface.",
    author: "Jane Doe",
    title: "CEO, Tech Solutions Inc."
  },
  {
    id: 2,
    quote: "The user experience of our app improved tenfold after Dhruv's redesign. He is a great collaborator and a pleasure to work with. Highly recommended!",
    author: "John Smith",
    title: "Product Manager, Creative Minds LLC"
  },
  {
    id: 3,
    quote: "Dhruv has a unique ability to simplify complex problems into elegant design solutions. His work has had a significant impact on our user engagement and satisfaction.",
    author: "Emily Johnson",
    title: "Founder, Innovate Co."
  }
];
