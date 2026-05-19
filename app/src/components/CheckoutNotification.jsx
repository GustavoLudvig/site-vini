import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ShoppingCart } from 'lucide-react';

const NAMES = [
  'Carlos', 'Juan', 'Luis', 'Miguel', 'José', 'Diego', 'Antonio', 'Manuel',
  'Javier', 'David', 'Daniel', 'Francisco', 'Pablo', 'Alejandro', 'Fernando',
  'Eduardo', 'Ricardo', 'Roberto', 'Andrés', 'Sergio', 'Raúl', 'Alberto',
  'Jorge', 'Pedro',
];

export default function CheckoutNotification() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', time: 0 });

  useEffect(() => {
    const show = () => {
      setData({
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        time: Math.floor(Math.random() * 5) + 1,
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };
    const first = setTimeout(show, 10000);
    const interval = setInterval(show, 50000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  if (!visible || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed top-4 right-4 md:bottom-28 md:right-6 md:top-auto z-[9998] max-w-[300px]">
      <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl border border-[#5c7a5c]/30 bg-black/85 backdrop-blur-md shadow-2xl animate-in slide-in-from-right duration-500 fade-in">
        <div className="shrink-0 w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center">
          <ShoppingCart className="w-4 h-4 text-green-500" />
        </div>
        <div>
          <p className="text-white text-xs md:text-sm font-bold">{data.name}</p>
          <p className="text-neutral-400 text-[10px] md:text-xs">
            compró el protocolo hace {data.time} min
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
