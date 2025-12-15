"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TextDisperse } from "@/components/ui/text-disperse";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create email body
        const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

        // Create mailto link
        const mailtoLink = `mailto:tzacademy.official@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        });

        // Close modal after a short delay
        setTimeout(() => {
            onClose();
        }, 500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 rounded-2xl border border-neutral-700 shadow-2xl"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors z-10"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    {/* Left side - Contact Info */}
                                    <div className="flex flex-col justify-between gap-8">
                                        <div>
                                            <h2 className="text-4xl font-bold text-white mb-3">
                                                Contact Us
                                            </h2>
                                            <p className="text-neutral-400">
                                                We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-4">
                                                Contact Details
                                            </h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-center gap-3 text-neutral-300">
                                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                        <Phone className="w-5 h-5 text-blue-400" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-neutral-500">Phone</div>
                                                        <a href="tel:+916304872757" className="hover:text-blue-400 transition-colors inline-block">
                                                            <TextDisperse className="text-sm inline-flex">
                                                                6304872757
                                                            </TextDisperse>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="flex items-center gap-3 text-neutral-300">
                                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                        <Mail className="w-5 h-5 text-purple-400" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-neutral-500">Email</div>
                                                        <a
                                                            href="mailto:tzacademy.official@gmail.com"
                                                            className="hover:text-purple-400 transition-colors"
                                                        >
                                                            tzacademy.official@gmail.com
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="flex items-center gap-3 text-neutral-300">
                                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                                        <Globe className="w-5 h-5 text-emerald-400" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-neutral-500">Website</div>
                                                        <a
                                                            href="https://techzoneacademy.com"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:text-emerald-400 transition-colors"
                                                        >
                                                            techzoneacademy.com
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Right side - Contact Form */}
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-lg border border-neutral-700 bg-neutral-800/50 p-6">
                                        <div className="flex gap-4">
                                            <div className="grid w-full items-center gap-1.5">
                                                <Label htmlFor="firstname" className="text-neutral-300">First Name</Label>
                                                <Input
                                                    type="text"
                                                    id="firstname"
                                                    placeholder="First Name"
                                                    value={formData.firstName}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                    className="bg-neutral-900 border-neutral-700 text-white"
                                                    required
                                                />
                                            </div>
                                            <div className="grid w-full items-center gap-1.5">
                                                <Label htmlFor="lastname" className="text-neutral-300">Last Name</Label>
                                                <Input
                                                    type="text"
                                                    id="lastname"
                                                    placeholder="Last Name"
                                                    value={formData.lastName}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                    className="bg-neutral-900 border-neutral-700 text-white"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label htmlFor="email" className="text-neutral-300">Email</Label>
                                            <Input
                                                type="email"
                                                id="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="bg-neutral-900 border-neutral-700 text-white"
                                                required
                                            />
                                        </div>
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label htmlFor="subject" className="text-neutral-300">Subject</Label>
                                            <Input
                                                type="text"
                                                id="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="bg-neutral-900 border-neutral-700 text-white"
                                                required
                                            />
                                        </div>
                                        <div className="grid w-full gap-1.5">
                                            <Label htmlFor="message" className="text-neutral-300">Message</Label>
                                            <Textarea
                                                placeholder="Type your message here."
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="bg-neutral-900 border-neutral-700 text-white min-h-[120px]"
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                            Send Message
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
