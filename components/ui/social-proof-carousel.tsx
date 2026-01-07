"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'Data Analyst at TechCorp',
        content: 'TechZone Academy transformed my career. The hands-on projects and mentorship were invaluable in landing my current role.',
        stars: 5
    },
    {
        name: 'Sonal Verma',
        role: 'Data Scientist',
        content: 'The curriculum is very up-to-date. I loved the focus on practical skills rather than just theory. Highly recommend!',
        stars: 5
    },
    {
        name: 'Anjali Gupta',
        role: 'AI Engineer',
        content: 'I switched from a non-tech background to AI thanks to TechZone. The support during the transition was incredible.',
        stars: 5
    }
];

const SocialProofCarousel: React.FC = () => {
    return (
        <section className="py-32 px-6 bg-neutral-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Trusted by Learners Across Hyderabad
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        See what our students have to say about their experience at TechZone.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl relative overflow-hidden group"
                        >
                            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-blue-500/5 group-hover:text-blue-500/10 transition-colors" />

                            <div className="flex mb-4">
                                {Array.from({ length: testimonial.stars }).map((_, i) => (
                                    <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                                ))}
                            </div>

                            <p className="text-neutral-300 mb-8 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="mt-auto">
                                <h4 className="text-white font-bold">{testimonial.name}</h4>
                                <p className="text-blue-500 text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full">
                        <span className="text-white font-bold">4.9/5</span>
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={14} className="fill-blue-500 text-blue-500" />
                            ))}
                        </div>
                        <span className="text-neutral-500 text-sm ml-2">Average Rating</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProofCarousel;
