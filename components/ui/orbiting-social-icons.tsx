"use client"
import React, { useEffect, useState, memo } from 'react';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

// --- Type Definitions ---
type IconType = 'instagram' | 'facebook' | 'youtube' | 'linkedin';

type GlowColor = 'pink' | 'blue' | 'red' | 'linkedin';

interface SkillIconProps {
    type: IconType;
}

interface SkillConfig {
    id: string;
    orbitRadius: number;
    size: number;
    speed: number;
    iconType: IconType;
    phaseShift: number;
    glowColor: GlowColor;
    label: string;
    link?: string;
}

interface OrbitingSkillProps {
    config: SkillConfig;
    angle: number;
}

interface GlowingOrbitPathProps {
    radius: number;
    glowColor?: GlowColor;
    animationDelay?: number;
}

// --- Social Media Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
    instagram: {
        component: () => <Instagram className="w-full h-full" strokeWidth={1.5} />,
        color: '#E4405F'
    },
    facebook: {
        component: () => <Facebook className="w-full h-full" strokeWidth={1.5} />,
        color: '#1877F2'
    },
    youtube: {
        component: () => <Youtube className="w-full h-full" strokeWidth={1.5} />,
        color: '#FF0000'
    },
    linkedin: {
        component: () => <Linkedin className="w-full h-full" strokeWidth={1.5} />,
        color: '#0A66C2'
    }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
    const IconComponent = iconComponents[type]?.component;
    return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Social Icons ---
const skillsConfig: SkillConfig[] = [
    // Inner Orbit
    {
        id: 'instagram',
        orbitRadius: 80,
        size: 45,
        speed: 1,
        iconType: 'instagram',
        phaseShift: 0,
        glowColor: 'pink',
        label: 'Instagram',
        link: 'https://www.instagram.com/techzone_academy/'
    },
    {
        id: 'facebook',
        orbitRadius: 80,
        size: 45,
        speed: 1,
        iconType: 'facebook',
        phaseShift: Math.PI,
        glowColor: 'blue',
        label: 'Facebook',
        link: 'https://www.facebook.com/academytechzone/about'
    },
    // Outer Orbit
    {
        id: 'youtube',
        orbitRadius: 140,
        size: 50,
        speed: -0.6,
        iconType: 'youtube',
        phaseShift: 0,
        glowColor: 'red',
        label: 'YouTube',
        link: 'https://www.youtube.com/@techzone-academyfortrainin6241'
    },
    {
        id: 'linkedin',
        orbitRadius: 140,
        size: 45,
        speed: -0.6,
        iconType: 'linkedin',
        phaseShift: Math.PI,
        glowColor: 'linkedin',
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/company/techzone-academy/'
    },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { orbitRadius, size, iconType, label, link } = config;

    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius;

    const iconContent = (
        <div
            className={`
          relative w-full h-full p-2.5 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
            style={{
                boxShadow: isHovered
                    ? `0 0 15px ${iconComponents[iconType]?.color}40, 0 0 30px ${iconComponents[iconType]?.color}20`
                    : undefined,
                color: iconComponents[iconType]?.color
            }}
        >
            <SkillIcon type={iconType} />
            {isHovered && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
                    {label}
                </div>
            )}
        </div>
    );

    return (
        <div
            className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                zIndex: isHovered ? 20 : 10,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    {iconContent}
                </a>
            ) : (
                iconContent
            )}
        </div>
    );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'blue', animationDelay = 0 }: GlowingOrbitPathProps) => {
    const glowColors = {
        pink: {
            primary: 'rgba(228, 64, 95, 0.3)',
            secondary: 'rgba(228, 64, 95, 0.15)',
            border: 'rgba(228, 64, 95, 0.25)'
        },
        blue: {
            primary: 'rgba(24, 119, 242, 0.3)',
            secondary: 'rgba(24, 119, 242, 0.15)',
            border: 'rgba(24, 119, 242, 0.25)'
        },
        red: {
            primary: 'rgba(255, 0, 0, 0.3)',
            secondary: 'rgba(255, 0, 0, 0.15)',
            border: 'rgba(255, 0, 0, 0.25)'
        },
        linkedin: {
            primary: 'rgba(10, 102, 194, 0.3)',
            secondary: 'rgba(10, 102, 194, 0.15)',
            border: 'rgba(10, 102, 194, 0.25)'
        }
    };

    const colors = glowColors[glowColor] || glowColors.blue;

    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                animationDelay: `${animationDelay}s`,
            }}
        >
            <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                    background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
                    boxShadow: `0 0 15px ${colors.primary}, inset 0 0 15px ${colors.secondary}`,
                }}
            />

            <div
                className="absolute inset-0 rounded-full"
                style={{
                    border: `1px solid ${colors.border}`,
                    boxShadow: `inset 0 0 15px ${colors.secondary}`,
                }}
            />
        </div>
    );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
export default function OrbitingSocialIcons() {
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        let animationFrameId: number;
        let lastTime = performance.now();

        const animate = (currentTime: number) => {
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            setTime(prevTime => prevTime + deltaTime);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
        { radius: 80, glowColor: 'blue', delay: 0 },
        { radius: 140, glowColor: 'pink', delay: 1 }
    ];

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div
                className="relative w-[320px] h-[320px] flex items-center justify-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >

                {/* Central TechZone Logo */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center z-10 relative shadow-2xl p-2 overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <img
                            src="/techzone-logo.png"
                            alt="TechZone Academy"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Render glowing orbit paths */}
                {orbitConfigs.map((config) => (
                    <GlowingOrbitPath
                        key={`path-${config.radius}`}
                        radius={config.radius}
                        glowColor={config.glowColor}
                        animationDelay={config.delay}
                    />
                ))}

                {/* Render orbiting social icons */}
                {skillsConfig.map((config) => {
                    const angle = time * config.speed + (config.phaseShift || 0);
                    return (
                        <OrbitingSkill
                            key={config.id}
                            config={config}
                            angle={angle}
                        />
                    );
                })}
            </div>
        </div>
    );
}
