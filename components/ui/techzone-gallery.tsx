"use client"

import React, { useState } from "react"
import ScrollMorphGallery from "@/components/ui/scroll-morph-gallery"
import EnhancedMediaModal from "@/components/ui/media-modal"
import { getAllMedia } from "@/lib/albums-manifest"
import { Sparkles } from "lucide-react"

export default function TechZoneGallery() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const allMedia = getAllMedia()

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
                    Scroll through our interactive gallery to explore our vibrant learning environment.
                    Click any image to view full-size and navigate through our collection.
                </p>
            </div>

            {/* Scroll Morph Gallery */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="relative mx-auto w-full max-w-6xl rounded-[24px] border border-white/5 p-2 shadow-2xl md:rounded-t-[44px] bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm">
                    <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-white/5 bg-neutral-900/30 shadow-xl md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] overflow-hidden h-[600px]">
                        <ScrollMorphGallery onMediaClick={handleMediaClick} />
                    </div>
                </div>

                {/* Helper text */}
                <div className="mt-8 text-center">
                    <p className="text-neutral-500 text-sm">
                        💡 <span className="text-neutral-400">Tip:</span> Scroll within the gallery to see the morphing animation. Click any image to view full-size. Use arrow keys or swipe to navigate through all {allMedia.length} items.
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
