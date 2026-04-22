"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Car, Home, Plane, Utensils, Activity } from "lucide-react";
import CustomHotelIcon from "@/common/CustomIcon";

const tabs = [
  { name: "Rooms", icon: Plane },
  { name: "Luxury Pool Cottage", icon: CustomHotelIcon },
  { name: "Premium Pool Cottage", icon: Utensils },
];

export default function RoomTabs() {
  const [activeTab, setActiveTab] = useState("Rooms");

  return (
    <div className="mb-10">
      <div className="flex justify-center flex-wrap gap-6 border-b border-[#e1e1e1] pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;

          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative flex items-center gap-1.5 text-[13px] font-medium transition ${
                isActive
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.name}

              {isActive && (
                <motion.div
                  layoutId="roomTab"
                  className="absolute -bottom-4 -left-4 -right-4 h-[2px] bg-[#560ce3]"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}