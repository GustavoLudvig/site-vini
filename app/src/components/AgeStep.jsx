import MilitaryBadge from './MilitaryBadge.jsx';
import { LANDING } from '../data/quiz.js';

export default function AgeStep({ onSelect }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative font-sans selection:bg-[#5c7a5c] selection:text-black flex flex-col items-center justify-center py-8 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#5c7a5c]/10 to-transparent" />
        <div className="absolute inset-0 noise" />
      </div>

      <div className="text-center mb-8 relative z-10 max-w-2xl mx-auto">
        <MilitaryBadge>{LANDING.badge}</MilitaryBadge>
        <h1 className="text-[1.7rem] md:text-[2.5rem] font-black mb-4 tracking-tight leading-tight uppercase mt-4">
          <span className="block text-white">{LANDING.heroLine1}</span>
          <span className="text-[#5c7a5c] inline-block mx-1 drop-shadow-[0_0_15px_rgba(92,122,92,0.5)]">
            {LANDING.heroLine2}
          </span>
          <span className="block text-white">{LANDING.heroLine3}</span>
        </h1>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#5c7a5c] to-transparent mx-auto my-4" />
        <p className="text-sm md:text-base text-neutral-400 max-w-lg mx-auto mb-6">
          {LANDING.subtitle}
        </p>
        <p className="text-base md:text-lg font-bold text-white/90">{LANDING.cta}</p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-2 gap-3 sm:gap-6 relative z-10">
        {LANDING.ageOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="group relative w-full h-[280px] sm:h-[320px] bg-zinc-900/30 backdrop-blur-sm border border-[#5c7a5c]/30 hover:border-[#7ee07e] transition-all duration-300 ease-out overflow-hidden flex flex-col justify-end text-left shadow-glow-sm hover:shadow-glow rounded-xl"
          >
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(92,122,92,0.15)_100%)] z-10 pointer-events-none mix-blend-screen" />
              <img
                src={opt.img}
                alt={opt.id}
                className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>
            <div className="relative z-20 w-full p-4 sm:p-6 border-t border-[#5c7a5c]/20 bg-black/40 backdrop-blur-md group-hover:bg-[#5c7a5c]/90 transition-colors duration-300">
              <span className="text-lg sm:text-xl font-bold text-white group-hover:text-black drop-shadow-md">
                {opt.label}
              </span>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
