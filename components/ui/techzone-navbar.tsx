"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, BookOpen, Award, MapPin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlowCard } from "@/components/ui/spotlight-card"
import { ContactModal } from "@/components/ui/contact-modal"

interface NavItem {
    name: string
    url: string
    icon?: React.ComponentType<{ className?: string }>
    onClick?: (e: React.MouseEvent) => void
}

export function TechZoneNavbar() {
    const [activeTab, setActiveTab] = useState("Home")
    const [isMobile, setIsMobile] = useState(false)
    const [open, setOpen] = useState(false)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    const navItems: NavItem[] = [
        { name: "Home", url: "#", icon: Home },
        { name: "About", url: "#about", icon: BookOpen },
        { name: "Courses", url: "#courses", icon: Award },
        { name: "Branches", url: "#branches", icon: MapPin },
        {
            name: "Contact",
            url: "#contact",
            icon: Mail,
            onClick: (e) => {
                e.preventDefault()
                setIsContactModalOpen(true)
            }
        },
    ]

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <>
            {/* Desktop Navbar with Glow Effect */}
            <div
                className={cn(
                    "fixed z-50 top-6 right-6",
                    "pointer-events-auto hidden md:block"
                )}
            >
                <GlowCard
                    glowColor="blue"
                    customSize={true}
                    className="!w-auto !h-auto !aspect-auto !p-0 !gap-0 !grid-rows-none !shadow-none"
                >
                    <nav
                        className="flex items-center gap-2 py-2 px-3"
                        role="navigation"
                        aria-label="Main Navigation"
                    >
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = activeTab === item.name

                            return (
                                <Link
                                    key={item.name}
                                    href={item.url}
                                    onClick={(e) => {
                                        if (item.onClick) {
                                            item.onClick(e)
                                        } else {
                                            setActiveTab(item.name)
                                            // smooth scroll to anchor if hash
                                            if (item.url.startsWith("#")) {
                                                e.preventDefault()
                                                const id = item.url.slice(1)
                                                if (id) {
                                                    const el = document.getElementById(id)
                                                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                                                } else {
                                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                                }
                                            }
                                        }
                                    }}
                                    className={cn(
                                        "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300",
                                        "flex items-center gap-2",
                                        isActive
                                            ? "bg-[#3ca2fa]/20 text-white shadow-lg shadow-[#3ca2fa]/20"
                                            : "text-white/70 hover:text-white hover:bg-white/5"
                                    )}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {Icon && <Icon className="w-4 h-4" />}
                                    <span className="inline">{item.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navGlow"
                                            className="absolute inset-0 w-full rounded-full -z-10 bg-gradient-to-r from-[#3ca2fa]/10 to-[#3ca2fa]/5"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>
                </GlowCard>
            </div>

            {/* Mobile Navbar */}
            <div
                className={cn(
                    "fixed z-50 top-6 right-6",
                    "pointer-events-auto md:hidden"
                )}
            >
                <div
                    className="flex items-center gap-2 bg-neutral-900/80 border border-white/10 backdrop-blur-md py-2 px-4 rounded-full shadow-lg cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Open navigation"
                    onClick={() => setOpen(!open)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(!open) }}
                >
                    <span className="text-sm font-semibold text-white/90">Menu</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" className="text-white/80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Mobile expanded panel */}
                {open && (
                    <div className="mt-3 w-56 bg-neutral-900/90 border border-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
                        <div className="flex flex-col">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.url}
                                        onClick={(e) => {
                                            if (item.onClick) {
                                                item.onClick(e)
                                            } else {
                                                setActiveTab(item.name)
                                                if (item.url.startsWith("#")) {
                                                    e.preventDefault()
                                                    const id = item.url.slice(1)
                                                    if (id) {
                                                        const el = document.getElementById(id)
                                                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                                                    } else {
                                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                                    }
                                                }
                                            }
                                            setOpen(false)
                                        }}
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-white/90 transition-colors"
                                    >
                                        {Icon && <Icon className="w-4 h-4" />}
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    )
}
