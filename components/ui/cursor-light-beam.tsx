"use client";

import React, { useEffect, useRef } from 'react';

interface CursorLightBeamProps {
    beamColor?: string;
    beamThickness?: number;
    glowIntensity?: number;
    lerpFactor?: number;
}

export const CursorLightBeam: React.FC<CursorLightBeamProps> = ({
    beamColor = '#a855f7', // Violet/pink tone
    beamThickness = 3,
    glowIntensity = 20,
    lerpFactor = 0.15,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to window size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Track mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Linear interpolation for smooth following
        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        // Animation loop
        const animate = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smoothly interpolate current position towards mouse position
            currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, lerpFactor);
            currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, lerpFactor);

            // Calculate beam origin (left center of screen)
            const originX = 0;
            const originY = canvas.height / 2;

            // Draw the light beam with gradient
            const gradient = ctx.createLinearGradient(
                originX,
                originY,
                currentPos.current.x,
                currentPos.current.y
            );

            // Create glowing gradient effect
            gradient.addColorStop(0, `${beamColor}00`); // Transparent at origin
            gradient.addColorStop(0.3, `${beamColor}40`); // Semi-transparent
            gradient.addColorStop(0.7, `${beamColor}80`); // More opaque
            gradient.addColorStop(1, beamColor); // Full color at cursor

            // Draw main beam
            ctx.save();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = beamThickness;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(originX, originY);
            ctx.lineTo(currentPos.current.x, currentPos.current.y);
            ctx.stroke();
            ctx.restore();

            // Draw glow layers for enhanced effect
            for (let i = 0; i < 3; i++) {
                ctx.save();
                ctx.globalAlpha = 0.1 - i * 0.03;
                ctx.strokeStyle = beamColor;
                ctx.lineWidth = beamThickness + glowIntensity * (i + 1);
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(originX, originY);
                ctx.lineTo(currentPos.current.x, currentPos.current.y);
                ctx.stroke();
                ctx.restore();
            }

            // Draw glowing orb at cursor position (virtual cursor)
            const orbRadius = 8;

            // Outer glow
            const orbGradient = ctx.createRadialGradient(
                currentPos.current.x,
                currentPos.current.y,
                0,
                currentPos.current.x,
                currentPos.current.y,
                orbRadius * 3
            );
            orbGradient.addColorStop(0, beamColor);
            orbGradient.addColorStop(0.3, `${beamColor}80`);
            orbGradient.addColorStop(1, `${beamColor}00`);

            ctx.save();
            ctx.fillStyle = orbGradient;
            ctx.beginPath();
            ctx.arc(currentPos.current.x, currentPos.current.y, orbRadius * 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Inner bright orb
            const innerGradient = ctx.createRadialGradient(
                currentPos.current.x,
                currentPos.current.y,
                0,
                currentPos.current.x,
                currentPos.current.y,
                orbRadius
            );
            innerGradient.addColorStop(0, '#ffffff');
            innerGradient.addColorStop(0.5, beamColor);
            innerGradient.addColorStop(1, `${beamColor}80`);

            ctx.save();
            ctx.fillStyle = innerGradient;
            ctx.beginPath();
            ctx.arc(currentPos.current.x, currentPos.current.y, orbRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Continue animation
            animationFrameId.current = requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [beamColor, beamThickness, glowIntensity, lerpFactor]);

    return (
        <>
            {/* Canvas for light beam effect */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-50"
                style={{ mixBlendMode: 'screen' }}
            />

            {/* Global style to hide native cursor */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
        </>
    );
};

export default CursorLightBeam;
