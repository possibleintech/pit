"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Sparkles, MessageCircle, Phone, MapPin } from "lucide-react";
import { PROJECT_TYPES, CONTACT, SITE } from "@/lib/constants";
import { FRAMER_VIEWPORT } from "@/lib/constants/animations";
import { ConsultationFormField } from "@/components/home/ConsultationFormField";
import { ConsultationStepIndicator } from "@/components/home/ConsultationStepIndicator";
import { PitBot, PitBotFormCelebration } from "@/components/pitbot";

type FormData = {
  fullName: string;
  company: string;
  workEmail: string;
  projectType: string;
  message: string;
};

const INITIAL: FormData = {
  fullName: "",
  company: "",
  workEmail: "",
  projectType: "",
  message: "",
};

export function HomeConsultationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-white py-16 sm:py-24 border-b border-[#E8E8ED]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <PitBotFormCelebration fullName={form.fullName} />

          <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-[#F7F7FA] border border-[#E8E8ED]">
            <span className="text-xs text-[#53596A]">Need an immediate answer?</span>
            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E20A96] hover:underline"
            >
              <MessageCircle size={14} />
              <span>Chat on WhatsApp ({CONTACT.phone})</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F7F7FA] py-14 sm:py-20 lg:py-24 border-b border-[#E8E8ED] relative" id="consultation">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232, 232, 237, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start min-w-0">
          {/* Left Column: Information & Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FRAMER_VIEWPORT}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 min-w-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles size={13} />
              <span>Let&apos;s Connect</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#292D3D] leading-tight tracking-tight mb-4">
              Ready to Build <span className="text-[#E20A96]">Something Amazing?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#53596A] leading-relaxed mb-6">
              Tell us about your digital goals. We&apos;ll schedule a free technical strategy session and share a clear scope and roadmap within 24 hours.
            </p>

            {/* Interactive Pointing PIT BOT Guide Card */}
            <div className="relative mb-8 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#FCEAF4]/90 via-[#FCEAF4]/50 to-white border border-[#E20A96]/20 shadow-xs flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center">
                <PitBot
                  image="/assets/pit-bot/pit-bot-pointing.webp"
                  alt="PIT BOT pointing to consultation form"
                  size="custom"
                  width={96}
                  height={96}
                  animation="float"
                  className="w-20 h-20 sm:w-24 sm:h-24"
                />
              </div>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E20A96] text-white text-[10px] font-bold uppercase tracking-wider mb-1">
                  <span>PIT BOT Recommends</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#292D3D] leading-snug">
                  Fill out the quick form or message us directly on WhatsApp — our engineers respond within a few hours!
                </p>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 mb-8">
              <div className="bg-white border border-[#E8E8ED] rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#53596A]">WhatsApp & Call</p>
                    <p className="text-sm font-bold text-[#292D3D]">{CONTACT.phone}</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#E20A96] text-white text-xs font-bold hover:bg-[#C40882] transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              <div className="bg-white border border-[#E8E8ED] rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#53596A]">Direct Phone Line</p>
                    <p className="text-sm font-bold text-[#292D3D]">{CONTACT.secondaryPhone}</p>
                  </div>
                </div>
                <a
                  href={`tel:${CONTACT.secondaryPhone.replace(/[^0-9+]/g, "")}`}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#E8E8ED] text-[#292D3D] text-xs font-bold hover:border-[#E20A96] hover:text-[#E20A96] transition-colors"
                >
                  Call Now
                </a>
              </div>

              <div className="bg-white border border-[#E8E8ED] rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#53596A]">Location</p>
                  <p className="text-sm font-bold text-[#292D3D]">{CONTACT.location}</p>
                </div>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="space-y-2.5 pt-4 border-t border-[#E8E8ED]">
              {[
                "100% Free Consultation & Strategy Session",
                "Direct Communication with Senior Engineers",
                "Non-Disclosure & Data Security Guaranteed",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-[#53596A]">
                  <CheckCircle2 size={15} className="text-[#E20A96] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Multi-Step Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FRAMER_VIEWPORT}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-[#E8E8ED] rounded-3xl p-6 sm:p-9 shadow-[0_12px_40px_rgba(41,45,61,0.06)] min-w-0"
          >
            <ConsultationStepIndicator step={step} onStepClick={setStep} />

            {/* Step 0: About You */}
            {step === 0 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-[#292D3D] mb-1">Tell us about yourself</h3>
                  <p className="text-xs text-[#53596A]">We&apos;ll use this to personalize our consultation recommendations.</p>
                </div>

                <ConsultationFormField
                  label="Your Full Name *"
                  value={form.fullName}
                  onChange={(v) => update("fullName", v)}
                  placeholder="e.g. Alex Johnson"
                />
                <ConsultationFormField
                  label="Company / Brand Name"
                  value={form.company}
                  onChange={(v) => update("company", v)}
                  placeholder="e.g. Possible Enterprises"
                />
                <ConsultationFormField
                  label="Email Address *"
                  type="email"
                  value={form.workEmail}
                  onChange={(v) => update("workEmail", v)}
                  placeholder="e.g. alex@company.com"
                />

                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E20A96] hover:bg-[#C40882] text-white font-bold py-3.5 px-6 rounded-full shadow-[0_4px_14px_rgba(226,10,150,0.26)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    onClick={() => setStep(1)}
                    disabled={!form.fullName || !form.workEmail}
                  >
                    <span>Continue to Project Scope</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 1: Project Scope */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-[#292D3D] mb-1">What can we help you build?</h3>
                  <p className="text-xs text-[#53596A]">Select the primary digital solution that matches your requirement.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = form.projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => update("projectType", type)}
                        className={`text-left text-xs sm:text-sm px-4 py-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "border-[#E20A96] bg-[#FCEAF4] text-[#E20A96] font-bold shadow-xs"
                            : "border-[#E8E8ED] bg-[#F7F7FA] text-[#292D3D] hover:border-[#E20A96]/40 hover:bg-white"
                        }`}
                      >
                        <span>{type}</span>
                        {isSelected && <CheckCircle2 size={15} className="text-[#E20A96] shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="px-5 py-3 rounded-full border border-[#E8E8ED] text-[#292D3D] hover:bg-[#F7F7FA] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E20A96] hover:bg-[#C40882] text-white font-bold py-3.5 px-6 rounded-full shadow-[0_4px_14px_rgba(226,10,150,0.26)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    onClick={() => setStep(2)}
                    disabled={!form.projectType}
                  >
                    <span>Continue to Project Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-[#292D3D] mb-1">Tell us about your project</h3>
                  <p className="text-xs text-[#53596A]">Include any deadlines, current challenges, or specific features you need.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#292D3D] mb-1.5">
                    Project Overview & Goals
                  </label>
                  <textarea
                    autoComplete="off"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    data-np-autofill-ignore="true"
                    className="w-full bg-white border border-[#E8E8ED] rounded-2xl px-4 py-3 text-sm text-[#292D3D] placeholder:text-slate-400 focus:outline-none focus:border-[#E20A96] focus:ring-3 focus:ring-[#E20A96]/15 resize-none transition-all"
                    rows={5}
                    placeholder="Describe your vision, target audience, preferred timeline, or any reference websites you admire..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-3 rounded-full border border-[#E8E8ED] text-[#292D3D] hover:bg-[#F7F7FA] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E20A96] hover:bg-[#C40882] text-white font-bold py-3.5 px-6 rounded-full shadow-[0_4px_14px_rgba(226,10,150,0.26)] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending Request…</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
