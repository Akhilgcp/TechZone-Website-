"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StoryDividerProps {
    text: string;
}

const StoryDivider: React.FC<StoryDividerProps> = ({ text }) => {
    return (
        <div className="relative py-24 overflow-hidden flex flex-col items-center justify-center">
            {/* Background Gradient Line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 bg-neutral-950 px-8 flex flex-col items-center"
            >
                <motion.div
                    className="w-1 h-12 bg-gradient-to-b from-blue-500/50 to-transparent mb-4"
                    animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <p className="text-sm font-light tracking-[0.3em] uppercase text-neutral-400 text-center">
                    {text}
                </p>
            </motion.div>
        </div>
    );
};

export default StoryDivider;
