import { z } from "zod";

export const ContactEnquiryPayloadSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required."),
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10,15}$/, "Phone number must be 10 to 15 digits."),
  subject: z.string().trim().min(3, "Subject is required."),
  message: z.string().trim().min(5, "Message is required."),
  userId: z.string().trim().nullable().optional(),
});

export type ContactEnquiryPayload = z.infer<typeof ContactEnquiryPayloadSchema>;

export type ContactEnquiryApiSuccess = {
  message: string;
  data?: unknown;
};
