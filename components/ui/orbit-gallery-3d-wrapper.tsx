"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { ParticleSphere } from "@/components/ui/3d-orbit-gallery"
import type { MediaItem } from "@/lib/albums-manifest"

interface OrbitGallery3DWrapperProps {
    media: MediaItem[]
    onMediaClick: (index: number) => void
}

export default function OrbitGallery3DWrapper({ media, onMediaClick }: OrbitGallery3DWrapperProps) {
    return (
        <Canvas camera={{ position: [-10, 1.5, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <ParticleSphere media={media} onMediaClick={onMediaClick} />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
    )
}
