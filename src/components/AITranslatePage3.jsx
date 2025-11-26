import { useState, useEffect } from 'react';
import { Play, Download, Upload, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function AITranslatePage3({ isDarkTheme, setStep }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Uploading Video',
    'Processing Audio',
    'Translating Content',
    'Generating Output',
    'Finalizing',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepIndex = Math.floor((progress / 100) * steps.length);
    setCurrentStep(Math.min(stepIndex, steps.length - 1));
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col"
    >
      {/* Header */}
      <div className={`px-6 py-4 border-b flex items-center gap-4 ${
        isDarkTheme ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <button
          onClick={() => setStep(2)}
          className={`p-2 rounded-lg ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
        >
          <ArrowLeft className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
        </button>
        <div>
          <h1 className={`text-xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
            AI Translate - Training
          </h1>
          <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Converting or training
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          {/* Video Preview with Play Button */}
          <div className="mb-12">
            <div className={`aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden ${
              isDarkTheme ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-200 to-gray-100'
            }`}>
              <div className="text-center">
                <div className="text-8xl mb-4 opacity-30" style={{ fontWeight: 900 }}>
                  HALO
                </div>
              </div>
              
              {/* Large Play Button */}
              <button className="absolute inset-0 m-auto w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110">
                <Play className="w-10 h-10 text-white ml-2" fill="white" />
              </button>
            </div>
          </div>

          {/* Conversion Progress */}
          <div className={`p-8 rounded-2xl border mb-8 ${
            isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Conversion Progress
              </h3>
              <span className={`text-2xl ${isDarkTheme ? 'text-green-400' : 'text-green-600'}`}>
                {progress}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className={`h-3 rounded-full overflow-hidden mb-6 ${
              isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'
            }`}>
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-green-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Step Indicators */}
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    index < currentStep
                      ? 'bg-green-500'
                      : index === currentStep
                      ? 'bg-yellow-400'
                      : isDarkTheme
                      ? 'bg-gray-800'
                      : 'bg-gray-200'
                  }`}>
                    {index < currentStep && (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {index === currentStep && (
                      <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                    )}
                  </div>
                  <span className={`${
                    index <= currentStep
                      ? isDarkTheme ? 'text-white' : 'text-gray-900'
                      : isDarkTheme ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Files Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Original Audio */}
            <div className={`p-6 rounded-2xl border ${
              isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Original Setting
                </h4>
              </div>
              
              <div className="space-y-3">
                {['Download Audio', 'Download File', 'Savvy Fill'].map((label, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      isDarkTheme
                        ? 'border-gray-800 hover:bg-gray-800'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Download className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      {label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Audio Waveform */}
              <div className="mt-6">
                <div className="flex items-end gap-0.5 h-20">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${
                        i % 3 === 0 ? 'bg-green-500' : i % 2 === 0 ? 'bg-cyan-500' : 'bg-purple-500'
                      }`}
                      style={{ height: `${Math.random() * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Translated Audio */}
            <div className={`p-6 rounded-2xl border ${
              isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Translated Setting
                </h4>
              </div>
              
              <div className="space-y-3">
                {['Download Audio', 'Download File', 'Upload Fill'].map((label, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      isDarkTheme
                        ? 'border-gray-800 hover:bg-gray-800'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {index === 2 ? (
                      <Upload className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                    ) : (
                      <Download className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                    )}
                    <span className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      {label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Audio Waveform */}
              <div className="mt-6">
                <div className="flex items-end gap-0.5 h-20">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${
                        i % 3 === 0 ? 'bg-orange-500' : i % 2 === 0 ? 'bg-pink-500' : 'bg-red-500'
                      }`}
                      style={{ height: `${Math.random() * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

