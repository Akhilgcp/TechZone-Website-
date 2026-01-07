"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
    {
        title: 'Enroll',
        description: 'Take the first step and secure your spot in our industry-leading programs.',
        icon: '01'
    },
    {
        title: 'Learn',
        description: 'Immerse yourself in our hands-on curriculum led by industry experts.',
        icon: '02'
    },
    {
        title: 'Practice',
        description: 'Apply your skills to real-world projects and build a strong portfolio.',
        icon: '03'
    },
    {
        title: 'Internship',
        description: 'Gain valuable experience through our partner company internships.',
        icon: '04'
    },
    {
        title: 'Career Growth',
        description: 'Launch your transition into a high-growth tech career with our support.',
        icon: '05'
    }
];

const LearningJourneyStepper: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="py-32 px-6 bg-neutral-950 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Your Learning Journey at TechZone
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl">
                        A structured path designed to transform you from a learner into a professional.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Continuous Progress Line */}
                    <div className="absolute top-12 left-0 right-0 h-1 bg-neutral-900 hidden md:block" />
                    <motion.div
                        className="absolute top-12 left-0 right-0 h-1 bg-blue-600 origin-left hidden md:block"
                        style={{ scaleX }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                className="flex flex-col items-center md:items-start text-center md:text-left"
                            >
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 rounded-full bg-neutral-900 border-2 border-neutral-800 flex items-center justify-center group-hover:border-blue-500 transition-colors duration-500 relative z-10">
                                        <span className="text-3xl font-bold text-neutral-700 group-hover:text-blue-500 transition-colors">{step.icon}</span>
                                    </div>

                                    {/* Vertical line for mobile */}
                                    {idx !== steps.length - 1 && (
                                        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-neutral-900 md:hidden" />
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningJourneyStepper;
