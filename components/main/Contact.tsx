"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaPhone, FaEnvelope } from "react-icons/fa";

// Country phone codes
const countryCodes = [
    { code: "+1", country: "US/Canada" },
    { code: "+91", country: "India" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+81", country: "Japan" },
    { code: "+86", country: "China" },
    { code: "+55", country: "Brazil" },
    { code: "+7", country: "Russia" },
    { code: "+34", country: "Spain" },
    { code: "+39", country: "Italy" },
    { code: "+82", country: "South Korea" },
    { code: "+65", country: "Singapore" },
    { code: "+971", country: "UAE" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+27", country: "South Africa" },
    { code: "+52", country: "Mexico" },
    { code: "+31", country: "Netherlands" },
    { code: "+46", country: "Sweden" },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        query: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        query: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {
            name: "",
            email: "",
            phone: "",
            query: ""
        };

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        } else if (formData.name.trim().length > 50) {
            newErrors.name = "Name must be less than 50 characters";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address";
        }

        // Phone validation (optional but if provided, should be valid)
        if (formData.phone.trim() && !/^\d{6,15}$/.test(formData.phone.trim())) {
            newErrors.phone = "Please enter a valid phone number (6-15 digits)";
        }

        // Query validation
        if (!formData.query.trim()) {
            newErrors.query = "Query is required";
        } else if (formData.query.trim().length < 10) {
            newErrors.query = "Query must be at least 10 characters";
        } else if (formData.query.trim().length > 500) {
            newErrors.query = "Query must be less than 500 characters";
        }

        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error !== "");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Create email subject and body
        const subject = encodeURIComponent(`Contact Form Query from ${formData.name}`);
        const body = encodeURIComponent(
            `Hello! My name is ${formData.name}.\n\nMy email: ${formData.email}${formData.phone ? `\nMy phone: ${formData.countryCode}${formData.phone}` : ""}\n\nMy query:\n${formData.query}`
        );

        // Open email client
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            countryCode: "+91",
            query: ""
        });
        setErrors({
            name: "",
            email: "",
            phone: "",
            query: ""
        });
    };

    const phoneNumber = "+919512613419"; // +91-9512613419 formatted for tel link (removed dash for tel: protocol)
    const displayPhone = "+91-9512613419"; // Display format
    const email = "namraptl25@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/patel-namra-100596230/";

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center min-h-screen w-full h-full relative py-20"
        >
            <div className="absolute w-auto h-auto top-[80px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] md:text-[50px] pt-[5rem] pb-3 md:p-0 font-extrabold text-center text-white z-50 tracking-tight"
                        >
                            <span className="text-gradient-advanced">
                                {" "}
                                Contact Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            {/* Contact Information and Form */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-20 w-full max-w-6xl mx-auto mt-[150px] md:mt-[100px] px-5">
                {/* Contact Information */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="glassmorphism-container w-full md:w-1/2 p-8 rounded-3xl border border-[#7042f84d] backdrop-blur-xl bg-[#0300145e] shadow-[0_8px_32px_0_rgba(112,66,248,0.3)] relative z-[30] flex flex-col"
                            style={{ pointerEvents: "auto" }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                                Get in Touch
                            </h3>
                            <p className="text-gray-300 mb-8 text-base leading-relaxed font-medium">
                                Feel free to reach out to me through any of these channels. I&apos;d love to hear from you!
                            </p>

                            <div className="space-y-6">
                                {/* Phone */}
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#7042f81a] transition-all duration-300 hover:scale-105 group cursor-pointer relative z-[50]"
                                    style={{ pointerEvents: "auto", position: "relative" }}
                                    aria-label={`Call ${displayPhone}`}
                                >
                                    <div className="p-3 rounded-full bg-[#7042f81a] group-hover:bg-[#7042f84d] transition-all duration-300">
                                        <FaPhone className="text-[#b49bff] text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-medium">Phone</p>
                                        <p className="text-white font-bold">{displayPhone}</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href={`mailto:${email}?subject=Contact%20from%20Portfolio`}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#7042f81a] transition-all duration-300 hover:scale-105 group cursor-pointer relative z-[50]"
                                    style={{ pointerEvents: "auto", position: "relative" }}
                                    aria-label={`Send email to ${email}`}
                                >
                                    <div className="p-3 rounded-full bg-[#7042f81a] group-hover:bg-[#7042f84d] transition-all duration-300">
                                        <FaEnvelope className="text-[#b49bff] text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <p className="text-white font-semibold">{email}</p>
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#7042f81a] transition-all duration-300 hover:scale-105 group cursor-pointer relative z-[50]"
                                    style={{ pointerEvents: "auto", position: "relative" }}
                                    aria-label="Visit LinkedIn profile"
                                >
                                    <div className="p-3 rounded-full bg-[#7042f81a] group-hover:bg-[#7042f84d] transition-all duration-300">
                                        <RxLinkedinLogo className="text-[#b49bff] text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">LinkedIn</p>
                                        <p className="text-white font-bold">Connect with me</p>
                                    </div>
                                </a>

                            </div>
                        </motion.div>
                    )}
                </InView>

                {/* Contact Form */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="glassmorphism-container w-full md:w-1/2 p-8 rounded-3xl border border-[#7042f84d] backdrop-blur-xl bg-[#0300145e] shadow-[0_8px_32px_0_rgba(112,66,248,0.3)] relative z-[30] flex flex-col"
                            style={{ pointerEvents: "auto" }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                                Send a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="relative z-10">
                                    <label htmlFor="name" className="block text-white mb-2 text-sm font-semibold">
                                        Your Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#0300145e] border ${errors.name ? "border-red-500" : "border-[#7042f84d]"
                                            } text-white placeholder-gray-500 focus:outline-none focus:border-[#7042f8] focus:ring-2 focus:ring-[#7042f8] transition-all duration-300 relative z-10`}
                                        placeholder="Enter your name"
                                        style={{ pointerEvents: "auto" }}
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div className="relative z-10">
                                    <label htmlFor="email" className="block text-white mb-2 text-sm font-semibold">
                                        Your Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#0300145e] border ${errors.email ? "border-red-500" : "border-[#7042f84d]"
                                            } text-white placeholder-gray-500 focus:outline-none focus:border-[#7042f8] focus:ring-2 focus:ring-[#7042f8] transition-all duration-300 relative z-10`}
                                        placeholder="Enter your email"
                                        style={{ pointerEvents: "auto" }}
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div className="relative z-10">
                                    <label htmlFor="phone" className="block text-white mb-2 text-sm font-semibold">
                                        Phone Number (Optional)
                                    </label>
                                    <div className="flex gap-2">
                                        <select
                                            id="countryCode"
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleInputChange}
                                            className="px-3 py-3 rounded-lg bg-[#0300145e] border border-[#7042f84d] text-white focus:outline-none focus:border-[#7042f8] focus:ring-2 focus:ring-[#7042f8] transition-all duration-300 cursor-pointer relative z-10"
                                            style={{ pointerEvents: "auto" }}
                                        >
                                            {countryCodes.map((country) => (
                                                <option key={country.code} value={country.code}>
                                                    {country.code} {country.country}
                                                </option>
                                            ))}
                                        </select>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`flex-1 px-4 py-3 rounded-lg bg-[#0300145e] border ${errors.phone ? "border-red-500" : "border-[#7042f84d]"
                                                } text-white placeholder-gray-500 focus:outline-none focus:border-[#7042f8] focus:ring-2 focus:ring-[#7042f8] transition-all duration-300 relative z-10`}
                                            placeholder="Phone number"
                                            style={{ pointerEvents: "auto" }}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                                    )}
                                </div>

                                <div className="relative z-10">
                                    <label htmlFor="query" className="block text-white mb-2 text-sm font-semibold">
                                        What&apos;s your query? <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        id="query"
                                        name="query"
                                        value={formData.query}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#0300145e] border ${errors.query ? "border-red-500" : "border-[#7042f84d]"
                                            } text-white placeholder-gray-500 focus:outline-none focus:border-[#7042f8] focus:ring-2 focus:ring-[#7042f8] transition-all duration-300 resize-none relative z-10`}
                                        placeholder="Tell me about your query..."
                                        style={{ pointerEvents: "auto" }}
                                    />
                                    {errors.query && (
                                        <p className="text-red-400 text-xs mt-1">{errors.query}</p>
                                    )}
                                    <p className="text-gray-400 text-xs mt-1">
                                        {formData.query.length}/500 characters
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(112,66,248,0.5)] relative z-10"
                                    style={{ pointerEvents: "auto" }}
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    )}
                </InView>
            </div>
        </section>
    );
};

export default Contact;
