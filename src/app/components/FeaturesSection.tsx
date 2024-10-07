"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Globe, Shield, Headphones } from "lucide-react";

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }: any) => (
    <motion.div
        className="bg-card p-6 shadow-lg border relative transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        style={{
            borderImage:
                "linear-gradient(45deg, rgba(0,0,0,0.2), rgba(255,255,255,0.5)) 1",
            borderWidth: "2px",
        }}
    >
        <Icon className="h-12 w-12 mb-4 z-10" />
        <h3 className="text-xl font-semibold mb-2 z-10">{title}</h3>
        <p className="text-muted-foreground z-10">{description}</p>
    </motion.div>
);

// Features Section Component
export const FeaturesSection = () => {
    const features = [
        {
            icon: Code,
            title: "Custom Development",
            description: "Tailored solutions to meet your specific needs, from concept to deployment.",
        },
        {
            icon: Palette,
            title: "Responsive Design",
            description: "Websites that look great on all devices, ensuring an optimal user experience.",
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Fast-loading, efficient web applications that enhance user engagement.",
        },
        {
            icon: Globe,
            title: "SEO Integration",
            description: "Boost your online visibility and rankings with integrated SEO best practices.",
        },
        {
            icon: Shield,
            title: "Security First",
            description: "Robust security measures to protect your data and maintain user trust.",
        },
        {
            icon: Headphones,
            title: "Ongoing Support",
            description: "Continuous assistance and maintenance to ensure your website runs smoothly.",
        },
        // Additional Features
        {
            icon: Zap,
            title: "Analytics & Insights",
            description: "Gain valuable insights into user behavior with integrated analytics tools.",
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Websites that cater to a global audience with multilingual support.",
        },
        {
            icon: Shield,
            title: "Data Protection",
            description: "Compliance with data protection regulations to keep user information safe.",
        },
    ];

    return (
        <section className="overflow-hidden px-3 py-4" id="service">
            <div className="container mx-auto">
                <motion.div
                    initial={{ filter: "blur(12px)", opacity: 0, y: 24 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        bounce: 0,
                        duration: 1.8,
                        delay: 1,
                    }}
                    className="text-center mb-12 z-20 relative"
                >
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Our Features</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore the key features that set us apart and discover how our tailored solutions can elevate your business to new heights.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );

};
