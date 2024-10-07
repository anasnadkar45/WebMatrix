"use client";
import React from "react";
import { motion } from "framer-motion";
import Devzenith from '../public/Devzenith.png'
import DigiMarket from '../public/Digimarket.png'
import ProjectsHub from '../public/ProjectsHub.png'
import Image from "next/image";

const projects = [
    {
        title: "Devzenith",
        description:
            "DevZenith is a collaborative platform where developers connect, share resources, and work on projects together.",
        imgSrc: Devzenith,
        link: "https://dev-zenith-v2.vercel.app/",
    },
    {
        title: "DigiMarket",
        description:
            "DigiMarket stands out as the premier marketplace for all things related to tailwindcss, offering an unparalleled platform for both sellers and buyers alike.",
        imgSrc: DigiMarket,
        link: "https://digi-market-gamma.vercel.app/",
    },
    {
        title: "ProjectsHub",
        description:
            "OpenSourceHub is a platform designed to connect open-source contributors with trending repositories. It facilitates collaboration, enables mentorship, and streamlines the contribution process.",
        imgSrc: ProjectsHub,
        link: "https://projectshub-two.vercel.app/",
    },
];

export const ProjectSection = () => {
    return (
        <section className="bg-background pb-12" id="projects">
            <div className="container mx-auto">
                <motion.div
                    initial={{ filter: "blur(12px)", opacity: 0, y: 24 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        bounce: 0,
                        duration: 1.8,
                        delay: 0.5, // Adjust delay if needed
                    }}
                    className="text-center mb-12 z-20 relative"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Projects Created
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover the projects we've built for our clients. Each project is crafted with attention to detail and client satisfaction in mind.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="relative bg-card rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
                        >
                            <div className="p-6 relative z-20">
                                <div className="overflow-hidden rounded-lg mb-4">
                                    <Image
                                        src={project.imgSrc}
                                        alt={project.title}
                                        className="w-full h-40 object-cover transition-transform duration-500 transform hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    className="inline-block w-full text-center text-primary font-semibold border border-primary rounded-md py-2 px-6 hover:bg-primary hover:text-foreground transition-colors"
                                >
                                    View Project
                                </a>
                            </div>
                            {/* Inner shadow effect */}
                            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] rounded-2xl z-10" />

                            {/* Hover effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 transition-opacity duration-300 rounded-2xl z-5"
                                whileHover={{ opacity: 0.3 }}
                            />

                            {/* Bottom gradient bar with higher z-index */}
                            <div className="relative bg-gradient-to-r from-primary to-orange-400 h-2 animate-gradient z-0" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
