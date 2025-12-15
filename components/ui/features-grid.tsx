"use client";

import React from "react";
import { Code, UserCheck, BriefcaseBusiness, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export interface Feature {
    title: string;
    description: string;
    icon: React.ElementType;
    area: string;
}

const FEATURES: Feature[] = [
    {
        title: "Real-Time Projects",
        description:
            "Work on industry-grade, real-world projects that simulate actual company workflows. Gain hands-on experience, build problem-solving ability, and create a portfolio that stands out in interviews.",
        icon: Code,
        area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    },
    {
        title: "Career Guidance",
        description:
            "Receive personalized 1:1 mentorship, role-clarity, and structured guidance to navigate the IT industry. We help you choose the right career path based on your strengths and goals.",
        icon: UserCheck,
        area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]",
    },
    {
        title: "Internship Assistance",
        description:
            "Get support in finding internship opportunities that give you real industry exposure, boost your confidence, and increase your chances of landing your first IT job.",
        icon: BriefcaseBusiness,
        area: "md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/5]",
    },
    {
        title: "AI-Driven Learning Experience",
        description:
            "TechZone integrates AI-powered interactive learning tools, smart assessments, and guided practice sessions—helping students learn faster, more efficiently, and with modern industry standards.",
        icon: Sparkles,
        area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/9/3/13]",
    },
];

interface GridItemProps {
    feature: Feature;
}

function GridItem({ feature }: GridItemProps) {
    const Icon = feature.icon;

    return (
        <li className={cn(feature.area)}>
            <GlowingEffect>
                <div className="flex flex-col gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30">
                        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-neutral-400">
                        {feature.description}
                    </p>
                </div>
            </GlowingEffect>
        </li>
    );
}

export default function FeaturesGrid() {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 gap-4">
            {FEATURES.map((feature, index) => (
                <GridItem key={index} feature={feature} />
            ))}
        </ul>
    );
}
