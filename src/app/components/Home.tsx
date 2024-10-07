"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Code, Palette, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const AnimatedHeadline = ({ text }: { text: string }) => {
    return (
        <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-foreground">
            {text.split(" ").map((word, index) => (
                <motion.span
                    className="inline-block"
                    key={word}
                    initial={{ opacity: 0, filter: "blur(16px)", y: 8 + 1 * (index + 2) }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                        delay: 0.04 * (index + 12),
                        type: "spring",
                        bounce: 0,
                        duration: 0.7 + 0.1 * (index + 4),
                    }}
                >
                    {word}&#160;
                </motion.span>
            ))}
        </h1>
    )
}

export const Home = () => {
    const services = [
        { icon: Code, title: "Web Development", description: "Custom websites tailored to your needs" },
        { icon: Palette, title: "UI/UX Design", description: "Intuitive and attractive user interfaces" },
        { icon: Zap, title: "Performance Optimization", description: "Speed up your existing web applications" },
    ]

    return (
        <div id='home' className="relative min-h-fit px-3 py-12 sm:pt-36 w-full overflow-hidden bg-background ">
            {/* Grid background with top and bottom fade */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to bottom, 
                            hsl(var(--background)), 
                            transparent 10%,
                            transparent 90%,
                            hsl(var(--background))
                        ),
                        linear-gradient(to right, hsl(var(--foreground) / 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, hsl(var(--foreground) / 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '100% 100%, 30px 30px, 30px 30px'
                }}
            />

            {/* Radial gradient overlay for spotlight effect */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: `radial-gradient(circle at center, 
                                 transparent 20%, 
                                 hsl(var(--background)) 100%)`
                }}
            />

            {/* Content */}
            <div className="relative z-20 mb-12 flex flex-col items-center justify-center min-h-fit ">
                <AnimatedHeadline text="Elevate Your Web Presence" />
                <motion.p
                    className="text-sm sm:text-lg text-center mb-8 max-w-2xl text-muted-foreground"
                    initial={{ filter: "blur(12px)", opacity: 0, y: 24 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        bounce: 0,
                        duration: 1.8,
                        delay: 1,
                    }}
                >
                    Professional freelance web development services to bring your ideas to life.
                    <br />
                    Custom solutions tailored to your unique business needs.
                </motion.p>
                <motion.div
                    initial={{ filter: "blur(12px)", opacity: 0, y: 16 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        bounce: 0,
                        duration: 1.4,
                        delay: 1.2,
                    }}
                >
                    <Link href={'https://cal.com/anas-nadkar-45/30min'}>
                        <Button size="lg" className="text-lg px-6 py-3">
                            Grow My Business <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    className="mt-16 w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="relative wg bg-card rounded-2xl shadow-lg shadow-primary/10 overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className='p-6' key={index}>
                                <service.icon className="h-12 w-12 text-primary mb-4" />
                                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                                <p className="text-muted-foreground">{service.description}</p>
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
                </motion.div>
            </div>
        </div>
    )
}