"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart, Code, Brain, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

interface Course {
    id: string;
    name: string;
    duration: string;
    level: string;
    tools: string[];
    description: string;
}

const courses: Course[] = [
    {
        id: 'da',
        name: 'Data Analytics',
        duration: '3 Months',
        level: 'Beginner',
        tools: ['Excel', 'SQL', 'Power BI', 'Python'],
        description: 'Master the art of data storytelling and business intelligence.'
    },
    {
        id: 'ds',
        name: 'Data Science',
        duration: '6 Months',
        level: 'Intermediate',
        tools: ['Python', 'Pandas', 'Scikit-Learn', 'Statistics'],
        description: 'Comprehensive program covering statistical analysis and predictive modeling.'
    },
    {
        id: 'aiml',
        name: 'AI/ML with Gen AI',
        duration: '8 Months',
        level: 'Advanced',
        tools: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
        description: 'Deep dive into machine learning and the latest in Generative AI.'
    },
    {
        id: 'pe',
        name: 'Prompt Engineering',
        duration: '1 Month',
        level: 'Short Course',
        tools: ['GPT-4', 'Midjourney', 'Claude', 'DALL-E'],
        description: 'Unlock the full potential of AI models through effective prompting.'
    }
];

const CoursesFocusGrid: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section id="courses" className="py-32 px-6 bg-neutral-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Our Courses
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Specialized career-track programs designed to take you from zero to industry-ready.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            onMouseEnter={() => setHoveredId(course.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={cn(
                                "relative rounded-3xl p-8 transition-all duration-500 flex flex-col h-full",
                                "border border-neutral-800 bg-neutral-900 group cursor-pointer overflow-hidden",
                                hoveredId && hoveredId !== course.id ? "opacity-40 scale-[0.98] blur-[1px]" : "opacity-100 scale-100 shadow-[0_0_50px_rgba(59,130,246,0.1)] border-neutral-700"
                            )}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <Badge className="bg-blue-600/20 text-blue-400 border-none px-3 py-1">
                                    {course.level}
                                </Badge>
                                <div className="text-neutral-500 group-hover:text-blue-500 transition-colors duration-300">
                                    <Clock size={20} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {course.name}
                            </h3>

                            <p className="text-neutral-400 text-sm mb-6 flex-grow">
                                {course.description}
                            </p>

                            <div className="mb-8">
                                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Tools You'll Master</p>
                                <div className="flex flex-wrap gap-2">
                                    {course.tools.map((tool) => (
                                        <span key={tool} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md border border-neutral-700">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between group-hover:border-blue-500/30 transition-colors">
                                <span className="text-sm font-medium text-white">{course.duration}</span>
                                <motion.div
                                    className="flex items-center gap-1 text-blue-500 font-semibold text-sm"
                                    animate={hoveredId === course.id ? { x: [0, 5, 0] } : {}}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    Syllabus <ArrowRight size={16} />
                                </motion.div>
                            </div>

                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesFocusGrid;
