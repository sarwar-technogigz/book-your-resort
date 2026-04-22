"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 🔥 Animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const foods = [
  {
    title: "American",
    count: "05",
    image: "/images/pool.jpg",
  },
  {
    title: "Mexican",
    count: "12",
    image: "/images/umbrella-chair-around-swimming-pool.jpg",
  },
  {
    title: "Italian",
    count: "11",
    image: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
  },
  {
    title: "Vegetarians",
    count: "04",
    image: "/images/umbrella-pool-chair.jpg",
  },
  {
    title: "Japanese",
    count: "13",
    image: "/images/pool.jpg",
  },
];

export default function Restaurant() {
  return (
    <section className="py-24 px-6 md:px-12">
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
            Explore Restaurants & Cafes
          </h5>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Search By Cuisine
          </h2>
        </motion.div>

        {/* 🔹 Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center"
        >
          {foods.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="text-center cursor-pointer"
            >
              {/* 🔥 Circle Image */}
              <div
                className="
  w-[200px] h-[200px] 
  rounded-full 
  bg-white 
  border-[10px] border-white 
  shadow-[0_0_20px_rgba(0,0,0,0.15)]
  overflow-hidden
  group
"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-full 
    transition-transform duration-500 
    group-hover:scale-110 
    group-hover:rotate-12"
                />
              </div>

              {/* 🔥 Title */}
              <h3 className="text-[20px] font-medium text-gray-900">
                {item.title}{" "}
                <span className="text-gray-500 text-sm">({item.count})</span>
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
