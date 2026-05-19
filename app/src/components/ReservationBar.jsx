import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CHECKOUT } from '../data/quiz.js';
import { trackFbEvent } from '../utils/fbCapi.js';

export default function ReservationBar() {
  const [seconds, setSeconds] = useState(10 * 60); // 10 min

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');

  const handleClick = () => {
    trackFbEvent('InitiateCheckout');
    if (window.ttq && window.ttq.track) window.ttq.track('InitiateCheckout');
    if (CHECKOUT.checkoutUrl && CHECKOUT.checkoutUrl !== '#') {
      window.open(CHECKOUT.checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-t border-[#ff9900]/20 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
            <span className="text-[#ff9900] text-lg md:text-xl animate-pulse">⚡</span>
            <p className="text-[#ff9900] font-bold text-sm md:text-base font-mono">
              HAS SIDO SELECCIONADO PARA EL RECLUTAMIENTO
            </p>
          </div>
          <p className="text-neutral-300 text-xs md:text-sm">
            Tu plaza se reservará por:{' '}
            <span className="text-[#ff9900] font-bold font-mono tabular-nums">
              {m}:{s}
            </span>
          </p>
        </div>
        <button
          onClick={handleClick}
          className="w-full md:w-auto text-black px-6 md:px-10 py-2 md:py-4 text-xs md:text-base font-black rounded-lg transition-transform hover:scale-105 flex-shrink-0 flex justify-center items-center gap-2 uppercase tracking-wider"
          style={{
            background: 'linear-gradient(90deg, #ff4d00 0%, #ff9900 50%, #ffd400 100%)',
            boxShadow: '0 4px 14px rgba(255,110,0,0.35), 0 0 12px rgba(255,180,60,0.2)',
          }}
        >
          👊 Acceder al Protocolo
        </button>
      </div>
    </div>,
    document.body
  );
}
