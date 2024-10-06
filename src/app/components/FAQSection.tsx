"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of services including web development of different types.",
    },
    {
        question: "How can I contact support?",
        answer: "You can contact support via email at webmetrix45@gmail.com or by using the contact form on our website.",
    },
    {
        question: "What is your refund policy?",
        answer: "We have a 30-day refund policy for all our services. Please check our terms for more details.",
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we provide ongoing support and maintenance for all our projects.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="">
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
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have questions? We have answers! Browse our frequently asked questions to find out more about our services, support, and policies.                    </p>
                </motion.div>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                            <motion.div
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between items-center p-4 cursor-pointer bg-card transition duration-300"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <h3 className="font-semibold">{item.question}</h3>
                                <Button size={"icon"} className="size-8 bg-card/60 border">
                                    {openIndex === index ? <ArrowUpIcon /> : <ArrowDownIcon />}
                                </Button>
                            </motion.div>
                            <motion.div
                                className="p-4"
                                initial={false}
                                animate={{
                                    maxHeight: openIndex === index ? "200px" : "0",
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <p>{item.answer}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
