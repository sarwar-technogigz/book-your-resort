"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  span?: string; // Hum grid span control karne ke liye use karenge
}

// --- Data (Image ke layout ke hisaab se) ---
const IMAGES: GalleryImage[] = [
  { id: 1, src: '/images/pool.jpg', title: 'Mountain Mist', category: 'Nature' },
  { id: 2, src: '/images/pool.jpg', title: 'Cyber City Lights', category: 'Cyber', span: 'md:row-span-2' },
  { id: 3, src: '/images/pool.jpg', title: 'Tropical Beach', category: 'Nature', span: 'md:col-span-2' },
  { id: 4, src: '/images/pool.jpg', title: 'Forest Rays', category: 'Forest', span: 'md:row-span-2' },
  { id: 5, src: '/images/pool.jpg', title: 'Architectural Facade', category: 'Nature' },
  { id: 6, src: '/images/pool.jpg', title: 'Desert Dunes', category: 'Nature', span: 'md:col-span-2' },
  { id: 7, src: '/images/pool.jpg', title: 'Cherry Blossoms', category: 'Nature' },
  { id: 8, src: '/images/pool.jpg', title: 'Northern Lights', category: 'Nature', span: 'md:col-span-2' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="min-h-screen p-6 md:p-12 text-white">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Visual Explorations</h1>
        <p className="text-zinc-400 max-w-xl text-sm leading-relaxed">
          A sophisticated image gallery with Masonry layout and Next.js in Tailwind CSS, TypeScript and Framer Motion.
        </p>
      </header>

      {/* Masonry-style Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-[200px]"
      >
        {IMAGES.map((img) => (
          <motion.div
            key={img.id}
            layoutId={`card-${img.id}`}
            onClick={() => setSelectedImage(img)}
            whileHover={{ y: -5 }}
            className={`relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-900 ${img.span || ""}`}
          >
            {/* Image Component */}
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Content Overlay (Visible by default, gets darker on hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 transition-all group-hover:bg-black/40">
              <p className="text-xs font-light text-zinc-300 mb-1">
                {img.category} |
              </p>
              <h3 className="text-lg font-bold leading-tight tracking-wide">
                {img.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${selectedImage.id}`}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-zinc-400 text-sm mb-1">{selectedImage.category}</p>
                <h2 className="text-3xl font-bold">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}