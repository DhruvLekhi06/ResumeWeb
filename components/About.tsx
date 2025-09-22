import React from 'react';

export const About: React.FC = () => (
  <section id="about-me" className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
      Help people<br />
      get their<br />
      product<br />
      professionally
    </h2>
    <div>
      <p className="text-gray-600 leading-relaxed">
        I am a highly experienced and respected product designer based in Bengaluru, India. Over my career, I have designed a wide range of products, including SaaS, landing page, and mobile apps. I am renowned for my innovative, creative and functional designs that cater to the needs of consumers.
      </p>
      <p className="mt-4 text-gray-600 leading-relaxed">
        I have a passion for creating beautiful and intuitive user interfaces. I enjoy experimenting with different design methods and technologies, and constantly push the boundaries of design to create unique, engaging and functional user experiences.
      </p>
    </div>
  </section>
);