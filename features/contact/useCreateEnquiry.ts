"use client";

import { useCallback, useState } from "react";
import { createEnquiry } from "@/features/contact/client";
import { ContactEnquiryPayload } from "@/features/contact/schema";

type CreateEnquiryState = {
  isSubmitting: boolean;
  error: string | null;
};

const initialState: CreateEnquiryState = {
  isSubmitting: false,
  error: null,
};

export function useCreateEnquiry() {
  const [state, setState] = useState<CreateEnquiryState>(initialState);

  const submitEnquiry = useCallback(async (payload: ContactEnquiryPayload) => {
    setState({ isSubmitting: true, error: null });

    try {
      const result = await createEnquiry(payload);
      setState({ isSubmitting: false, error: null });
      return result;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to submit contact enquiry.";
      setState({ isSubmitting: false, error: message });
      throw error;
    }
  }, []);

  return {
    ...state,
    submitEnquiry,
  };
}
