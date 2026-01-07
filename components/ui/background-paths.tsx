"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { MatrixText } from "@/components/ui/matrix-text";
import { TextSplit } from "@/components/ui/split-text";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    description,
    showButton = false,
}: {
    title?: string;
    description?: React.ReactNode;
    showButton?: boolean;
}) {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
            {/* Animated Background Paths */}
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {/* Top Section - Title and Description */}
                <div className="flex-1 flex items-center justify-center px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                            {title.split(" ").map((word, wordIndex) => {
                                // Apply blue color only to "TechZone" and "Academy"
                                const isTechZoneAcademy = word === "TechZone" || word === "Academy";

                                return (
                                    <span
                                        key={wordIndex}
                                        className={`inline-block mr-4 last:mr-0 ${isTechZoneAcademy ? "text-[#004AAD]" : "text-white"}`}
                                    >
                                        {word}
                                    </span>
                                );
                            })}
                        </h1>

                        {description && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="text-neutral-700 dark:text-neutral-200 leading-relaxed text-lg md:text-xl mb-8"
                            >
                                {description}
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Bottom Section - Spline Scene with TechZone Academy Text */}
                <div className="relative h-[400px] md:h-[500px] w-full">
                    {/* Spline 3D Robot - Right Side */}
                    <div className="absolute right-0 bottom-0 w-1/2 h-full">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>

                    {/* TechZone Academy Text - Left Side */}
                    <div className="absolute left-0 bottom-0 p-8 md:p-12 z-10 flex flex-col justify-end h-full">
                        <MatrixText
                            text="TechZone Academy"
                            className="text-white font-bold"
                            initialDelay={500}
                            letterAnimationDuration={400}
                            letterInterval={80}
                        />
                        <motion.p
                            initial={{ opacity: 0.5, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-6 text-neutral-300 text-lg max-w-lg"
                        >
                            Empowering Careers Through Industry-Driven Tech Skills
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
}
