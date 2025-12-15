'use client';
import React from "react";
import { BookOpen, Database, Cpu, Zap, Sparkles, Settings2, Globe, Fingerprint } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

/**
 * CoursesSection - TechZone Academy
 * Uses existing FeatureCard component at /components/ui/grid-feature-cards.tsx
 * Section id: "courses" — place this AFTER About section in page flow
 */

const COURSES = [
    {
        title: 'Data Analytics with Gen AI',
        icon: BookOpen,
        description:
            'Excel, Power BI, SQL/Database basics, statistics and data storytelling — plus Gen AI tools & prompt techniques for analytics and report automation.',
        imageHint: 'unsplash:data analytics dashboard, power bi'
    },
    {
        title: 'Data Science with Gen AI',
        icon: Database,
        description:
            'Python for data science, math & stats foundations, ML pipelines, NLP basics, CRISP-DM and PySpark/Big Data workflows.',
        imageHint: 'unsplash:data scientist, jupyter notebook'
    },
    {
        title: 'AI/ML with Gen AI',
        icon: Cpu,
        description:
            'Machine learning & deep learning fundamentals, transformers, model training, LLM/RAG pipelines and experimentation.',
        imageHint: 'unsplash:machine learning neural network'
    },
    {
        title: 'Python Developer (Django & Web)',
        icon: Zap,
        description:
            'Python and Django web frameworks, REST APIs, backend logic, database integration and deployment to cloud.',
        imageHint: 'unsplash:python code django'
    },
    {
        title: 'Gen AI Engineer',
        icon: Sparkles,
        description:
            'Build production-grade GenAI: prompt design, RAG architectures, vectors/embeddings, fine-tuning and deploying AI products.',
        imageHint: 'unsplash:generative ai prompt engineering'
    },
    {
        title: 'Cloud & Data Engineer',
        icon: Settings2,
        description:
            'SQL, data warehouses, Spark, ETL pipelines, Linux and cloud basics (AWS/Azure) for production data workflows.',
        imageHint: 'unsplash:cloud infrastructure data engineer'
    },
    {
        title: 'AI Essentials',
        icon: Globe,
        description:
            'Foundations of AI: basics of AI concepts, MS Office & Google Apps, generative content workflows (text, image, audio).',
        imageHint: 'unsplash:learning ai classroom'
    },
    {
        title: 'Models Development & Maintenance',
        icon: Fingerprint,
        description:
            'Model lifecycle: development, testing, deployment, monitoring, MLOps pipelines, CI/CD for models and maintenance best practices.',
        imageHint: 'unsplash:mlops deployment'
    }
];

export default function CoursesSection() {
    const shouldReduceMotion = useReducedMotion();

    const GridInner = (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {COURSES.map((c, idx) => (
                <FeatureCard
                    key={idx}
                    feature={{
                        title: c.title,
                        icon: c.icon,
                        description: c.description
                    }}
                    className="bg-card/5 rounded-lg"
                />
            ))}
        </div>
    );

    return (
        <section id="courses" className="py-16 md:py-28">
            <div className="mx-auto w-full max-w-6xl px-4">
                <div className="mx-auto max-w-3xl text-center mb-8">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Our Courses</h2>
                    <p className="text-muted-foreground mt-3">Industry-aligned programs built for job readiness, hands-on projects and Gen-AI powered learning paths.</p>
                </div>

                {shouldReduceMotion ? (
                    GridInner
                ) : (
                    <motion.div initial={{ opacity: 0, translateY: 6 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        {GridInner}
                    </motion.div>
                )}

                <div className="mx-auto max-w-3xl text-center mt-8">
                    <p className="text-sm text-muted-foreground">Want full syllabus or batch dates? <a href="/contact" className="underline">Contact Us</a> or use the chat to request a demo.</p>
                </div>
            </div>
        </section>
    );
}
