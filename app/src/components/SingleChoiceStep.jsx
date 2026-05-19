import StepFrame from './StepFrame.jsx';

export default function SingleChoiceStep({ step, onSelect, onBack }) {
  return (
    <StepFrame step={step} onBack={onBack}>
      <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight mb-10 text-white leading-[1.05]">
        {step.title}
      </h2>
      <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
        {step.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="group flex items-center gap-4 w-full px-5 py-4 rounded-xl bg-zinc-950/60 border border-[#5c7a5c]/30 hover:border-[#7ee07e] hover:bg-[#5c7a5c]/15 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,224,126,0.35)] text-left"
          >
            {opt.emoji && <span className="text-2xl">{opt.emoji}</span>}
            <span className="text-base md:text-lg font-bold text-white tracking-wide">{opt.label}</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#7ee07e] fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </StepFrame>
  );
}
