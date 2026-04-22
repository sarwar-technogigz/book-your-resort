"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownProps = {
  items: DropdownItem[];
  isOpen: boolean;
};

export default function Dropdown({ items, isOpen }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="absolute top-full left-0 mt-3 w-[190px] bg-[#e9e9e9] rounded shadow-lg py-4 z-50"
        >
          <ul className="flex flex-col">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="block px-6 py-3 text-sm text-gray-800 hover:bg-white hover:text-black transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}