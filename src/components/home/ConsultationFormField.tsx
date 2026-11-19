export function ConsultationFormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-[#292D3D] mb-1.5">
        {label}
      </label>
      <input
        type={type}
        autoComplete="off"
        data-lpignore="true"
        data-1p-ignore="true"
        data-np-autofill-ignore="true"
        className="w-full bg-white border border-[#E8E8ED] rounded-xl px-4 py-3 text-sm text-[#292D3D] placeholder:text-slate-400 focus:outline-none focus:border-[#E20A96] focus:ring-3 focus:ring-[#E20A96]/15 transition-all"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
