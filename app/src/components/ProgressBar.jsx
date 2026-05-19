export default function ProgressBar({ value = 0, label }) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-1">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#5c7a5c] font-bold">
          CUESTIONARIO
        </span>
      </div>
      {label && (
        <p className="text-xl md:text-2xl font-black italic tracking-tight text-white uppercase mb-3 leading-none">
          {label}
        </p>
      )}
      <div className="flex justify-end mb-1">
        <span className="text-[11px] font-black italic text-[#7aa37a] tracking-wider tabular-nums px-2.5 py-0.5 rounded-md bg-[#5c7a5c]/15 border border-[#5c7a5c]/25">
          {value}%
        </span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#3f5a3f] via-[#7aa37a] to-[#9ec99e] shadow-[0_0_15px_rgba(122,163,122,0.5)] transition-all duration-700 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
