'use client';
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function AboutSection() {
    return (
        <section id="about" className="relative">
            <BackgroundPaths
                title="Welcome to TechZone Academy"
                description="A leading IT and AI training institute based in Hyderabad, empowering learners for success in the modern tech world. With a strong focus on industry-relevant skills, we offer advanced programs in Data Science with Generative AI, Data Analytics with Gen AI, AIML with Gen AI, Digital Marketing with AI, Data Engineering, and Prompt Engineering. Our experienced faculty, practical training approach, and career support help students build real-world expertise and achieve their career goals. Join thousands of successful learners and unlock your potential in today's most in-demand tech fields."
                showButton={false}
            />
        </section>
    );
}
