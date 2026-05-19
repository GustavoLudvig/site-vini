export default function MilitaryBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5c7a5c]/10 rounded-full border border-[#5c7a5c]/20 backdrop-blur-sm">
      <span className="w-2 h-2 rounded-full bg-[#5c7a5c] animate-pulse shadow-[0_0_10px_#5c7a5c]" />
      <span className="text-[10px] uppercase tracking-widest text-[#5c7a5c] font-bold">
        {children}
      </span>
    </div>
  );
}
