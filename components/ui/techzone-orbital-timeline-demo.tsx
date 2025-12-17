"use client";

import { Target, Rocket, Trophy } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const techzoneTimelineData = [
    {
        id: 1,
        title: "Our Vision",
        date: "2024",
        content: "To be a trusted software training institute in Hyderabad, empowering students, working professionals, and career changers with future-ready technology skills and industry-relevant expertise.",
        category: "Vision",
        icon: Target,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
    },
    {
        id: 2,
        title: "Our Mission",
        date: "2024",
        content: "To deliver high-quality, practical, and industry-focused software training in Hyderabad that helps students, professionals, and career switchers gain real-world skills, career confidence, and long-term growth in the tech industry.",
        category: "Mission",
        icon: Rocket,
        relatedIds: [1, 3],
        status: "in-progress" as const,
        energy: 90,
    },
    {
        id: 3,
        title: "Our Goal",
        date: "2024",
        content: "To bridge the local skill gap by providing hands-on software courses, expert mentorship, and career-oriented learning opportunities for learners across Hyderabad.",
        category: "Goal",
        icon: Trophy,
        relatedIds: [2],
        status: "in-progress" as const,
        energy: 85,
    },
];

export function TechZoneOrbitalTimelineDemo() {
    return (
        <div className="relative">
            <RadialOrbitalTimeline timelineData={techzoneTimelineData} />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10 max-w-3xl px-4">
                <p className="text-neutral-300 text-sm">
                    TechZone Academy offers software training programs across multiple branches in Hyderabad, including Lakdikapul, Himayat Nagar, and Tolichowki.
                </p>
            </div>
        </div>
    );
}

export default TechZoneOrbitalTimelineDemo;
