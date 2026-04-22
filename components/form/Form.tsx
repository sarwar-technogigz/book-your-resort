"use client";

import { FC, ReactNode, FormEvent } from "react";

interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className?: string;
  resetOnSubmit?: boolean; // optional 🔥
}

const Form: FC<FormProps> = ({
  onSubmit,
  children,
  className = "",
  resetOnSubmit = false,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // ❌ default reload stop
    onSubmit(event);

    // 🔥 optional reset
    if (resetOnSubmit) {
      (event.target as HTMLFormElement).reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      {children}
    </form>
  );
};

export default Form;
