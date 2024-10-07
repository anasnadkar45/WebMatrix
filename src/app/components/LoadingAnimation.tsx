"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = [
    "Hello",
    "नमस्ते", // Namaste (Hindi)
    "नमस्कार", // Namaskar (Marathi)
    "السلام عليكم", // As-salaam-alaikum (Urdu)
    "Bonjour",
    "Hola",
    "Ciao",
]

export const LoadingAnimation = ({ onLoadingComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === greetings.length - 1) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setIsComplete(true)
                        onLoadingComplete()
                    }, 1000)
                    return prevIndex
                }
                return prevIndex + 1
            })
        }, 500)

        return () => clearInterval(interval)
    }, [onLoadingComplete])

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-background z-50"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-64 h-64 flex items-center justify-center"
                    >
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "conic-gradient(from 0deg, #f16027, #f16645, #f16027)",
                                filter: "blur(100px)"
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "backInOut" }}
                        />
                        <motion.h1
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="text-4xl font-bold text-center z-10 text-white mix-blend-difference "
                        >
                            {greetings[currentIndex]}
                        </motion.h1>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}