'use client';
import { DottedSurface } from "@/components/ui/dotted-surface";
import { cn } from '@/lib/utils';

export default function AboutSection() {
    return (
        <section id="about" className="relative min-h-[60vh] overflow-hidden">
            {/* Dotted animated background - Three.js */}
            <DottedSurface className="size-full">
                {/* Overlay content centered inside the dotted surface */}
                <div className="absolute inset-0 flex items-center justify-center px-6 py-20">
                    <div className={cn('max-w-4xl text-center')}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Welcome to TechZone Academy</h2>
                        <p className="text-neutral-200 leading-relaxed text-lg md:text-xl">
                            A leading IT and AI training institute based in Hyderabad, empowering learners for success in the modern tech world. With a strong focus on industry-relevant skills, we offer advanced programs in Data Science with Generative AI, Data Analytics with Gen AI, AIML with Gen AI, Digital Marketing with AI, Data Engineering, and Prompt Engineering. Our experienced faculty, practical training approach, and career support help students build real-world expertise and achieve their career goals. Join thousands of successful learners and unlock your potential in today's most in-demand tech fields.
                        </p>
                    </div>
                </div>
            </DottedSurface>
        </section>
    );
}
