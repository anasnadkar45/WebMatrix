"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const PricingCard = ({ title, price, features, isPopular }: any) => (
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
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-muted-foreground">/month</span>
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
)

export const PricingSection = () => {
    const plans = [
        {
            title: "Basic",
            price: 99,
            features: [
                { text: "5 Pages Website", included: true },
                { text: "Mobile Responsive Design", included: true },
                { text: "Basic SEO Optimization", included: true },
                { text: "1 Month of Support", included: true },
                { text: "Custom Domain Setup", included: true },
                { text: "E-commerce Integration", included: false },
                { text: "Advanced SEO Strategies", included: false },
                { text: "Performance Optimization", included: false },
            ],
            isPopular: false,
        },
        {
            title: "Pro",
            price: 199,
            features: [
                { text: "10 Pages Website", included: true },
                { text: "Mobile Responsive Design", included: true },
                { text: "Advanced SEO Optimization", included: true },
                { text: "3 Months of Support", included: true },
                { text: "Custom Domain Setup", included: true },
                { text: "E-commerce Integration", included: true },
                { text: "Performance Optimization", included: true },
                { text: "Custom Animations", included: false },
            ],
            isPopular: true,
        },
        {
            title: "Enterprise",
            price: 399,
            features: [
                { text: "Unlimited Pages", included: true },
                { text: "Mobile Responsive Design", included: true },
                { text: "Premium SEO Optimization", included: true },
                { text: "6 Months of Support", included: true },
                { text: "Custom Domain Setup", included: true },
                { text: "E-commerce Integration", included: true },
                { text: "Performance Optimization", included: true },
                { text: "Custom Animations & Features", included: true },
            ],
            isPopular: false,
        },
    ]

    return (
        <section id="services" className="relative py-12 bg-gradient-to-br from-background via-background to-80% to-background z-10">

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
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Choose Your Plan</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Select the perfect plan for your needs. All plans include our core features to boost your online presence.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    )
}
