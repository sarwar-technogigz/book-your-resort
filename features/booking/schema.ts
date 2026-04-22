import { z } from "zod";

const bookingNumberField = (min: number) =>
  z.coerce
    .number({
      error: "Please provide a valid number.",
    })
    .int("Value must be a whole number.")
    .min(min, `Value must be at least ${min}.`);

export const BookingPayloadSchema = z
  .object({
    fullName: z.string().trim().min(2, "Full name is required."),
    mobileNumber: z
      .string()
      .trim()
      .regex(/^\d{10,15}$/, "Mobile number must be 10 to 15 digits."),
    checkIn: z.iso.date("Check-in date must be valid."),
    checkOut: z.iso.date("Check-out date must be valid."),
    guests: bookingNumberField(1),
    children: bookingNumberField(0),
    message: z.string().trim().min(3, "Message is required."),
  })
  .refine(
    (value) => new Date(value.checkOut).getTime() > new Date(value.checkIn).getTime(),
    {
      message: "Check-out date must be after check-in date.",
      path: ["checkOut"],
    }
  );

export type BookingPayload = z.infer<typeof BookingPayloadSchema>;

export type BookingApiSuccess = {
  message: string;
  data?: unknown;
};
