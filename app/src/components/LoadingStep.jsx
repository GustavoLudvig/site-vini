import { useEffect, useState } from 'react';
import { ScanEye, Fingerprint, CalendarDays, ShieldCheck, Check } from 'lucide-react';

const MISSIONS = [
  { id: 1, text: 'ANALISANDO PERFIL TÁCTICO', Icon: ScanEye },
  { id: 2, text: 'GENERANDO PROTOCOLO MILITAR', Icon: Fingerprint },
  { id: 3, text: 'PREPARANDO TU MISIÓN DE 21 DÍAS', Icon: CalendarDays },
  { id: 4, text: 'FINALIZANDO TU RECLUTAMIENTO', Icon: ShieldCheck },
];

export default function LoadingStep({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [statuses, setStatuses] = useState(['active', 'pending', 'pending', 'pending']);

  useEffect(() => {
    const r = requestAnimationFrame(() => setProgress(100));
    return () => cancelAnimationFrame(r);
  }, []);

  useEffect(() => {
    const set = (i, s) => setStatuses((prev) => prev.map((v, idx) => (idx === i ? s : v)));
    const advance = (i) =>
      setStatuses((prev) => prev.map((v, idx) => (idx < i ? 'completed' : idx === i ? 'active' : 'pending')));

    const t1 = setTimeout(() => advance(1), 1500);
    const t2 = setTimeout(() => advance(2), 3000);
    const t3 = setTimeout(() => advance(3), 4500);
    const t4 = setTimeout(() => {
      setStatuses(['completed', 'completed', 'completed', 'completed']);
      setTimeout(() => onDone && onDone(), 500);
    }, 6000);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#5c7a5c]/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(92,122,92,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(92,122,92,0.07) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute inset-0 noise" />
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5c7a5c]/10 border border-[#5c7a5c]/25 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5c7a5c] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5c7a5c] font-bold font-mono">
              Protocolo: 2026
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight mb-2">
            Procesando Reclutamiento
          </h1>
          <p className="text-sm text-neutral-400 font-mono tracking-wide">
            Verificando compatibilidad operativa...
          </p>
        </div>

        <div className="mb-8 relative">
          <div className="flex justify-between items-end mb-2 px-1">
            <span className="text-[10px] text-[#5c7a5c]/80 font-mono uppercase tracking-widest">
              Estado: Analizando
            </span>
            <span className="text-xs text-[#5c7a5c] font-mono font-bold">{Math.min(Math.floor(progress), 100)}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 border border-white/5 overflow-hidden">
            <div
              className="h-full bg-[#5c7a5c] shadow-[0_0_15px_#5c7a5c] transition-all linear relative"
              style={{ width: `${progress}%`, transitionDuration: '6000ms' }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white/50 to-transparent" />
            </div>
          </div>
        </div>

        <div className="space-y-3 relative z-10">
          {MISSIONS.map((m, i) => {
            const status = statuses[i];
            const active = status === 'active';
            const completed = status === 'completed';
            const Icon = m.Icon;
            return (
              <div
                key={m.id}
                className={`flex items-center gap-4 p-3 rounded-lg border transition-all duration-300 ${
                  completed
                    ? 'border-[#5c7a5c]/30 bg-[#5c7a5c]/10'
                    : active
                    ? 'border-[#5c7a5c] bg-[#5c7a5c]/5 shadow-[0_0_15px_rgba(92,122,92,0.18)]'
                    : 'border-transparent bg-white/5 opacity-40'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded flex items-center justify-center transition-all duration-300 ${
                    completed || active ? 'text-[#5c7a5c]' : 'text-white/30'
                  }`}
                >
                  {completed ? <Check className="w-4 h-4" /> : <Icon className={`w-4 h-4 ${active ? 'animate-pulse' : ''}`} />}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-xs md:text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                      active || completed ? 'text-white' : 'text-white/40'
                    }`}
                  >
                    {m.text}
                  </p>
                  {active && (
                    <p className="text-[10px] text-[#5c7a5c] font-mono mt-0.5 animate-pulse">
                      &gt; Ejecutando secuencia...
                    </p>
                  )}
                </div>
                <div>
                  {active && <div className="w-1.5 h-1.5 rounded-full bg-[#5c7a5c] animate-ping" />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center border-t border-white/5 pt-4">
          <p className="text-[10px] text-white/20 font-mono uppercase tracking-[0.2em]">
            Sistema Seguro // Acceso Limitado
          </p>
        </div>
      </div>
    </div>
  );
}
