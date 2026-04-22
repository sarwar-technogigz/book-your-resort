"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import BookingForm from "@/components/booking/BookingForm";

type RoomCardProps = {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  badgeText?: string;
  title: string;
  locationText: string;
  durationText: string;
  price: number;
  oldPrice?: number;
  priceSuffix?: string;
  reviewsText: string;
  onWishlistClick?: () => void;
};

function StarIcon() {
  return (
    <svg
      className="h-[14px] w-[14px] text-amber-500"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.75l2.86 6.02 6.64.96-4.8 4.68 1.13 6.61L12 18.9l-5.83 3.12 1.13-6.61-4.8-4.68 6.64-.96L12 2.75z" />
    </svg>
  );
}

export default function RoomCard({
  href,
  imageSrc,
  imageAlt = "listing",
  badgeText,
  title,
  locationText,
  durationText,
  price,
  oldPrice,
  priceSuffix = "",
  reviewsText,
  onWishlistClick,
}: RoomCardProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded border border-[#e6e6e6] bg-white shadow-sm hover:shadow-xl transition-all"
      >
        {/* 🔥 Image */}
        <div className="group relative overflow-hidden rounded h-[200px]">
          <Link href={href}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="h-full w-full"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </motion.div>

            {badgeText && (
              <span className="absolute left-0 top-[17px] z-[2] px-[14px] py-[6px] text-[12px] font-semibold text-white [clip-path:polygon(0_0,92%_0,100%_50%,92%_100%,0_100%)] bg-gradient-to-r from-green-700 to-green-400">
                {badgeText}
              </span>
            )}
          </Link>

          {/* ❤️ Wishlist */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-[20px] top-[18px] z-[3] grid h-[32px] w-[32px] place-items-center rounded-full bg-white"
            onClick={onWishlistClick}
          >
            ❤️
          </motion.button>

          {/* 🔥 Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/30"
          />
        </div>

        {/* 🔥 Content */}
        <div className="px-[20px] py-[14px]">
          <motion.h4
            whileHover={{ x: 5 }}
            className="mb-[10px] text-[18px] font-bold text-slate-900"
          >
            <Link href={href}>{title}</Link>
          </motion.h4>
          <div className="flex items-center justify-between text-[13px] text-gray-500 gap-2 overflow-hidden">
            {/* Sliding text */}
            <div className="overflow-hidden w-full">
              <div className="animate-marquee whitespace-nowrap">
                {locationText}
              </div>
            </div>

            {/* Fixed duration */}
            <span className="whitespace-nowrap ml-2">{durationText}</span>
          </div>
        </div>

        {/* 🔥 Footer */}
        <div className="flex items-center justify-between px-[16px] pb-[14px]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r bg-[#ddb580] text-white px-3 py-2 rounded"
          >
            {oldPrice && (
              <span className="line-through opacity-70 mr-2">₹{oldPrice}</span>
            )}
            <span className="font-bold">₹{price}</span>
            <span className="text-xs ml-1">{priceSuffix}</span>
          </motion.div>

          <div className="flex items-center gap-1 text-sm">
            <StarIcon />
            {reviewsText}
          </div>
        </div>

        <div className="px-[20px] pb-[14px] w-full">
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="
            block w-full rounded-full bg-[#ddb580] px-6 py-2 text-center font-semibold text-black
            shadow-md transition-all duration-300 ease-in-out hover:bg-[#cfa46d] hover:shadow-lg active:scale-95
            cursor-pointer
          "
          >
            Book Room
          </button>
        </div>
      </motion.div>

      <BookingForm
        roomType={title}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
