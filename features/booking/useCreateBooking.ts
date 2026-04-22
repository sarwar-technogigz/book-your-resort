"use client";

import { useCallback, useState } from "react";
import { createBooking } from "@/features/booking/client";
import { BookingPayload } from "@/features/booking/schema";

type CreateBookingState = {
  isSubmitting: boolean;
  error: string | null;
};

const initialState: CreateBookingState = {
  isSubmitting: false,
  error: null,
};

export function useCreateBooking() {
  const [state, setState] = useState<CreateBookingState>(initialState);

  const submitBooking = useCallback(async (payload: BookingPayload) => {
    setState({ isSubmitting: true, error: null });

    try {
      const result = await createBooking(payload);
      setState({ isSubmitting: false, error: null });
      return result;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to submit booking request.";
      setState({ isSubmitting: false, error: message });
      throw error;
    }
  }, []);

  const resetError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    submitBooking,
    resetError,
  };
}
