import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';

const techzoneGalleryData: GalleryItem[] = [
    {
        common: 'Our Vision',
        binomial: 'Future-Ready Technology Skills',
        photo: {
            url: '/vision-carousel.png',
            text: 'To be a trusted software training institute in Hyderabad',
            pos: 'center',
            by: 'TechZone Academy'
        }
    },
    {
        common: 'Our Mission',
        binomial: 'Practical Industry-Focused Training',
        photo: {
            url: '/mission-carousel.png',
            text: 'Delivering high-quality software training in Hyderabad',
            pos: 'center',
            by: 'TechZone Academy'
        }
    },
    {
        common: 'Our Goal',
        binomial: 'Bridging the Skill Gap',
        photo: {
            url: '/goal-carousel.png',
            text: 'Providing hands-on courses and expert mentorship',
            pos: 'center',
            by: 'TechZone Academy'
        }
    },
];

const TechZone3DGalleryDemo = () => {
    return (
        // This outer container provides the scrollable height
        <div className="w-full bg-neutral-950 text-foreground" style={{ height: '300vh' }}>
            {/* This inner container sticks to the top while scrolling */}
            <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
                <div className="text-center mb-8 absolute top-16 z-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Our Journey & Commitment</h1>
                    <p className="text-neutral-300 text-sm mt-2">Scroll to explore our Vision, Mission & Goal</p>
                </div>
                <div className="w-full h-full">
                    <CircularGallery items={techzoneGalleryData} radius={500} autoRotateSpeed={0.01} />
                </div>
                <div className="text-center absolute bottom-16 z-10 max-w-3xl px-4">
                    <p className="text-neutral-300 text-sm">
                        TechZone Academy offers software training programs across multiple branches in Hyderabad, including Lakdikapul, Himayat Nagar, and Tolichowki.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechZone3DGalleryDemo;
