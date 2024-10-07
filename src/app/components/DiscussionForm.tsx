"use client";

import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"; // Adjust this import based on your UI components

interface FormData {
    name: string;
    email: string;
    subject: string;
    serviceType: string;
    message: string;
}

const DiscussionForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        serviceType: "general inquiry", // Default option
        message: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setFeedbackMessage(null); // Clear previous feedback message
    
        const { name, email, subject, serviceType, message } = formData;
    
        // Create the WhatsApp message
        const whatsappMessage = `*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Service Type:* ${serviceType}\n*Message:* ${message}`;
    
        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
    
        // WhatsApp API URL with correct phone number format
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918275851083&text=${encodedMessage}`;
    
        // Open the WhatsApp chat
        window.open(whatsappUrl, "_blank");
    
        // Reset form data
        setFormData({
            name: "",
            email: "",
            subject: "",
            serviceType: "general inquiry",
            message: "",
        });
        setLoading(false); // Reset loading state after message is sent
    
        // Provide user feedback
        setFeedbackMessage("Your message has been sent! We'll get back to you soon.");
    };
    

    return (
        <section id="contact" className="relative py-12 bg-gradient-to-br from-background via-background to-80% to-background z-10">
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
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Send Us a Message</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have questions? Send us a message via WhatsApp, and we will get back to you soon!
                    </p>
                </motion.div>

                <motion.div
                    className="relative bg-card p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <form onSubmit={handleSubmit} className="relative z-20">
                        <div className="mb-5">
                            <label className="block text-sm font-semibold mb-2 text-gray-600" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                aria-label="Name"
                                className="w-full border p-3 rounded-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-sm font-semibold mb-2 text-gray-600" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-label="Email"
                                className="w-full border p-3 rounded-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-sm font-semibold mb-2 text-gray-600" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                aria-label="Subject"
                                className="w-full border p-3 rounded-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-sm font-semibold mb-2 text-gray-600" htmlFor="serviceType">
                                Service Type
                            </label>
                            <select
                                name="serviceType"
                                id="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-md"
                            >
                                <option value="general inquiry">General Inquiry</option>
                                <option value="technical support">Technical Support</option>
                                <option value="sales">Sales</option>
                                <option value="feedback">Feedback</option>
                                {/* Add more service options as needed */}
                            </select>
                        </div>
                        <div className="mb-5">
                            <label className="block text-sm font-semibold mb-2 text-gray-600" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                aria-label="Message"
                                className="w-full border p-3 rounded-md"
                                rows={4}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full font-semibold py-3 rounded-md"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? "Sending..." : "Send WhatsApp Message"}
                        </Button>
                    </form>

                    {feedbackMessage && (
                        <p className="mt-4 text-green-600 text-sm text-center">
                            {feedbackMessage}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default DiscussionForm;
