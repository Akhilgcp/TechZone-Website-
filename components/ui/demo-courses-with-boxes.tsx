"use client";

import React from "react";
import GradientCardShowcase from "@/components/ui/gradient-card-showcase";

export function DemoCoursesWithBoxes() {
    return (
        <section id="courses" className="relative">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center mb-10 px-4">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">Our Courses</h2>
                    <p className="text-muted-foreground mt-3 text-sm md:text-base">
                        Industry-aligned programs — hands-on projects, job-ready skills and Gen-AI powered learning.
                    </p>
                </div>
                <GradientCardShowcase />
                <div className="mx-auto max-w-3xl text-center mt-8 px-4 pb-10">
                    <p className="text-sm text-muted-foreground">
                        Click on any course to see detailed information. Want to talk to an advisor? <a href="/contact" className="underline">Contact Us</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DemoCoursesWithBoxes;
