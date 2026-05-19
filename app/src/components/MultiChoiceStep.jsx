import { useState } from 'react';
import StepFrame from './StepFrame.jsx';
import ContinueButton from './ContinueButton.jsx';

export default function MultiChoiceStep({ step, onSubmit, onBack }) {
  const [selected, setSelected] = useState([]);

  const toggle = (id) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <StepFrame step={step} onBack={onBack}>
      <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight mb-2 text-white leading-[1.05]">
        {step.title}
      </h2>
      {step.subtitle && (
        <p className="text-sm md:text-base text-neutral-400 text-center mb-10">{step.subtitle}</p>
      )}

      <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
        {step.options.map((opt) => {
          const isOn = selected.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              className={`relative aspect-square w-full rounded-2xl border-2 overflow-hidden transition-all duration-300
                ${isOn
                  ? 'border-[#9aff9a] bg-[#5c7a5c]/15 shadow-[0_0_45px_rgba(154,255,154,0.5)]'
                  : 'border-[#5c7a5c]/40 hover:border-[#7ee07e]/80 bg-zinc-950/40 hover:shadow-[0_0_35px_rgba(126,224,126,0.4)]'}`}
            >
              <img
                src={opt.img}
                alt={opt.label}
                className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 rounded-full bg-black/85 border border-white/10 text-white text-xs md:text-sm font-bold tracking-wide whitespace-nowrap max-w-[92%] overflow-hidden text-ellipsis backdrop-blur-sm">
                {opt.label}
              </div>
              {isOn && (
                <div className="absolute top-3 right-3 z-20 w-6 h-6 rounded-full bg-[#7ee07e] text-black flex items-center justify-center text-xs font-black shadow-glow">
                  ✓
                </div>
              )}
            </button>
          );
        })}
      </div>

      <ContinueButton onClick={() => selected.length && onSubmit(selected)} disabled={selected.length === 0} />
    </StepFrame>
  );
}
