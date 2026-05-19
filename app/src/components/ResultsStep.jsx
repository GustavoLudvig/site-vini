import { useMemo } from 'react';
import { FileText, PlaySquare, Flame, Unlock } from 'lucide-react';
import { trackFbEvent } from '../utils/fbCapi.js';

const ITEMS = [
  {
    Icon: FileText,
    title: 'Protocolo Generado',
    body: 'Plan de entrenamiento adaptado a tu biotipo y objetivos actuales.',
  },
  {
    Icon: PlaySquare,
    title: 'Acceso a Videos',
    body: 'Biblioteca técnica con ejecución correcta de cada movimiento.',
  },
  {
    Icon: Flame,
    title: 'Garantía de Resultados',
    body: 'Método probado en campo con tasa de éxito del 98%.',
  },
];

function Medal() {
  return (
    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900/60 border border-[#5c7a5c]/30 shadow-[0_0_30px_rgba(92,122,92,0.35)] mb-6">
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-0.5">
        <span className="block w-2 h-5 bg-[#7ee07e] rounded-sm -rotate-12" />
        <span className="block w-2 h-5 bg-white rounded-sm" />
        <span className="block w-2 h-5 bg-[#c14d4d] rounded-sm rotate-12" />
      </div>
      <svg viewBox="0 0 64 64" className="w-12 h-12 mt-2">
        <defs>
          <radialGradient id="medalGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fcd56b" />
            <stop offset="60%" stopColor="#d49a3a" />
            <stop offset="100%" stopColor="#7a4b14" />
          </radialGradient>
        </defs>
        <circle cx="32" cy="34" r="20" fill="url(#medalGrad)" stroke="#5a3a10" strokeWidth="1.5" />
        <circle cx="32" cy="34" r="14" fill="none" stroke="#a76e1d" strokeWidth="1" opacity="0.6" />
        <polygon
          points="32,22 35,30 44,30 37,35 39,44 32,39 25,44 27,35 20,30 29,30"
          fill="#5a3a10"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

export default function ResultsStep({ onContinue }) {
  const id = useMemo(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.random().toString(36).slice(2, 3).toUpperCase();
    const c = String(Math.floor(Math.random() * 900) + 100);
    return `#${a}${b}-${c}`;
  }, []);

  const handleClick = () => {
    trackFbEvent('InitiateCheckout');
    if (window.ttq && window.ttq.track) window.ttq.track('InitiateCheckout');
    onContinue && onContinue();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(92,122,92,0.18)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#5c7a5c]/20 to-transparent" />
        <div className="absolute inset-0 noise" />
      </div>

      <div className="w-full max-w-xl relative z-10 text-center">
        <Medal />

        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-5 leading-none">
          <span className="text-white">Recluta </span>
          <span className="text-[#5c7a5c] drop-shadow-[0_0_15px_rgba(92,122,92,0.5)]">Aprobado</span>
        </h1>

        <p className="text-sm md:text-base text-neutral-400 max-w-md mx-auto mb-10 leading-relaxed">
          Tu perfil cumple con los requisitos para el{' '}
          <span className="text-white font-bold">Protocolo de Fuerzas Especiales</span>.
        </p>

        <div className="rounded-2xl border border-[#5c7a5c]/25 bg-zinc-950/60 backdrop-blur-sm shadow-[0_0_40px_rgba(92,122,92,0.18)] p-6 md:p-7 mb-8 text-left">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#5c7a5c] font-mono font-bold">
              INFORME FINAL
            </span>
            <span className="text-[10px] md:text-xs text-[#5c7a5c]/80 font-mono tracking-wider">
              ID: {id}
            </span>
          </div>

          <div className="space-y-5">
            {ITEMS.map((it) => (
              <div key={it.title} className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#5c7a5c]/15 border border-[#5c7a5c]/30 flex items-center justify-center text-[#7ee07e]">
                  <it.Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-white text-base md:text-lg leading-tight">{it.title}</p>
                  <p className="text-sm text-neutral-400 mt-1 leading-relaxed">{it.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleClick}
          className="group w-full flex items-center justify-center gap-3 py-5 px-6 rounded-md bg-[#5c9c5c] hover:bg-[#6cb06c] text-white font-black text-base md:text-lg uppercase tracking-[0.25em] shadow-[0_0_45px_rgba(92,156,92,0.6)] hover:shadow-[0_0_60px_rgba(108,176,108,0.85)] transition-all duration-300 border border-[#7ec07e]/40"
        >
          <span>Acceder al Protocolo</span>
          <Unlock className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
        </button>
      </div>
    </div>
  );
}
