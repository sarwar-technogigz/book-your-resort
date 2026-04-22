import CommonBanner from "@/common/CommonBanner";
import RoomCard from "@/components/rooms/RoomCard";
import RoomTab from "@/components/rooms/RoomTab";
import { TOUR_PACKAGES } from "@/constants/tours";

export default function RoomsPage() {
  return (
    <>
      <CommonBanner
        title="Our Rooms"
        image="/images/pool.jpg"
        breadcrumbs={["Home", "Rooms"]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <RoomTab />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOUR_PACKAGES.map((room) => (
            <RoomCard
              key={room.id}
              href={`/details/${room.id}`}
              imageSrc={room.imageSrc}
              badgeText={room.badgeText}
              title={room.title}
              locationText={room.locationText}
              durationText={room.durationText}
              price={room.price}
              oldPrice={room.oldPrice}
              reviewsText={room.reviewsText}
            />
          ))}
        </div>
      </section>
    </>
  );
}
