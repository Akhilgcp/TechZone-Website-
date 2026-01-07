"use client"

import React, { useState } from "react"
import { CircularGallery } from "@/components/ui/circular-gallery-2"
import EnhancedMediaModal from "@/components/ui/media-modal"
import { getAllMedia } from "@/lib/albums-manifest"
import { Sparkles } from "lucide-react"

export default function TechZoneGallery() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const allMedia = getAllMedia()

    // Map allMedia to the format expected by CircularGallery
    const galleryItems = allMedia.slice(0, 8).map(item => ({
        image: item.path,
        text: item.alt,
        type: item.type
    }))

    const handleMediaClick = (index: number) => {
        setSelectedIndex(index)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <section className="relative w-full py-20 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 opacity-50" />

            {/* Section Header */}
            <div className="relative z-10 max-w-7xl mx-auto mb-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3ca2fa]/10 border border-[#3ca2fa]/20 mb-6">
                    <Sparkles className="w-4 h-4 text-[#3ca2fa]" />
                    <span className="text-sm text-[#3ca2fa] font-medium">Our Journey</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Experience TechZone Academy
                </h2>

                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    Take a circular tour through our interactive gallery to explore our vibrant learning environment.
                    Click any item to view full-size or play videos.
                </p>
            </div>

            {/* Circular Gallery */}
            <div className="relative z-10 w-full h-[600px]">
                <CircularGallery
                    items={galleryItems}
                    bend={3}
                    borderRadius={0.05}
                    scrollEase={0.05}
                    onItemClick={handleMediaClick}
                />

                {/* Helper text */}
                <div className="mt-8 text-center px-4 relative z-20">
                    <p className="text-neutral-500 text-sm">
                        💡 <span className="text-neutral-400">Tip:</span> Drag or scroll to rotate the gallery. Click any item to explore.
                    </p>
                </div>
            </div>

            {/* Enhanced Media Modal with Navigation */}
            <EnhancedMediaModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                allMedia={allMedia}
                initialIndex={selectedIndex}
            />
        </section>
    )
}
