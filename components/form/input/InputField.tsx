"use client";

import { motion } from "framer-motion";
import type React from "react";

interface InputFieldProps {
  type?: "text" | "number" | "email" | "password" | "date" | "time" | "tel";
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
  step?: number;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hint?: string;
  className?: string;
}

export default function InputField({
  type = "text",
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  min,
  max,
  step,
  disabled = false,
  success = false,
  error = false,
  hint,
  className = "",
}: InputFieldProps) {
  // 🔥 Dynamic styles (same as your reference logic)
  let wrapperClasses = `bg-gray-100 rounded-lg px-4 h-[52px] flex items-center transition border`;

  if (disabled) {
    wrapperClasses += " opacity-50 cursor-not-allowed";
  } else if (error) {
    wrapperClasses += " border-red-500";
  } else if (success) {
    wrapperClasses += " border-green-500";
  } else {
    wrapperClasses += " border-[#ddb580] focus-within:border-purple-500";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col gap-2 ${className}`}
    >
      {/* 🔹 Label */}
      {label && <label className="text-sm text-gray-600">{label}</label>}

      {/* 🔹 Input Box (same as InputBox UI) */}
      <div className={wrapperClasses}>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className="w-full bg-transparent outline-none text-sm text-gray-800"
        />
      </div>

      {/* 🔹 Hint / Error */}
      {hint && (
        <p
          className={`text-xs ${
            error
              ? "text-red-500"
              : success
                ? "text-green-500"
                : "text-gray-500"
          }`}
        >
          {hint}
        </p>
      )}
    </motion.div>
  );
}
