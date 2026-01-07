"use client"

import { useState } from "react"
import { Home, BookOpen, Award, MapPin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ContactModal } from "@/components/ui/contact-modal"

interface MenuItem {
    icon: typeof Home
    label: string
    href: string
    gradient: string
    iconColor: string
    onClick?: (e: React.MouseEvent) => void
}

interface GlowMenuNavbarProps {
    onHomeClick?: () => void
}

const itemVariants = {
    initial: { rotateX: 0, opacity: 1 },
    hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
    initial: { rotateX: 90, opacity: 0 },
    hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
        opacity: 1,
        scale: 2,
        transition: {
            opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
        },
    },
}

const navGlowVariants = {
    initial: { opacity: 0 },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

const sharedTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: 0.5,
}

export function GlowMenuNavbar({ onHomeClick }: GlowMenuNavbarProps = {}) {
    const [activeItem, setActiveItem] = useState<string>("Home")
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const { theme } = useTheme()
    const isDarkTheme = theme === "dark"

    const menuItems: MenuItem[] = [
        {
            icon: Home,
            label: "Home",
            href: "#",
            gradient:
                "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
            iconColor: "text-blue-500",
            onClick: (e) => {
                e.preventDefault()
                if (onHomeClick) {
                    onHomeClick()
                }
                window.scrollTo({ top: 0, behavior: "smooth" })
            },
        },
        {
            icon: BookOpen,
            label: "About",
            href: "#about",
            gradient:
                "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
            iconColor: "text-purple-500",
        },
        {
            icon: Award,
            label: "Courses",
            href: "#courses",
            gradient:
                "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
            iconColor: "text-green-500",
        },
        {
            icon: MapPin,
            label: "Branches",
            href: "#branches",
            gradient:
                "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
            iconColor: "text-orange-500",
        },
        {
            icon: Mail,
            label: "Contact",
            href: "#contact",
            gradient:
                "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
            iconColor: "text-red-500",
            onClick: (e) => {
                e.preventDefault()
                setIsContactModalOpen(true)
            },
        },
    ]

    const handleItemClick = (item: MenuItem) => {
        setActiveItem(item.label)

        if (!item.onClick && item.href.startsWith("#")) {
            const id = item.href.slice(1)

            // Check if we're on the main page
            const isMainPage = window.location.pathname === '/'

            if (isMainPage) {
                // On main page, just scroll to section
                if (id) {
                    const el = document.getElementById(id)
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                } else {
                    // Home button - scroll to top
                    window.scrollTo({ top: 0, behavior: "smooth" })
                }
            } else {
                // On another page, navigate to main page with hash
                if (id) {
                    // For sections (about, courses, branches), navigate with hash and scroll
                    window.location.href = `/${item.href}`
                } else {
                    // For Home button, just navigate to main page
                    window.location.href = '/'
                }
            }
        }
    }

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 w-full",
                    "px-8 py-4 bg-gradient-to-b from-neutral-900/95 to-neutral-950/90 backdrop-blur-lg border-b border-white/10 shadow-2xl relative overflow-hidden"
                )}
                initial="initial"
                whileHover="hover"
            >
                <motion.div
                    className={`absolute inset-0 bg-gradient-radial from-transparent ${isDarkTheme
                        ? "via-blue-400/10 via-30% via-purple-400/10 via-60% via-red-400/10 via-90%"
                        : "via-blue-400/8 via-30% via-purple-400/8 via-60% via-red-400/8 via-90%"
                        } to-transparent z-0 pointer-events-none`}
                    variants={navGlowVariants}
                />

                <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
                    {/* Logo - Left Side - Enlarged */}
                    <Link href="#" className="flex items-center group">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white ring-2 ring-blue-500/30 group-hover:ring-blue-500/60 transition-all duration-300 shadow-lg p-1">
                            <Image
                                src="/techzone-logo.png"
                                alt="TechZone Academy"
                                fill
                                className="object-contain"
                                priority
                                quality={100}
                                sizes="64px"
                            />
                        </div>
                    </Link>

                    {/* Navigation Items - Right Side */}
                    <ul className="flex items-center gap-1 md:gap-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon
                            const isActive = item.label === activeItem

                            return (
                                <motion.li key={item.label} className="relative">
                                    <button
                                        onClick={(e) => {
                                            if (item.onClick) {
                                                item.onClick(e)
                                            }
                                            handleItemClick(item)
                                        }}
                                        className="block w-full"
                                    >
                                        <motion.div
                                            className="block rounded-xl overflow-visible group relative"
                                            style={{ perspective: "600px" }}
                                            whileHover="hover"
                                            initial="initial"
                                        >
                                            <motion.div
                                                className="absolute inset-0 z-0 pointer-events-none"
                                                variants={glowVariants}
                                                animate={isActive ? "hover" : "initial"}
                                                style={{
                                                    background: item.gradient,
                                                    opacity: isActive ? 1 : 0,
                                                    borderRadius: "16px",
                                                }}
                                            />
                                            <motion.div
                                                className={cn(
                                                    "flex items-center gap-2 px-3 md:px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl",
                                                    isActive
                                                        ? "text-white"
                                                        : "text-gray-400 group-hover:text-white"
                                                )}
                                                variants={itemVariants}
                                                transition={sharedTransition}
                                                style={{
                                                    transformStyle: "preserve-3d",
                                                    transformOrigin: "center bottom",
                                                }}
                                            >
                                                <span
                                                    className={cn(
                                                        "transition-colors duration-300",
                                                        isActive ? item.iconColor : "text-gray-400",
                                                        `group-hover:${item.iconColor}`
                                                    )}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </span>
                                                <span className="hidden md:inline text-sm font-medium">{item.label}</span>
                                            </motion.div>
                                            <motion.div
                                                className={cn(
                                                    "flex items-center gap-2 px-3 md:px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl",
                                                    isActive
                                                        ? "text-white"
                                                        : "text-gray-400 group-hover:text-white"
                                                )}
                                                variants={backVariants}
                                                transition={sharedTransition}
                                                style={{
                                                    transformStyle: "preserve-3d",
                                                    transformOrigin: "center top",
                                                    rotateX: 90,
                                                }}
                                            >
                                                <span
                                                    className={cn(
                                                        "transition-colors duration-300",
                                                        isActive ? item.iconColor : "text-gray-400",
                                                        `group-hover:${item.iconColor}`
                                                    )}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </span>
                                                <span className="hidden md:inline text-sm font-medium">{item.label}</span>
                                            </motion.div>
                                        </motion.div>
                                    </button>
                                </motion.li>
                            )
                        })}
                    </ul>
                </div>
            </motion.nav>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    )
}
