"use client";

import { motion } from "framer-motion";

type CommonBannerProps = {
  title: string;
  image: string;
  breadcrumbs?: string[]; // ["Home", "Pages", "About Us"]
  height?: string;
};

const CommonBanner = ({
  title,
  image,
  breadcrumbs = [],
  height = "h-[50vh]",
}: CommonBannerProps) => {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>

      {/* 🔹 Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔹 Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-black to-transparent z-20" />

      {/* 🔹 Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-3"
        >
          {title}
        </motion.h1>

        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm md:text-base flex-wrap justify-center"
          >
            {breadcrumbs.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className={`cursor-pointer ${
                    i === breadcrumbs.length - 1
                      ? "text-white/80"
                      : "hover:text-white/80"
                  }`}
                >
                  {item}
                </span>
                {i !== breadcrumbs.length - 1 && <span>›</span>}
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* 🔹 Decorative Left Blur */}
      <div className="absolute left-0 top-0 h-full w-40 bg-white/10 rounded-r-full blur-2xl opacity-30" />

      {/* 🔥 Bottom Left SVG */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 left-0 z-20 hidden md:block pointer-events-none"
      >
        <svg width="154" height="321" viewBox="0 0 154 321" fill="none">
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

      {/* 🔥 Bottom Right SVG */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-0 z-20 hidden md:block pointer-events-none"
      >
        <svg width="432" height="298" viewBox="0 0 432 298" fill="none">
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
};

export default CommonBanner;