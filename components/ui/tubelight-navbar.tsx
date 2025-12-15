"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
    icon?: LucideIcon
    onClick?: (e: React.MouseEvent) => void
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

/**
 * NOTE: This version places the navbar as a top-right overlay on the hero.
 * - Desktop: fixed top-right (top: 24px, right: 24px)
 * - Mobile: collapses into a small floating pill with a hamburger or icons
 * - The navbar uses backdrop-blur + slight transparency so hero remains visible
 */

export function NavBar({ items, className }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0]?.name || "")
    const [isMobile, setIsMobile] = useState(false)
    const [open, setOpen] = useState(false)

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
            {/* Top-right overlay container */}
            <div
                aria-hidden={false}
                className={cn(
                    "fixed z-50 top-6 right-6",
                    "pointer-events-auto",
                    className
                )}
            >
                {/* Desktop / wide */}
                <div className="hidden md:flex items-center">
                    <nav
                        className="flex items-center gap-3 bg-white/6 border border-white/10 backdrop-blur-md py-1 px-2 rounded-full shadow-lg"
                        role="navigation"
                        aria-label="Main Navigation"
                    >
                        {items.map((item) => {
                            const Icon = item.icon
                            const isActive = activeTab === item.name

                            return (
                                <Link
                                    key={item.name}
                                    href={item.url}
                                    onClick={(e) => {
                                        if (item.onClick) {
                                            item.onClick(e);
                                        } else {
                                            setActiveTab(item.name)
                                            // smooth scroll to anchor if hash
                                            if (item.url.startsWith("#")) {
                                                const id = item.url.slice(1)
                                                const el = document.getElementById(id)
                                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                                            }
                                        }
                                        setOpen(false)
                                    }}
                                    className={cn(
                                        "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                                        "text-white/90 hover:text-white",
                                        isActive ? "bg-white/10 text-white" : "text-white/80"
                                    )}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <span className="inline">{item.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navLamp"
                                            className="absolute inset-0 w-full rounded-full -z-10"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            style={{ background: "rgba(255,255,255,0.06)" }}
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                {/* Mobile: compact pill with hamburger that expands */}
                <div className="md:hidden flex items-center">
                    <div
                        className="flex items-center gap-2 bg-white/6 border border-white/10 backdrop-blur-md py-1 px-3 rounded-full shadow-lg cursor-pointer"
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
                </div>

                {/* Mobile expanded panel */}
                {open && (
                    <div className="mt-3 md:hidden w-56 bg-white/6 border border-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
                        <div className="flex flex-col">
                            {items.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={(e) => {
                                        if (item.onClick) {
                                            item.onClick(e);
                                        } else {
                                            setActiveTab(item.name)
                                            if (item.url.startsWith("#")) {
                                                const id = item.url.slice(1)
                                                const el = document.getElementById(id)
                                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                                            }
                                        }
                                        setOpen(false)
                                    }}
                                    className="text-left px-4 py-3 hover:bg-white/3 text-white/90 transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
