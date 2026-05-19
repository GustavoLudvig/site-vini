import { useState } from 'react';
import { ChevronDown, X, Flame, Plus, Minus } from 'lucide-react';
import { CHECKOUT } from '../data/quiz.js';
import { trackFbEvent } from '../utils/fbCapi.js';

const VS_ROWS = [
  { civil: '😵‍💫 Entrenar sin rumbo', militar: '🎯 Entrenamientos guiados' },
  { civil: '😔 Entrenar solo', militar: '🪖 Comunidad "Tropa"' },
  { civil: '📉 Sin progresión', militar: '📈 Protocolo adaptado' },
  { civil: '🐌 Resultados lentos', militar: '⚡ Resultados en 21 Días' },
  { civil: '💸 Gimnasio costoso', militar: '🏠 Entrena en casa' },
];

export function VsTactical() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
        <span className="text-[#7ee07e]">VS</span> ANÁLISIS TÁCTICO
      </h2>
      <div className="space-y-3">
        {VS_ROWS.map((row, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-4 items-center">
            <div className="bg-red-950/20 border border-red-900/30 p-3 md:p-4 rounded-l-xl text-right relative overflow-hidden group">
              <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors" />
              <div className="relative text-red-500 text-[10px] md:text-xs font-bold tracking-wider mb-1">CIVIL</div>
              <div className="relative text-neutral-300 text-xs md:text-sm font-medium">{row.civil}</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 text-[10px] font-bold">
              VS
            </div>
            <div className="bg-[#5c7a5c]/10 border border-[#5c7a5c]/30 p-3 md:p-4 rounded-r-xl text-left relative overflow-hidden group shadow-[0_0_15px_rgba(126,224,126,0.05)]">
              <div className="absolute inset-0 bg-[#5c7a5c]/5 group-hover:bg-[#5c7a5c]/10 transition-colors" />
              <div className="relative text-[#7ee07e] text-[10px] md:text-xs font-bold tracking-wider mb-1">MILITAR</div>
              <div className="relative text-white text-xs md:text-sm font-bold">{row.militar}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const AGENTS = [
  { src: '/assets/transformations/t1.png', label: 'AGENTE 01', days: '18 DÍAS' },
  { src: '/assets/transformations/t2.png', label: 'AGENTE 02', days: '21 DÍAS' },
  { src: '/assets/transformations/t3.jpg', label: 'AGENTE 03', days: '33 DÍAS' },
  { src: '/assets/transformations/t4.png', label: 'AGENTE 04', days: '45 DÍAS' },
];

export function ResultsConfirmed() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
        RESULTADOS <span className="text-[#7ee07e]">CONFIRMADOS</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {AGENTS.map((a) => (
          <div
            key={a.label}
            className="relative group overflow-hidden rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:border-[#7ee07e]/50 hover:shadow-[0_0_20px_rgba(126,224,126,0.1)]"
          >
            <div className="absolute inset-1 z-20 pointer-events-none border-[0.5px] border-white/5 rounded-sm opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#7ee07e]/50" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#7ee07e]/50" />
            </div>
            <div className="aspect-[4/5] relative">
              <img
                src={a.src}
                alt={a.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 text-center z-30">
                <div className="text-xs text-white font-mono tracking-widest mb-1 font-bold">{a.label}</div>
                <div className="inline-block bg-[#5c7a5c]/30 border border-[#7ee07e]/30 backdrop-blur-md px-3 py-0.5 rounded text-xs font-bold text-white tracking-wider">
                  {a.days}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-neutral-500 text-[10px] md:text-xs mt-6 font-mono tracking-wide">
        // CLASIFICADO: RESULTADOS INDIVIDUALES PUEDEN VARIAR //
      </p>
      <div className="text-center mt-8 text-[#7ee07e]/60 animate-bounce">
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
      </div>
    </section>
  );
}

export function RealityVsTruth() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-10 md:py-14">
      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="p-7 md:p-10 relative z-10">
          <div className="flex items-center gap-4 mb-7">
            <div className="bg-red-900/20 border border-red-500/20 p-2 rounded-lg">
              <X className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-black text-white tracking-wide uppercase">REALIDAD ACTUAL</h3>
          </div>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                ¿Entrenas duro pero tu físico sigue{' '}
                <span className="text-red-500 font-bold">débil y estancado</span>?
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                ¿Has intentado de todo y tu cuerpo simplemente{' '}
                <span className="text-red-500 font-bold">no responde</span>?
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                ¿Estás cansado de esforzarte sin ver{' '}
                <span className="text-red-500 font-bold">resultados reales</span>?
              </p>
            </li>
          </ul>
        </div>
        <div className="h-px bg-white/5 mx-8" />
        <div className="p-7 md:p-10 relative z-10 bg-white/[0.02]">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#5c7a5c]/10 border border-[#5c7a5c]/30 p-2 rounded-lg">
              <Flame className="w-6 h-6 text-[#7ee07e]" />
            </div>
            <h3 className="text-2xl font-black text-white tracking-wide uppercase">LA VERDAD BRUTAL</h3>
          </div>
          <p className="text-lg md:text-xl font-bold text-white leading-relaxed mb-5">
            La mayoría de los entrenamientos está pensada para{' '}
            <span className="text-neutral-500 line-through decoration-red-500/50 decoration-2">
              quemar calorías
            </span>
            .
          </p>
          <p className="text-lg md:text-xl font-medium text-[#7ee07e]/90 leading-relaxed">
            El Protocolo Militar está diseñado para{' '}
            <span className="bg-[#1a4d1a] text-white px-2 py-0.5 rounded border border-[#7ee07e]/30 font-black tracking-wider mx-1">
              FORJAR
            </span>{' '}
            un cuerpo de combate.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CommandCenterBadge() {
  return (
    <div className="text-center py-10">
      <div className="inline-flex items-center gap-2 bg-[#5c7a5c]/10 border border-[#5c7a5c]/30 px-3 py-1 rounded-full">
        <span className="w-2 h-2 rounded-full bg-[#7ee07e] animate-pulse" />
        <span className="text-[#7ee07e] text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
          Centro de Comando Personal
        </span>
      </div>
    </div>
  );
}

const BONUSES = [
  {
    icon: '💪',
    title: 'Guía de Recuperación Muscular',
    body: '¡Recupérate como una profesional! Técnicas de estiramiento, descanso activo y consejos esenciales para evitar lesiones y mantener el ritmo en tus entrenamientos.',
    price: '$19,90 USD',
  },
  {
    icon: '☕',
    title: 'Café de Combate Termogénico',
    body: 'La bebida secreta que usaban los soldados de élite para mantener la energía y quemar grasa incluso en medio del combate. Una receta especial con ingredientes naturales que aceleran tu metabolismo.',
    price: '$39,90 USD',
  },
  {
    icon: '🚀',
    title: 'Next-Level Avanzado',
    body: '¡Lleva tu entrenamiento al siguiente nivel con ejercicios avanzados! Rutinas exclusivas para resistencia extrema, definición total y evolución constante.',
    price: '$58,00 USD',
  },
  {
    icon: '🗺️',
    title: 'Mapa de Progreso Táctico',
    body: 'Visualiza tu transformación como una operación militar. Con esta hoja de ruta diaria, sabrás exactamente qué entrenar y cómo seguir tu evolución.',
    price: '$19,90 USD',
  },
];

export function Bonuses() {
  const handleClick = (e) => {
    trackFbEvent('InitiateCheckout');
    if (window.ttq && window.ttq.track) window.ttq.track('InitiateCheckout');
    if (!CHECKOUT.checkoutUrl || CHECKOUT.checkoutUrl === '#') e.preventDefault();
  };

  return (
    <section className="py-12 md:py-16 bg-[#5c7a5c]/[0.03]">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-[#7ee07e] text-sm md:text-base font-bold mb-10">
          📱 Disponible para acceso inmediato después de la compra
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-10">
          Solo hoy obtienes <span className="text-[#7ee07e]">bonos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {BONUSES.map((b) => (
            <div
              key={b.title}
              className="p-6 md:p-7 rounded-lg border border-[#5c7a5c]/30 bg-zinc-950/40 flex flex-col h-full hover:border-[#7ee07e]/50 hover:shadow-[0_0_25px_rgba(126,224,126,0.1)] transition-all"
            >
              <div className="mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#5c7a5c]/20 rounded-lg flex items-center justify-center mb-4 text-3xl md:text-4xl">
                  {b.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{b.title}</h3>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">{b.body}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#5c7a5c]/20 flex items-center gap-3">
                <span className="text-neutral-500 line-through text-sm">{b.price}</span>
                <span className="text-[#7ee07e] font-bold text-lg md:text-xl">Ahora GRATIS</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#7ee07e] text-sm md:text-lg font-bold mt-10">
          💰 Valor total de los bonos: <span className="text-[#7ee07e]">$137.70</span> — ¡tuyo hoy sin costo adicional!
        </p>

        <div className="max-w-md mx-auto text-center mt-10">
          <a
            href={CHECKOUT.checkoutUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="block w-full text-black py-5 md:py-6 text-base md:text-xl font-black rounded-xl transition-all hover:scale-105 shadow-lg uppercase tracking-wider"
            style={{
              background: 'linear-gradient(90deg, #ff4d00 0%, #ff9900 50%, #ffd400 100%)',
              boxShadow: '0 6px 18px rgba(255,120,0,0.3), 0 0 12px rgba(255,200,80,0.15)',
            }}
          >
            🔥 Asegura tus Bonos Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    initial: 'P',
    name: 'Paulo',
    age: '39 years old',
    headline: '"¡Valió la pena intentarlo!"',
    body:
      '"Siempre hice pesas, pero un amigo me habló de la calistenia militar y decidí probar. ¡Me encantó! Ahora entreno en casa, a mi ritmo, y estoy progresando sin necesitar pesas."',
  },
  {
    initial: 'R',
    name: 'Rodrigo',
    age: '41 years old',
    headline: '"¡Increíble y sin impacto!"',
    body:
      '"He probado de todo, pero la calistenia militar fue lo único que no me dejó dolorido después. ¡Perdí 8kg en 4 semanas sin lesiones! Lo recomiendo mucho."',
  },
];

export function Reviews() {
  const handleClick = (e) => {
    trackFbEvent('InitiateCheckout');
    if (window.ttq && window.ttq.track) window.ttq.track('InitiateCheckout');
    if (!CHECKOUT.checkoutUrl || CHECKOUT.checkoutUrl === '#') e.preventDefault();
  };

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-3">
          Resultados que nos <span className="text-[#7ee07e]">enorgullecen</span>
        </h2>
        <p className="text-center text-neutral-400 mb-10 md:mb-12 text-sm md:text-base">
          Mira lo que dicen quienes siguieron el protocolo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="p-6 md:p-8 rounded-lg border border-[#5c7a5c]/30 bg-zinc-950/40 hover:border-[#7ee07e]/40 hover:shadow-[0_0_25px_rgba(126,224,126,0.08)] transition-all"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5c7a5c]/20 flex items-center justify-center shrink-0">
                  <span className="text-lg md:text-2xl font-bold text-[#7ee07e]">{r.initial}</span>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">{r.name}</h4>
                  <p className="text-neutral-400 text-xs md:text-sm">{r.age}</p>
                </div>
              </div>
              <div className="mb-5">
                <div className="text-[#7ee07e] font-bold text-base md:text-lg mb-3">{r.headline}</div>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed italic">{r.body}</p>
              </div>
              <div className="flex gap-1 text-yellow-400 text-lg">
                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto text-center mt-12">
          <a
            href={CHECKOUT.checkoutUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="block w-full text-black py-5 md:py-6 text-base md:text-xl font-black rounded-xl transition-all hover:scale-105 shadow-lg uppercase tracking-wider"
            style={{
              background: 'linear-gradient(90deg, #ff4d00 0%, #ff9900 50%, #ffd400 100%)',
              boxShadow: '0 6px 18px rgba(255,120,0,0.3), 0 0 12px rgba(255,200,80,0.15)',
            }}
          >
            🔥 Quiero Empezar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  {
    question: '¿Necesito equipo?',
    answer:
      'No. El protocolo utiliza el peso de tu propio cuerpo. Puedes hacerlo en casa, en el parque o donde quieras.',
  },
  {
    question: '¿Es adecuado para principiantes?',
    answer:
      'Sí. El programa está diseñado con progresiones. Empezarás desde tu nivel actual y avanzarás a medida que ganes fuerza.',
  },
  {
    question: '¿Cuánto tiempo dura cada entrenamiento?',
    answer: 'Los entrenamientos son intensos y eficientes, duran entre 20 y 40 minutos.',
  },
  {
    question: '¿Tengo garantía?',
    answer:
      'Sí, ofrecemos una garantía de satisfacción de 7 días. Si no te gusta, te devolvemos tu dinero.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-[#5c7a5c]/25 bg-zinc-950/50 backdrop-blur-sm overflow-hidden transition-all">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left hover:bg-[#5c7a5c]/5 transition-colors"
      >
        <span className="text-base md:text-lg font-bold text-white">{q}</span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border border-[#5c7a5c]/40 flex items-center justify-center text-[#7ee07e] transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-5 text-sm md:text-base text-neutral-300 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#5c7a5c]/[0.05]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-10 md:mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <FaqItem key={f.question} q={f.question} a={f.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
