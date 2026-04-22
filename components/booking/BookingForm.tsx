"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Form from "@/components/form/Form";
import InputField from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import { showError, showSuccess } from "../ui/alert/Alert";
import { useCreateBooking } from "@/features/booking/useCreateBooking";
import { BookingPayloadSchema } from "@/features/booking/schema";

type BookingFormProps = {
  roomType: string;
  isOpen: boolean;
  onClose: () => void;
};

type BookingState = {
  fullName: string;
  mobileNumber: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  children: string;
  message: string;
};

const initialFormState: BookingState = {
  fullName: "",
  mobileNumber: "",
  checkIn: "",
  checkOut: "",
  guests: "",
  children: "",
  message: "",
};

export default function BookingForm({ roomType, isOpen, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingState>(initialFormState);
  const { isSubmitting, submitBooking } = useCreateBooking();

  if (!isOpen) return null;

  const handleInputChange = (field: keyof BookingState) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      ...formData,
      guests: Number(formData.guests),
      children: Number(formData.children),
      message: formData.message.trim(),
    };

    const parsed = BookingPayloadSchema.safeParse(payload);
    if (!parsed.success) {
      const firstError =
        Object.values(parsed.error.flatten().fieldErrors).flat().filter(Boolean)[0] ||
        "Please check your booking details.";
      showError(firstError);
      return;
    }

    try {
      const response = await submitBooking(parsed.data);
      showSuccess(response.message || "Booking confirmed successfully!");
      setFormData(initialFormState);
      onClose();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Booking request failed.";
      showError(message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-2xl rounded-2xl border border-[#e8dcc9] bg-white p-5 shadow-2xl md:p-7"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8b6c3f]">
              Book Your Stay
            </p>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">{roomType}</h2>
            <p className="mt-1 text-sm text-gray-500">
              Fill in your details and we will contact you shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600 transition hover:bg-gray-100"
          >
            Close
          </button>
        </div>

        <Form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleInputChange("fullName")}
            />
            <InputField
              label="Mobile Number"
              name="mobileNumber"
              placeholder="Enter mobile number"
              value={formData.mobileNumber}
              onChange={handleInputChange("mobileNumber")}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              type="date"
              label="Check-in Date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange("checkIn")}
            />
            <InputField
              type="date"
              label="Check-out Date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange("checkOut")}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              type="number"
              label="Guests"
              name="guests"
              placeholder="e.g. 2"
              min="1"
              value={formData.guests}
              onChange={handleInputChange("guests")}
            />
            <InputField
              type="number"
              label="Children"
              name="children"
              placeholder="e.g. 1"
              min="0"
              value={formData.children}
              onChange={handleInputChange("children")}
            />
          </div>

          <TextArea
            label="Message"
            placeholder="Write your request or special notes"
            value={formData.message}
            onChange={(value) => setFormData((prev) => ({ ...prev, message: value }))}
          />

          <div className="flex justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-[#ddb580] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#cfa46d]"
            >
              {isSubmitting ? "Submitting..." : "Confirm Booking"}
            </button>
          </div>
        </Form>
      </motion.div>
    </div>
  );
}
