"use client";

import React from "react";
import FeaturesGrid from "@/components/ui/features-grid";

export default function FeaturesGridDemo() {
    return (
        <section id="features" className="py-24 max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Why Students Choose TechZone Academy
                </h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    Experience world-class training with real-world projects, personalized mentorship, and AI-powered learning
                </p>
            </div>

            <FeaturesGrid />
        </section>
    );
}
