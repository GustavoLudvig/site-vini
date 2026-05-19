import { ArrowRight } from 'lucide-react';
import { CHECKOUT } from '../data/quiz.js';
import { trackFbEvent } from '../utils/fbCapi.js';
import CheckoutNotification from './CheckoutNotification.jsx';
import ReservationBar from './ReservationBar.jsx';
import {
  VsTactical,
  ResultsConfirmed,
  RealityVsTruth,
  CommandCenterBadge,
  Bonuses,
  Reviews,
  Faq,
} from './CheckoutSections.jsx';

const FEATURES = [
  { text: 'Plan de Entrenamiento (21 Días)', icon: '⚡' },
  { text: 'Vídeos Demonstrativos', icon: '🎥' },
  { text: 'Sistema de Gamificación', icon: '🎮' },
  { text: 'Soporte Prioritario', icon: '📡' },
  { text: 'Garantía de 7 Días', icon: '🛡️' },
];

export default function CheckoutStep() {
  const handleClick = (e) => {
    trackFbEvent('InitiateCheckout');
    if (window.ttq && window.ttq.track) window.ttq.track('InitiateCheckout');
    if (!CHECKOUT.checkoutUrl || CHECKOUT.checkoutUrl === '#') {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#5c7a5c]/15 to-transparent" />
        <div className="absolute inset-0 noise" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-12 pb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
            El único programa de calistenia que te saca del "cero resultado" y construye un{' '}
            <span className="text-[#7ee07e] drop-shadow-[0_0_15px_rgba(126,224,126,0.4)]">físico militar</span>{' '}
            en 21 días, usando solo el peso de tu cuerpo.
          </h2>
          <p className="text-sm md:text-base text-[#5c7a5c] italic font-bold">
            Este protocolo no se trata de "estar cansado". Se trata de volverte fuerte.
          </p>
        </div>

        <div className="relative">
          {/* badge no topo */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
            <div className="bg-[#1a4d1a] text-white font-black text-xs md:text-sm px-6 py-1.5 rounded-sm tracking-widest border-2 border-black shadow-[0_0_25px_rgba(0,255,0,0.45)] uppercase flex items-center gap-2 whitespace-nowrap">
              <span className="animate-pulse">●</span> Acceso Autorizado
            </div>
          </div>

          {/* card */}
          <div className="bg-[#050505] border-2 border-[#5c7a5c]/50 rounded-2xl p-1 relative overflow-hidden shadow-[0_0_50px_rgba(92,156,92,0.18)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#5c7a5c]/40 via-transparent to-[#5c7a5c]/20 opacity-25 pointer-events-none" />
            <div className="bg-[#0a0a0a] rounded-xl px-5 md:px-8 pt-10 pb-8 relative overflow-hidden border border-white/5">
              {/* grid táctico */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, transparent 24%, rgba(0,255,0,.25) 25%, rgba(0,255,0,.25) 26%, transparent 27%, transparent 74%, rgba(0,255,0,.25) 75%, rgba(0,255,0,.25) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,255,0,.25) 25%, rgba(0,255,0,.25) 26%, transparent 27%, transparent 74%, rgba(0,255,0,.25) 75%, rgba(0,255,0,.25) 76%, transparent 77%, transparent)',
                  backgroundSize: '50px 50px',
                }}
              />

              <div className="relative z-10 text-center mb-8">
                <div className="inline-block border border-[#5c7a5c]/40 bg-[#5c7a5c]/5 px-3 py-1 rounded mb-4">
                  <span className="text-[#7ee07e] text-[10px] font-mono tracking-[0.2em]">
                    ARCHIVO CLASIFICADO #8821
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black italic text-white mb-1 tracking-tight">PROTOCOLO</h3>
                <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7ee07e] via-white to-[#7ee07e] tracking-widest mb-6 uppercase">
                  Calistenia Militar
                </h3>

                <div className="relative bg-black/50 border border-white/10 rounded-lg p-4 backdrop-blur-sm max-w-md mx-auto">
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#7ee07e]/60" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#7ee07e]/60" />
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#7ee07e]/60" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#7ee07e]/60" />

                  <div className="flex items-end justify-center gap-2 mb-1">
                    <span className="text-neutral-500 text-sm mb-1.5">$</span>
                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] leading-none">
                      {CHECKOUT.price.replace('$', '')}
                    </span>
                    <div className="flex flex-col items-start mb-1.5">
                      <span className="text-[10px] text-[#7ee07e] font-bold bg-[#5c7a5c]/15 px-1.5 rounded mb-1 uppercase tracking-wider">
                        Oferta
                      </span>
                      <span className="text-neutral-500 text-xs line-through decoration-red-500">
                        {CHECKOUT.priceOriginal}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 inline-block bg-[#5c7a5c]/20 border border-[#7ee07e]/40 px-3 py-0.5 rounded-full">
                    <span className="text-[10px] md:text-xs font-bold text-[#7ee07e] tracking-wider uppercase">
                      ♾️ Acceso Vitalicio
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-4 mb-10 flex flex-col items-center">
                {FEATURES.map((f) => (
                  <div key={f.text} className="flex items-center gap-3 group/item">
                    <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-base group-hover/item:border-[#5c7a5c]/60 group-hover/item:bg-[#5c7a5c]/10 transition-all">
                      {f.icon}
                    </div>
                    <span className="text-neutral-300 text-base md:text-lg font-medium group-hover/item:text-white transition-colors">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={CHECKOUT.checkoutUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="relative z-10 block w-full group/btn overflow-hidden rounded-lg bg-[#1a4d1a] hover:bg-[#236023] p-4 md:p-5 transition-all hover:scale-[1.02] shadow-[0_0_25px_rgba(26,77,26,0.5)] hover:shadow-[0_0_40px_rgba(26,77,26,0.75)] border-2 border-white/20 text-center"
              >
                <div className="flex items-center justify-center gap-3 relative z-10">
                  <span className="text-white font-black text-lg md:text-xl tracking-[0.25em] uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    Iniciar Misión
                  </span>
                  <ArrowRight className="w-6 h-6 text-white stroke-[3px] group-hover/btn:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12 pointer-events-none" />
              </a>

              <div className="mt-10 flex items-center justify-between text-[10px] text-neutral-500 font-mono border-t border-white/5 pt-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>SSL SECURE</span>
                </div>
                <div>ID: 99-21-X</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-36">
        <VsTactical />
        <ResultsConfirmed />
        <RealityVsTruth />
        <CommandCenterBadge />
        <Bonuses />
        <Reviews />
        <Faq />
      </div>

      <CheckoutNotification />
      <ReservationBar />
    </div>
  );
}
