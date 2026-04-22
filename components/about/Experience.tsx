"use client";

import { motion, type Variants } from "framer-motion";

// 🔥 Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Experience = () => {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12 bg-white overflow-hidden">
      {/* 🔹 Background Shape */}
      <img
        src="/images/shape.png"
        className="absolute left-10 top-10 hidden lg:block opacity-70"
        alt=""
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* 🔹 LEFT SIDE IMAGES */}
        <motion.div variants={fadeUp} className="relative">
          {/* Map Shape */}
          {/* <img
            src="/images/map.png"
            className="absolute top-10 left-10 opacity-40 hidden md:block"
            alt=""
          /> */}{" "}
          map
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/pool.jpg"
                className="rounded-xl object-cover w-full h-[200px]"
                alt=""
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg"
                className="rounded-xl object-cover w-full h-[260px]"
                alt=""
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Circle + Star */}
              <div className="relative flex justify-center items-center h-[140px]">
                <motion.img
                  src="/images/umbrella-chair-around-swimming-pool.jpg"
                  alt=""
                  className="w-28 h-28"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: [0, 0, 1, 1],
                  }}
                />

                <img
                  src="/images/umbrella-chair-around-swimming-pool.jpg"
                  alt=""
                  className="absolute w-6 h-6"
                />
              </div>

              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/umbrella-chair-around-swimming-pool.jpg"
                className="rounded-xl object-cover w-full h-[300px]"
                alt=""
              />
            </div>
          </div>
        </motion.div>

        {/* 🔹 RIGHT CONTENT */}
        <motion.div variants={fadeUp} className="lg:pl-12">
          <p className="text-sm text-purple-600 mb-3">
            Welcome to Corbett Vanvaas Resort
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We always care about your experience
          </h2>

          <p className="text-gray-500 mb-8 leading-relaxed">
            Corbett Vanvaas is a tranquil escape nestled in the lap of nature,
            offering a perfect blend of luxury and wilderness. Surrounded by the
            majestic forests of Jim Corbett National Park, our resort provides
            an immersive experience where guests can reconnect with nature while
            enjoying world-class hospitality
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            At Corbett Vanvaas, every detail is thoughtfully curated to reflect
            the harmony between comfort and the natural world. Whether it’s
            lounging by your private pool with a jungle view, dining on
            delectable cuisine prepared with love, or simply soaking in the
            breathtaking vistas of the mountains from your balcony, each moment
            here is designed to rejuvenate your senses.
          </p>

          {/* 🔥 Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-6 py-3 bg-[#aa998a] text-white font-medium flex items-center gap-3 group"
          >
            {/* Hover Effect */}
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition duration-500" />

            <span className="relative z-10 group-hover:text-black transition">
              Book Your Room
            </span>

            <span className="relative z-10 group-hover:text-black transition">
              →
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
