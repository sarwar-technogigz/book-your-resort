"use client";

import { motion } from "framer-motion";

type AmenitiesProps = {
  amenities: string[];
  services: string[];
};

// 🔹 Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function Amenities({
  amenities,
  services,
}: AmenitiesProps) {
  return (
    <div className="grid grid-cols-12 gap-6 mt-8">
      
      {/* Amenities */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.1}
        className="col-span-12 md:col-span-6 bg-white rounded-2xl p-6 shadow-md border border-gray-100"
      >
        <div className="flex items-start gap-4 mb-5">
          <div className="text-2xl">🏨</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Amenities
            </h3>
            <p className="text-sm text-gray-500">
              Our room amenities range from a premium gift basket in your room, to milk and cookies before bed.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
          {amenities.map((item, index) => (
            <motion.li
              key={index}
              custom={index * 0.05}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              className="flex items-center gap-2"
            >
              <span className="text-green-600">✔</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Services */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.2}
        className="col-span-12 md:col-span-6 bg-white rounded-2xl p-6 shadow-md border border-gray-100"
      >
        <div className="flex items-start gap-4 mb-5">
          <div className="text-2xl">🛎️</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Services
            </h3>
            <p className="text-sm text-gray-500">
              Experience an unimaginable combination of beautiful décor and impeccable service within the hotel
            </p>
          </div>
        </div>

        <ul className="space-y-2 text-sm text-gray-700">
          {services.map((item, index) => (
            <motion.li
              key={index}
              custom={index * 0.05}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              className="flex items-center gap-2"
            >
              <span className="text-green-600">✔</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
}