import { useMemo } from 'react';
import StepFrame from './StepFrame.jsx';
import ContinueButton from './ContinueButton.jsx';
import MilitaryBadge from './MilitaryBadge.jsx';
import { PERSONAS } from '../data/quiz.js';

export default function TestimonialStep({ step, onContinue, onBack }) {
  const persona = useMemo(() => PERSONAS[Math.floor(Math.random() * PERSONAS.length)], []);

  return (
    <StepFrame step={step} onBack={onBack} hideHeader tint>
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <MilitaryBadge>{step.badge}</MilitaryBadge>
        </div>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
          {step.title}
        </h2>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#5c7a5c] to-transparent mx-auto my-3" />
        <p className="text-sm md:text-base text-neutral-400 max-w-lg mx-auto mb-8 leading-relaxed">
          {step.subtitle}{' '}
          <span className="text-[#5c7a5c] font-bold">{step.subtitleHighlight}</span>{' '}
          {step.subtitleEnd}
        </p>

        <div className="rounded-2xl border border-[#5c7a5c]/30 bg-zinc-950/40 backdrop-blur-md p-4 md:p-6 max-w-2xl mx-auto mb-2">
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-900">
              <img src={persona.imageBefore} alt="Antes" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/85 border border-white/10 text-[10px] font-bold tracking-widest text-white">
                DÍA 0
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/85 backdrop-blur-sm py-2 text-center text-[10px] uppercase tracking-[0.3em] font-bold text-white">
                Antes
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-900 shadow-[0_0_25px_rgba(126,224,126,0.25)]">
              <img src={persona.imageAfter} alt="Después" className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#5c7a5c]/95 border border-[#7ee07e]/40 text-[10px] font-bold tracking-widest text-white">
                DÍA 21
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#5c7a5c]/85 backdrop-blur-sm py-2 text-center text-[10px] uppercase tracking-[0.3em] font-bold text-white">
                Después
              </div>
            </div>
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-black/60 border border-[#5c7a5c]/30 text-[11px] uppercase tracking-widest text-white mb-3">
            {persona.name.toUpperCase()},{' '}
            <span className="text-[#7ee07e]">{persona.age} AÑOS</span>
          </div>
          <p className="text-lg md:text-2xl font-black uppercase text-white mb-2">
            {persona.headline}
          </p>
          <p className="text-sm text-neutral-300 max-w-md mx-auto mb-5">{persona.text}</p>

          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-300 border border-[#5c7a5c]/30 rounded-full px-4 py-1">
            <span className="text-[#7ee07e]">⊘</span>
            {step.badges}
          </div>
        </div>

        <div className="mt-8">
          <ContinueButton onClick={onContinue} />
        </div>
      </div>
    </StepFrame>
  );
}
