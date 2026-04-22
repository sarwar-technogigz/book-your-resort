"use client";

import { TOUR_PACKAGES } from "@/constants/tours";
import RoomCard from "@/components/rooms/RoomCard";
import RoomTabs from "../rooms/RoomTab";

export default function Packages() {
  return (
    <section className="py-14 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto">
             {/* 🔹 Heading */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-wide text-gray-500 mb-2">
            Most Popular Tour Packages
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Something Amazing Waiting For you
          </h2>
        </div>
        <RoomTabs />
        {/* 🔹 Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOUR_PACKAGES.map((tour) => (
            <RoomCard
              key={tour.id}
              href={`/details/${tour.id}`}
              imageSrc={tour.imageSrc}
              badgeText={tour.badgeText}
              title={tour.title}
              locationText={tour.locationText}
              durationText={tour.durationText}
              price={tour.price}
              oldPrice={tour.oldPrice}
              reviewsText={tour.reviewsText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
