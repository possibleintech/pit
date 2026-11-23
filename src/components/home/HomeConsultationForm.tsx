"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Loader2, MessageCircle } from "lucide-react";
import { PROJECT_TYPES, CONTACT } from "@/lib/constants";
import { ConsultationFormField } from "@/components/home/ConsultationFormField";
import { ConsultationStepIndicator } from "@/components/home/ConsultationStepIndicator";
import { ConsultationSidebar } from "@/components/home/ConsultationSidebar";
import { PitBotFormCelebration } from "@/components/pitbot";
import { trackEvent } from "@/lib/analytics";

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
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    if (!type) return;
    const match = PROJECT_TYPES.find((item) => item.toLowerCase() === type.toLowerCase());
    if (match) {
      setForm((prev) => ({ ...prev, projectType: match }));
      setStep(1);
    }
  }, []);

  const update = (field: keyof FormData, value: string) => {
    if (!started) {
      setStarted(true);
      trackEvent("consultation_start", { field });
    }
    setForm((prev) => ({ ...prev, [field]: value }));
  };

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
      trackEvent("consultation_submit", { projectType: form.projectType });
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="section-shell bg-white">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <PitBotFormCelebration fullName={form.fullName} />
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { source: "consultation_success" })}
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            <MessageCircle size={14} />
            Prefer WhatsApp? Message us now
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell scroll-mt-24 bg-pit-grey" id="consultation">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <ConsultationSidebar />

        <div className="border border-pit bg-white p-6 sm:p-8 lg:col-span-7">
          <ConsultationStepIndicator step={step} onStepClick={setStep} />

          {step === 0 && (
            <div className="space-y-5">
              <ConsultationFormField
                label="Your full name *"
                value={form.fullName}
                onChange={(value) => update("fullName", value)}
                placeholder="e.g. Alex Johnson"
              />
              <ConsultationFormField
                label="Company / brand"
                value={form.company}
                onChange={(value) => update("company", value)}
                placeholder="e.g. Possible Enterprises"
              />
              <ConsultationFormField
                label="Email address *"
                type="email"
                value={form.workEmail}
                onChange={(value) => update("workEmail", value)}
                placeholder="e.g. alex@company.com"
              />
              <button
                type="button"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 text-sm disabled:opacity-50"
                onClick={() => setStep(1)}
                disabled={!form.fullName || !form.workEmail}
              >
                Continue <ArrowRight size={16} />
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => update("projectType", type)}
                    className={`border px-4 py-3 text-left text-sm transition-colors ${
                      form.projectType === type
                        ? "border-magenta bg-soft-pink text-magenta font-bold"
                        : "border-pit bg-pit-grey text-navy hover:border-magenta/40"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(0)} className="btn-outline text-sm">
                  Back
                </button>
                <button
                  type="button"
                  className="btn-primary inline-flex flex-1 items-center justify-center gap-2 text-sm disabled:opacity-50"
                  onClick={() => setStep(2)}
                  disabled={!form.projectType}
                >
                  Continue <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <textarea
                className="w-full resize-none border border-pit px-4 py-3 text-sm text-navy focus:border-magenta focus:outline-none"
                rows={5}
                placeholder="Describe goals, timeline, and anything we should know..."
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
              />
              {error ? <p className="text-xs text-red-600">{error}</p> : null}
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="btn-outline text-sm">
                  Back
                </button>
                <button
                  type="button"
                  className="btn-primary inline-flex flex-1 items-center justify-center gap-2 text-sm disabled:opacity-60"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Submit request <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
