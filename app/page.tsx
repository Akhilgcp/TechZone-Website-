"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import GradientCardShowcase from "@/components/ui/gradient-card-showcase";

// Dynamic imports with loading placeholders for heavy sections
const AetherFlowHero = dynamic(() => import("@/components/ui/aether-flow-hero"), { ssr: false });
const GlowMenuNavbar = dynamic(() => import("@/components/ui/glow-menu-navbar").then(m => m.GlowMenuNavbar), { ssr: false });
const AboutSection = dynamic(() => import("@/components/ui/demo-about"), { ssr: false });
const TechZoneCoursesAccordion = dynamic(() => import("@/components/ui/techzone-courses-accordion").then(m => m.TechZoneCoursesAccordion), { ssr: false });
const TechZoneOrbitalTimelineDemo = dynamic(() => import("@/components/ui/techzone-orbital-timeline-demo").then(m => m.TechZoneOrbitalTimelineDemo), { ssr: false });
const WhyChooseTechZone = dynamic(() => import("@/components/ui/why-choose-techzone"), { ssr: false });
const TechZoneGallery = dynamic(() => import("@/components/ui/techzone-gallery"), { ssr: false });
const BranchesMapsDemo = dynamic(() => import("@/components/ui/branches-maps-demo"), { ssr: false });
const TechZoneFooter = dynamic(() => import("@/components/ui/techzone-footer"), { ssr: false });

export default function Home() {
    const [showHero, setShowHero] = useState(true);
    const [mountContent, setMountContent] = useState(false);
    const [showAllCourses, setShowAllCourses] = useState(false);

    // Only mount main content after hero has started exiting to prevent lag
    useEffect(() => {
        if (!showHero) {
            const timer = setTimeout(() => {
                setMountContent(true);
            }, 100); // Small buffer for transition to start smoothly
            return () => clearTimeout(timer);
        }
    }, [showHero]);

    const handleExplore = () => {
        setShowHero(false);
    };

    const handleHomeClick = () => {
        setShowHero(true);
        setMountContent(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle View All Courses (SPA Mode)
    const handleViewAllCourses = () => {
        setShowAllCourses(true);
        window.history.pushState({ view: 'all-courses' }, '', '#all-courses');
    };

    const handleCloseAllCourses = () => {
        setShowAllCourses(false);
        // Remove hash without reloading if likely added by us, or just go back
        if (window.location.hash === '#all-courses') {
            window.history.back();
        } else {
            // Fallback if closed manually without hash
            window.history.replaceState(null, '', window.location.pathname);
        }
    };

    // Handle Browser Back Button for Modal
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (showAllCourses) {
                setShowAllCourses(false);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [showAllCourses]);

    // Handle initial hash check for direct link
    useEffect(() => {
        if (window.location.hash === '#all-courses') {
            setShowAllCourses(true);
            setShowHero(false);
            setMountContent(true);
        } else if (window.location.hash) {
            // Handle other hashes (e.g. #courses from back button)
            setShowHero(false);
            setMountContent(true);
        }
    }, []);

    // Scroll to hash element when content is mounted
    useEffect(() => {
        if (mountContent && window.location.hash && !showAllCourses) {
            // Immediate scroll attempt
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'instant' });
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
            } else {
                setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        }
    }, [mountContent, showAllCourses]);


    return (
        <div className="bg-neutral-950 min-h-screen text-white selection:bg-blue-500/30">
            {/* SPA Overlay for All Courses */}
            <AnimatePresence>
                {showAllCourses && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-neutral-950 overflow-y-auto"
                    >
                        {/* We pass a specific close handler that just manages UI state if triggered internally */}
                        <GradientCardShowcase onBack={() => window.history.back()} />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {showHero && !showAllCourses ? (
                    <motion.div
                        key="hero"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="fixed inset-0 z-[60]"
                    >
                        <AetherFlowHero onExplore={handleExplore} />
                    </motion.div>
                ) : mountContent && (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        // Hide main content when modal is open to prevent scroll overlap issues
                        style={{ display: showAllCourses ? 'none' : 'block' }}
                    >
                        {/* 1. Navbar */}
                        <GlowMenuNavbar onHomeClick={handleHomeClick} />

                        <main className="pt-20">
                            {/* 4. About Section */}
                            <div id="about">
                                <AboutSection />
                            </div>

                            {/* 5. Vision/Mission/Goal (Orbit) */}
                            <TechZoneOrbitalTimelineDemo />

                            {/* 6. Courses Section */}
                            <div id="courses">
                                <TechZoneCoursesAccordion onViewAllClick={handleViewAllCourses} />
                            </div>

                            {/* 7. Why Choose TechZone */}
                            <WhyChooseTechZone />

                            {/* 9. Experience Gallery (Old Gallery with Trail) */}
                            <TechZoneGallery />

                            {/* 11. Branches Section */}
                            <div id="branches">
                                <BranchesMapsDemo />
                            </div>

                            {/* 12. Footer */}
                            <TechZoneFooter />
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
