"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    text: "Amazing experience, truly relaxing and luxurious!",
    image: "/images/pool.jpg",
  },
  {
    name: "Sarah Khan",
    text: "Best resort I’ve ever stayed in. Highly recommended!",
    image: "/images/umbrella-chair-around-swimming-pool.jpg",
  },
  {
    name: "Amit Sharma",
    text: "Beautiful place with excellent service.",
    image: "/images/umbrella-pool-chair.jpg",
  },
  {
    name: "Emma Watson",
    text: "A peaceful escape into nature.",
    image: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  },
   {
    name: "Emma Watson",
    text: "A peaceful escape into nature.",
    image: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  },
   {
    name: "Emma Watson",
    text: "A peaceful escape into nature.",
    image: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  },
   {
    name: "Emma Watson",
    text: "A peaceful escape into nature.",
    image: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  },
   {
    name: "Emma Watson",
    text: "A peaceful escape into nature.",
    image: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  },
   {
    name: "Emma Watson",
    text: "A peaceful escape into nature.",
    image: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  },
   {
    name: "Emma Watson",
    text: "A peaceful escape into nature.",
    image: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ SINGLE interval with pause logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getPosition = (i: number) => {
    const diff = i - index;

    if (diff === 0) {
      return { x: 0, scale: 1, zIndex: 5, rotateY: 0, opacity: 1 };
    }

    if (diff === -1 || diff === testimonials.length - 1) {
      return { x: -300, scale: 0.85, zIndex: 4, rotateY: 25, opacity: 0.7 };
    }

    if (diff === 1 || diff === -(testimonials.length - 1)) {
      return { x: 300, scale: 0.85, zIndex: 4, rotateY: -25, opacity: 0.7 };
    }

    return {
      x: diff > 0 ? 520 : -520,
      scale: 0.7,
      zIndex: 1,
      rotateY: diff > 0 ? -40 : 40,
      opacity: 0.2,
    };
  };

  return (
    <div className="w-full flex justify-center items-center py-20 bg-gray-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto w-full h-[500px] flex items-center justify-center perspective-[1200px]">

        {testimonials.map((item, i) => {
          const pos = getPosition(i);

          return (
            <motion.div
              key={i}
              animate={{
                x: pos.x,
                scale: pos.scale,
                rotateY: pos.rotateY,
                opacity: pos.opacity,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ zIndex: pos.zIndex }}
              className="absolute w-[260px] h-[340px] rounded-xl overflow-hidden shadow-xl bg-white cursor-pointer"
              
              // ✅ hover on ANY card → pause
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt=""
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <p className="text-sm mb-2">{item.text}</p>
                <h4 className="font-semibold">{item.name}</h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}