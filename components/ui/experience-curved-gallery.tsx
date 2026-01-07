"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const images = [
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', title: 'Hands-on Workshops' },
    { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', title: 'Interactive Learning' },
    { url: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&w=800&q=80', title: 'Modern Infrastructure' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', title: 'Collaborative Environment' },
    { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', title: 'Expert Mentorship' },
];

const ExperienceCurvedGallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-32 px-6 bg-neutral-950 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Experience TechZone Academy
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Inside our classrooms, labs, and learning environment.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-4 h-[500px] items-center">
                    {images.map((img, idx) => {
                        // Create a curved layout effect
                        const rotation = (idx - 2) * 10;
                        const yTranslation = Math.abs(idx - 2) * 20;

                        return (
                            <motion.div
                                key={img.url}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 0,
                                    y: -20,
                                    zIndex: 50,
                                    transition: { duration: 0.3 }
                                }}
                                onClick={() => setSelectedImage(img.url)}
                                className="relative w-64 h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border-4 border-neutral-900"
                                style={{
                                    rotate: `${rotation}deg`,
                                    translateY: `${yTranslation}px`
                                }}
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-white font-bold mb-2">{img.title}</h3>
                                    <Maximize2 className="text-white h-6 w-6" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Preview */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-10 right-10 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                            <X size={32} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ExperienceCurvedGallery;
