"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Home, BookOpen, GraduationCap, MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavTab {
    id: number;
    label: string;
    icon: typeof Home;
    href: string;
    onClick?: (e: React.MouseEvent) => void;
    showNewBadge?: boolean;
}

interface NavbarTabsProps {
    tabs: NavTab[];
    activeTab: number;
    onTabClick: (tabId: number) => void;
    className?: string;
}

function NewBadge({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-black transition-all duration-200 relative overflow-hidden",
                className
            )}
        >
            <span>NEW</span>
        </div>
    );
}

function NavbarTabs({ tabs, activeTab, onTabClick, className }: NavbarTabsProps) {
    const [tabClicked, setTabClicked] = useState(false);

    const handleTabClick = (newTabId: number) => {
        setTabClicked(true);
        onTabClick(newTabId);
    };

    return (
        <div className={cn("flex space-x-6 md:space-x-8", className)}>
            {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                    <motion.button
                        key={tab.id}
                        whileTap="tapped"
                        whileHover="hovered"
                        onClick={(e) => {
                            if (tab.onClick) {
                                tab.onClick(e);
                            }
                            handleTabClick(tab.id);
                        }}
                        className={cn(
                            "relative tracking-[0.01em] cursor-pointer transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:outline-none flex flex-col items-center gap-2 pb-2",
                            isActive
                                ? "text-white font-medium tracking-normal"
                                : "text-neutral-400 hover:text-neutral-200"
                        )}
                        style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                        {/* Active tab underline indicator */}
                        {isActive && (
                            <motion.span
                                layoutId="navbar-bubble"
                                className="absolute bottom-0 w-full left-0 z-10 bg-white rounded-full h-0.5"
                                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
                            />
                        )}

                        {/* Icon container with animations */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    bounce: 0.2,
                                    damping: 7,
                                    duration: 0.4,
                                    delay: index * 0.05,
                                },
                            }}
                            variants={{
                                default: { scale: 1 },
                                ...(!isActive && { hovered: { scale: 1.1 } }),
                                ...(!isActive && {
                                    tapped: {
                                        scale: 0.9,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.2,
                                            damping: 7,
                                            duration: 0.4,
                                        },
                                    },
                                }),
                            }}
                            className="relative flex flex-col items-center"
                            transition={{ type: "spring" }}
                        >
                            {/* NEW Badge */}
                            {tab.showNewBadge && (
                                <NewBadge className="absolute -top-1 -right-6 z-50" />
                            )}

                            {/* Large Icon */}
                            <motion.div
                                className={cn(
                                    "transition-colors duration-300 mb-1",
                                    isActive ? "text-white" : "text-neutral-400"
                                )}
                                animate={isActive ? {
                                    scale: [1, 1.1, 1],
                                    rotate: [0, -5, 5, -5, 0]
                                } : {}}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Icon className="h-8 w-8" strokeWidth={1.5} />
                            </motion.div>

                            {/* Label below icon */}
                            <span className="text-sm font-medium whitespace-nowrap">
                                {tab.label}
                            </span>
                        </motion.div>
                    </motion.button>
                );
            })}
        </div>
    );
}

export { NavbarTabs };
