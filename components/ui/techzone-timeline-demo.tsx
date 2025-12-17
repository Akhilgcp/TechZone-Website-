import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TechZoneTimelineDemo() {
    const data = [
        {
            title: "Vision",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        To be a trusted software training institute in Hyderabad, empowering students, working professionals, and career changers with future-ready technology skills and industry-relevant expertise.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/vision-training.png"
                            alt="TechZone Academy Vision - Modern Training Environment"
                            width={800}
                            height={600}
                            className="rounded-lg object-cover h-48 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Mission",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        To deliver high-quality, practical, and industry-focused software training in Hyderabad that helps students, professionals, and career switchers gain real-world skills, career confidence, and long-term growth in the tech industry.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/mission-training.png"
                            alt="TechZone Academy Mission - Practical Training and Mentorship"
                            width={800}
                            height={600}
                            className="rounded-lg object-cover h-48 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Goal",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        To bridge the local skill gap by providing hands-on software courses, expert mentorship, and career-oriented learning opportunities for learners across Hyderabad.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/goal-bridge.png"
                            alt="TechZone Academy Goal - Bridging the Skill Gap"
                            width={800}
                            height={600}
                            className="rounded-lg object-cover h-48 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Our Branches",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        TechZone Academy offers software training programs across multiple branches in Hyderabad, making quality tech education accessible to learners across the city.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            📍 Lakdikapul - Central location with modern facilities
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            📍 Himayat Nagar - Convenient access with expert trainers
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            📍 Tolichowki - State-of-the-art learning environment
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/branches-map.png"
                            alt="TechZone Academy Branches across Hyderabad"
                            width={800}
                            height={600}
                            className="rounded-lg object-cover h-48 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
