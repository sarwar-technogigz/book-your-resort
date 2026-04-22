"use client";

import { motion } from "framer-motion";

type ResortAboutProps = {
  title?: string;
  description: string[];
};

// 🔹 Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ResortAbout({
  title = "About This Resort",
  description,
}: ResortAboutProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="lg:col-span-8"
    >
      <h3 className="text-[25px] font-bold text-gray-900 mb-3">
        {title}
      </h3>

      <div className="space-y-4">
        {description.map((paragraph, index) => (
          <p key={index} className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
}