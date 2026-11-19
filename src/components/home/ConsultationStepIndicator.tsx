import { CONSULTATION_STEPS } from "@/lib/constants";

type Props = {
  step: number;
  onStepClick: (index: number) => void;
};

export function ConsultationStepIndicator({ step, onStepClick }: Props) {
  return (
    <>
      <div className="sm:hidden mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-[#53596A] uppercase tracking-wide">
            Step {step + 1} of {CONSULTATION_STEPS.length}
          </span>
          <span className="text-xs font-bold text-[#E20A96]">{CONSULTATION_STEPS[step]}</span>
        </div>
        <div className="flex gap-1.5">
          {CONSULTATION_STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= step ? "bg-[#E20A96]" : "bg-[#E8E8ED]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="hidden sm:flex flex-wrap items-center gap-2 mb-8">
        {CONSULTATION_STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => i < step && onStepClick(i)}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all ${
                i === step
                  ? "bg-[#E20A96] text-white shadow-xs"
                  : i < step
                  ? "bg-[#FCEAF4] text-[#E20A96] cursor-pointer hover:bg-[#E20A96] hover:text-white"
                  : "bg-[#F7F7FA] text-[#53596A] border border-[#E8E8ED]"
              }`}
            >
              {i + 1}. {label}
            </button>
            {i < CONSULTATION_STEPS.length - 1 && (
              <div className={`h-px w-5 lg:w-8 ${i < step ? "bg-[#E20A96]" : "bg-[#E8E8ED]"}`} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
