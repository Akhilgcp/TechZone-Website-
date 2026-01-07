"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';



// Course data for TechZone Academy
const accordionItems = [
    {
        id: 1,
        title: 'Data Analytics',
        imageUrl: '/courses/data-analytics.png',
        description: 'Master data visualization, business intelligence, and analytics tools to transform raw data into actionable insights.',
        duration: '6 Months',
        level: 'Beginner to Advanced',
        topics: ['Power BI', 'Tableau', 'SQL', 'Excel Analytics', 'Data Visualization', 'Business Intelligence']
    },
    {
        id: 2,
        title: 'Data Science',
        imageUrl: '/courses/data-science.png',
        description: 'Learn statistical modeling, machine learning algorithms, and data processing to solve complex business problems.',
        duration: '8 Months',
        level: 'Intermediate to Advanced',
        topics: ['Python', 'Machine Learning', 'Statistics', 'Data Mining', 'Predictive Analytics', 'Big Data']
    },
    {
        id: 3,
        title: 'AI/ML with Gen AI',
        imageUrl: '/courses/ai-ml-genai.png',
        description: 'Explore artificial intelligence, machine learning, and cutting-edge generative AI technologies.',
        duration: '10 Months',
        level: 'Advanced',
        topics: ['Deep Learning', 'Neural Networks', 'Generative AI', 'LLMs', 'Computer Vision', 'NLP']
    },
    {
        id: 4,
        title: 'Digital Marketing with AI',
        imageUrl: '/courses/digital-marketing.png',
        description: 'Leverage AI-powered tools for SEO, content creation, social media marketing, and campaign optimization.',
        duration: '4 Months',
        level: 'Beginner to Intermediate',
        topics: ['SEO', 'Social Media Marketing', 'AI Content Tools', 'Marketing Analytics', 'Campaign Automation', 'Growth Hacking']
    },
    {
        id: 5,
        title: 'Prompt Engineering',
        imageUrl: '/courses/prompt-engineering.png',
        description: 'Master the art of crafting effective prompts for AI models to maximize output quality and efficiency.',
        duration: '3 Months',
        level: 'Beginner to Intermediate',
        topics: ['ChatGPT', 'Prompt Design', 'AI Optimization', 'Language Models', 'AI Tools', 'Automation']
    },
];

// Accordion Item Component
interface AccordionItemProps {
    item: typeof accordionItems[0];
    isActive: boolean;
    onMouseEnter: () => void;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter, onClick }) => {
    return (
        <div
            className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-500 ease-in-out
        ${isActive ? 'w-[300px] md:w-[400px]' : 'w-[50px] md:w-[60px]'}
      `}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
        >
            {/* Background Image */}
            <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x450/004AAD/ffffff?text=' + encodeURIComponent(item.title);
                }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Caption Text */}
            <div
                className={`
          absolute text-white transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center
          ${isActive
                        ? 'bottom-6 left-0 right-0 opacity-100'
                        : 'w-auto bottom-24 left-1/2 -translate-x-1/2 -rotate-90 opacity-80'
                    }
        `}
            >
                <span className={`font-bold ${isActive ? 'text-2xl mb-1' : 'text-lg whitespace-nowrap'}`}>
                    {item.title}
                </span>

                {isActive && (
                    <div className="flex flex-col gap-1 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100">
                        <span className="text-sm font-medium text-blue-300">{item.level}</span>
                        <span className="text-xs text-gray-300">{item.duration}</span>
                        <span className="mt-2 text-xs uppercase tracking-wide border border-white/20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">Click to View Details</span>
                    </div>
                )}
            </div>
        </div>
    );
};

// Course Overview Modal
interface CourseModalProps {
    course: typeof accordionItems[0] | null;
    onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
    if (!course) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    {/* Header Image */}
                    <div className="h-64 relative">
                        <img
                            src={course.imageUrl}
                            alt={course.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                        >
                            <X className="h-6 w-6 text-gray-900" />
                        </button>
                        <h2 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
                            {course.title}
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <p className="text-lg text-gray-700 mb-6">{course.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Duration</p>
                                <p className="text-lg font-semibold text-gray-900">{course.duration}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Level</p>
                                <p className="text-lg font-semibold text-gray-900">{course.level}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Topics Covered</h3>
                            <div className="flex flex-wrap gap-2">
                                {course.topics.map((topic, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#004AAD] text-white px-4 py-2 rounded-full text-sm font-medium"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-full bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Component
export function TechZoneCoursesAccordion({ onViewAllClick }: { onViewAllClick?: () => void }) {
    const [activeIndex, setActiveIndex] = useState(2); // Default to AI/ML
    const [selectedCourse, setSelectedCourse] = useState<typeof accordionItems[0] | null>(null);

    const handleItemHover = (index: number) => {
        setActiveIndex(index);
    };

    const handleItemClick = (item: typeof accordionItems[0]) => {
        setSelectedCourse(item);
    };

    const handleCloseModal = () => {
        setSelectedCourse(null);
        // Scroll to courses section to ensure user doesn't get lost
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="bg-neutral-950 font-sans">
                <section className="container mx-auto px-4 py-12 md:py-24">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                        {/* Left Side: Text Content */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
                                Our Courses
                            </h2>
                            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
                                Explore our industry-leading programs in Data Analytics, Data Science, AI/ML with Gen AI, Digital Marketing, and Prompt Engineering.
                                Each course is designed with hands-on training and real-world applications.
                            </p>
                            <p className="mt-4 text-md text-gray-400 max-w-xl mx-auto md:mx-0">
                                Hover over each course to preview, click to view full details and enroll.
                            </p>
                            <div className="mt-8 flex flex-col items-center md:items-start gap-8">
                                <button
                                    onClick={onViewAllClick}
                                    className="inline-block bg-[#004AAD] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[#003a8c] transition-colors duration-300"
                                >
                                    View All Courses
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Image Accordion */}
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
                                {accordionItems.map((item, index) => (
                                    <AccordionItem
                                        key={item.id}
                                        item={item}
                                        isActive={index === activeIndex}
                                        onMouseEnter={() => handleItemHover(index)}
                                        onClick={() => handleItemClick(item)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Course Overview Modal */}
            <CourseModal course={selectedCourse} onClose={handleCloseModal} />
        </>
    );
}
