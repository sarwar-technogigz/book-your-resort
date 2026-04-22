import { NextRequest, NextResponse } from "next/server";
import { ContactEnquiryPayloadSchema } from "@/features/contact/schema";
import { ApiError, fetchJson } from "@/lib/http/client";

const API_BASE_URL = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL;

export async function POST(request: NextRequest) {
  if (!API_BASE_URL) {
    return NextResponse.json(
      { error: "API base URL is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const parsed = ContactEnquiryPayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const response = await fetchJson<{ message?: string; data?: unknown }>(
      `${API_BASE_URL}/enquiries`,
      {
        method: "POST",
        body: JSON.stringify(parsed.data),
        cache: "no-store",
      }
    );

    return NextResponse.json(
      {
        message: response.message || "Enquiry submitted successfully.",
        data: response.data,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    return NextResponse.json({ error: "Unable to submit enquiry." }, { status: 500 });
  }
}
