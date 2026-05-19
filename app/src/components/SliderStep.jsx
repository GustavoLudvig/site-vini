import { useState } from 'react';
import StepFrame from './StepFrame.jsx';
import ContinueButton from './ContinueButton.jsx';
import Ruler from './Ruler.jsx';

export default function SliderStep({ step, onSubmit, onBack }) {
  const [value, setValue] = useState(step.default);

  return (
    <StepFrame step={step} onBack={onBack}>
      <div className="pt-2 pb-4">
        <h2 className="text-3xl md:text-4xl font-black text-center uppercase tracking-tight mb-8 text-white leading-tight">
          {step.title}
        </h2>

        <div className="relative flex items-end justify-center gap-2 mb-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(92,122,92,0.35)_0%,transparent_60%)] blur-2xl pointer-events-none" />
          <span className="relative text-7xl md:text-9xl font-black text-white tabular-nums leading-none tracking-tight drop-shadow-[0_0_25px_rgba(92,122,92,0.5)]">
            {value}
          </span>
          <span className="relative text-2xl md:text-4xl font-black italic text-[#5c7a5c] pb-3 md:pb-5 tracking-tight">
            {step.unit}
          </span>
        </div>

        <div className="max-w-xl mx-auto mb-3">
          <Ruler value={value} min={step.min} max={step.max} onChange={setValue} />
        </div>

        <p className="text-center text-xs md:text-sm uppercase tracking-[0.3em] text-[#5c7a5c] font-bold mb-8">
          Arraste para ajustar
        </p>

        <ContinueButton onClick={() => onSubmit(value)} />
      </div>
    </StepFrame>
  );
}
