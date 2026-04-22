"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOUR_PACKAGES } from "@/constants/tours";
import CommonBanner from "@/common/CommonBanner";
import { motion } from "framer-motion";
import ResortAbout from "@/components/detailsRoom/ResortAbout";
import RoomFeatures from "@/components/detailsRoom/RoomFeatures";
import Amenities from "@/components/detailsRoom/Amenities";

type DetailPageProps = {
  params: Promise<{ id: string }>;
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

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <motion.div variants={fadeUp} className="flex items-center gap-3">
      <span className="grid h-8 w-8 place-items-center rounded bg-[#f3eefb] text-purple-700 text-xs">
        ●
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-wider text-gray-500">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </motion.div>
  );
}

export default async function DetailsPage({ params }: DetailPageProps) {
  const { id } = await params;
  const tour = TOUR_PACKAGES.find((item) => item.id === id);

  if (!tour) notFound();

  const href = "/booking";

  return (
    <>
      <CommonBanner
        title={tour.title}
        image="/images/contac-us.jpg"
        breadcrumbs={["Home", "Your Grid", tour.title]}
        height="h-[30vh]"
      />

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-6 md:py-10"
      >
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          {/* Breadcrumb */}
          <motion.div
            variants={fadeUp}
            className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-600"
          >
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>›</span>
            <Link href="/" className="hover:text-gray-900">
              Your Grid
            </Link>
            <span>›</span>
            <span className="text-purple-700">{tour.title}</span>
          </motion.div>

          {/* Title Section */}
          <motion.div
            variants={fadeUp}
            className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between"
          >
            <div>
              <h1 className="text-2xl md:text-[40px] font-bold leading-tight text-[#111]">
                {tour.title}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span>{tour.locationText}</span>
                <div className="flex items-center gap-1 text-amber-500">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <span>{tour.reviewsText}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-700">
              <button type="button" className="hover:text-gray-900">
                Share
              </button>
              <button type="button" className="hover:text-gray-900">
                Add To Wishlist
              </button>
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-4 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={tour.gallery.main}
                  alt={tour.title}
                  width={900}
                  height={650}
                  className="h-[260px] w-full object-cover md:h-[360px] lg:h-[430px]"
                  priority
                />
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={tour.gallery.topRight}
                  alt={`${tour.title} preview`}
                  width={600}
                  height={280}
                  className="h-[160px] w-full object-cover md:h-[190px] lg:h-[205px]"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-black shadow-md"
                >
                  ▶
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={tour.gallery.bottomLeft}
                    alt={`${tour.title} angle one`}
                    width={280}
                    height={220}
                    className="h-[130px] w-full object-cover md:h-[160px] lg:h-[210px]"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={tour.gallery.bottomRight}
                    alt={`${tour.title} angle two`}
                    width={280}
                    height={220}
                    className="h-[130px] w-full object-cover md:h-[160px] lg:h-[210px]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col pb-5 mb-10 gap-4 border-b border-gray-200 pt-5 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <StatItem label="Duration" value={tour.durationText} />
              <StatItem label="Type" value={tour.type} />
              <StatItem label="Group Size" value={tour.groupSize} />
              <StatItem label="Languages" value={tour.languages} />
            </div>

            <div className="text-left lg:text-right flex items-center justify-center gap-2">
              <p className="text-sm text-gray-500">From</p>
              <p className="text-3xl font-bold text-purple-700">
                ${tour.price.toFixed(2)}
                <span className="ml-1 text-sm font-medium text-gray-500">
                  / Person
                </span>
              </p>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            variants={fadeUp}
            className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* LEFT SIDE */}
            <div className="lg:col-span-8">
              <ResortAbout
                description={[
                  `Welcome to the epitome of opulence and comfort at our Luxury Pool Cottage, where every detail is designed for a lavish escape amidst nature. The cottage offers a stunning 18 feet by 7 feet private pool, creating your own personal oasis for relaxing swims or leisurely lounging by the water. The spacious living area invites you to unwind with a plush sofa, 43-inch smart TV, and a well-stocked minibar, ensuring entertainment and comfort are at your fingertips.`,
                  `Step into the serene master bedroom, featuring a luxurious king-size bed, promising restful nights after days spent exploring or relaxing. The villa’s expansive bathroom is equipped with modern amenities and a soothing ambiance. For an extra touch of indulgence, enjoy the shower beneath a glass roof, where you can bathe under the sky and feel at one with the natural surroundings.`,
                  `This villa is your ultimate retreat, offering an exquisite blend of privacy, luxury, and nature for an unforgettable stay at Corbett Vanvaas.`,
                ]}
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-4">
              <RoomFeatures
                price={120}
                features={[
                  { label: "Size", value: "900 ft²" },
                  { label: "Bed Type", value: "King Bed" },
                  { label: "Capacity", value: "2 Adults, 2 Children" },
                  { label: "Bathroom", value: "Spacious" },
                ]}
              />
            </div>
          </motion.div>
          <Amenities
            amenities={[
              "50-inch Smart LED TV",
              "Air-conditioning and heating",
              "Bathrobe",
              "Desk with chair",
              "Hairdryer",
              "Iron and ironing board",
              "King bed",
              "Luxury toiletries",
              "Maximum occupancy: 4",
              "Minibar",
              "Mirror",
              "Non-allergic duvet and pillows",
              "Outdoor Shower with Glass Roof",
              "Private Plunge Pool",
              "Wifi",
              "Shower",
              "Telephone support 24/7",
            ]}
            services={[
              "Breakfast 8:30am - 10:00am",
              "Wake-up call service",
              "Express check-in/check-out",
              "Luggage storage",
              "Security cameras",
              "24 hour room service",
            ]}
          />
        </div>
      </motion.section>
    </>
  );
}
