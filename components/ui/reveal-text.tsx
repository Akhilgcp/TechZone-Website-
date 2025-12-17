"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface RevealTextProps {
    text?: string;
    textColor?: string;
    overlayColor?: string;
    fontSize?: string;
    letterDelay?: number;
    overlayDelay?: number;
    overlayDuration?: number;
    springDuration?: number;
    letterImages?: string[];
}

export function RevealText({
    text = "WELCOME TO TECHZONE ACADEMY",
    textColor = "text-white",
    overlayColor = "text-[#3ca2fa]",
    fontSize = "text-[80px]",
    letterDelay = 0.08,
    overlayDelay = 0.05,
    overlayDuration = 0.4,
    springDuration = 600,
    letterImages = [
        // Course-related images for TechZone Academy
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", // Data Analytics
        "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop", // AI/ML
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop", // Programming
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop", // Data Science
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop", // Technology
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop", // Coding
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&auto=format&fit=crop", // Learning
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop", // Gen AI
    ]
}: RevealTextProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [showOverlayText, setShowOverlayText] = useState(false);

    useEffect(() => {
        // Calculate when the last letter animation completes
        const lastLetterDelay = (text.length - 1) * letterDelay;
        const totalDelay = (lastLetterDelay * 1000) + springDuration;

        const timer = setTimeout(() => {
            setShowOverlayText(true);
        }, totalDelay);

        return () => clearTimeout(timer);
    }, [text.length, letterDelay, springDuration]);

    return (
        <div className="flex items-center justify-center relative">
            <div className="flex flex-wrap justify-center">
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`${fontSize} font-black tracking-tight cursor-pointer relative overflow-hidden ${letter === ' ' ? 'w-[0.3em]' : ''}`}
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            delay: index * letterDelay,
                            type: "spring",
                            damping: 8,
                            stiffness: 200,
                            mass: 0.8,
                        }}
                    >
                        {letter === ' ' ? '\u00A0' : (
                            <>
                                {/* Base text layer */}
                                <motion.span
                                    className={`absolute inset-0 ${textColor}`}
                                    animate={{
                                        opacity: hoveredIndex === index ? 0 : 1
                                    }}
                                    transition={{ duration: 0.1 }}
                                >
                                    {letter}
                                </motion.span>
                                {/* Image text layer with background panning */}
                                <motion.span
                                    className="text-transparent bg-clip-text bg-cover bg-no-repeat"
                                    animate={{
                                        opacity: hoveredIndex === index ? 1 : 0,
                                        backgroundPosition: hoveredIndex === index ? "10% center" : "0% center"
                                    }}
                                    transition={{
                                        opacity: { duration: 0.1 },
                                        backgroundPosition: {
                                            duration: 3,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    style={{
                                        backgroundImage: `url('${letterImages[index % letterImages.length]}')`,
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {letter}
                                </motion.span>

                                {/* Overlay text layer that sweeps across each letter */}
                                {showOverlayText && (
                                    <motion.span
                                        className={`absolute inset-0 ${overlayColor} pointer-events-none`}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: [0, 1, 1, 0]
                                        }}
                                        transition={{
                                            delay: index * overlayDelay,
                                            duration: overlayDuration,
                                            times: [0, 0.1, 0.7, 1],
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                )}
                            </>
                        )}
                    </motion.span>
                ))}
            </div>
        </div>
    );
}
