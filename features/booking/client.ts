import { BookingApiSuccess, BookingPayload } from "@/features/booking/schema";
import { fetchJson } from "@/lib/http/client";

export async function createBooking(payload: BookingPayload): Promise<BookingApiSuccess> {
  return fetchJson<BookingApiSuccess>("/api/bookings", {
    method: "POST",
    body: JSON.stringify(payload),
    cache: "no-store",
  });
}
