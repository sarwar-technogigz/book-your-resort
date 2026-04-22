"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type FeatureItem = {
  label: string;
  value: string;
};

type RoomFeaturesProps = {
  features: FeatureItem[];
  price: number;
  bookingLink?: string;
};

// 🔹 Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function RoomFeatures({
  features,
  price,
  bookingLink = "/booking",
}: RoomFeaturesProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="lg:col-span-4"
    >
      <div className="w-full rounded-2xl bg-white shadow-lg p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Room Features
        </h2>

        {/* Features List */}
        <div className="space-y-3 text-gray-700 text-sm">
          {features.map((item, index) => (
            <div key={index} className="flex justify-between pb-2">
              <span className="font-medium">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="my-5" />

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 text-sm">Starting From</span>
          <span className="text-2xl font-bold text-purple-600">
            ${price}
          </span>
        </div>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={bookingLink}
            className="block w-full rounded-xl bg-[#ddb580] py-3 text-center font-semibold text-white shadow-md"
          >
            BOOK NOW
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}