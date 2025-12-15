import React from 'react';
import Image from 'next/image';

interface LogoProps {
    size?: number;
    className?: string;
}

interface ArcProps {
    radius: number;
    strokeWidth: number;
    rotation: number;
    delay: number;
    duration: number;
}

const SpinningArcLogo: React.FC<LogoProps> = ({ size = 500, className = '' }) => {
    // Arc renderer function
    const renderArc = ({ radius, strokeWidth, rotation, delay, duration }: ArcProps) => {
        return (
            <path
                d={`M ${100 - radius} 100 a ${radius} ${radius} 0 0 1 ${radius * 2} 0`}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                style={{
                    transformOrigin: '100px 100px',
                    transform: `rotate(${rotation}deg)`,
                    animation: `spin ${duration}s ${delay}s infinite linear`,
                }}
            />
        );
    };

    // Arcs configuration - added more arcs with different parameters
    const arcs = [
        { radius: 60, strokeWidth: 1, rotation: 0, delay: 0, duration: 30 },
        { radius: 65, strokeWidth: 1, rotation: 15, delay: 0.1, duration: 25 },
        { radius: 70, strokeWidth: 1, rotation: 0, delay: 0, duration: 28 },
        { radius: 75, strokeWidth: 1, rotation: 45, delay: 0.15, duration: 28 },
        { radius: 80, strokeWidth: 1, rotation: 30, delay: 0.2, duration: 25 },
        { radius: 85, strokeWidth: 1, rotation: 75, delay: 0.25, duration: 22 },
        { radius: 90, strokeWidth: 1, rotation: 60, delay: 0.4, duration: 20 },
        { radius: 95, strokeWidth: 1, rotation: 105, delay: 0.45, duration: 18 },
        { radius: 100, strokeWidth: 1, rotation: 90, delay: 0.6, duration: 15 },
        { radius: 105, strokeWidth: 1, rotation: 135, delay: 0.7, duration: 12 },
        { radius: 110, strokeWidth: 1, rotation: 120, delay: 0.8, duration: 10 },
        { radius: 115, strokeWidth: 1, rotation: 150, delay: 0.9, duration: 8 },
        { radius: 120, strokeWidth: 1, rotation: 180, delay: 1.0, duration: 25 },
        { radius: 125, strokeWidth: 1, rotation: 210, delay: 1.1, duration: 28 },
    ];

    return (
        <div className={`relative ${className}`}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 200 200"
                className="text-[#3ca2fa] transition-colors duration-500 hover:text-[#60b5ff]"
                style={{ overflow: 'visible' }}
            >
                <style>
                    {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
          `}
                </style>

                {/* Render all arcs */}
                {arcs.map((arc, index) => (
                    <React.Fragment key={index}>
                        {renderArc(arc)}
                    </React.Fragment>
                ))}

                {/* TechZone Logo in Center */}
                <g>
                    <foreignObject x="50" y="50" width="100" height="100">
                        <div className="w-full h-full flex items-center justify-center">
                            <Image
                                src="/techzone-logo.png"
                                alt="TechZone Academy"
                                width={80}
                                height={80}
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    </foreignObject>
                </g>
            </svg>
        </div>
    );
};

export default SpinningArcLogo;
