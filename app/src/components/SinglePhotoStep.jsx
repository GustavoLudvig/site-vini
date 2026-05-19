import StepFrame from './StepFrame.jsx';

export default function SinglePhotoStep({ step, onSelect, onBack }) {
  return (
    <StepFrame step={step} onBack={onBack}>
      <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight mb-10 text-white leading-[1.05]">
        {step.title}
      </h2>

      <div className="grid grid-cols-2 gap-3 md:gap-5">
        {step.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="group relative w-full h-[280px] sm:h-[340px] rounded-xl bg-zinc-950/30 border border-[#5c7a5c]/30 hover:border-[#7ee07e] transition-all duration-300 ease-out overflow-hidden shadow-glow-sm hover:shadow-[0_0_40px_rgba(126,224,126,0.45)]"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
              <img
                src={opt.img}
                alt={opt.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-black/80 border border-white/10 text-white text-sm font-bold tracking-wide backdrop-blur-sm">
              {opt.label}
            </div>
          </button>
        ))}
      </div>
    </StepFrame>
  );
}
