"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone, ShoppingCart } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ResponsiveHeader from "./ResponsiveHeader";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About-Us" },
  { name: "Rooms", href: "/pages" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

const roomsDropdownItems = [
  { label: "All Rooms", href: "/rooms" },
  { label: "Deluxe Room", href: "/rooms/deluxe" },
  { label: "Premium Suite", href: "/rooms/premium-suite" },
  { label: "Family Cottage", href: "/rooms/family-cottage" },
];

// 🔥 Animation Variants
const container: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<any>(null);
  const [scrolled, setScrolled] = useState(false);
  const textColor = scrolled ? "text-black" : "text-white";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className={`fixed top-0 left-0 right-0 w-full z-60 transition-all duration-300
    ${
      scrolled
        ? "bg-white/60 shadow-md backdrop-blur-[10px] animate-headerSlideDown z-50"
        : "bg-transparent"
    }`}
    >
      <div className="px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* 🔹 Left Section */}
          <motion.div variants={item} className="flex items-center gap-12">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <Link href="/">
                <Image
                  src="/logo/WildernestLogoPNG.png"
                  alt="Logo"
                  width={150} // adjust size
                  height={100}
                  className="object-contain"
                />
              </Link>
            </motion.div>

            {/* 🔹 Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isRooms = link.name === "Rooms";

                return (
                  <motion.div
                    key={link.name}
                    variants={item}
                    whileHover={{ y: -2 }}
                    className="relative"
                    onMouseEnter={() => {
                      if (isRooms) {
                        clearTimeout(timeoutRef.current);
                        setShowDropdown(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (isRooms) {
                        timeoutRef.current = setTimeout(() => {
                          setShowDropdown(false);
                        }, 150);
                      }
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 ${textColor} text-sm font-medium`}
                    >
                      {link.name}

                      {isRooms && (
                        <motion.span
                          animate={{ rotate: showDropdown ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      )}
                    </Link>

                    {/* 🔥 Dropdown */}
                    {isRooms && (
                      <div className="absolute top-full left-0">
                        <Dropdown
                          items={roomsDropdownItems}
                          isOpen={showDropdown}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>

          {/* 🔹 Right Section */}
          <motion.div
            variants={item}
            className="hidden lg:flex items-center gap-6"
          >
            {/* Call */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 text-sm cursor-pointer ${
                scrolled ? "text-black/90" : "text-white/90"
              }`}
            >
              <span
                className={`rounded-full p-2 border ${
                  scrolled ? "border-[#dadada]" : "border-white/30"
                }`}
              >
                <Phone
                  className={`w-4 h-4 ${scrolled ? "text-black" : "text-white"}`}
                />
              </span>
              <motion.div className="flex flex-col leading-4">
                <span
                  className={`hidden xl:block ${textColor} mb-1 text-[12px] font-medium`}
                >
                  Call Us:
                </span>
                <span className={`hidden xl:block ${textColor} font-bold`}>
                  +123 5959 66
                </span>
              </motion.div>
            </motion.div>

            {/* Cart */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`relative cursor-pointer ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />

              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1 rounded-full">
                0
              </span>
            </motion.div>

            {/* Login */}

            {/* Divider */}
            <div className="h-6 w-px bg-white/30"></div>

            {/* Menu */}
            <motion.button whileHover={{ rotate: 90 }} className="text-white">
              <Menu size={22} />
            </motion.button>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden flex flex-col justify-center items-start gap-[6px] cursor-pointer"
          >
            <span
              className={`block h-[2px] w-[34px] rounded-[6px] ${
                scrolled ? "bg-black" : "bg-white"
              }`}
            ></span>
            <span
              className={`block h-[2px] w-[34px] rounded-[6px] ${
                scrolled ? "bg-black" : "bg-white"
              }`}
            ></span>
            <span
              className={`block h-[2px] w-[34px] rounded-[6px] ${
                scrolled ? "bg-black" : "bg-white"
              }`}
            ></span>
          </motion.button>
        </div>
      </div>
      <ResponsiveHeader isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </motion.header>
  );
};

export default Header;
