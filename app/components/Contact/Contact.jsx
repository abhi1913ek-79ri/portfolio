"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Copy, Mail, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const EMAILJS_SERVICE_ID = "service_r73av72";
  const EMAILJS_TEMPLATE_ID = "template_lg4zyda"; // <-- Put your template ID here
  const EMAILJS_PUBLIC_KEY = "NJ0uo3F6qJ5n0Vrss";

  async function onSubmit(data) {
    setSending(true);
    setStatus(null);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject || "No subject",
      message: data.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      reset();
    } catch (e) {
      console.error("EmailJS error:", e);
      setStatus("error");
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  }

  function copyEmail() {
    navigator.clipboard.writeText("ag1161534@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section
      id="contact"
      className="w-full min-h-screen px-6 md:px-20 py-20 bg-gradient-to-b from-white to-blue-50/10 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-4xl font-bold text-slate-900 text-center mb-8"
      >
        Get in <span className="text-blue-600">Touch</span>
      </motion.h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="p-6 bg-white/60 backdrop-blur-lg border border-white/60 rounded-2xl shadow-md flex flex-col gap-4"
        >
          <h3 className="text-xl font-semibold text-blue-700">Contact Info</h3>

          <p className="text-slate-700 text-sm">
            I’m open to internships, collaborations and project work.
          </p>

          <div className="flex items-center gap-3 mt-3">
            <Mail className="text-blue-600" />
            <div className="flex flex-col">
              <button
                onClick={copyEmail}
                className="text-slate-900 font-medium hover:underline text-left"
              >
                ag1161534@gmail.com
              </button>
              <span className="text-xs text-slate-500">Click to copy</span>
            </div>

            <button
              onClick={copyEmail}
              className="ml-auto px-3 py-1 rounded-lg bg-blue-600 text-white text-sm"
            >
              {copied ? "Copied" : <Copy size={14} />}
            </button>
          </div>

          <div className="mt-4 flex gap-3">
            <a href="https://github.com/yourusername" target="_blank" className="p-2 rounded-lg bg-slate-100">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="p-2 rounded-lg bg-slate-100">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* FORM CARD */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="col-span-1 md:col-span-2 bg-white/50 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-md"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input
                {...register("name", { required: true })}
                className={`mt-1 w-full px-3 py-2 rounded-lg border ${
                  errors.name ? "border-red-400" : "border-slate-200"
                }`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                className={`mt-1 w-full px-3 py-2 rounded-lg border ${
                  errors.email ? "border-red-400" : "border-slate-200"
                }`}
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mt-4">
            <label className="text-sm font-medium text-slate-700">Subject</label>
            <input
              {...register("subject")}
              className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200"
              placeholder="Short subject"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="text-sm font-medium text-slate-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows={6}
              className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Button + Status */}
          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              disabled={sending}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium shadow hover:scale-105 transition disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="text-sm text-green-600">Message sent — I will reply soon.</div>
            )}

            {status === "error" && (
              <div className="text-sm text-red-600">Failed — try again later.</div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
