"use client"

import React, { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { MediaItem } from "@/lib/albums-manifest"

interface EnhancedMediaModalProps {
    isOpen: boolean
    onClose: () => void
    allMedia: MediaItem[]
    initialIndex: number
}

export default function EnhancedMediaModal({
    isOpen,
    onClose,
    allMedia,
    initialIndex,
}: EnhancedMediaModalProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const currentMedia = allMedia[currentIndex]

    // Update current index when initial index changes
    useEffect(() => {
        setCurrentIndex(initialIndex)
    }, [initialIndex])

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return

            switch (e.key) {
                case 'Escape':
                    onClose()
                    break
                case 'ArrowLeft':
                    handlePrevious()
                    break
                case 'ArrowRight':
                    handleNext()
                    break
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, currentIndex])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % allMedia.length)
    }

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length)
    }

    // Touch handlers for swipe gestures
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe) {
            handleNext()
        }
        if (isRightSwipe) {
            handlePrevious()
        }

        setTouchStart(0)
        setTouchEnd(0)
    }

    if (!isOpen || !currentMedia) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-[102] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/20"
                aria-label="Close modal"
            >
                <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous button */}
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[102] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/20"
                aria-label="Previous media"
            >
                <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Next button */}
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[102] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/20"
                aria-label="Next media"
            >
                <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Media content */}
            <div
                className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {currentMedia.type === 'image' ? (
                    <img
                        src={currentMedia.path}
                        alt={currentMedia.alt}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                        style={{ maxHeight: 'calc(100vh - 120px)' }}
                    />
                ) : (
                    <video
                        src={currentMedia.path}
                        controls
                        autoPlay
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                        style={{ maxHeight: 'calc(100vh - 120px)' }}
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            {/* Media info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/70 backdrop-blur-md rounded-full border border-white/10 max-w-2xl">
                <p className="text-white text-sm text-center">
                    {currentMedia.alt}
                </p>
                <p className="text-white/60 text-xs text-center mt-1">
                    {currentIndex + 1} / {allMedia.length}
                </p>
            </div>
        </div>
    )
}
