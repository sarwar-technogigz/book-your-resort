"use client";

import Image from "next/image";
import { motion } from "framer-motion";


// 🔥 Animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// 🔥 Gallery Data (masonry feel)
const galleryImages = [
  { src: "/images/pool.jpg", className: "row-span-2" },
  { src: "/images/umbrella-chair-around-swimming-pool.jpg", className: "" },
  { src: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg", className: "" },
  { src: "/images/umbrella-pool-chair.jpg", className: "row-span-2" },
  { src: "/images/pool.jpg", className: "col-span-2" },
  { src: "/images/umbrella-chair-around-swimming-pool.jpg", className: "col-span-2" },
  { src: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg", className: "" },
  { src: "/images/umbrella-pool-chair.jpg", className: "" },
];

export default function Gallery() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#fafafa]">

      <div className="max-w-7xl mx-auto">

        {/* 🔹 Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h5 className="text-sm text-purple-600 mb-3">
            Instagram Gallery
          </h5>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            Share your #CorbettVanvaas story
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            We are always delighted to discover our guests’ photos and we love to share those stories 
            and connect in a meaningful way.
          </p>
        </motion.div>

        {/* 🔥 Masonry Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4"
        >
          {galleryImages.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.className}`}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt="gallery"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* 🔥 Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-400 flex items-center justify-center">
                


              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="
            px-10 py-3 
            bg-[#ddb580] 
            text-white 
            font-medium 
            rounded
            relative overflow-hidden
            group
          ">
            <span className="relative z-10">View All Gallery</span>

            {/* 🔥 Hover Animation */}
            <span className="
              absolute left-0 top-0 h-full w-0 
              bg-black 
              transition-all duration-500 
              group-hover:w-full
            "></span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}