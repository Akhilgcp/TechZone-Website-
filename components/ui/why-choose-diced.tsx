"use client";

import React from 'react';
import { DicedHeroSection } from './diced-hero-section';

const WhyChooseDiced: React.FC = () => {
    return (
        <section className="bg-neutral-950 py-24 overflow-hidden">
            <DicedHeroSection
                topText="Why TechZone Academy?"
                mainText="Industry Excellence"
                subMainText="Bridge the gap between theoretical knowledge and industry requirements. Our mentoring approach focuses on real-time projects, AI-integrated learning, and dedicated career support to ensure you are ready for the highest tech demands."
                buttonText="Explore Our Courses"
                imageSide="left"
                slides={[
                    {
                        title: "Real-Time Projects",
                        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1920&auto=format&fit=crop",
                    },
                    {
                        title: "Team Collaboration",
                        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop",
                    },
                    {
                        title: "AI-Driven Learning",
                        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
                    },
                    {
                        title: "Career Support",
                        image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1920&auto=format&fit=crop",
                    },
                ]}
                onMainButtonClick={() => {
                    const courses = document.getElementById('courses');
                    if (courses) courses.scrollIntoView({ behavior: 'smooth' });
                }}
                topTextStyle={{
                    color: "var(--diced-hero-section-top-text)",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                }}
                mainTextStyle={{
                    fontSize: "clamp(3rem, 8vw, 4.5rem)",
                    fontWeight: "800",
                    gradient: "linear-gradient(45deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to))",
                }}
                subMainTextStyle={{
                    color: "var(--diced-hero-section-sub-text)",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    marginTop: "1.5rem"
                }}
                buttonStyle={{
                    backgroundColor: "var(--diced-hero-section-button-bg)",
                    color: "var(--diced-hero-section-button-fg)",
                    borderRadius: "full",
                    hoverColor: "var(--diced-hero-section-button-hover-bg)",
                    hoverForeground: "var(--diced-hero-section-button-hover-fg)",
                }}
                separatorColor="var(--diced-hero-section-separator)"
                backgroundColor="transparent"
                maxContentWidth="1400px"
            />
        </section>
    );
};

export default WhyChooseDiced;
