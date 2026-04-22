"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus, Search, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "HOME", href: "/", hasSub: true },
  { name: "FEATURES", href: "#", hasSub: true },
  { name: "PAGES", href: "#", hasSub: true },
  { name: "BLOGS", href: "#", hasSub: true },
  { name: "CONTACT", href: "/contact", hasSub: false },
];

// const socialIcons = [
//   { Icon: Facebook, color: "text-blue-600" },
//   { Icon: Twitter, color: "text-sky-400" },
//   { Icon: Instagram, color: "text-pink-600" },
//   { Icon: Linkedin, color: "text-blue-700" },
//   { Icon: Youtube, color: "text-red-600" },
// ];

const sidebarVariants: Variants = {
  closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
};

const overlayVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

type ResponsiveHeaderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ResponsiveHeader({ isOpen, setIsOpen }: ResponsiveHeaderProps) {

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 1. Dark Overlay */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />

            {/* 2. Sidebar Drawer */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 right-0 h-full w-[320px] bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Header Section */}
              <div className="flex items-center justify-between border-b border-gray-100">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">

                    <div className="">
                      <Image
                        src="/logo/WildernestLogoPNG.png"
                        alt="Logo"
                        width={150}
                        height={60}
                        className="object-contain"
                      />
                    </div>

                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:rotate-90 transition-transform duration-300"
                >
                  <X size={28} className="text-[#6316FF]" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full bg-gray-50 border-none px-4 py-4 pr-12 focus:ring-2 focus:ring-purple-100 outline-none rounded-sm placeholder:text-gray-500 font-medium"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto">
                <nav>
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="border-b border-gray-50 last:border-none"
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-6 py-5 group hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[15px] font-bold text-[#0F172A] tracking-wide">
                          {item.name}
                        </span>
                        {item.hasSub && (
                          <div className="w-8 h-8 bg-gray-100 rounded-sm flex items-center justify-center group-hover:bg-[#ddb580] group-hover:text-white transition-all">
                            <Plus size={16} />
                          </div>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Social Media Footer */}
              {/* <div className="p-8 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  {socialIcons.map(({ Icon, color }, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -5 }}
                      className={`w-11 h-11 border border-gray-100 rounded-sm flex items-center justify-center ${color} hover:shadow-md transition-all`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default ResponsiveHeader;