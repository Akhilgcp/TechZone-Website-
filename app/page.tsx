"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AetherFlowHero from "@/components/ui/aether-flow-hero";
import { SplineSceneBasic } from "@/components/ui/demo";
import AboutSection from "@/components/ui/demo-about";
import CoursesSection from "@/components/ui/demo-courses-with-boxes";
import { TechZoneCoursesAccordion } from "@/components/ui/techzone-courses-accordion";
import TechZoneOrbitalTimelineDemo from "@/components/ui/techzone-orbital-timeline-demo";
import Features2x2Demo from "@/components/ui/features-2x2-demo";
import TechZoneGallery from "@/components/ui/techzone-gallery";
import BranchesMapsDemo from "@/components/ui/branches-maps-demo";
import TechZoneFooter from "@/components/ui/techzone-footer";
import { GlowMenuNavbar } from "@/components/ui/glow-menu-navbar";

export default function Home() {
    const [showHero, setShowHero] = useState(true);

    const handleExplore = () => {
        setShowHero(false);
    };

    const handleHomeClick = () => {
        setShowHero(true);
    };

    // Handle hash-based navigation (e.g., /#courses)
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            // Remove the # and get the section id
            const sectionId = hash.slice(1);

            // If there's a hash, hide the hero and scroll to section
            if (sectionId) {
                setShowHero(false);

                // Wait for the page to render, then scroll
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        }
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {showHero ? (
                    <motion.div
                        key="hero"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-50"
                    >
                        <AetherFlowHero onExplore={handleExplore} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        {/* Navbar - Outside main container */}
                        <GlowMenuNavbar onHomeClick={handleHomeClick} />

                        <main className="min-h-screen bg-neutral-950">
                            {/* About Section - Now the Hero Section with integrated Spline */}
                            <motion.div
                                className="pt-16"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                <AboutSection />
                            </motion.div>

                            {/* Radial Orbital Timeline Section - Vision, Mission, Goal */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <TechZoneOrbitalTimelineDemo />
                            </motion.div>

                            {/* Courses Section - Interactive Accordion */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <TechZoneCoursesAccordion />
                            </motion.div>

                            {/* Features & Benefits Section - 2x2 Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                <Features2x2Demo />
                            </motion.div>

                            {/* TechZone Gallery - Interactive Cursor Trail */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                            >
                                <TechZoneGallery />
                            </motion.div>

                            {/* Branches Section - Interactive Maps */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                            >
                                <BranchesMapsDemo />
                            </motion.div>

                            {/* Footer */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3, duration: 0.8 }}
                            >
                                <TechZoneFooter />
                            </motion.div>
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
