import StepFrame from './StepFrame.jsx';

export default function SingleIconStep({ step, onSelect, onBack }) {
  return (
    <StepFrame step={step} onBack={onBack}>
      <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight mb-10 text-white leading-[1.05]">
        {step.title}
      </h2>

      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {step.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="group relative aspect-square w-full rounded-2xl border border-[#5c7a5c]/30 bg-zinc-950/40 hover:border-[#7ee07e]/80 hover:shadow-[0_0_45px_rgba(126,224,126,0.45)] transition-all duration-300 overflow-hidden"
          >
            <img
              src={opt.img}
              alt={opt.label}
              className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 rounded-full bg-black/85 border border-white/10 text-white text-xs md:text-sm font-bold tracking-wide whitespace-nowrap max-w-[92%] overflow-hidden text-ellipsis backdrop-blur-sm">
              {opt.label}
            </div>
          </button>
        ))}
      </div>
    </StepFrame>
  );
}
