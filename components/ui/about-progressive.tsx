"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AboutCard {
    id: string;
    title: string;
    description: string;
    details: string;
}

const aboutCards: AboutCard[] = [
    {
        id: 'training',
        title: 'Industry-Focused Training',
        description: 'Hands-on learning with real-world curriculum.',
        details: 'Our courses are designed in collaboration with industry leaders to ensure you learn the most relevant skills. We focus on project-based learning, giving you a portfolio of work that speaks for itself.'
    },
    {
        id: 'ai',
        title: 'AI-Driven Learning',
        description: 'Leveraging AI to personalize and accelerate your growth.',
        details: 'We integrate advanced AI tools into our curriculum, teaching you how to use Gen AI, LLMs, and prompt engineering to become 10x more productive in your tech career.'
    },
    {
        id: 'career',
        title: 'Career Support',
        description: 'End-to-end guidance from resume to interview.',
        details: 'Our dedicated career services team provides personalized coaching, mock interviews, internship assistance, and job placement support to help you land your dream tech role.'
    },
    {
        id: 'hyd',
        title: 'Hyderabad-Based Presence',
        description: 'Established learning centers in the heart of tech hubs.',
        details: 'With branches in Lakdikapul, Himayat Nagar, and Tolichowki, we offer convenient access to high-quality tech education and a local community of learners and mentors.'
    }
];

const AboutProgressive: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section id="about" className="py-32 px-6 bg-neutral-950 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Welcome to TechZone Academy
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        We are a leading IT training academy committed to empowering individuals with the skills needed to thrive in the modern digital economy. Our expert-led programs are tailored for various skill levels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {aboutCards.map((card) => (
                        <motion.div
                            key={card.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group cursor-pointer relative rounded-3xl border transition-all duration-500 overflow-hidden",
                                expandedId === card.id
                                    ? "bg-blue-600/10 border-blue-500/50 p-8 shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                                    : "bg-neutral-900 border-neutral-800 p-8 hover:bg-neutral-800/80 hover:border-neutral-700"
                            )}
                            onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className={cn(
                                    "text-xl font-semibold transition-colors duration-300",
                                    expandedId === card.id ? "text-blue-400" : "text-white"
                                )}>
                                    {card.title}
                                </h3>
                                <div className={cn(
                                    "p-1.5 rounded-full transition-all duration-300",
                                    expandedId === card.id ? "bg-blue-500 text-white" : "bg-neutral-800 text-neutral-400"
                                )}>
                                    {expandedId === card.id ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </div>

                            <p className="text-neutral-400 mb-2">
                                {card.description}
                            </p>

                            <AnimatePresence>
                                {expandedId === card.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-4 text-neutral-300 border-t border-blue-500/20 leading-relaxed">
                                            {card.details}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Hover Highlight */}
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default AboutProgressive;
