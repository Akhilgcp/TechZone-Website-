"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { BookOpen, Database, Cpu, Zap, Sparkles, Settings2, Globe, Fingerprint, X, Clock, BarChart, Users, CheckCircle2, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EvervaultCard, Icon as EvervaultIcon } from '@/components/ui/evervault-card';
import { PixelCanvas } from '@/components/ui/pixel-canvas';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '@/components/ui/glowing-stars';
import { Tilt } from '@/components/ui/tilt';
import { Spotlight } from '@/components/ui/spotlight';
import { Meteors } from '@/components/ui/meteors';
import CardFlip from '@/components/ui/flip-card';
import { FlippingCard } from '@/components/ui/flipping-card';

type CourseDetail = {
    title: string;
    desc: string;
    gradientFrom: string;
    gradientTo: string;
    icon: LucideIcon;
    duration: string;
    level: string;
    students: string;
    modules: string[];
    skills: string[];
    prerequisites: string[];
    detailedDescription: string;
    courseImage: string;
};

const COURSES: CourseDetail[] = [
    {
        title: 'Data Analytics with Gen AI',
        desc: 'Excel, Power BI, SQL/Database basics, statistics and data storytelling — plus Gen AI tools & prompt techniques for analytics and report automation.',
        gradientFrom: '#ffbc00',
        gradientTo: '#ff0058',
        icon: BookOpen,
        duration: '12 weeks',
        level: 'Beginner to Intermediate',
        students: '500+',
        modules: [
            'Excel & Power BI Fundamentals',
            'SQL & Database Management',
            'Statistics & Data Visualization',
            'Gen AI Tools for Analytics',
            'Prompt Engineering for Reports',
            'Real-world Analytics Projects'
        ],
        skills: ['Excel', 'Power BI', 'SQL', 'Python', 'Gen AI', 'Data Storytelling'],
        prerequisites: ['Basic computer skills', 'Interest in data'],
        detailedDescription: 'Master the art of data analytics with cutting-edge Gen AI integration. Learn to transform raw data into actionable insights using industry-standard tools like Excel, Power BI, and SQL. Discover how to leverage Gen AI for automated reporting, advanced analytics, and intelligent data storytelling.',
        courseImage: '/course-images/data_analytics_dashboard_1765605302737.png'
    },
    {
        title: 'Data Science with Gen AI',
        desc: 'Python for data science, math & stats foundations, ML pipelines, NLP basics, CRISP-DM and PySpark/Big Data workflows.',
        gradientFrom: '#03a9f4',
        gradientTo: '#ff0058',
        icon: Database,
        duration: '16 weeks',
        level: 'Intermediate to Advanced',
        students: '450+',
        modules: [
            'Python Programming for Data Science',
            'Mathematics & Statistics',
            'Machine Learning Pipelines',
            'Natural Language Processing',
            'Big Data with PySpark',
            'Gen AI Integration'
        ],
        skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PySpark', 'NLP'],
        prerequisites: ['Basic programming', 'Mathematics fundamentals'],
        detailedDescription: 'Become a data scientist with comprehensive training in Python, machine learning, and Gen AI. Build end-to-end ML pipelines, work with big data using PySpark, and master NLP techniques enhanced with generative AI capabilities.',
        courseImage: '/course-images/data_science_jupyter_1765605319134.png'
    },
    {
        title: 'AI/ML with Gen AI',
        desc: 'Machine learning & deep learning fundamentals, transformers, model training, LLM pipelines (RAG, vector DBs) and experimentation.',
        gradientFrom: '#4dff03',
        gradientTo: '#00d0ff',
        icon: Cpu,
        duration: '20 weeks',
        level: 'Advanced',
        students: '350+',
        modules: [
            'Machine Learning Fundamentals',
            'Deep Learning & Neural Networks',
            'Transformers & Attention Mechanisms',
            'LLM Pipelines & RAG',
            'Vector Databases',
            'Model Deployment & MLOps'
        ],
        skills: ['TensorFlow', 'PyTorch', 'Transformers', 'LLMs', 'RAG', 'Vector DBs'],
        prerequisites: ['Python proficiency', 'ML basics', 'Linear algebra'],
        detailedDescription: 'Dive deep into artificial intelligence and machine learning with a focus on modern Gen AI architectures. Master transformers, build LLM pipelines with RAG, work with vector databases, and deploy production-ready AI models.',
        courseImage: '/course-images/neural_network_ai_1765605335693.png'
    },
    {
        title: 'Python Developer (Django & Web)',
        desc: 'Python and Django web frameworks, REST APIs, backend logic, database integration and deployment to cloud platforms.',
        gradientFrom: '#9c27b0',
        gradientTo: '#2196f3',
        icon: Zap,
        duration: '14 weeks',
        level: 'Beginner to Intermediate',
        students: '600+',
        modules: [
            'Python Programming Mastery',
            'Django Framework',
            'REST API Development',
            'Database Design & ORM',
            'Authentication & Security',
            'Cloud Deployment (AWS/Azure)'
        ],
        skills: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Docker', 'AWS'],
        prerequisites: ['Basic programming knowledge'],
        detailedDescription: 'Become a full-stack Python developer specializing in Django web development. Build scalable web applications, create robust REST APIs, implement secure authentication, and deploy to cloud platforms.',
        courseImage: '/course-images/python_django_code_1765605351219.png'
    },
    {
        title: 'Gen AI Engineer',
        desc: 'Build production Gen AI solutions: prompt design, RAG architectures, vector embeddings, fine-tuning and deploying Gen AI products.',
        gradientFrom: '#ffd700',
        gradientTo: '#ff6b35',
        icon: Sparkles,
        duration: '18 weeks',
        level: 'Intermediate to Advanced',
        students: '400+',
        modules: [
            'Prompt Engineering Mastery',
            'RAG Architecture Design',
            'Vector Embeddings & Databases',
            'LLM Fine-tuning',
            'Gen AI Product Development',
            'Production Deployment'
        ],
        skills: ['LangChain', 'OpenAI API', 'Pinecone', 'ChromaDB', 'Prompt Engineering', 'RAG'],
        prerequisites: ['Python knowledge', 'Basic ML understanding'],
        detailedDescription: 'Specialize in building production-grade generative AI applications. Master prompt engineering, design RAG architectures, work with vector databases, fine-tune LLMs, and deploy scalable Gen AI products.',
        courseImage: '/course-images/genai_prompt_interface_1765605367729.png'
    },
    {
        title: 'Cloud & Data Engineer',
        desc: 'Data engineering fundamentals: SQL, data warehouses, ETL pipelines, Spark, Linux and cloud basics (Azure/AWS) for production data workflows.',
        gradientFrom: '#00bcd4',
        gradientTo: '#4caf50',
        icon: Settings2,
        duration: '16 weeks',
        level: 'Intermediate',
        students: '380+',
        modules: [
            'SQL & Data Warehousing',
            'ETL Pipeline Development',
            'Apache Spark',
            'Linux System Administration',
            'AWS/Azure Cloud Services',
            'Data Pipeline Orchestration'
        ],
        skills: ['SQL', 'Spark', 'Airflow', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
        prerequisites: ['Programming basics', 'Database knowledge'],
        detailedDescription: 'Master data engineering with comprehensive training in building scalable data pipelines. Learn SQL, Spark, cloud platforms, and orchestration tools to handle production data workflows.',
        courseImage: '/course-images/cloud_infrastructure_1765605386543.png'
    },
    {
        title: 'AI Essentials',
        desc: 'Foundations of AI for beginners: basics of AI concepts, MS Office & Google Apps, generative content workflows (text, image, audio).',
        gradientFrom: '#e91e63',
        gradientTo: '#9c27b0',
        icon: Globe,
        duration: '8 weeks',
        level: 'Beginner',
        students: '700+',
        modules: [
            'AI Fundamentals',
            'MS Office & Google Workspace',
            'Gen AI Tools Overview',
            'Text Generation with AI',
            'Image Generation Tools',
            'Audio & Video AI Tools'
        ],
        skills: ['ChatGPT', 'Midjourney', 'Office 365', 'Google Apps', 'AI Prompting'],
        prerequisites: ['None - beginner friendly'],
        detailedDescription: 'Perfect for beginners! Learn AI fundamentals and how to use generative AI tools for productivity. Master MS Office, Google Apps, and modern AI tools for content creation.',
        courseImage: '/course-images/ai_learning_classroom_1765605402545.png'
    },
    {
        title: 'Models Development & Maintenance',
        desc: 'Model lifecycle: development, testing, deployment, monitoring, MLOps pipelines, CI/CD for models and maintenance best practices.',
        gradientFrom: '#3f51b5',
        gradientTo: '#673ab7',
        icon: Fingerprint,
        duration: '14 weeks',
        level: 'Advanced',
        students: '300+',
        modules: [
            'Model Development Lifecycle',
            'Testing & Validation',
            'MLOps Fundamentals',
            'CI/CD for ML Models',
            'Model Monitoring',
            'Production Maintenance'
        ],
        skills: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
        prerequisites: ['ML experience', 'DevOps basics'],
        detailedDescription: 'Master the complete ML model lifecycle from development to production. Learn MLOps best practices, implement CI/CD pipelines, monitor models in production, and maintain AI systems at scale.',
        courseImage: '/course-images/mlops_deployment_1765605421618.png'
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

                {/* Course Image Header - Clean, no overlay */}
                <div className="relative h-[500px] w-full overflow-hidden rounded-t-2xl bg-neutral-800">
                    <img
                        src={course.courseImage}
                        alt={course.title}
                        loading="lazy"
                        className="w-full h-full object-contain"
                    />
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

                {/* Content */}
                <div className="p-8 space-y-8">
                    {/* Course Title and Description */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-3">{course.title}</h2>
                        <p className="text-neutral-300 text-lg leading-relaxed">{course.desc}</p>
                    </div>

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
                        <button
                            className="flex-1 px-6 py-3 rounded-lg text-white font-semibold transition-all"
                            style={{
                                background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})`
                            }}
                        >
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

export default function GradientCardShowcase({ onBack }: { onBack?: () => void }) {
    const shouldReduceMotion = useReducedMotion();
    const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);

    return (
        <>
            <div className="bg-neutral-950 min-h-screen pt-24 pb-10 relative">
                {/* Back Button for SPA Mode */}
                {onBack && (
                    <div className="container mx-auto px-4 mb-8">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10"
                        >
                            <X size={20} />
                            <span>Back to Home</span>
                        </button>
                    </div>
                )}

                <div className="flex justify-center items-center flex-wrap gap-8">
                    {COURSES.map((course, idx) => {
                        const Icon = course.icon;
                        // Determine image URL
                        const isDataScience = course.title === 'Data Science with Gen AI';
                        // Default placeholders if course.courseImage isn't fully working, though it seems set.
                        // Using the existing logic from the specific cards or falling back to course.courseImage
                        const displayImage = course.courseImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=300";

                        return (
                            <div key={idx} className="m-4">
                                <FlippingCard
                                    height={400}
                                    width={320}
                                    frontContent={
                                        <div className="flex flex-col h-full w-full p-4 relative overflow-hidden">
                                            {/* Image Area */}
                                            <div className="h-48 w-full overflow-hidden rounded-lg mb-4 bg-gray-100 dark:bg-zinc-800">
                                                <img
                                                    src={displayImage}
                                                    alt={course.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content Area */}
                                            <div className="flex flex-col flex-grow">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800">
                                                        <Icon className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                                                    </div>
                                                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{course.level}</span>
                                                </div>

                                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                                    {course.desc}
                                                </p>
                                            </div>
                                        </div>
                                    }
                                    backContent={
                                        <div className="flex flex-col h-full w-full p-6 justify-between bg-white dark:bg-zinc-900">
                                            <div>
                                                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                                                    Highlights
                                                </h4>
                                                <ul className="space-y-3">
                                                    {course.modules.slice(0, 4).map((mod, i) => (
                                                        <li key={i} className="text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2.5">
                                                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                            <span className="leading-tight">{mod}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSelectedCourse(course);
                                                }}
                                                className="w-full py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm mt-4"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {
                    selectedCourse && (
                        <CourseModal
                            course={selectedCourse}
                            onClose={() => setSelectedCourse(null)}
                        />
                    )
                }
            </AnimatePresence>
        </>
    );
}
