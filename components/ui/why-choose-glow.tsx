"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Briefcase, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
    {
        title: 'Real-Time Projects',
        description: 'Work on live industry projects to gain practical exposure and build a professional portfolio.',
        icon: Target,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Career Guidance',
        description: 'Personalized mentorship and support to help you navigate your career path in the tech industry.',
        icon: Users,
        color: 'from-purple-500 to-blue-500'
    },
    {
        title: 'Internship Assistance',
        description: 'Connecting you with partner companies for internships to bridge the gap between learning and work.',
        icon: Briefcase,
        color: 'from-blue-600 to-indigo-600'
    },
    {
        title: 'AI-Driven Learning',
        description: 'Tailored learning experiences powered by AI to help you learn faster and more effectively.',
        icon: BrainCircuit,
        color: 'from-cyan-400 to-blue-500'
    }
];

const GlowCard = ({ feature }: { feature: typeof features[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-neutral-800/50"
        >
            {/* Hover Glow Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.1), transparent 40%)`
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
                    feature.color
                )}>
                    <feature.icon className="text-white h-7 w-7" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                    {feature.description}
                </p>
            </div>

            {/* Subtle Border Glow */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: `radial-gradient(100px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.5), transparent 80%)`
                }}
            />
        </div>
    );
};

const WhyChooseGlow: React.FC = () => {
    return (
        <section className="py-32 px-6 bg-neutral-950">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Why Choose TechZone?
                        </h2>
                        <p className="text-lg text-neutral-400">
                            We don't just teach technology; we build careers. Our methodology is focused on real-world application and personal growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <div className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-neutral-950 flex items-center justify-center text-xs font-bold text-blue-500">
                                        {i}+
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm text-neutral-300">Joined by 1000+ Students</span>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <GlowCard feature={feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseGlow;
