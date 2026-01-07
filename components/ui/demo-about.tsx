'use client';
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function AboutSection() {
    return (
        <section id="about" className="relative">
            <BackgroundPaths
                title="Welcome to TechZone Academy"
                description={
                    <div className="flex flex-col items-center gap-8">
                        <p className="text-center text-lg md:text-xl text-neutral-300 max-w-4xl leading-relaxed font-light">
                            TechZone Academy is Hyderabad's premier institute for
                            <span className="text-blue-400 font-semibold"> Application Modernization</span> and
                            <span className="text-purple-400 font-semibold"> AI Technologies</span>.
                            We bridge the gap between academic theory and industry reality.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-2">
                            <li className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
                                <span className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🚀</span>
                                <span className="text-blue-400 font-bold mb-1 text-lg">Industry-Ready</span>
                                <span className="text-sm text-neutral-500 text-center">Curriculum designed by experts</span>
                            </li>
                            <li className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                                <span className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">💻</span>
                                <span className="text-purple-400 font-bold mb-1 text-lg">Hands-on Labs</span>
                                <span className="text-sm text-neutral-500 text-center">Real-world project experience</span>
                            </li>
                            <li className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-pink-500/30 transition-all duration-300 group">
                                <span className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🏆</span>
                                <span className="text-pink-400 font-bold mb-1 text-lg">Career Focus</span>
                                <span className="text-sm text-neutral-500 text-center">Placement support & mentorship</span>
                            </li>
                        </ul>
                    </div>
                }
                showButton={false}
            />
        </section>
    );
}
