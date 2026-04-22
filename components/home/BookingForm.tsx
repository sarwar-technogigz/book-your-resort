"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Car, Home, Plane, Search, Utensils, Activity } from "lucide-react";
import CustomHotelIcon from "@/common/CustomIcon";

const tabs = [
  { name: "Tour", icon: Plane },
  { name: "Book Hotel", icon: CustomHotelIcon },
  { name: "Restaurant", icon: Utensils },
  { name: "Rental", icon: Home },
  { name: "Activity", icon: Activity },
  { name: "Car Rental", icon: Car },
];

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState("Tour");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto w-full bg-white rounded shadow-xl p-6 -mt-[70px] relative z-[50]"
    >
      {/* 🔹 Tabs */}
      <div className="flex justify-center flex-wrap gap-6 border-b border-[#e1e1e1] pb-4 mb-6">
        {tabs.map((tab) => {
          const isActive = tab.name === "Book Hotel";
          const Icon = tab.icon;

          return (
            <button
              key={tab.name}
              disabled={!isActive}
              className={`relative flex items-center gap-1.5 text-[12px] font-medium transition ${
                isActive
                  ? "text-black cursor-pointer"
                  : "text-gray-400 opacity-60 cursor-not-allowed"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  isActive ? "text-black" : "text-gray-400"
                }`}
              />
              {tab.name}

              {/* 🔹 Active underline */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-4 -left-6 -right-6 h-[2px] bg-[#560ce3]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 🔹 Form Fields */}
      <div className="grid md:grid-cols-4 gap-4 items-end">
        {/* Destination */}
        {/* <InputBox label="Destinations">
          <input
            type="text"
            placeholder="Where are you going..."
            className="w-full bg-transparent outline-none"
          />
        </InputBox> */}

        {/* Check In */}
        <InputBox label="Check In">
          <input type="date" className="w-full bg-transparent outline-none" />
        </InputBox>

        {/* Check Out */}
        <InputBox label="Check Out">
          <input type="date" className="w-full bg-transparent outline-none" />
        </InputBox>

        {/* Guests */}
        <InputBox label="Guest">
          <input
            type="text"
            placeholder="+ Add Guests"
            className="w-full bg-transparent outline-none"
          />
        </InputBox>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden h-[52px] px-6 bg-[#ddb580] text-white font-medium rounded flex items-center justify-center gap-2 group"
        >
          {/* 🔹 Animated layer (#aa998a) */}
          <span className="absolute inset-0 bg-[#aa998a] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

          {/* 🔹 Content */}
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white cursor-pointer">
            Search <Search size={18} />
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}

/* 🔥 Reusable Input Component */
function InputBox({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-2 transition-transform focus-within:scale-[1.03]"
    >
      <label className="text-sm text-gray-600">{label}</label>

      <div className="bg-gray-100 rounded-lg px-4 h-[52px] flex items-center transition border border-transparent focus-within:border-purple-500">
        {children}
      </div>
    </motion.div>
  );
}
