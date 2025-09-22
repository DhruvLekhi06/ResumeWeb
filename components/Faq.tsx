import React, { useState } from 'react';
import { FAQS } from '../constants';
import type { FaqItem } from '../types';
import { ChevronDownIcon } from './Icons';

const FaqItemComponent: React.FC<{ item: FaqItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => (
    <div className="border-b border-gray-200 py-6">
        <button onClick={onToggle} className="w-full flex justify-between items-center text-left">
            <h4 className="text-lg font-medium">{item.question}</h4>
            <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full flex-shrink-0">
               <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
        </button>
        <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <p className="text-gray-600 pt-4">{item.answer}</p>
          </div>
        </div>
    </div>
);

export const Faq: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null);
    return (
        <section id="faq" className="container mx-auto px-6 py-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Frequently Asked Questions</h2>
            <div>
                {FAQS.map(faq => (
                    <FaqItemComponent key={faq.id} item={faq} isOpen={openId === faq.id} onToggle={() => setOpenId(openId === faq.id ? null : faq.id)} />
                ))}
            </div>
        </section>
    );
};
