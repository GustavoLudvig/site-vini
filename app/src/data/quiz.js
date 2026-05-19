// Estrutura do funil de calisteniamilitar.site (re-criação do site do Vini).
// Strings curtas extraídas do HTTrack + bundles em disco.
// Os tópicos com "TODO_VINI" são copy de checkout/preço que o Vini te confirma.

export const LANDING = {
  badge: 'Reclutamiento Abierto',
  heroLine1: 'Consigue un físico marcado en solo 21 días con el',
  heroLine2: 'Desafío de Calistenia Militar',
  heroLine3: 'sin salir de casa.',
  subtitle: 'Este programa está diseñado para adaptarse a tu nivel de condición física y edad actual.',
  cta: 'Selecciona tu edad para comenzar',
  ageOptions: [
    { id: '18-29', label: 'Edad: 18 - 29', img: '/assets/18-29.png' },
    { id: '30-39', label: 'Edad: 30 - 39', img: '/assets/30-39.png' },
    { id: '40-49', label: 'Edad: 40 - 49', img: '/assets/40-49.png' },
    { id: '50+',   label: 'Edad: 50+',     img: '/assets/50+.png' },
  ],
};

export const QUIZ_STEPS = [
  {
    id: 'q02',
    type: 'single-icons',
    progress: 22,
    number: 'PREGUNTA 02',
    title: '¿Cuál es tu objetivo principal?',
    options: [
      { id: 'perder-peso', label: 'Perder peso', img: '/assets/objetivo/perder.jpg' },
      { id: 'ganar-musculo', label: 'Ganar músculo', img: '/assets/objetivo/ganar.jpg' },
      { id: 'perder-ganar', label: 'Perder grasa y ganar músculo', img: '/assets/objetivo/ganareperder.jpg' },
      { id: 'condicion', label: 'Mejorar la condición física general', img: '/assets/objetivo/mejorar.jpg' },
    ],
  },
  {
    id: 'q03',
    type: 'single-photos',
    progress: 33,
    number: 'PREGUNTA 03',
    title: '¿Cuál es tu objetivo corporal?',
    options: [
      { id: 'delgado', label: 'Delgado', img: '/assets/bodies/slim.webp' },
      { id: 'atletico', label: 'Atlético', img: '/assets/bodies/athletic.webp' },
      { id: 'marcado', label: 'Marcado', img: '/assets/bodies/definied.webp' },
      { id: 'fuerte', label: 'Fuerte', img: '/assets/bodies/fuerte.webp' },
    ],
  },
  {
    id: 'q04',
    type: 'multi-icons',
    progress: 44,
    number: 'PREGUNTA 04',
    title: '¿Cuáles son las áreas en las que quieres enfocarte?',
    subtitle: 'Elige todas las opciones que apliquen.',
    options: [
      { id: 'pectorales', label: 'Pectorales', img: '/assets/zones/chest.webp' },
      { id: 'brazos', label: 'Brazos', img: '/assets/zones/brazos.webp' },
      { id: 'abdomen', label: 'Abdomen', img: '/assets/zones/abdomen.webp' },
      { id: 'piernas', label: 'Piernas', img: '/assets/zones/piernas.webp' },
    ],
  },
  {
    id: 'q05',
    type: 'single',
    progress: 56,
    number: 'PREGUNTA 05',
    title: '¿Cuántas veces por semana te gustaría entrenar?',
    options: [
      { id: '1-2', label: '1-2 veces', emoji: '📅' },
      { id: '3-4', label: '3-4 veces', emoji: '💪' },
      { id: '5+', label: '5 o más veces', emoji: '🔥' },
    ],
  },
  {
    id: 'testimonial',
    type: 'testimonial',
    progress: 67,
    badge: 'Resultados Verificados',
    title: 'Esto va a pasarte a ti',
    subtitle: 'Transformaciones reales en',
    subtitleHighlight: '21 Días',
    subtitleEnd: 'siguiendo el Protocolo Calistenia Militar',
    badges: 'SIN QUÍMICOS • SIN GIMNASIO • SOLO PROTOCOLO',
  },
  {
    id: 'q07',
    type: 'slider',
    progress: 78,
    number: 'PREGUNTA 07',
    title: '¿Cuál es tu altura?',
    unit: 'CM',
    min: 140,
    max: 220,
    step: 1,
    default: 175,
  },
  {
    id: 'q08',
    type: 'slider',
    progress: 89,
    number: 'PREGUNTA 08',
    title: '¿Cuál es tu peso actual?',
    unit: 'KG',
    min: 40,
    max: 150,
    step: 1,
    default: 75,
  },
  {
    id: 'q09',
    type: 'slider',
    progress: 95,
    number: 'PREGUNTA 09',
    title: '¿Cuál es el peso que quieres alcanzar?',
    unit: 'KG',
    min: 40,
    max: 150,
    step: 1,
    default: 70,
  },
  {
    id: 'loading',
    type: 'loading',
    progress: 100,
    text: 'Verificando compatibilidad operativa...',
  },
  {
    id: 'results',
    type: 'results',
    progress: 100,
    sectionLabel: 'Potencial Genético',
    sectionBody:
      'Tu cuerpo tiene un alto potencial de definición. Tu biotipo reacciona muy bien al entrenamiento con peso corporal.',
    matchLabel: 'Tu perfil cumple con los requisitos para el',
    matchHighlight: 'Protocolo de Fuerzas Especiales',
    cards: [
      {
        title: 'Protocolo Generado',
        body: 'Plan de entrenamiento adaptado a tu biotipo y objetivos actuales.',
      },
      {
        title: 'Acceso a Videos',
        body: 'Biblioteca técnica con ejecución correcta de cada movimiento.',
      },
      {
        title: 'Garantía de Resultados',
        body: 'Resultados visibles en 21 días siguiendo el protocolo.',
      },
    ],
  },
];

export const PERSONAS = [
  {
    name: 'Carlos',
    age: 25,
    imageBefore: '/assets/transformations/1.jpg',
    imageAfter: '/assets/transformations/2.jpg',
    headline: 'De cuerpo común a MÁQUINA DE GUERRA',
    text: 'Este protocolo activó el modo anabólico natural de su cuerpo. 21 Días sin gimnasio.',
  },
  {
    name: 'Javier',
    age: 28,
    imageBefore: '/assets/transformations/3.jpg',
    imageAfter: '/assets/transformations/4.jpg',
    headline: 'De estancado a ELITE',
    text: 'Pensé que mi genética era el problema. El Protocolo me demostró lo contrario.',
  },
  {
    name: 'Luis',
    age: 32,
    imageBefore: '/assets/transformations/5.jpg',
    imageAfter: '/assets/transformations/6.jpg',
    headline: 'Recuperación Total',
    text: 'La disciplina y el método correcto cambiaron mi vida en tiempo récord.',
  },
  {
    name: 'Miguel',
    age: 40,
    imageBefore: '/assets/transformations/7.jpg',
    imageAfter: '/assets/transformations/8.jpg',
    headline: 'Fuerza Operativa',
    text: 'Nunca creí que a mi edad podría lograr este nivel de definición.',
  },
];

export const VSL = {
  // TODO_VINI: trocar pela URL real do VSL (Converteai) que o Vini usa
  videoSrc: '',
  lockedTitle: 'Tu video ha comenzado, míralo y desbloquea el protocolo.',
  lockedSubtitle: 'El video debe ser visto completo para continuar',
  unlockCta: 'COMENZAR MI OPERACIÓN',
};

export const CHECKOUT = {
  price: '7,90',
  priceOriginal: '$49.90',
  // TODO_VINI: trocar pela URL real que o Vini te mandar (Hotmart, Kiwify, etc)
  checkoutUrl: 'https://go.centerpag.com/PPU38CQC1SJ',
};
