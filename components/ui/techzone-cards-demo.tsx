"use client"

import * as React from "react"
import Image from "next/image"
import {
    CardTransformed,
    CardsContainer,
    ContainerScroll,
} from "@/components/ui/animated-cards-stack"

export function TechZoneCardsDemo() {
    return (
        <section className="bg-neutral-950 px-8 py-12">
            <div>
                <h2 className="text-center text-4xl font-semibold text-white">Our Journey & Commitment</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-sm text-neutral-300">
                    Empowering learners across Hyderabad with future-ready technology skills and industry expertise.
                </p>
            </div>
            <ContainerScroll className="container h-[300vh]">
                <div className="sticky left-0 top-0 h-svh w-full py-12">
                    <CardsContainer className="mx-auto size-full h-[450px] w-[350px]">
                        <CardTransformed
                            className="items-start justify-evenly border-none bg-blue-600/80 text-secondary backdrop-blur-md"
                            arrayLength={4}
                            index={1}
                        >
                            <div className="flex flex-col items-start justify-start space-y-4">
                                <div className="flex size-16 items-center justify-center rounded-sm bg-secondary/50 text-2xl">
                                    🎯
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-wide text-white/80">Our</h4>
                                    <h3 className="text-2xl font-bold text-white">Vision</h3>
                                </div>
                            </div>
                            <p className="text-secondary/90 text-sm">
                                To be a trusted software training institute in Hyderabad, empowering students, working professionals, and career changers with future-ready technology skills and industry-relevant expertise.
                            </p>
                            <div className="w-full overflow-hidden rounded-lg">
                                <Image
                                    src="/vision-card.png"
                                    alt="TechZone Vision"
                                    width={300}
                                    height={200}
                                    className="w-full h-32 object-cover"
                                />
                            </div>
                        </CardTransformed>

                        <CardTransformed
                            className="items-start justify-evenly border-none bg-orange-600/80 text-secondary backdrop-blur-md"
                            arrayLength={4}
                            index={2}
                        >
                            <div className="flex flex-col items-start justify-start space-y-4">
                                <div className="flex size-16 items-center justify-center rounded-sm bg-secondary/50 text-2xl">
                                    🚀
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-wide text-white/80">Our</h4>
                                    <h3 className="text-2xl font-bold text-white">Mission</h3>
                                </div>
                            </div>
                            <p className="text-secondary/90 text-sm">
                                To deliver high-quality, practical, and industry-focused software training in Hyderabad that helps students, professionals, and career switchers gain real-world skills, career confidence, and long-term growth in the tech industry.
                            </p>
                            <div className="w-full overflow-hidden rounded-lg">
                                <Image
                                    src="/mission-card.png"
                                    alt="TechZone Mission"
                                    width={300}
                                    height={200}
                                    className="w-full h-32 object-cover"
                                />
                            </div>
                        </CardTransformed>

                        <CardTransformed
                            className="items-start justify-evenly border-none bg-cyan-600/80 text-secondary backdrop-blur-md"
                            arrayLength={4}
                            index={3}
                        >
                            <div className="flex flex-col items-start justify-start space-y-4">
                                <div className="flex size-16 items-center justify-center rounded-sm bg-secondary/50 text-2xl">
                                    🎖️
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-wide text-white/80">Our</h4>
                                    <h3 className="text-2xl font-bold text-white">Goal</h3>
                                </div>
                            </div>
                            <p className="text-secondary/90 text-sm">
                                To bridge the local skill gap by providing hands-on software courses, expert mentorship, and career-oriented learning opportunities for learners across Hyderabad.
                            </p>
                            <div className="w-full overflow-hidden rounded-lg">
                                <Image
                                    src="/goal-card.png"
                                    alt="TechZone Goal"
                                    width={300}
                                    height={200}
                                    className="w-full h-32 object-cover"
                                />
                            </div>
                        </CardTransformed>

                        <CardTransformed
                            className="items-start justify-evenly border-none bg-violet-600/80 text-secondary backdrop-blur-md"
                            arrayLength={4}
                            index={4}
                        >
                            <div className="flex flex-col items-start justify-start space-y-4">
                                <div className="flex size-16 items-center justify-center rounded-sm bg-secondary/50 text-2xl">
                                    📍
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-wide text-white/80">Our</h4>
                                    <h3 className="text-2xl font-bold text-white">Branches</h3>
                                </div>
                            </div>
                            <div className="text-secondary/90 text-sm space-y-1">
                                <p>📍 Lakdikapul - Central location</p>
                                <p>📍 Himayat Nagar - Expert trainers</p>
                                <p>📍 Tolichowki - Modern facilities</p>
                            </div>
                            <div className="w-full overflow-hidden rounded-lg">
                                <Image
                                    src="/branches-card.png"
                                    alt="TechZone Branches"
                                    width={300}
                                    height={200}
                                    className="w-full h-32 object-cover"
                                />
                            </div>
                        </CardTransformed>
                    </CardsContainer>
                </div>
            </ContainerScroll>
        </section>
    )
}
