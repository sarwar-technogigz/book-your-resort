"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const destinations = [
  {
    title: "Personalized Care",
    desc: "Our attentive team ensures every guest receives customized service.",
    image: "/images/pool.jpg",
  },
  {
    title: "Infinity Pool",
    desc: "Relax and unwind in our luxurious infinity pool experience.",
    image: "/images/umbrella-chair-around-swimming-pool.jpg",
  },
  {
    title: "Service 24/7",
    desc: "Round-the-clock service to meet your every need.",
    image: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  },
  {
    title: "Culinary Delights",
    desc: "Enjoy world-class dining with exquisite flavors.",
    image: "/images/umbrella-pool-chair.jpg",
  },
];

export default function VacationIdea() {
  return (
    <section className="relative bg-[#f6f6f6] py-20 px-6 md:px-12 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h5 className="text-sm text-purple-600 mb-3">
            individual approach
          </h5>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Perfect Place for Ideal Vacation
          </h2>
        </motion.div>

        {/* 🔹 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* 🔥 Card */}
              <div className="relative bg-white rounded-[25px] p-5 z-10 border border-[#dbdbdb] overflow-hidden cursor-pointer group">
                {/* 🔥 Image Wrapper */}
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={250}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* 🔥 Overlay ONLY on image */}
                  <div
                    className="
      absolute inset-0 
      bg-black/60 
      flex flex-col justify-end p-4
      translate-y-full group-hover:translate-y-0
      transition-all duration-500 ease-out
    "
                  >
                    <p className="text-white/80 text-xs">{item.desc}</p>
                  </div>
                </div>

                {/* 🔥 Bottom Content (always visible) */}
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* 🔥 Double Border Effect */}
              <div className="absolute inset-0 rounded-[25px] border border-[#d1d1d1] translate-y-[6px] w-[97%] mx-auto z-0" />
              <div className="absolute inset-0 rounded-[25px] border border-[#d1d1d1] translate-y-[12px] w-[94%] mx-auto z-0" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
