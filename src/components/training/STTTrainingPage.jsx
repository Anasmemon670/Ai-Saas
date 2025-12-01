import { useState } from 'react';
import { ChevronDown, Play, Volume2, X, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function STTTrainingPage({ isDarkTheme }) {
  const [showNewTask, setShowNewTask] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [strong, setStrong] = useState(70);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Control Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Select Voice */}
          <div>
            <label className={`flex items-center gap-2 text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              <Volume2 className="w-4 h-4" />
              Select a Voice
            </label>
            <div className="relative">
              <select
                className={`w-full px-4 py-2.5 rounded-lg border appearance-none text-sm ${
                  isDarkTheme
                    ? 'bg-[#141414] border-gray-800 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option>Male Name</option>
                <option>Female Name</option>
              </select>
              <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                isDarkTheme ? 'text-gray-400' : 'text-gray-600'
              }`} />
            </div>
          </div>

          {/* Select Emotions */}
          <div>
            <label className={`flex items-center gap-2 text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Select Emotions
            </label>
            <div className="relative">
              <select
                className={`w-full px-4 py-2.5 rounded-lg border appearance-none text-sm ${
                  isDarkTheme
                    ? 'bg-[#141414] border-gray-800 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option>None - Emotions</option>
                <option>Happy</option>
                <option>Sad</option>
              </select>
              <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                isDarkTheme ? 'text-gray-400' : 'text-gray-600'
              }`} />
            </div>
          </div>

          {/* Bitrate */}
          <div>
            <label className={`flex items-center gap-2 text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              Bitrate
            </label>
            <input
              type="text"
              value="192k"
              readOnly
              className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
                isDarkTheme
                  ? 'bg-[#141414] border-gray-800 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>

          {/* Speed Label */}
          <div>
            <label className={`text-sm mb-2 block ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              Speed
            </label>
            <div className="h-[42px] flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">{speed}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sliders Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-end">
          {/* Speed Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                Speed
              </label>
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">{speed}</span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #22c55e 0%, #22c55e ${speed}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} ${speed}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} 100%)`
              }}
            />
          </div>

          {/* Strong Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                Strong
              </label>
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs">{strong}</span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={strong}
              onChange={(e) => setStrong(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${strong}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} ${strong}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} 100%)`
              }}
            />
          </div>
        </div>

        {/* Main Content Card */}
        <div className={`p-8 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
          {/* Training ID Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Training ID: 000101
            </h3>
            <button
              onClick={() => setShowNewTask(true)}
              className="px-4 py-2 text-sm text-green-500 hover:text-green-600 transition-colors"
            >
              New STT Task →
            </button>
          </div>

          {/* Audio Waveform */}
          <div className={`p-6 rounded-lg mb-6 ${isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <div className="flex-1 h-16 flex items-end gap-0.5">
                {Array.from({ length: 80 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-green-500 rounded-sm"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
              <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                00:10
              </span>
            </div>
          </div>

          {/* Text Content Area */}
          <div className={`p-6 rounded-lg border min-h-[200px] ${
            isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-300'
          }`}>
            <p className={`text-sm leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={`text-sm leading-relaxed mt-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        {/* Save Button */}
        <button 
          onClick={() => {
            console.log('Saving STT training settings...');
            // Add save logic here
          }}
          className={`w-full mt-6 py-3 rounded-lg transition-colors ${
            isDarkTheme
              ? 'bg-[#141414] hover:bg-gray-800 border border-gray-800 text-white'
              : 'bg-white hover:bg-gray-50 border border-gray-300 text-gray-900'
          }`}
        >
          Save and Close
        </button>
      </div>

      {/* New STT Task Modal */}
      <AnimatePresence>
        {showNewTask && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowNewTask(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-md rounded-2xl p-6 ${
                isDarkTheme ? 'bg-[#141414]' : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Add STT Task
                </h3>
                <button onClick={() => setShowNewTask(false)}>
                  <X className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>

              <div className="space-y-4">
                <div className={`p-4 rounded-lg border ${isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-300'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Volume2 className="w-5 h-5 text-green-500" />
                    <div className="flex-1">
                      <p className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                        Embdoterc.wav
                      </p>
                      <p className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                        1919-10-00 00:10
                      </p>
                    </div>
                    <span className="text-yellow-500 text-xs">• Uploading...</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowNewTask(false)}
                className={`w-full mt-6 py-3 rounded-lg ${
                  isDarkTheme
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
              >
                Add and Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
