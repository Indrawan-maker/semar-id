"use client"
import Image from 'next/image';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import type { cardProps } from '@/app/types';

export const Card = ({ projectTitle,  projectImage}: cardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div>
            <div className='justify-center items-center flex'
               onClick={() => setIsOpen(true)}>
                <section className="w-72 h-82 md:w-72 md:h-82 border border-white rounded-md transition-transform duration-300 md:mb-0 mb-6 mt-2
   hover:-translate-y-2 hover:shadow-lg relative">
        <div className='relative w-full h-[240]'>
                    <Image
                        src={projectImage}
                        alt='puzzle 3x3'
                        fill
                        className='rounded-md rounded-b-none object-cover'
                        />
                        </div>
                    <div>
                        <h4 className='font-normal text-xl px-3 py-2'>{projectTitle}</h4>
                    </div>
                </section>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="relative max-w-[90vw] max-h-[90vh]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Tombol tutup */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-3 -right-3 z-10 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                            >
                                <X size={16} />
                            </button>
                            {/* Full Image */}
                            <Image
                                src={projectImage}
                                alt={projectTitle}
                                width={1200}
                                height={900}
                                className="rounded-md object-contain max-w-[90vw] max-h-[90vh] "
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}