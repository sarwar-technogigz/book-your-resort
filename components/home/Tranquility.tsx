"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/images/pool.jpg",
  "/images/umbrella-chair-around-swimming-pool.jpg",
  "/images/umbrella-pool-chair.jpg",
];

// 🔥 Parent stagger
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 🔥 Common fade-up
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#fff] overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-0 lg:px-0 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* 🔹 LEFT CONTENT */}
        <div>
          <motion.p
            variants={fadeUp}
            className="text-sm tracking-widest text-green-700 mb-3"
          >
            — ESCAPE
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6 leading-tight"
          >
            To Tranquility at <br /> Corbett Vanvaas
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 mb-4 leading-relaxed"
          >
            Staying at Corbett Vanvaas Resort is a truly mesmerizing experience.
            Nestled in the lush wilderness of Jim Corbett National Park, the
            resort offers a perfect blend of nature, luxury, and tranquility.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 mb-6 leading-relaxed"
          >
            Whether you're unwinding by the pool or enjoying gourmet meals,
            every moment here feels magical and peaceful.
          </motion.p>

         <motion.button
  variants={fadeUp}
  whileHover="hover"
  initial="initial"
  className="relative overflow-hidden bg-[#ddb580] text-white px-6 py-3 font-medium flex items-center gap-2"
>
  <motion.span
    variants={{
      initial: { x: "-100%" },
      hover: { x: "0%" },
    }}
    transition={{ duration: 0.4 }}
    className="absolute inset-0 bg-black z-0"
  />

  <span className="relative z-10 flex items-center gap-2">
    READ MORE →
  </span>
</motion.button>
        </div>

        {/* 🔥 RIGHT IMAGE ANIMATION */}
        <div className="relative h-[500px] w-full flex items-center justify-center">

          <AnimatePresence mode="sync">
            <motion.img
              key={index}
              src={images[index]}
              className="absolute w-[320px] h-[420px] object-cover rounded-md shadow-2xl"
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -8,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 1.1,
                rotate: 8,
                y: -50,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>

        </div>
      </motion.div>
    </section>
  );
}