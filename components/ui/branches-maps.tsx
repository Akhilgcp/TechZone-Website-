"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { LocationMap } from "@/components/ui/expand-map";
import { TextDisperse } from "@/components/ui/text-disperse";

type Branch = {
    id: string;
    label: string;
    address: string;
    coords: string;
    embedUrl: string;
    phone?: string;
    hours?: string;
};

const BRANCHES: Branch[] = [
    {
        id: "lakdi",
        label: "TechZone — Lakdikapul",
        address: "7-1-69/8, Road No. 4, Banjara Hills, Hyderabad, Telangana 500034",
        coords: "17.403775786103022, 78.46010850658753",
        embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9847193847193!2d78.45753!3d17.403393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97427703ffff%3A0xfc7548a48224fad0!2sTechzone%20Software%20Academy!5e0!3m2!1sen!2sin!4v1234567890",
        phone: "06304872757",
        hours: "Mon–Sat, 8:00 AM – 8:00 PM",
    },
    {
        id: "himayat",
        label: "TechZone — Himayat Nagar",
        address:
            "Skill Spectrum, Badam Galli, Gagan Mahal, Domalguda, Himayatnagar, Hyderabad, Telangana 500029",
        coords: "17.407104638669068, 78.4793430561779",
        embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8!2d78.4767097!3d17.4062408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb993f17e70edf%3A0xd7c88af8077afe6b!2sTechzone%20Academy!5e0!3m2!1sen!2sin!4v1234567891",
        phone: "9246876444",
        hours: "Mon–Sat, 8:00 AM – 8:00 PM",
    },
    {
        id: "toli",
        label: "TechZone — Tolichowki",
        address:
            "3rd Floor, Kadak house lane, above Turk Sarayi, MCH Colony, Deluxe Colony, Janaki Nagar Colony, Toli Chowki, Hyderabad, Telangana 500008",
        coords: "17.401505477489074, 78.41322842369607",
        embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1!2d78.4106428!3d17.4012905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f314752bbd%3A0x7a7272430422d205!2sTechzone%20Academy%20Tolichowki!5e0!3m2!1sen!2sin!4v1234567892",
        phone: "9000227403",
        hours: "Mon–Sat, 8:00 AM – 8:00 PM",
    },
];

export default function BranchesMaps({ className }: { className?: string }) {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const reduceMotion = useReducedMotion();

    const handleToggle = (id: string) => {
        setExpandedId((cur) => (cur === id ? null : id));
    };

    return (
        <section id="branches" className={cn("py-8 md:py-12", className)}>
            <div className="mx-auto max-w-6xl px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Branches</h2>
                    <p className="mt-2 text-neutral-400 max-w-2xl mx-auto">
                        Visit any of our three campuses — Lakdikapul, Himayat Nagar, and Tolichowki
                    </p>
                </div>

                {/* Grid: 3 columns on lg, 2 columns on md, 1 column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BRANCHES.map((b) => {
                        const isOpen = expandedId === b.id;
                        return (
                            <article key={b.id} className="relative">
                                <motion.div
                                    layout
                                    initial={false}
                                    whileHover={reduceMotion ? {} : { translateY: -4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                    className="relative rounded-2xl border border-neutral-700/50 bg-neutral-900/50 shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => handleToggle(b.id)}
                                        className="w-full text-left"
                                        aria-expanded={isOpen}
                                        aria-controls={`branch-panel-${b.id}`}
                                    >
                                        {/* Header */}
                                        <div className="p-4 border-b border-neutral-700/30">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                                    <img
                                                        src="/google-maps-pin.png"
                                                        alt="Google Maps"
                                                        className="w-10 h-10 object-contain"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-base font-semibold text-white">{b.label}</h3>
                                                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2">{b.address}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Preview Map area */}
                                        <div className="px-4 pb-4">
                                            <div className="rounded-lg overflow-hidden h-40">
                                                <LocationMap
                                                    location={b.label}
                                                    coordinates={b.coords}
                                                    className="w-full h-full"
                                                />
                                            </div>

                                            {/* Contact info */}
                                            <div className="mt-3 space-y-2">
                                                {b.phone && (
                                                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                                                        <Phone className="h-3.5 w-3.5 text-blue-400" />
                                                        <TextDisperse className="text-xs inline-flex">
                                                            {b.phone}
                                                        </TextDisperse>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2 text-xs text-neutral-400">
                                                    <Clock className="h-3.5 w-3.5 text-purple-400" />
                                                    <span>{b.hours}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    {/* Expandable panel with iframe map */}
                                    <AnimatePresence mode="wait">
                                        {isOpen && (
                                            <motion.div
                                                key={`panel-${b.id}`}
                                                id={`branch-panel-${b.id}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
                                                className="border-t border-neutral-700/30 bg-neutral-900/70"
                                            >
                                                <div className="p-4">
                                                    <div className="w-full h-64 rounded-lg overflow-hidden border border-neutral-700/30">
                                                        {/* Google Maps iframe embed */}
                                                        <iframe
                                                            title={`${b.label} map`}
                                                            src={b.embedUrl}
                                                            loading="lazy"
                                                            className="w-full h-full border-0"
                                                            referrerPolicy="no-referrer-when-downgrade"
                                                            allowFullScreen
                                                        />
                                                    </div>
                                                    <div className="mt-3 text-center">
                                                        <button
                                                            onClick={() => setExpandedId(null)}
                                                            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                                        >
                                                            Close Map
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
