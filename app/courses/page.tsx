"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import GradientCardShowcase from "@/components/ui/gradient-card-showcase";
import TechZoneFooter from "@/components/ui/techzone-footer";
import { GlowMenuNavbar } from "@/components/ui/glow-menu-navbar";

export default function CoursesPage() {
    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };

    const handleBackClick = () => {
        // Navigate to courses section on main page
        router.push('/#courses');
    };

    return (
        <>
            <GlowMenuNavbar onHomeClick={handleHomeClick} />

            <main className="min-h-screen bg-neutral-950 pt-20">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto px-4 pt-8"
                >
                    <button
                        onClick={handleBackClick}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm font-medium">Back</span>
                    </button>
                </motion.div>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 py-12"
                >
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                            All Courses
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300">
                            Explore our comprehensive range of industry-leading programs designed to transform your career in tech.
                            Each course features hands-on training, real-world projects, and expert instruction.
                        </p>
                    </div>
                </motion.div>

                {/* Courses Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <GradientCardShowcase />
                </motion.div>
            </main>

            <TechZoneFooter />
        </>
    );
}
