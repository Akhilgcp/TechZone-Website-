"use client"

import { useEffect, useState } from 'react'
import InfiniteGallery from './3d-gallery-photography'

interface ClientOnly3DGalleryProps {
    images: Array<{ src: string; alt?: string }>
    speed?: number
    visibleCount?: number
    className?: string
    onMediaClick?: (index: number) => void
}

export default function ClientOnly3DGallery(props: ClientOnly3DGalleryProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return (
            <div className="flex items-center justify-center h-full w-full">
                <div className="text-neutral-400 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3ca2fa] mx-auto mb-4"></div>
                    <p>Loading 3D Gallery...</p>
                </div>
            </div>
        )
    }

    return <InfiniteGallery {...props} />
}
