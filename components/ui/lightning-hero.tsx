"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import LightningText from '@/components/ui/lightning-text';

interface LightningHeroProps {
    onExplore?: () => void;
}

const LightningHero: React.FC<LightningHeroProps> = ({ onExplore }) => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2 + 0.5,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Lightning Text Background */}
            <LightningText text="TechZone Academy" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                <div className="text-center p-6 pointer-events-auto">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3ca2fa]/10 border border-[#3ca2fa]/20 mb-6 backdrop-blur-sm"
                    >
                        <Zap className="h-4 w-4 text-[#3ca2fa]" />
                        <span className="text-sm font-medium text-gray-200">
                            Advanced Tech Education
                        </span>
                    </motion.div>

                    <motion.p
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl mx-auto text-lg text-gray-300 mb-10 mt-[300px]"
                    >
                        Master Data Analytics, Data Science, AI/ML with Gen AI, and Prompt Engineering.
                        Transform your career with hands-on training from industry experts.
                    </motion.p>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <button
                            onClick={onExplore}
                            className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 mx-auto"
                        >
                            Explore Our Academy
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LightningHero;
