"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqData = [
    {
      question: "What types of website development services do you offer?",
      answer:
        "We offer a full range of website development services including custom websites, e-commerce platforms, single-page applications, and complex web solutions tailored to your needs.",
    },
    {
      question: "How does the development process work?",
      answer:
        "Our development process starts with understanding your requirements, followed by designing, developing, and testing the website. We collaborate with you at every step to ensure your vision is met.",
    },
    {
      question: "What if I just need a single feature or page developed?",
      answer:
        "Whether you need a complete website or just a single feature or landing page, we’re happy to take on both large and small projects.",
    },
    {
      question: "How many revisions do I get during development?",
      answer:
        "We offer unlimited revisions during the design phase and up to 3 rounds of revisions after development, ensuring that your website meets your expectations.",
    },
    {
      question: "Why shouldn't I just hire a full-time developer?",
      answer:
        "Hiring us gives you flexibility and access to a team of experts without the long-term commitment and overhead costs of a full-time employee. You can scale your project up or down as needed.",
    },
    {
      question: "Do you offer a refund?",
      answer:
        "Yes, we have a 30-day refund policy if you are not satisfied with our services. Please review our refund policy for detailed terms and conditions.",
    },
    {
      question: "Are there certain types of development projects you don't work on?",
      answer:
        "We do not work on projects involving illegal activities, unethical practices, or anything that violates our terms of service. We’re happy to discuss your project and assess if it's a good fit for us.",
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
