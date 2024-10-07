"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MdEmail } from 'react-icons/md'

const SocialIcon = ({ Icon, href, label }: any) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Icon className="h-6 w-6" />
                </motion.a>
            </TooltipTrigger>
            <TooltipContent>
                <p>{label}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
)

export const SocialHandles = () => {
    return (
        <motion.div
            className="fixed bottom-4 right-3 left-3 sm:right-4 sm:left-[90%] md:left-[93%] lg:left-[95%] sm:top-64 transform -translate-y-1/2 z-50 flex flex-col space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative bg-background/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/60">
                <div className="flex sm:flex-col items-center justify-between sm:gap-4">
                    <SocialIcon Icon={MdEmail} href="mailto:webmetrix45@gmail.com" label="Email" />
                    <SocialIcon Icon={Twitter} href="https://twitter.com/anasnadkar45" label="Twitter" />
                    <SocialIcon Icon={Instagram} href="https://www.instagram.com/anasnadkar45/profilecard/?igsh=MTM4dWoxOGdua3U5MA==" label="Instagram" />
                    <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/anas-nadkar-2765121a9/" label="LinkedIn" />
                    <SocialIcon Icon={Github} href="https://github.com/anasnadkar45/" label="GitHub" />
                </div>
                {/* Inner shadow effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] rounded-full z-10 pointer-events-none" />

                {/* Hover effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 transition-opacity duration-300 rounded-full z-5 pointer-events-none"
                    whileHover={{ opacity: 0.3 }}
                />
            </div>
        </motion.div>
    )
}