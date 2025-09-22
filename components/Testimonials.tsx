import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ArrowRightIcon } from './Icons';

export const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    const handleNext = () => setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <section id="testimonials" className="container mx-auto px-6 py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Testimonials</h2>
            <div className="relative">
                <div className="bg-white rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-sm border border-gray-100">
                    <p className="text-xl md:text-2xl font-medium text-gray-700">"{currentTestimonial.quote}"</p>
                    <h4 className="font-bold text-lg mt-8">{currentTestimonial.author}</h4>
                    <p className="text-gray-500">{currentTestimonial.title}</p>
                </div>
                 <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors">
                    <ArrowRightIcon className="w-6 h-6 transform rotate-180" />
                </button>
                <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors">
                    <ArrowRightIcon className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
};
