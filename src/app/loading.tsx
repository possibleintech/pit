export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-[#F7F7FA]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-3 border-[#FCEAF4] border-t-[#E20A96] animate-spin" />
        <p className="text-xs font-bold uppercase tracking-wider text-[#53596A]">Possible In Tech…</p>
      </div>
    </div>
  );
}
