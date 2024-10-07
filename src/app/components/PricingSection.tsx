"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Switch } from "@/components/ui/switch"; // Import the switch component from Shadcn UI

const PricingCard = ({ title, price, features, isPopular, currencySymbol }: any) => (
    <motion.div
        className={`bg-card p-8 rounded-2xl shadow-lg z-20 ${isPopular ? 'border-2 border-primary' : 'border border-border'
            } relative overflow-hidden`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
        {isPopular && (
            <div className="absolute top-0 right-0">
                <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                </div>
            </div>
        )}
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
            <span className="text-4xl font-bold">{currencySymbol}{price}</span>
            <span className="text-muted-foreground">/{isPopular ? 'project' : 'project'}</span>
        </div>
        <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    ) : (
                        <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground'}>{feature.text}</span>
                </li>
            ))}
        </ul>
        <Link href={'https://cal.com/anas-nadkar-45/30min'}>
            <Button className="w-full" variant={isPopular ? "default" : "outline"}>
                Get Started
            </Button>
        </Link>
    </motion.div>
);

export const PricingSection = () => {
    const [isIndianClient, setIsIndianClient] = useState(true); // State to track client type

    const plans = [
        {
            title: "Basic Development",
            price: isIndianClient ? 25000 : 1000, // Lower price for Indian clients
            features: [
                { text: "5 Pages Website", included: true },
                { text: "Mobile Responsive Design", included: true },
                { text: "Basic SEO Setup", included: true },
                { text: "Basic Animations", included: true },
                { text: "Componentized Structure", included: true },
                { text: "E-commerce Integration", included: false },
                { text: "Advanced Animations", included: false },
                { text: "Custom Features", included: false },
            ],
            isPopular: false,
        },
        {
            title: "Pro Development",
            price: isIndianClient ? 50000 : 2000, // Lower price for Indian clients
            features: [
                { text: "10 Pages Website", included: true },
                { text: "Mobile Responsive Design", included: true },
                { text: "SEO Optimization", included: true },
                { text: "Advanced Animations", included: true },
                { text: "Componentized Structure", included: true },
                { text: "E-commerce Integration", included: true },
                { text: "Custom Animations", included: true },
                { text: "Performance Optimization", included: true },
            ],
            isPopular: true,
        },
        {
            title: "Enterprise Development",
            price: isIndianClient ? 100000 : 3000, // Lower price for Indian clients
            features: [
                { text: "Unlimited Pages", included: true },
                { text: "Mobile Responsive Design", included: true },
                { text: "Premium SEO Optimization", included: true },
                { text: "Advanced Animations", included: true },
                { text: "Componentized Structure", included: true },
                { text: "E-commerce Integration", included: true },
                { text: "Custom Animations & Features", included: true },
                { text: "Ongoing Support", included: true },
            ],
            isPopular: false,
        },
    ];

    return (
        <section id="pricing" className="relative py-12 bg-gradient-to-br from-background via-background to-80% to-background z-10">
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
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Choose Your Development Plan</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Select the right development package for your business. We offer a range of services to meet your needs.
                    </p>
                </motion.div>

                {/* Switch to toggle between Indian and Foreign clients */}
                <div className="flex justify-center mb-8">
                    <Switch
                        checked={isIndianClient}
                        onCheckedChange={() => setIsIndianClient(!isIndianClient)}
                    />
                    <span className="ml-2">{isIndianClient ? "Indian Client" : "Foreign Client"}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
                    {plans.map((plan, index) => (
                        <PricingCard 
                            key={index} 
                            {...plan} 
                            currencySymbol={isIndianClient ? "₹" : "$"} // Change currency symbol based on selection 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
