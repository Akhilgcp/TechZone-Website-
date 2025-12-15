"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Code, UserCheck, Briefcase, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureItem = {
    key: string;
    title: string;
    description: string;
    icon: React.ReactNode;
};

const FEATURES: FeatureItem[] = [
    {
        key: "projects",
        title: "Real-Time Projects",
        description:
            "Work on industry-grade, real-world projects that simulate company workflows. Gain hands-on experience and build a portfolio that stands out.",
        icon: <Code className="h-6 w-6 text-white" />,
    },
    {
        key: "career",
        title: "Career Guidance",
        description:
            "Personalized 1:1 mentorship and role-clarity sessions that help you map a practical career roadmap and make confident decisions.",
        icon: <UserCheck className="h-6 w-6 text-white" />,
    },
    {
        key: "internship",
        title: "Internship Assistance",
        description:
            "Support finding internships that provide real exposure, practical experience, and a stronger start to your IT career.",
        icon: <Briefcase className="h-6 w-6 text-white" />,
    },
    {
        key: "ai",
        title: "AI-Driven Learning Experience",
        description:
            "AI-powered practice, smart assessments, and guided labs accelerate learning and make training efficient and practical.",
        icon: <Sparkles className="h-6 w-6 text-white" />,
    },
];

export default function Features2x2({ className }: { className?: string }) {
    return (
        <section id="features" className={cn("py-8 md:py-12 relative", className)}>
            <div className="mx-auto max-w-6xl px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Why Choose TechZone Academy
                    </h2>
                    <p className="mt-2 text-neutral-400 max-w-2xl mx-auto">
                        Experience world-class training with real-world projects, personalized mentorship, and AI-powered learning.
                    </p>
                </div>

                {/* 2 columns on md+, single column on mobile */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="TechZone features">
                    {FEATURES.map((f) => (
                        <li key={f.key} className="list-none">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            >
                                <div className="flex gap-4">
                                    {/* Icon box */}
                                    <div className="flex-none">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#dd7bbb] via-[#d79f1e] to-[#5a922c] flex items-center justify-center shadow-lg shadow-purple-500/30">
                                            {f.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
                                        <p className="text-sm text-neutral-400 leading-relaxed">
                                            {f.description}
                                        </p>
                                    </div>
                                </div>
                            </GlowingEffect>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
