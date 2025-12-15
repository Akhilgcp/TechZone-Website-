"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";

export const ChromeLogoLoader = () => {
    return (
        <div className="loader-chrome-container">
            <aside className="loader-chrome">
                <div className="circle-blue-center">
                    <Image
                        src="/techzone-logo.png"
                        alt="TechZone"
                        width={60}
                        height={60}
                        className="w-full h-full object-contain p-2"
                    />
                </div>
                <div className="yellow-right"></div>
                <div className="green-left"></div>
            </aside>
        </div>
    );
};
