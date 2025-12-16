"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof motion.svg> & {
    speed?: number;
    onAnimationComplete?: () => void;
    text?: string;
};

// Simplified TechZone Academy animated text
function TechZoneAnimatedText({
    className,
    speed = 1,
    onAnimationComplete,
    ...props
}: Props) {
    const calc = (x: number) => x * speed;

    return (
        <motion.svg
            className={cn("w-full h-24 md:h-32", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            initial={{ opacity: 1 }}
            {...props}
        >
            <title>TechZone Academy</title>

            {/* T */}
            <motion.g>
                <motion.path
                    d="M20 40L100 40"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: calc(0.4),
                        ease: "easeOut",
                        delay: calc(0.1),
                    }}
                />
                <motion.path
                    d="M60 40L60 120"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: calc(0.5),
                        ease: "easeOut",
                        delay: calc(0.3),
                    }}
                />
            </motion.g>

            {/* e */}
            <motion.path
                d="M120 80C120 65 135 55 150 55C165 55 180 65 180 80C180 95 165 105 150 105C140 105 130 100 125 92"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: calc(0.6),
                    ease: "easeInOut",
                    delay: calc(0.5),
                }}
            />

            {/* c */}
            <motion.path
                d="M220 80C220 65 205 55 190 55C175 55 160 65 160 80C160 95 175 105 190 105C200 105 210 100 215 92"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: calc(0.6),
                    ease: "easeInOut",
                    delay: calc(0.7),
                }}
            />

            {/* h */}
            <motion.g>
                <motion.path
                    d="M240 40L240 120"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: calc(0.5),
                        ease: "easeOut",
                        delay: calc(0.9),
                    }}
                />
                <motion.path
                    d="M240 75C240 65 250 55 265 55C280 55 290 65 290 75L290 120"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: calc(0.6),
                        ease: "easeOut",
                        delay: calc(1.1),
                    }}
                />
            </motion.g>

            {/* Z */}
            <motion.path
                d="M310 40L370 40L310 120L370 120"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: calc(0.7),
                    ease: "easeInOut",
                    delay: calc(1.3),
                }}
            />

            {/* o */}
            <motion.circle
                cx="410"
                cy="80"
                r="25"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: calc(0.6),
                    ease: "easeInOut",
                    delay: calc(1.5),
                }}
            />

            {/* n */}
            <motion.g>
                <motion.path
                    d="M460 55L460 120"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: calc(0.5),
                        ease: "easeOut",
                        delay: calc(1.7),
                    }}
                />
                <motion.path
                    d="M460 75C460 65 470 55 485 55C500 55 510 65 510 75L510 120"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: calc(0.6),
                        ease: "easeOut",
                        delay: calc(1.9),
                    }}
                />
            </motion.g>

            {/* e */}
            <motion.path
                d="M530 80C530 65 545 55 560 55C575 55 590 65 590 80C590 95 575 105 560 105C550 105 540 100 535 92"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: calc(0.6),
                    ease: "easeInOut",
                    delay: calc(2.1),
                }}
                onAnimationComplete={onAnimationComplete}
            />

            {/* Accent line */}
            <motion.path
                d="M20 140L590 140"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                    duration: calc(1.5),
                    ease: "easeOut",
                    delay: calc(2.3),
                }}
            />
        </motion.svg>
    );
}

// Simplified tagline animation
function TaglineAnimatedText({
    className,
    speed = 1,
    ...props
}: Omit<Props, 'onAnimationComplete'>) {
    const calc = (x: number) => x * speed;

    return (
        <motion.div
            className={cn("overflow-hidden", className)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: calc(0.8),
                ease: "easeOut",
                delay: calc(2.5),
            }}
            {...props}
        >
            <motion.p
                className="text-neutral-300 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: calc(0.6),
                    delay: calc(2.7),
                }}
            >
                Empowering Careers Through Industry-Driven Tech Skills
            </motion.p>
        </motion.div>
    );
}

export { TechZoneAnimatedText, TaglineAnimatedText };
