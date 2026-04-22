"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  hint?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  placeholder = "Enter your message...",
  rows = 4,
  value = "",
  onChange,
  className = "",
  disabled = false,
  error = false,
  success = false,
  hint,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  let wrapperClasses = `
    bg-gray-100 rounded-lg px-4 py-3 transition border border-[#ddb580]
    focus-within:border-purple-500
  `;

  if (disabled) {
    wrapperClasses += " opacity-50 cursor-not-allowed";
  } else if (error) {
    wrapperClasses += " border-red-400";
  } else if (success) {
    wrapperClasses += " border-green-400";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileFocus={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col gap-2"
    >
      {/* 🔹 Label */}
      {label && (
        <label className="text-sm text-gray-600">{label}</label>
      )}

      {/* 🔹 Textarea Box */}
      <motion.div
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        className={wrapperClasses}
      >
        <textarea
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={`w-full bg-transparent outline-none resize-none ${className}`}
        />
      </motion.div>

      {/* 🔹 Hint */}
      {hint && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-xs ${
            error
              ? "text-red-500"
              : success
              ? "text-green-500"
              : "text-gray-500"
          }`}
        >
          {hint}
        </motion.p>
      )}
    </motion.div>
  );
};

export default TextArea;