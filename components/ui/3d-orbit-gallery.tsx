"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { useFrame, ThreeEvent } from "@react-three/fiber"
import * as THREE from "three"
import type { MediaItem } from "@/lib/albums-manifest"

interface ParticleSphereProps {
    media: MediaItem[]
    onMediaClick?: (index: number) => void
}

export function ParticleSphere({ media, onMediaClick }: ParticleSphereProps) {
    const PARTICLE_COUNT = 800 // Reduced for better performance
    const PARTICLE_SIZE_MIN = 0.005
    const PARTICLE_SIZE_MAX = 0.010
    const SPHERE_RADIUS = 9
    const POSITION_RANDOMNESS = 4
    const ROTATION_SPEED_X = 0.0
    const ROTATION_SPEED_Y = 0.0005
    const PARTICLE_OPACITY = 1

    const IMAGE_SIZE = 1.5
    const IMAGE_COUNT = Math.min(media.length, 24) // Use actual media count, max 24

    const groupRef = useRef<THREE.Group>(null)
    const [textures, setTextures] = useState<THREE.Texture[]>([])

    // Load textures using THREE.TextureLoader
    useEffect(() => {
        const loader = new THREE.TextureLoader()
        const loadedTextures: THREE.Texture[] = []

        const imagePaths = media.slice(0, IMAGE_COUNT).map(item => {
            if (item.type === 'image') {
                return item.path
            }
            return '/placeholder-video.svg'
        })

        let loadedCount = 0
        imagePaths.forEach((path, index) => {
            loader.load(
                path,
                (texture) => {
                    texture.wrapS = THREE.ClampToEdgeWrapping
                    texture.wrapT = THREE.ClampToEdgeWrapping
                    texture.flipY = false
                    loadedTextures[index] = texture
                    loadedCount++
                    if (loadedCount === imagePaths.length) {
                        setTextures([...loadedTextures])
                    }
                },
                undefined,
                (error) => {
                    console.warn(`Failed to load texture: ${path}`, error)
                    // Create a placeholder texture
                    const canvas = document.createElement('canvas')
                    canvas.width = 256
                    canvas.height = 256
                    const ctx = canvas.getContext('2d')
                    if (ctx) {
                        ctx.fillStyle = '#1a1a1a'
                        ctx.fillRect(0, 0, 256, 256)
                        ctx.fillStyle = '#3ca2fa'
                        ctx.font = '20px Arial'
                        ctx.textAlign = 'center'
                        ctx.fillText('Image', 128, 128)
                    }
                    const placeholderTexture = new THREE.CanvasTexture(canvas)
                    loadedTextures[index] = placeholderTexture
                    loadedCount++
                    if (loadedCount === imagePaths.length) {
                        setTextures([...loadedTextures])
                    }
                }
            )
        })
    }, [media, IMAGE_COUNT])

    const particles = useMemo(() => {
        const particles = []

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT)
            const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi

            const radiusVariation = SPHERE_RADIUS + (Math.random() - 0.5) * POSITION_RANDOMNESS

            const x = radiusVariation * Math.cos(theta) * Math.sin(phi)
            const y = radiusVariation * Math.cos(phi)
            const z = radiusVariation * Math.sin(theta) * Math.sin(phi)

            particles.push({
                position: [x, y, z] as [number, number, number],
                scale: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
                color: new THREE.Color().setHSL(
                    Math.random() * 0.1 + 0.05,
                    0.8,
                    0.6 + Math.random() * 0.3,
                ),
            })
        }

        return particles
    }, [PARTICLE_COUNT, SPHERE_RADIUS, POSITION_RANDOMNESS, PARTICLE_SIZE_MIN, PARTICLE_SIZE_MAX])

    const orbitingImages = useMemo(() => {
        const images = []

        for (let i = 0; i < IMAGE_COUNT; i++) {
            const angle = (i / IMAGE_COUNT) * Math.PI * 2
            const x = SPHERE_RADIUS * Math.cos(angle)
            const y = 0
            const z = SPHERE_RADIUS * Math.sin(angle)

            const position = new THREE.Vector3(x, y, z)
            const center = new THREE.Vector3(0, 0, 0)
            const outwardDirection = position.clone().sub(center).normalize()

            const euler = new THREE.Euler()
            const matrix = new THREE.Matrix4()
            matrix.lookAt(position, position.clone().add(outwardDirection), new THREE.Vector3(0, 1, 0))
            euler.setFromRotationMatrix(matrix)

            euler.z += Math.PI

            images.push({
                position: [x, y, z] as [number, number, number],
                rotation: [euler.x, euler.y, euler.z] as [number, number, number],
                textureIndex: i,
                mediaIndex: i,
            })
        }

        return images
    }, [IMAGE_COUNT, SPHERE_RADIUS])

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += ROTATION_SPEED_Y
            groupRef.current.rotation.x += ROTATION_SPEED_X
        }
    })

    const handleImageClick = (mediaIndex: number) => (event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation()
        if (onMediaClick) {
            onMediaClick(mediaIndex)
        }
    }

    // Don't render images until textures are loaded
    if (textures.length === 0) {
        return (
            <group ref={groupRef}>
                {particles.map((particle, index) => (
                    <mesh key={index} position={particle.position} scale={particle.scale}>
                        <sphereGeometry args={[1, 8, 6]} />
                        <meshBasicMaterial color={particle.color} transparent opacity={PARTICLE_OPACITY} />
                    </mesh>
                ))}
            </group>
        )
    }

    return (
        <group ref={groupRef}>
            {particles.map((particle, index) => (
                <mesh key={index} position={particle.position} scale={particle.scale}>
                    <sphereGeometry args={[1, 8, 6]} />
                    <meshBasicMaterial color={particle.color} transparent opacity={PARTICLE_OPACITY} />
                </mesh>
            ))}

            {orbitingImages.map((image, index) => (
                <mesh
                    key={`image-${index}`}
                    position={image.position}
                    rotation={image.rotation}
                    onClick={handleImageClick(image.mediaIndex)}
                >
                    <planeGeometry args={[IMAGE_SIZE, IMAGE_SIZE]} />
                    <meshBasicMaterial
                        map={textures[image.textureIndex]}
                        opacity={1}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            ))}
        </group>
    )
}
