"use client";

import { Toaster, toast, ToastOptions } from "react-hot-toast";

const defaultOptions: ToastOptions = {
  duration: 3000,
  style: {
    borderRadius: "12px",
    background: "#1f2937",
    color: "#fff",
    fontSize: "14px",
    padding: "12px 16px",
  },
};

export const Alert = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={defaultOptions}
    />
  );
};

export const showSuccess = (message: string) => {
  toast.success(message);
};

export const showError = (message: string) => {
  toast.error(message);
};

export const showLoading = (message: string) => {
  return toast.loading(message);
};

export const dismissToast = () => {
  toast.dismiss();
};
