"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";
import Link from "next/link";

function Info() {
  return (
    <div className="space-y-8 relative my-20 p-6 md:px-12 bg-[#f6f6f6] overflow-hidden max-w-7xl mx-auto">
      {/* 🔹 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
          Need help with your online booking,
          <br />
          have a question or need more information?
          <br />
          Just drop us a line!
        </h3>
      </motion.div>

      {/* 🔹 Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-600"
      >
        For inquiries, bookings, or personalized assistance, please reach out to
        us. Our team is here to help ensure your stay is exceptional.
      </motion.p>

      {/* 🔹 Info Items */}
      <div className="space-y-6">

        {/* Location */}
        <InfoItem
          icon={<MapPin />}
          title="Our Location"
          desc="Corbett Vanvaas Resort, Village Amgarhi, Ramnagar, Uttarakhand - 244715"
        />

        {/* Contact */}
        <InfoItem
          icon={<Phone />}
          title="Reservations"
          desc={
            <>
              Phone:{" "}
              <a
                href="tel:+919899954108"
                className="hover:text-purple-600"
              >
                +91-9899954108
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:info@corbettvanvaas.com"
                className="hover:text-purple-600"
              >
                info@corbettvanvaas.com
              </a>
            </>
          }
        />

        {/* Social */}
        <InfoItem
          icon={<Share2 />}
          title="Social Network"
          desc="Stay in touch and follow us on social media"
          extra={
            <div className="flex gap-3 mt-3">
              <Link
                href="https://facebook.com/corbettvanvaas"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-600 hover:text-white transition"
              >
                f
              </Link>

              <Link
                href="https://instagram.com/corbettvanvaas"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-600 hover:text-white transition"
              >
                i
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Info;

/* 🔥 Reusable Item */
function InfoItem({
  icon,
  title,
  desc,
  extra,
}: {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
  extra?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex gap-4 items-start"
    >
      {/* Icon */}
      <div className="min-w-[45px] h-[45px] flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <div className="text-gray-600 text-sm mt-1 leading-relaxed">
          {desc}
        </div>

        {extra}
      </div>
    </motion.div>
  );
}