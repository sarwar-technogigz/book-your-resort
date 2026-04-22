"use client";

import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// 🔥 Animation Variants
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

export default function Articles() {
  return (
    <>
    <section className="relative py-20 px-6 md:px-12 bg-[#f6f6f6] overflow-hidden">
      
      {/* 🔹 Background */}
      <div className="absolute inset-0 opacity-[0.05] bg-cover bg-center pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto"
      >
        {/* 🔹 Heading */}
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-sm text-purple-600 font-medium mb-2">
            Blog And Article
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Articles
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Are You Tired Of The Typical Tourist Destinations And Looking To Step
            Out Of Your Comfort Zonetravel
          </p>
        </motion.div>

        {/* 🔹 Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* 🔹 Left Big Card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl p-4 shadow-sm group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/pool.jpg"
                alt="article"
                width={600}
                height={350}
                className="object-cover w-full h-[260px] transition-transform duration-500 group-hover:scale-110"
              />

              <span className="absolute bottom-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded">
                Travel River
              </span>
            </div>

            <h3 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition">
              Spiritual Sojourn: Pilgrimagee Tours For Soul Seekers
            </h3>

            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CalendarDays size={14} /> 26th Sep, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> 5 Mins Read
              </span>
            </div>
          </motion.div>

          {/* 🔹 Right Side */}
          <motion.div
            variants={container}
            className="flex flex-col gap-6"
          >
            {/* Item 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm items-center group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/umbrella-chair-around-swimming-pool.jpg"
                  alt="article"
                  width={200}
                  height={150}
                  className="object-cover w-[160px] h-[110px] transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded">
                  Hiking
                </span>

                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition">
                  Wine Country Escapes: Vineyard Tours For Connoisseurs
                </h4>

                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} /> 26th Sep, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> 5 Mins Read
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm items-center group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg"
                  alt="article"
                  width={200}
                  height={150}
                  className="object-cover w-[160px] h-[110px] transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded">
                  Adventure
                </span>

                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition">
                  Thrills & Chills: Extreme Sports Tours For Adrenaline
                </h4>

                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} /> 26th Sep, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> 5 Mins Read
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 🔹 Bottom */}
        <motion.div
          variants={fadeUp}
          className="text-center mt-12 text-sm text-gray-600"
        >
          Want To See Our Recent News & Updates.{" "}
          <span className="text-purple-600 cursor-pointer hover:underline">
            Click Here To View More
          </span>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
}