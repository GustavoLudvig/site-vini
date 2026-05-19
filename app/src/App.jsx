import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { QUIZ_STEPS } from './data/quiz.js';
import AgeStep from './components/AgeStep.jsx';
import SingleChoiceStep from './components/SingleChoiceStep.jsx';
import SingleIconStep from './components/SingleIconStep.jsx';
import SinglePhotoStep from './components/SinglePhotoStep.jsx';
import MultiChoiceStep from './components/MultiChoiceStep.jsx';
import SliderStep from './components/SliderStep.jsx';
import TestimonialStep from './components/TestimonialStep.jsx';
import LoadingStep from './components/LoadingStep.jsx';
import ResultsStep from './components/ResultsStep.jsx';
import CheckoutStep from './components/CheckoutStep.jsx';

const transition = { duration: 0.5, ease: [0.4, 0, 0.2, 1] };
const initial = { opacity: 0, scale: 0.95, y: 32, filter: 'blur(8px)' };
const animate = { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' };
const exitV = { opacity: 0, scale: 0.95, y: -24, filter: 'blur(8px)' };

export default function App() {
  const [stepIdx, setStepIdx] = useState(-1);
  const [answers, setAnswers] = useState({});

  const total = QUIZ_STEPS.length;
  const isCheckout = stepIdx >= total;
  const current = stepIdx >= 0 && stepIdx < total ? QUIZ_STEPS[stepIdx] : null;

  const advance = (key, value) => {
    if (key) setAnswers((a) => ({ ...a, [key]: value }));
    setStepIdx((i) => i + 1);
    if (typeof window !== 'undefined' && window.fbq && key) {
      window.fbq('trackCustom', `QuizStep_${key}`, { value });
    }
  };

  const back = () => setStepIdx((i) => Math.max(-1, i - 1));

  const renderStep = () => {
    if (stepIdx === -1) return <AgeStep onSelect={(v) => advance('age', v)} />;
    if (isCheckout) return <CheckoutStep onBack={back} answers={answers} />;
    switch (current.type) {
      case 'single':
        return <SingleChoiceStep step={current} onSelect={(v) => advance(current.id, v)} onBack={back} />;
      case 'single-icons':
        return <SingleIconStep step={current} onSelect={(v) => advance(current.id, v)} onBack={back} />;
      case 'single-photos':
        return <SinglePhotoStep step={current} onSelect={(v) => advance(current.id, v)} onBack={back} />;
      case 'multi-icons':
        return <MultiChoiceStep step={current} onSubmit={(v) => advance(current.id, v)} onBack={back} />;
      case 'slider':
        return <SliderStep step={current} onSubmit={(v) => advance(current.id, v)} onBack={back} />;
      case 'testimonial':
        return <TestimonialStep step={current} onContinue={() => advance(null)} onBack={back} />;
      case 'loading':
        return <LoadingStep onDone={() => advance(null)} />;
      case 'results':
        return <ResultsStep onContinue={() => advance(null)} onBack={back} />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepIdx}
        initial={initial}
        animate={animate}
        exit={exitV}
        transition={transition}
      >
        {renderStep()}
      </motion.div>
    </AnimatePresence>
  );
}
