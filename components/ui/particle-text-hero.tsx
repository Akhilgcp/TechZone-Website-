"use client"

import { useEffect, useRef } from "react"

interface Vector2D {
    x: number
    y: number
}

class Particle {
    pos: Vector2D = { x: 0, y: 0 }
    vel: Vector2D = { x: 0, y: 0 }
    acc: Vector2D = { x: 0, y: 0 }
    target: Vector2D = { x: 0, y: 0 }

    closeEnoughTarget = 50
    maxSpeed = 2.0
    maxForce = 0.15
    particleSize = 3

    move() {
        const distance = Math.sqrt(
            Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2)
        )

        let proximityMult = 1
        if (distance < this.closeEnoughTarget) {
            proximityMult = distance / this.closeEnoughTarget
        }

        const towardsTarget = {
            x: this.target.x - this.pos.x,
            y: this.target.y - this.pos.y,
        }

        const magnitude = Math.sqrt(towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y)
        if (magnitude > 0) {
            towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult
            towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult
        }

        const steer = {
            x: towardsTarget.x - this.vel.x,
            y: towardsTarget.y - this.vel.y,
        }

        const steerMagnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y)
        if (steerMagnitude > 0) {
            steer.x = (steer.x / steerMagnitude) * this.maxForce
            steer.y = (steer.y / steerMagnitude) * this.maxForce
        }

        this.acc.x += steer.x
        this.acc.y += steer.y

        this.vel.x += this.acc.x
        this.vel.y += this.acc.y
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
        this.acc.x = 0
        this.acc.y = 0
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fillRect(this.pos.x, this.pos.y, this.particleSize, this.particleSize)
    }
}

interface ParticleTextProps {
    text: string
    className?: string
}

export function ParticleText({ text, className = "" }: ParticleTextProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>()
    const particlesRef = useRef<Particle[]>([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")!

        // Set canvas size
        const updateCanvasSize = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.clientWidth
                canvas.height = 120
            }
        }

        updateCanvasSize()
        window.addEventListener("resize", updateCanvasSize)

        // Generate particles from text
        const generateParticles = () => {
            const offscreenCanvas = document.createElement("canvas")
            offscreenCanvas.width = canvas.width
            offscreenCanvas.height = canvas.height
            const offscreenCtx = offscreenCanvas.getContext("2d")!

            offscreenCtx.fillStyle = "white"
            offscreenCtx.font = "bold 60px Arial"
            offscreenCtx.textAlign = "left"
            offscreenCtx.textBaseline = "middle"
            offscreenCtx.fillText(text, 20, canvas.height / 2)

            const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height)
            const pixels = imageData.data

            const particles: Particle[] = []
            const pixelSteps = 4

            for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
                const alpha = pixels[i + 3]
                if (alpha > 0) {
                    const x = (i / 4) % canvas.width
                    const y = Math.floor(i / 4 / canvas.width)

                    const particle = new Particle()
                    particle.pos.x = Math.random() * canvas.width
                    particle.pos.y = Math.random() * canvas.height
                    particle.target.x = x
                    particle.target.y = y
                    particles.push(particle)
                }
            }

            particlesRef.current = particles
        }

        generateParticles()

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particlesRef.current.forEach((particle) => {
                particle.move()
                particle.draw(ctx)
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            window.removeEventListener("resize", updateCanvasSize)
        }
    }, [text])

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ width: "100%", height: "120px" }}
        />
    )
}
