'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { NavBarDemo } from "@/components/ui/demo-nav"
import { motion } from "framer-motion";
import { MatrixText } from "@/components/ui/matrix-text";

export function SplineSceneBasic() {
    return (
        <>
            <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden">
                {/* Lamp Effect Background Layer */}
                <div className="absolute inset-0 z-0">
                    {/* Left Lamp Beam */}
                    <motion.div
                        initial={{ opacity: 0.3, width: "10rem" }}
                        whileInView={{ opacity: 0.6, width: "20rem" }}
                        transition={{
                            delay: 0.3,
                            duration: 1.2,
                            ease: "easeInOut",
                        }}
                        style={{
                            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                        }}
                        className="absolute inset-auto right-1/2 top-0 h-40 overflow-visible w-[20rem] bg-gradient-conic from-cyan-500/30 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
                    >
                        <div className="absolute w-[100%] left-0 bg-black h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                        <div className="absolute w-20 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                    </motion.div>

                    {/* Right Lamp Beam */}
                    <motion.div
                        initial={{ opacity: 0.3, width: "10rem" }}
                        whileInView={{ opacity: 0.6, width: "20rem" }}
                        transition={{
                            delay: 0.3,
                            duration: 1.2,
                            ease: "easeInOut",
                        }}
                        style={{
                            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                        }}
                        className="absolute inset-auto left-1/2 top-0 h-40 w-[20rem] bg-gradient-conic from-transparent via-transparent to-cyan-500/30 [--conic-position:from_290deg_at_center_top]"
                    >
                        <div className="absolute w-20 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                        <div className="absolute w-[100%] right-0 bg-black h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    </motion.div>

                    {/* Glow Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-[20rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
                    <motion.div
                        initial={{ width: "6rem" }}
                        whileInView={{ width: "12rem" }}
                        transition={{
                            delay: 0.3,
                            duration: 1.2,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-48 rounded-full bg-cyan-400/30 blur-2xl"
                    ></motion.div>
                </div>

                {/* Original Content - Higher z-index */}
                <div className="flex h-full relative z-10">
                    {/* Left content */}
                    <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                        {/* Matrix Text Effect */}
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

                    {/* Right content */}
                    <div className="flex-1 relative">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </Card>
        </>
    )
}

