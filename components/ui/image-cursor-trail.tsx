"use client"

import React, { createRef, useRef, type ReactNode } from "react"
import { Play } from "lucide-react"

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ")
}

interface MediaMouseTrailProps {
    items: string[]
    children?: ReactNode
    className?: string
    imgClass?: string
    distance?: number
    maxNumberOfImages?: number
    fadeAnimation?: boolean
    onImageClick?: (index: number, src: string) => void
}

function ImageCursorTrail({
    items,
    children,
    className,
    maxNumberOfImages = 5,
    imgClass = "w-40 h-48",
    distance = 20,
    fadeAnimation = true,
    onImageClick,
}: MediaMouseTrailProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const refs = useRef(items.map(() => createRef<HTMLDivElement>()))
    const currentZIndexRef = useRef(1)

    let globalIndex = 0
    let last = { x: 0, y: 0 }

    const activate = (element: HTMLDivElement, x: number, y: number) => {
        const containerRect = containerRef.current?.getBoundingClientRect()
        if (!containerRect) return
        const relativeX = x - containerRect.left
        const relativeY = y - containerRect.top
        element.style.left = `${relativeX}px`
        element.style.top = `${relativeY}px`

        if (currentZIndexRef.current > 40) {
            currentZIndexRef.current = 1
        }
        element.style.zIndex = String(currentZIndexRef.current)
        currentZIndexRef.current++

        element.dataset.status = "active"
        if (fadeAnimation) {
            setTimeout(() => {
                element.dataset.status = "inactive"
            }, 1500)
        }
        last = { x, y }
    }

    const distanceFromLast = (x: number, y: number) =>
        Math.hypot(x - last.x, y - last.y)

    const deactivate = (element: HTMLDivElement) => {
        element.dataset.status = "inactive"
    }

    const handleOnMove = (e: MouseEvent | Touch) => {
        if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / distance) {
            const lead = refs.current[globalIndex % refs.current.length].current
            const tail =
                refs.current[
                    (globalIndex - maxNumberOfImages) % refs.current.length
                ]?.current
            if (lead) activate(lead, e.clientX, e.clientY)
            if (tail) deactivate(tail)
            globalIndex++
        }
    }

    const handleMediaClick = (index: number, src: string) => {
        if (onImageClick) {
            onImageClick(index, src)
        }
    }

    const isVideo = (src: string) => {
        return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg')
    }

    return (
        <section
            onMouseMove={(e) => handleOnMove(e as any)}
            onTouchMove={(e) => handleOnMove(e.touches[0])}
            ref={containerRef}
            className={cn(
                "relative grid h-[600px] w-full place-content-center overflow-hidden rounded-lg",
                className
            )}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "opacity-0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl overflow-hidden transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 cursor-pointer hover:scale-110",
                        imgClass
                    )}
                    data-index={index}
                    data-status="inactive"
                    ref={refs.current[index]}
                    onClick={() => handleMediaClick(index, item)}
                >
                    {isVideo(item) ? (
                        <div className="relative w-full h-full bg-neutral-900 flex items-center justify-center">
                            <video
                                src={item}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Play className="w-12 h-12 text-white drop-shadow-lg" fill="white" />
                            </div>
                        </div>
                    ) : (
                        <img
                            src={item}
                            alt={`TechZone Academy media ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            ))}
            {children}
        </section>
    )
}

export default ImageCursorTrail
