import Articles from "@/components/home/Articles";
import Banner from "@/components/home/Banner";
import BookingForm from "@/components/home/BookingForm";
import Gallery from "@/components/home/Gallery";
import Packages from "@/components/home/Packages";
import Restaurant from "@/components/home/Restaurant";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import Tranquility from "@/components/home/Tranquility";
import VacationIdea from "@/components/home/VacationIdea";
import RoomCard from "@/components/rooms/RoomCard";

export default function Home() {
  return (
    <>
      <Banner />
      <BookingForm />
      <Tranquility />
      <Packages />
      <Restaurant />
      <VacationIdea />
      <Articles />
      <TestimonialCarousel />
      <Gallery />
    </>
  );
}
