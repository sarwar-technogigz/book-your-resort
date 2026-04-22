"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "/images/pool.jpg",
  "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  "/images/umbrella-chair-around-swimming-pool.jpg",
  "/images/umbrella-pool-chair.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // thoda slow for smooth feel

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[188px] bg-gradient-to-b from-black to-transparent z-[9]" />
      {/* 🔹 Background Image Carousel */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{
            duration: 6, // same as interval = consistency 🔥
            ease: "easeOut",
          }}
        >
          <img
            src={images[index]}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* 🔹 Static Content (same always) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm mb-2"
        >
          * This Offer Valid Till 22 August
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Luxury Pool Cottage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-xl text-sm md:text-base mb-4"
        >
          - Great choice for a relaxing vacation for families with children or a
          group of friends -
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-lg mb-6"
        >
          Booking Start From{" "}
          <span className="text-3xl font-semibold">$299</span>/night
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.03 }}
          className="relative overflow-hidden px-6 py-3 font-medium flex items-center gap-2 bg-[#ddb580] text-white group"
        >
          {/* 🔹 Animated white layer */}
          <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

          {/* 🔹 Text */}
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black cursor-pointer">
            TAKE A TOUR AND ROOM BOOKING →
          </span>
        </motion.button>
      </div>

      {/* 🔹 Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-6 z-20 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto bg-white/80 hover:bg-white text-black p-3 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={next}
          className="pointer-events-auto bg-white/80 hover:bg-white text-black p-3 rounded-full"
        >
          <ArrowRight size={20} />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 left-0 z-[9] hidden md:block pointer-events-none"
      >
        <svg
          width="154"
          height="321"
          viewBox="0 0 154 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M144.616 328.905C116.117 300.508 62.5986 230.961 76.5162 179.949C93.9132 116.184 275.231 7.44493 -65.0181 12.8762"
            stroke="white"
            strokeWidth="24"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.8,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.2,
            }}
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-0 z-[9] hidden md:block pointer-events-none"
      >
        <svg
          width="432"
          height="298"
          viewBox="0 0 432 298"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M39.6062 428.345C4.4143 355.065 -24.2999 203.867 142.379 185.309C350.726 162.111 488.895 393.541 289.171 313.515C129.391 249.494 458.204 85.4772 642.582 11.4713"
            stroke="white"
            strokeWidth="24"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.8,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
