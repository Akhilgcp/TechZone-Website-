"use client"

import { useRef, useMemo, Suspense } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface SimpleOrbitGalleryProps {
    imageUrls: string[]
    onImageClick?: (index: number) => void
}

export function SimpleOrbitGallery({ imageUrls, onImageClick }: SimpleOrbitGalleryProps) {
    const groupRef = useRef<THREE.Group>(null!)

    const PARTICLE_COUNT = 500
    const SPHERE_RADIUS = 8
    const IMAGE_SIZE = 1.2
    const ROTATION_SPEED = 0.001

    // Generate particles
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT)
            const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi
            const radius = SPHERE_RADIUS + (Math.random() - 0.5) * 2

            temp.push({
                position: new THREE.Vector3(
                    radius * Math.cos(theta) * Math.sin(phi),
                    radius * Math.cos(phi),
                    radius * Math.sin(theta) * Math.sin(phi)
                ),
                color: new THREE.Color().setHSL(0.05 + Math.random() * 0.05, 0.8, 0.6),
                scale: 0.005 + Math.random() * 0.005,
            })
        }
        return temp
    }, [])

    // Generate image positions
    const imagePositions = useMemo(() => {
        return imageUrls.slice(0, 20).map((_, i) => {
            const angle = (i / Math.min(imageUrls.length, 20)) * Math.PI * 2
            const x = SPHERE_RADIUS * Math.cos(angle)
            const z = SPHERE_RADIUS * Math.sin(angle)

            // Calculate rotation to face outward
            const position = new THREE.Vector3(x, 0, z)
            const lookAt = position.clone().normalize()
            const euler = new THREE.Euler()
            const matrix = new THREE.Matrix4()
            matrix.lookAt(position, position.clone().add(lookAt), new THREE.Vector3(0, 1, 0))
            euler.setFromRotationMatrix(matrix)
            euler.z += Math.PI

            return {
                position: [x, 0, z] as [number, number, number],
                rotation: [euler.x, euler.y, euler.z] as [number, number, number],
                index: i,
            }
        })
    }, [imageUrls])

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += ROTATION_SPEED
        }
    })

    return (
        <group ref={groupRef}>
            {/* Particles */}
            {particles.map((particle, i) => (
                <mesh key={`particle-${i}`} position={particle.position} scale={particle.scale}>
                    <sphereGeometry args={[1, 6, 4]} />
                    <meshBasicMaterial color={particle.color} transparent opacity={0.8} />
                </mesh>
            ))}

            {/* Images */}
            {imagePositions.map((img) => (
                <mesh
                    key={`image-${img.index}`}
                    position={img.position}
                    rotation={img.rotation}
                    onClick={(e) => {
                        e.stopPropagation()
                        onImageClick?.(img.index)
                    }}
                >
                    <planeGeometry args={[IMAGE_SIZE, IMAGE_SIZE]} />
                    <meshBasicMaterial color="#3ca2fa" opacity={0.5} transparent side={THREE.DoubleSide} />
                </mesh>
            ))}
        </group>
    )
}
