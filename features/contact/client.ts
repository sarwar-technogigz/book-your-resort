import {
  ContactEnquiryApiSuccess,
  ContactEnquiryPayload,
} from "@/features/contact/schema";
import { fetchJson } from "@/lib/http/client";

export async function createEnquiry(
  payload: ContactEnquiryPayload
): Promise<ContactEnquiryApiSuccess> {
  return fetchJson<ContactEnquiryApiSuccess>("/api/enquiries", {
    method: "POST",
    body: JSON.stringify(payload),
    cache: "no-store",
  });
}
