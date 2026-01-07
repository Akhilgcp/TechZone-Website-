"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import DatabaseWithRestApi from "./database-with-rest-api";
import {
    Building2,
    GraduationCap,
    Briefcase,
    Globe,
    CheckCircle2,
    Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Career Changers",
        description: "Transition smoothly into tech with curated roadmaps, mentorship from industry experts, and a focus on essential high-demand skills.",
        icon: Building2,
        badge: "Career Shift",
        points: ["Portfolio Development", "Interview Prep", "Industry Networking"]
    },
    {
        title: "Students",
        description: "Complement your academic journey with practical, hands-on experience and AI-integrated learning paths designed for the modern job market.",
        icon: GraduationCap,
        badge: "Future Ready",
        points: ["Real-world Projects", "Internship Support", "Hackathon Mentorship"]
    },
    {
        title: "Working Professionals",
        description: "Upskill while you work. Master advanced concepts like GenAI and Prompt Engineering to stay ahead in the rapidly evolving corporate landscape.",
        icon: Briefcase,
        badge: "Skill Upgrade",
        points: ["Flexible Learning", "Advanced AI Tools", "Leadership Workshops"]
    },
    {
        title: "Freelancers",
        description: "Build a robust tech portfolio and master the latest tools to command higher rates and handle complex client requirements with confidence.",
        icon: Globe,
        badge: "Global Reach",
        points: ["Client Handling", "Scale Your Business", "Master Niche Tech"]
    }
];

const WhyChooseTechZone = () => {
    const [hoveredAudience, setHoveredAudience] = useState<number | null>(null);

    const audienceMapping: Record<number, { first: string; second: string; activeHighlights: number[] }> = {
        0: { // Career Changers
            first: "Job-Ready Skills",
            second: "Career Switch Role",
            activeHighlights: [1, 4, 2]
        },
        1: { // Students
            first: "Practical Exposure",
            second: "Entry-Level Tech Role",
            activeHighlights: [4, 1, 2]
        },
        2: { // Working Professionals
            first: "Skill Upgrade",
            second: "Role Advancement",
            activeHighlights: [4, 2]
        },
        3: { // Freelancers
            first: "Client Readiness",
            second: "Freelance / Global Work",
            activeHighlights: [4, 3]
        }
    };

    const currentData = hoveredAudience !== null
        ? audienceMapping[hoveredAudience]
        : {
            first: "Professional Readiness",
            second: "Target Role",
            activeHighlights: [1, 2, 3, 4]
        };
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-neutral-950">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
                            >
                                Why TechZone Academy?
                            </motion.h2>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl md:text-3xl font-semibold text-white/90"
                            >
                                Excellence in Industry-Driven Education
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-neutral-400 max-w-xl leading-relaxed"
                            >
                                We bridge the gap between academic theory and professional reality. Whether you're starting fresh or scaling up, our ecosystem is built for your success.
                            </motion.p>
                        </div>

                        {/* Features Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6"
                        >
                            {features.map((feature, idx) => (
                                <div
                                    key={feature.title}
                                    onMouseEnter={() => setHoveredAudience(idx)}
                                    onMouseLeave={() => setHoveredAudience(null)}
                                    className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 cursor-default shadow-lg hover:shadow-xl hover:border-white/10"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                            <feature.icon className="size-5" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 bg-neutral-900/50 px-2 py-1 rounded border border-white/5 group-hover:text-neutral-400 transition-colors">
                                            {feature.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-1.5">
                                        {feature.points.map((point) => (
                                            <li key={point} className="flex items-center gap-2 text-[11px] text-neutral-500 group-hover:text-neutral-300 transition-colors font-medium">
                                                <CheckCircle2 className="size-3 text-blue-500/40 group-hover:text-blue-500/80" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side: Interactive Database Component */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center items-center lg:justify-end pr-0 lg:pr-8"
                    >
                        <div className="relative w-full max-w-[500px] flex flex-col items-center">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] opacity-50 animate-pulse" />
                            <DatabaseWithRestApi
                                className="scale-90 md:scale-125 translate-y-4 md:translate-y-0"
                                title="Academy Ecosystem"
                                circleText="Your Career Journey"
                                badgeTexts={{
                                    first: "ROADMAP",
                                    second: "MENTOR",
                                    third: "JOBS",
                                    fourth: "SKILLS"
                                }}
                                buttonTexts={{
                                    first: currentData.first,
                                    second: currentData.second
                                }}
                                activeHighlights={currentData.activeHighlights}
                            />

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                key={hoveredAudience}
                                className="mt-16 text-[10px] text-neutral-500 font-medium tracking-wide text-center max-w-[280px]"
                            >
                                “TechZone adapts the learning journey based on where you start and where you want to go.”
                            </motion.p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseTechZone;
