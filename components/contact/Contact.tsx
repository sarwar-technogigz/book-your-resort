"use client";

import { useMemo, useState } from "react";
import Form from "../form/Form";
import InputField from "../form/input/InputField";
import TextArea from "../form/input/TextArea";
import { motion } from "framer-motion"; // ✅ added
import { showError, showSuccess } from "../ui/alert/Alert";

type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactFormTouched = Partial<Record<keyof ContactFormValues, boolean>>;

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [touched, setTouched] = useState<ContactFormTouched>({});
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
  >({ type: "idle" });

  const errors = useMemo(() => {
    const next: Partial<Record<keyof ContactFormValues, string>> = {};

    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    if (!values.email.trim()) next.email = "Email address is required.";
    else if (!isValidEmail(values.email)) next.email = "Enter a valid email.";

    if (!values.subject.trim()) next.subject = "Subject is required.";
    if (!values.message.trim()) next.message = "Message is required.";

    return next;
  }, [values]);

  const hasError = (key: keyof ContactFormValues) =>
    Boolean(touched[key] && errors[key]);

  const markTouched = (key: keyof ContactFormValues) =>
    setTouched((prev) => ({ ...prev, [key]: true }));

  const handleSubmit = () => {
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (Object.keys(errors).length > 0) {
      showError("Please fix the highlighted fields.");

      setStatus({
        type: "error",
        message: "Please fix the highlighted fields.",
      });
      return;
    }
    console.log("Contact Form Data:", values);

    showSuccess("Message sent successfully!");

    setStatus({
      type: "success",
      message:
        "Thanks! Your message has been sent. We’ll get back to you soon.",
    });
    setValues(initialValues);
    setTouched({});
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto my-20 px-6 md:px-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
            Let&apos;s connect and get to know <br />
            each other
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Have a question about bookings, packages, or your stay? Send us a
            message and our team will respond as soon as possible.
          </p>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#f6f6f6] rounded-xl p-6 md:p-8"
        >
          <Form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <InputField
                  label="Full Name"
                  placeholder="Enter your full name"
                  name="fullName"
                  value={values.fullName}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  error={hasError("fullName")}
                  hint={touched.fullName ? errors.fullName : undefined}
                  className="md:col-span-1"
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <InputField
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, email: e.target.value }))
                  }
                  error={hasError("email")}
                  hint={touched.email ? errors.email : undefined}
                  className="md:col-span-1"
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <InputField
                  type="tel"
                  label="Phone Number"
                  placeholder="Enter 10 digit number"
                  name="phone"
                  value={values.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 10) {
                      setValues((prev) => ({ ...prev, phone: value }));
                    }
                  }}
                  className="md:col-span-1"
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <InputField
                  label="Subject"
                  placeholder="How can we help?"
                  name="subject"
                  value={values.subject}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  error={hasError("subject")}
                  hint={touched.subject ? errors.subject : undefined}
                  className="md:col-span-1"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TextArea
                label="Message"
                placeholder="Write your message..."
                rows={6}
                value={values.message}
                onChange={(value) =>
                  setValues((prev) => ({ ...prev, message: value }))
                }
                error={hasError("message")}
                hint={touched.message ? errors.message : undefined}
              />
            </motion.div>

            {status.type !== "idle" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-sm ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </motion.p>
            )}

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-gray-500">
                By submitting, you agree to be contacted about your inquiry.
              </p>

              {/* ✅ Button already animated (no change needed) */}
              <motion.button
                type="submit"
                onClick={() => {
                  markTouched("fullName");
                  markTouched("email");
                  markTouched("subject");
                  markTouched("message");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden px-10 py-3 bg-[#ddb580] text-white font-medium rounded flex items-center justify-center group"
              >
                <span className="absolute inset-0 bg-[#aa998a] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Send Message
                </span>
              </motion.button>
            </div>
          </Form>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
