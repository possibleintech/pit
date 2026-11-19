export function HomePrinciplesSkeleton() {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-[#E8E8ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-6 w-32 bg-[#FCEAF4] rounded-full mb-4 animate-pulse" />
        <div className="h-10 w-96 bg-slate-100 rounded-xl mb-4 animate-pulse" />
        <div className="h-4 w-80 bg-slate-100 rounded-lg mb-10 animate-pulse" />
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-24 bg-[#F7F7FA] border border-[#E8E8ED] rounded-2xl animate-pulse" />
            ))}
          </div>
          <div className="lg:col-span-7 h-64 bg-white border border-[#E8E8ED] rounded-2xl animate-pulse" />
        </div>
      </div>
    </section>
  );
}
