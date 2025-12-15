'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface FeatureCardProps {
    feature: Feature;
    className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
    const Icon = feature.icon;

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
                'group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300',
                'hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20',
                className
            )}
        >
            {/* Interactive Background Boxes Grid - Only visible on hover */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 p-2">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ backgroundColor: 'rgba(30, 41, 59, 0.4)' }}
                            whileHover={{
                                backgroundColor: [
                                    'rgba(59, 130, 246, 0.7)',
                                    'rgba(139, 92, 246, 0.7)',
                                    'rgba(236, 72, 153, 0.7)',
                                    'rgba(251, 191, 36, 0.7)',
                                ][Math.floor(Math.random() * 4)],
                                scale: 1.05,
                                transition: { duration: 0.1 },
                            }}
                            className="rounded-sm border border-neutral-700/40"
                        />
                    ))}
                </div>
            </div>

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-[1]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4">
                {/* Icon with gradient background */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                    {feature.description}
                </p>
            </div>

            {/* Bottom glow effect */}
            <div className="absolute -bottom-2 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-[1]" />
        </motion.div>
    );
}
