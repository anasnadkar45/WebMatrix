"use client"
import Image from "next/image";
import React from "react";
import Logo from '../public/Logo.svg';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {motion} from 'framer-motion'
import { MdEmail } from "react-icons/md";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

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

const Footer = () => {
    return (
        <footer className="bg-card text-gray-400 py-8">
            <div className="max-w-7xl px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info Section */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Image src={Logo} alt="Logo" className="w-10 h-10" />
                        <span className="text-white text-xl font-semibold">WebMetrix</span>
                    </div>
                    <p>
                        WebMetrix is a leading web development agency, helping businesses of all sizes establish their online presence with cutting-edge designs and innovative technologies.
                    </p>
                    <div className="flex items-center gap-4">
                        <SocialIcon Icon={MdEmail} href="mailto:webmetrix45@gmail.com" label="Email" />
                        <SocialIcon Icon={Twitter} href="https://twitter.com/anasnadkar45" label="Twitter" />
                        <SocialIcon Icon={Instagram} href="https://www.instagram.com/anasnadkar45/profilecard/?igsh=MTM4dWoxOGdua3U5MA==" label="Instagram" />
                        <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/anas-nadkar-2765121a9/" label="LinkedIn" />
                        <SocialIcon Icon={Github} href="https://github.com/anasnadkar45/" label="GitHub" />
                    </div>
                </div>

                {/* Services Column */}
                <div className="space-y-2">
                    <h3 className="text-white font-semibold">Services</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white">Web Development</a></li>
                        <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
                        <li><a href="#" className="hover:text-white">E-commerce Solutions</a></li>
                        <li><a href="#" className="hover:text-white">SEO Optimization</a></li>
                        <li><a href="#" className="hover:text-white">Mobile App Development</a></li>
                    </ul>
                </div>

                {/* Technologies Column */}
                <div className="space-y-2">
                    <h3 className="text-white font-semibold">Technologies</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white">React & Next.js</a></li>
                        <li><a href="#" className="hover:text-white">Node.js & Express</a></li>
                        <li><a href="#" className="hover:text-white">WordPress</a></li>
                        <li><a href="#" className="hover:text-white">Shopify</a></li>
                        <li><a href="#" className="hover:text-white">Tailwind CSS</a></li>
                    </ul>
                </div>

                {/* Resources Column */}
                <div className="space-y-2">
                    <h3 className="text-white font-semibold">Resources</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white">Case Studies</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Whitepapers</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Legal Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p>©2024 WebMetrix. All Rights Reserved</p>
                <div className="flex justify-center space-x-4 mt-2 text-sm">
                    <a href="#" className="hover:text-white">Terms & Conditions</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
