"use client";

import React, { useState } from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { Boxes } from "@/components/ui/background-boxes";
import { BookOpen, Database, Cpu, Zap, Sparkles, Settings2, Globe, Fingerprint, type LucideIcon, X, Clock, BarChart, Users, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type CourseDetail = {
    title: string;
    description: string;
    icon: LucideIcon;
    imageHint?: string;
    duration: string;
    level: string;
    students: string;
    modules: string[];
    skills: string[];
    prerequisites: string[];
    detailedDescription: string;
};

const COURSES: CourseDetail[] = [
    {
        title: "Data Analytics with Gen AI",
        icon: BookOpen,
        description:
            "Excel, Power BI, SQL/Database basics, statistics and data storytelling — plus Gen AI tools & prompt techniques for analytics and report automation.",
        duration: "12 weeks",
        level: "Beginner to Intermediate",
        students: "500+",
        modules: [
            "Excel & Power BI Fundamentals",
            "SQL & Database Management",
            "Statistics & Data Visualization",
            "Gen AI Tools for Analytics",
            "Prompt Engineering for Reports",
            "Real-world Analytics Projects"
        ],
        skills: ["Excel", "Power BI", "SQL", "Python", "Gen AI", "Data Storytelling"],
        prerequisites: ["Basic computer skills", "Interest in data"],
        detailedDescription: "Master the art of data analytics with cutting-edge Gen AI integration. Learn to transform raw data into actionable insights using industry-standard tools like Excel, Power BI, and SQL. Discover how to leverage Gen AI for automated reporting, advanced analytics, and intelligent data storytelling.",
        imageHint: "unsplash:data analytics dashboard, power bi",
    },
    {
        title: "Data Science with Gen AI",
        icon: Database,
        description:
            "Python for data science, math & stats foundations, ML pipelines, NLP basics, CRISP-DM and PySpark/Big Data workflows.",
        duration: "16 weeks",
        level: "Intermediate to Advanced",
        students: "450+",
        modules: [
            "Python Programming for Data Science",
            "Mathematics & Statistics",
            "Machine Learning Pipelines",
            "Natural Language Processing",
            "Big Data with PySpark",
            "Gen AI Integration"
        ],
        skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "PySpark", "NLP"],
        prerequisites: ["Basic programming", "Mathematics fundamentals"],
        detailedDescription: "Become a data scientist with comprehensive training in Python, machine learning, and Gen AI. Build end-to-end ML pipelines, work with big data using PySpark, and master NLP techniques enhanced with generative AI capabilities.",
        imageHint: "unsplash:data scientist, jupyter notebook",
    },
    {
        title: "AI/ML with Gen AI",
        icon: Cpu,
        description:
            "Machine learning & deep learning fundamentals, transformers, model training, LLM pipelines (RAG, vector DBs) and experimentation.",
        duration: "20 weeks",
        level: "Advanced",
        students: "350+",
        modules: [
            "Machine Learning Fundamentals",
            "Deep Learning & Neural Networks",
            "Transformers & Attention Mechanisms",
            "LLM Pipelines & RAG",
            "Vector Databases",
            "Model Deployment & MLOps"
        ],
        skills: ["TensorFlow", "PyTorch", "Transformers", "LLMs", "RAG", "Vector DBs"],
        prerequisites: ["Python proficiency", "ML basics", "Linear algebra"],
        detailedDescription: "Dive deep into artificial intelligence and machine learning with a focus on modern Gen AI architectures. Master transformers, build LLM pipelines with RAG, work with vector databases, and deploy production-ready AI models.",
        imageHint: "unsplash:machine learning neural network",
    },
    {
        title: "Python Developer (Django & Web)",
        icon: Zap,
        description:
            "Python and Django web frameworks, REST APIs, backend logic, database integration and deployment to cloud platforms.",
        duration: "14 weeks",
        level: "Beginner to Intermediate",
        students: "600+",
        modules: [
            "Python Programming Mastery",
            "Django Framework",
            "REST API Development",
            "Database Design & ORM",
            "Authentication & Security",
            "Cloud Deployment (AWS/Azure)"
        ],
        skills: ["Python", "Django", "REST APIs", "PostgreSQL", "Docker", "AWS"],
        prerequisites: ["Basic programming knowledge"],
        detailedDescription: "Become a full-stack Python developer specializing in Django web development. Build scalable web applications, create robust REST APIs, implement secure authentication, and deploy to cloud platforms.",
        imageHint: "unsplash:python code, django",
    },
    {
        title: "Gen AI Engineer",
        icon: Sparkles,
        description:
            "Build production Gen AI solutions: prompt design, RAG architectures, vector embeddings, fine-tuning and deploying Gen AI products.",
        duration: "18 weeks",
        level: "Intermediate to Advanced",
        students: "400+",
        modules: [
            "Prompt Engineering Mastery",
            "RAG Architecture Design",
            "Vector Embeddings & Databases",
            "LLM Fine-tuning",
            "Gen AI Product Development",
            "Production Deployment"
        ],
        skills: ["LangChain", "OpenAI API", "Pinecone", "ChromaDB", "Prompt Engineering", "RAG"],
        prerequisites: ["Python knowledge", "Basic ML understanding"],
        detailedDescription: "Specialize in building production-grade generative AI applications. Master prompt engineering, design RAG architectures, work with vector databases, fine-tune LLMs, and deploy scalable Gen AI products.",
        imageHint: "unsplash:generative ai, prompt engineering",
    },
    {
        title: "Cloud & Data Engineer",
        icon: Settings2,
        description:
            "Data engineering fundamentals: SQL, data warehouses, ETL pipelines, Spark, Linux and cloud basics (Azure/AWS) for production data workflows.",
        duration: "16 weeks",
        level: "Intermediate",
        students: "380+",
        modules: [
            "SQL & Data Warehousing",
            "ETL Pipeline Development",
            "Apache Spark",
            "Linux System Administration",
            "AWS/Azure Cloud Services",
            "Data Pipeline Orchestration"
        ],
        skills: ["SQL", "Spark", "Airflow", "AWS", "Azure", "Docker", "Kubernetes"],
        prerequisites: ["Programming basics", "Database knowledge"],
        detailedDescription: "Master data engineering with comprehensive training in building scalable data pipelines. Learn SQL, Spark, cloud platforms, and orchestration tools to handle production data workflows.",
        imageHint: "unsplash:data engineer, cloud infrastructure",
    },
    {
        title: "AI Essentials",
        icon: Globe,
        description:
            "Foundations of AI for beginners: basics of AI concepts, MS Office & Google Apps, generative content workflows (text, image, audio).",
        duration: "8 weeks",
        level: "Beginner",
        students: "700+",
        modules: [
            "AI Fundamentals",
            "MS Office & Google Workspace",
            "Gen AI Tools Overview",
            "Text Generation with AI",
            "Image Generation Tools",
            "Audio & Video AI Tools"
        ],
        skills: ["ChatGPT", "Midjourney", "Office 365", "Google Apps", "AI Prompting"],
        prerequisites: ["None - beginner friendly"],
        detailedDescription: "Perfect for beginners! Learn AI fundamentals and how to use generative AI tools for productivity. Master MS Office, Google Apps, and modern AI tools for content creation.",
        imageHint: "unsplash:learning ai classroom",
    },
    {
        title: "Models Development & Maintenance",
        icon: Fingerprint,
        description:
            "Model lifecycle: development, testing, deployment, monitoring, MLOps pipelines, CI/CD for models and maintenance best practices.",
        duration: "14 weeks",
        level: "Advanced",
        students: "300+",
        modules: [
            "Model Development Lifecycle",
            "Testing & Validation",
            "MLOps Fundamentals",
            "CI/CD for ML Models",
            "Model Monitoring",
            "Production Maintenance"
        ],
        skills: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
        prerequisites: ["ML experience", "DevOps basics"],
        detailedDescription: "Master the complete ML model lifecycle from development to production. Learn MLOps best practices, implement CI/CD pipelines, monitor models in production, and maintain AI systems at scale.",
        imageHint: "unsplash:mlops, model deployment",
    },
];

function CourseModal({ course, onClose }: { course: CourseDetail; onClose: () => void }) {
    const Icon = course.icon;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Header with gradient and image */}
                <div className="relative">
                    {/* Course Image */}
                    <div className="relative h-64 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="flex h-20 w-20 mx-auto mb-4 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-2xl">
                                    <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                                </div>
                                <h2 className="text-4xl font-bold text-white mb-3">{course.title}</h2>
                                <p className="text-blue-100 text-lg max-w-2xl">{course.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick stats */}
                    <div className="bg-neutral-900 px-8 py-6">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex items-center gap-3 text-white/90">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/20">
                                    <Clock className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-xs opacity-75">Duration</div>
                                    <div className="font-semibold">{course.duration}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-white/90">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/20">
                                    <BarChart className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-xs opacity-75">Level</div>
                                    <div className="font-semibold">{course.level}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-white/90">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600/20">
                                    <Users className="w-5 h-5 text-pink-400" />
                                </div>
                                <div>
                                    <div className="text-xs opacity-75">Students</div>
                                    <div className="font-semibold">{course.students}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                    {/* Detailed Description */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">About This Course</h3>
                        <p className="text-neutral-300 leading-relaxed">{course.detailedDescription}</p>
                    </div>

                    {/* Modules */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Course Modules</h3>
                        <div className="grid gap-3">
                            {course.modules.map((module, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/50 border border-neutral-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-neutral-200">{module}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Skills You'll Learn</h3>
                        <div className="flex flex-wrap gap-2">
                            {course.skills.map((skill, idx) => (
                                <span key={idx} className="px-3 py-1.5 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium border border-blue-500/30">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Prerequisites */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
                        <ul className="space-y-2">
                            {course.prerequisites.map((prereq, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-neutral-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                    {prereq}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                            Enroll Now
                        </button>
                        <button className="px-6 py-3 rounded-lg border border-neutral-700 text-white font-semibold hover:bg-neutral-800 transition-colors">
                            Download Syllabus
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function CoursesWithBoxes({ className }: { className?: string }) {
    const shouldReduceMotion = useReducedMotion();
    const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);

    return (
        <>
            <section id="courses" className={cn("relative py-16 md:py-28 overflow-hidden", className)}>
                {/* Subtle dotted background at top */}
                <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255_255_255_/_0.15)_1px,_transparent_0)] bg-[length:40px_40px]" />
                </div>

                {/* Decorative background - placed absolutely and behind content */}
                <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
                    {shouldReduceMotion ? (
                        <div className="w-full h-full bg-gradient-to-tr from-slate-900 to-slate-800 opacity-70" />
                    ) : (
                        <Boxes className="opacity-40" />
                    )}
                </div>

                {/* Foreground content */}
                <div className="relative z-10 mx-auto max-w-6xl px-4">
                    <div className="mx-auto max-w-3xl text-center mb-10">
                        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">Our Courses</h2>
                        <p className="text-muted-foreground mt-3 text-sm md:text-base">
                            Industry-aligned programs — hands-on projects, job-ready skills and Gen-AI powered learning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {COURSES.map((c, i) => {
                            const motionProps = shouldReduceMotion
                                ? {}
                                : {
                                    initial: { opacity: 0, translateY: 50 },
                                    whileInView: { opacity: 1, translateY: 0 },
                                    viewport: { once: true, margin: "-100px" },
                                    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
                                } as any;

                            return (
                                <motion.div key={c.title} {...motionProps} className="h-full">
                                    <div
                                        onClick={() => setSelectedCourse(c)}
                                        className="cursor-pointer transform transition-transform hover:scale-105 h-full"
                                    >
                                        {c.title === "AI Essentials" ? (
                                            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start min-h-[300px]">
                                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl opacity-20" />

                                                <div className="relative z-50 flex-1">
                                                    <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                                        <c.icon className="h-5 w-5 text-gray-300" />
                                                    </div>

                                                    <h1 className="font-bold text-xl text-white mb-4">
                                                        {c.title}
                                                    </h1>

                                                    <p className="font-normal text-base text-slate-500 mb-4 line-clamp-4">
                                                        {c.description}
                                                    </p>
                                                </div>

                                                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 relative z-50 mt-auto hover:bg-gray-800 transition-colors">
                                                    Explore
                                                </button>

                                                <Meteors number={20} />
                                            </div>
                                        ) : (
                                            <FeatureCard
                                                feature={{
                                                    title: c.title,
                                                    icon: c.icon,
                                                    description: c.description,
                                                }}
                                                className="bg-card/6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all h-full min-h-[300px]"
                                            />
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mx-auto max-w-3xl text-center mt-8">
                        <p className="text-sm text-muted-foreground">
                            Click on any course to see detailed information. Want to talk to an advisor? <a href="/contact" className="underline">Contact Us</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedCourse && (
                    <CourseModal
                        course={selectedCourse}
                        onClose={() => setSelectedCourse(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
