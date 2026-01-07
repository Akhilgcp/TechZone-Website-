import React from 'react';
import { cn } from '@/lib/utils';

interface DotCardProps {
    title: string;
    description: string;
    className?: string;
    children?: React.ReactNode;
}

export default function MovingDotCard({ title, description, className, children }: DotCardProps) {
    return (
        <div className={cn("outer group relative w-full h-full", className)}>
            <div className="dot"></div>
            <div className="card w-full h-full bg-neutral-900 border border-neutral-800 text-white p-6 relative overflow-hidden z-10 flex flex-col justify-between">
                <div className="ray"></div>

                <div className="relative z-20">
                    <div className="text-2xl font-bold mb-2">{title}</div>
                    <div className="label text-neutral-400 text-sm mb-4">{description}</div>
                    {/* Decorative lines */}
                    <div className="line topl absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="line leftl absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                    <div className="line bottoml absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="line rightl absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                </div>

                <div className="relative z-20 mt-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
