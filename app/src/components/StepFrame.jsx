import ProgressBar from './ProgressBar.jsx';

export default function StepFrame({ step, onBack, children, footer, hideHeader = false, tint = false }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative font-sans selection:bg-[#5c7a5c] selection:text-black flex flex-col py-6 px-4">
      <div className="absolute inset-0 pointer-events-none">
        {tint ? (
          <>
            <div className="absolute inset-0 bg-[#5c7a5c]/[0.12]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(92,122,92,0.18)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#5c7a5c]/20 to-transparent" />
          </>
        ) : (
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#5c7a5c]/10 to-transparent" />
        )}
        <div className="absolute inset-0 noise" />
      </div>

      {!hideHeader && (
        <div className="relative z-10 max-w-2xl w-full mx-auto pt-2">
          <ProgressBar value={step.progress} label={step.number || ''} />
        </div>
      )}

      <div className="relative z-10 flex-1 flex items-start justify-center w-full pt-8">
        <div className="max-w-2xl w-full mx-auto">{children}</div>
      </div>

      <div className="relative z-10 max-w-2xl w-full mx-auto pt-4 pb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-500 hover:text-[#7ee07e] transition-colors font-bold"
        >
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current text-current">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </span>
          Anterior
        </button>
        {footer}
      </div>
    </div>
  );
}
