"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// 🔥 Variants
const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-[#0b4d3b] text-white pt-16 pb-10 px-6 md:px-12 relative"
    >
      {/* 🔹 Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* 🔹 Logo + Social */}
        <motion.div variants={item}>
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-semibold tracking-wide mb-4"
          >
            CORBETT <br /> Vanvaas
          </motion.h2>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="border border-white/30 p-2 rounded-full hover:bg-white hover:text-black transition"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="border border-white/30 p-2 rounded-full hover:bg-white hover:text-black transition"
            />
          </div>
        </motion.div>

        {/* 🔹 Contact */}
        <motion.div variants={item}>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <p className="text-sm text-white/80 leading-7">
            Corbett Vanvaas Resort, Village Amgarhi, Ramnagar, Uttarakhand -
            244715
          </p>

          <p className="mt-4 text-sm text-white/80">+91-9899954108</p>

          <p className="mt-4 text-sm text-white/80">www.corbettvanvaas.com</p>

          <p className="text-sm text-white/80">info@corbettvanvaas.com</p>
        </motion.div>

        {/* 🔹 Quick Links */}
        <motion.div variants={item}>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm text-white/80">
            {[
              { name: "Home", href: "/" },
              { name: "Our Rooms", href: "/rooms" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "Policies & Important Pointers", href: "/policies" },
            ].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                className="cursor-pointer"
              >
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 🔹 Payment Methods */}
        <motion.div variants={item}>
          <h3 className="text-xl font-semibold mb-4">Payment methods</h3>

          <p className="text-sm text-white/80 leading-7 mb-6">
            Pay any way you choose, no matter Whether it’s cash or card, we
            support all of those payment options.
          </p>

          {/* Payment Buttons */}
          <div className="flex gap-3">
            {["VISA", "PayPal", "MasterCard"].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-white/20 px-4 py-2 rounded text-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🔹 Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/60"
      >
        © {new Date().getFullYear()} Corbett Vanvaas. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
