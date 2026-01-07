"use client";
import React from "react";
import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import { TextDisperse } from "@/components/ui/text-disperse";
import OrbitingSocialIcons from "@/components/ui/orbiting-social-icons";

function TechZoneFooter() {
    // Footer link data
    const footerLinks = [
        {
            title: "Courses",
            links: [
                { label: "Data Analytics with Gen AI", href: "#courses" },
                { label: "Data Science with Gen AI", href: "#courses" },
                { label: "AI/ML with Gen AI", href: "#courses" },
                { label: "Python Developer (Django & Web)", href: "#courses" },
                { label: "Gen AI Engineer", href: "#courses" },
                { label: "Cloud & Data Engineer", href: "#courses" },
            ],
        },
        {
            title: "Quick Links",
            links: [
                { label: "About Us", href: "#about" },
                { label: "Our Branches", href: "#branches" },
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms & Conditions", href: "#terms" },
            ],
        },
    ];

    // Contact info data
    const contactInfo = [
        {
            icon: <Mail size={20} className="text-[#3ca2fa] flex-shrink-0" />,
            text: "tzacademy.official@gmail.com",
            href: "mailto:tzacademy.official@gmail.com",
        },
        {
            icon: <Phone size={20} className="text-[#3ca2fa] flex-shrink-0" />,
            text: "6304872757",
            href: "tel:+916304872757",
        },
        {
            icon: <MapPin size={20} className="text-[#3ca2fa] flex-shrink-0" />,
            text: "Hyderabad, India",
        },
    ];

    return (
        <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 relative h-fit rounded-3xl overflow-hidden m-8">
            <div className="max-w-7xl mx-auto p-14 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12">
                    {/* Left side - Orbiting Social Icons */}
                    <div className="flex items-center justify-center lg:justify-start">
                        <OrbitingSocialIcons />
                    </div>

                    {/* Right side - Links and Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Footer link sections */}
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-white text-lg font-semibold mb-6">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.label} className="relative">
                                            <a
                                                href={link.href}
                                                onClick={(e) => {
                                                    if (link.href.startsWith("#")) {
                                                        e.preventDefault();
                                                        const id = link.href.substring(1);
                                                        const element = document.getElementById(id);
                                                        if (element) {
                                                            element.scrollIntoView({ behavior: "smooth" });
                                                        }
                                                    }
                                                }}
                                                className="text-neutral-400 hover:text-[#3ca2fa] transition-colors cursor-pointer"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Contact section */}
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                Contact Us
                            </h4>
                            <ul className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        {item.icon}
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-neutral-400 hover:text-[#3ca2fa] transition-colors text-sm inline-block"
                                            >
                                                <TextDisperse className="text-sm inline-flex">
                                                    {item.text}
                                                </TextDisperse>
                                            </a>
                                        ) : (
                                            <span className="text-neutral-400 hover:text-[#3ca2fa] transition-colors text-sm">
                                                {item.text}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-gray-700 my-8" />

                {/* Footer bottom - Copyright only */}
                <div className="flex justify-center items-center text-sm">
                    <p className="text-center text-neutral-400">
                        &copy; {new Date().getFullYear()} TechZone Academy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default TechZoneFooter;
