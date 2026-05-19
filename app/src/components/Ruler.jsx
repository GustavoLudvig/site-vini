import { useRef, useState, useEffect } from 'react';

export default function Ruler({ value, min, max, onChange, pxPerUnit = 22, visible = 6 }) {
  const containerRef = useRef(null);
  const dragRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const ticks = [];
  for (let v = value - visible; v <= value + visible; v++) {
    if (v < min || v > max) continue;
    const offset = (v - value) * pxPerUnit;
    const isMajor = v % 10 === 0;
    ticks.push({ v, offset, isMajor });
  }

  const onPointerDown = (e) => {
    dragRef.current = { x: e.clientX, v: value };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.x;
    const delta = -Math.round(dx / pxPerUnit);
    const next = Math.max(min, Math.min(max, dragRef.current.v + delta));
    if (next !== value) onChange(next);
  };
  const endDrag = () => {
    dragRef.current = null;
    setDragging(false);
  };

  useEffect(() => {
    const onWheel = (e) => {
      if (!containerRef.current) return;
      if (containerRef.current.contains(e.target)) {
        e.preventDefault();
        const delta = Math.sign(e.deltaY);
        const next = Math.max(min, Math.min(max, value + delta));
        if (next !== value) onChange(next);
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [value, min, max, onChange]);

  return (
    <div className="relative">
      {/* halo verde de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(92,122,92,0.3)_0%,transparent_70%)] blur-2xl pointer-events-none" />

      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`relative h-32 rounded-2xl overflow-hidden bg-zinc-950/60 border border-[#5c7a5c]/15 backdrop-blur-sm select-none ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ touchAction: 'none' }}
      >
        {/* fade laterais (curto, só pra suavizar a borda) */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />

        {/* indicador central */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center justify-between py-2">
          <svg viewBox="0 0 16 10" className="w-4 h-3 fill-[#7aa37a]">
            <polygon points="8,10 0,0 16,0" />
          </svg>
          <div className="w-px flex-1 bg-gradient-to-b from-[#7aa37a] via-[#5c7a5c]/60 to-[#7aa37a] my-1" />
          <svg viewBox="0 0 16 10" className="w-4 h-3 fill-[#7aa37a]">
            <polygon points="8,0 0,10 16,10" />
          </svg>
        </div>

        {/* ticks */}
        {ticks.map((t) => {
          const distance = Math.abs(t.offset);
          const opacity = Math.max(0.55, 1 - distance / (pxPerUnit * visible * 1.8));
          return (
            <div
              key={t.v}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `calc(50% + ${t.offset}px)`, opacity }}
            >
              <div
                className="bg-white"
                style={{
                  width: t.isMajor ? '2px' : '1px',
                  height: t.isMajor ? '38px' : '18px',
                  marginLeft: t.isMajor ? '-1px' : '-0.5px',
                }}
              />
              {t.isMajor && (
                <span
                  className="absolute left-1/2 -translate-x-1/2 top-[44px] text-[11px] font-bold text-neutral-500 tabular-nums tracking-wider"
                >
                  {t.v}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
