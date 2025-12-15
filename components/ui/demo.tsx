'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { NavBarDemo } from "@/components/ui/demo-nav"

export function SplineSceneBasic() {
    return (
        <>
            <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden">
                <div className="flex h-full">
                    {/* Left content */}
                    <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            TechZone Academy
                        </h1>
                        <p className="mt-6 text-neutral-300 text-lg max-w-lg">
                            Empowering Careers Through Industry-Driven Tech Skills
                        </p>
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
