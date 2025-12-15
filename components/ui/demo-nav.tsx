"use client"

import { useState } from "react";
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, BookOpen, Info, Mail } from "lucide-react"
import { ContactModal } from "@/components/ui/contact-modal";

export function NavBarDemo() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const navItems = [
        { name: "Home", url: "#home", icon: Home },
        { name: "About", url: "#about", icon: Info },
        { name: "Courses", url: "#courses", icon: BookOpen },
        {
            name: "Contacts",
            url: "#contact",
            icon: Mail,
            onClick: (e: React.MouseEvent) => {
                e.preventDefault();
                setIsContactOpen(true);
            }
        },
    ]

    return (
        <>
            <NavBar items={navItems} />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
