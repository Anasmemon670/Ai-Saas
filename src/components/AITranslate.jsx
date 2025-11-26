import { useState } from 'react';
import { AITranslatePage1 } from './AITranslatePage1';
import { AITranslatePage2 } from './AITranslatePage2';
import { AITranslatePage3 } from './AITranslatePage3';

export function AITranslate({ isDarkTheme }) {
  const [step, setStep] = useState(1);

  return (
    <div className="h-full">
      {step === 1 && <AITranslatePage1 isDarkTheme={isDarkTheme} setStep={setStep} />}
      {step === 2 && <AITranslatePage2 isDarkTheme={isDarkTheme} setStep={setStep} />}
      {step === 3 && <AITranslatePage3 isDarkTheme={isDarkTheme} setStep={setStep} />}
    </div>
  );
}

