export default function ContinueButton({ onClick, disabled, children = 'Continuar' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="group relative w-full max-w-md mx-auto flex items-center justify-center gap-3 py-5 px-6 rounded-md bg-[#5c9c5c] hover:bg-[#6cb06c] disabled:bg-zinc-800 disabled:cursor-not-allowed text-white disabled:text-neutral-500 font-black text-base md:text-lg uppercase tracking-[0.25em] shadow-[0_0_45px_rgba(92,156,92,0.65)] hover:shadow-[0_0_60px_rgba(108,176,108,0.85)] disabled:shadow-none transition-all duration-300 border border-[#7ec07e]/40 disabled:border-transparent"
    >
      <span>{children}</span>
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
}
