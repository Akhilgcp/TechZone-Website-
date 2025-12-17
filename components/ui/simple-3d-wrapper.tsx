"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { SimpleOrbitGallery } from "@/components/ui/simple-orbit-gallery"
import type { MediaItem } from "@/lib/albums-manifest"

interface Simple3DWrapperProps {
    media: MediaItem[]
    onMediaClick: (index: number) => void
}

export default function Simple3DWrapper({ media, onMediaClick }: Simple3DWrapperProps) {
    const imageUrls = media.map(item => item.path)

    return (
        <Canvas
            camera={{ position: [0, 2, 12], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
        >
            <color attach="background" args={['#0a0a0a']} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
            <SimpleOrbitGallery imageUrls={imageUrls} onImageClick={onMediaClick} />
            <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={5}
                maxDistance={20}
            />
        </Canvas>
    )
}
