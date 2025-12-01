import { useState } from 'react';
import { ChevronDown, Play, Square, Download, Volume2, AlertCircle, X, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function TTSTrainingPage({ isDarkTheme }) {
  const [showAlert, setShowAlert] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [strong, setStrong] = useState(70);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textContent, setTextContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.');

  const historyItems = [
    { id: '001', time: '10:25', duration: '00:10' },
    { id: '004', time: '10:34', duration: '00:10' },
    { id: '003', time: '10:32', duration: '00:10' },
    { id: '002', time: '10:32', duration: '00:10' },
    { id: '005', time: '10:20', duration: '00:10' },
  ];

  return (
    <div className="p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Main Content - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Control Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </div>

          {/* Sliders Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Speed Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
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
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                style={{
                  background: `linear-gradient(to right, #22c55e 0%, #22c55e ${speed}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} ${speed}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} 100%)`
                }}
              />
            </div>

            {/* Strong Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
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
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                style={{
                  background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${strong}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} ${strong}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} 100%)`
                }}
              />
            </div>
          </div>

          {/* Training ID Card */}
          <div className={`p-6 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Training ID: 000101
              </h3>
              <button
                onClick={() => setShowAlert(true)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  isDarkTheme
                    ? 'border-gray-700 hover:bg-gray-800 text-gray-300'
                    : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}
              >
                Train Own Voice
              </button>
            </div>

            {/* Audio Waveform */}
            <div className={`p-4 rounded-lg mb-4 ${isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-3 mb-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  {isPlaying ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <div className="flex-1 h-12 flex items-end gap-0.5">
                  {Array.from({ length: 60 }).map((_, i) => (
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
              <div className="flex gap-2 justify-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-2 rounded-lg ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsPlaying(false)}
                  className={`p-2 rounded-lg ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
                >
                  <Square className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    console.log('Downloading audio...');
                    // Add download logic here
                  }}
                  className={`p-2 rounded-lg ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Text Content - Editable Textarea */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                Enter Text for TTS
              </label>
              <textarea
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder="Type or paste your text here for text-to-speech conversion..."
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border text-sm leading-relaxed resize-none ${
                  isDarkTheme
                    ? 'bg-[#0a0a0a] border-gray-800 text-gray-300 placeholder-gray-600 focus:border-gray-700 focus:outline-none'
                    : 'bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:outline-none'
                }`}
              />
              <div className="mt-2 flex items-center justify-between">
                <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                  {textContent.length} characters
                </span>
                <button
                  onClick={() => setTextContent('')}
                  className={`text-xs ${isDarkTheme ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Audio Controls Bottom */}
            <div className="mt-6 flex items-center gap-4">
              <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                Attempt voice trained of file
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    console.log('Training own voice...');
                    // Add train voice logic here
                  }}
                  className={`px-4 py-2 rounded-lg text-sm ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
                >
                  Train Own Voice
                </button>
                <button 
                  onClick={() => {
                    console.log('Loading public trained file...');
                    // Add load public file logic here
                  }}
                  className={`px-4 py-2 rounded-lg text-sm ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
                >
                  Public Trained File
                </button>
                <button 
                  onClick={() => {
                    console.log('Downloading trained file...');
                    // Add download logic here
                  }}
                  className={`px-4 py-2 rounded-lg text-sm ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
                >
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button 
            onClick={() => {
              console.log('Saving TTS training settings...');
              // Add save logic here
            }}
            className={`w-full py-3 rounded-lg transition-colors ${
              isDarkTheme
                ? 'bg-[#141414] hover:bg-gray-800 border border-gray-800 text-white'
                : 'bg-white hover:bg-gray-50 border border-gray-300 text-gray-900'
            }`}
          >
            Save and Close
          </button>
        </div>

        {/* Right Sidebar - 1/3 width */}
        <div className="space-y-6">
          {/* New TTS Task Button */}
          <button
            onClick={() => setShowNewTask(true)}
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            New TTS Task
          </button>

          {/* History Section */}
          <div className={`p-4 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                History ID: 000101
              </h3>
              <span className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                Date lys: 0915
              </span>
            </div>

            <div className="space-y-2">
              {historyItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.id}
                    </span>
                    <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.time}
                    </span>
                    <button 
                      onClick={() => {
                        console.log('Playing history item:', item.id);
                        // Add play logic here
                      }}
                      className="p-1"
                    >
                      <Play className="w-3 h-3 text-green-500" />
                    </button>
                    <div className="flex-1 h-6 flex items-end gap-0.5">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-green-500 rounded-sm"
                          style={{ height: `${Math.random() * 100}%` }}
                        />
                      ))}
                    </div>
                    <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                      {item.duration}
                    </span>
                  </div>
                  <button 
                    onClick={() => {
                      console.log('Downloading history item:', item.id);
                      // Add download logic here
                    }}
                    className={`p-1 ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded`}
                  >
                    <Download className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* TTS Info Card */}
          <div className={`p-6 rounded-xl border text-center ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
              </svg>
            </div>
            <h4 className={`mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              TTS
            </h4>
            <p className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              Save To Complete
            </p>
            <p className={`text-xs mt-2 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
              Download STT Task
            </p>
          </div>
        </div>
      </div>

      {/* Alert Modal */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowAlert(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-sm rounded-2xl p-6 text-center ${
                isDarkTheme ? 'bg-[#141414]' : 'bg-white'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className={`text-xl mb-3 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                ⚠️ Alert !!
              </h3>
              <p className={`text-sm mb-6 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                Your about to delete this Ads - TITLE OF ADS" are you to remove this Ads
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAlert(false)}
                  className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors"
                >
                  No
                </button>
                <button
                  onClick={() => setShowAlert(false)}
                  className="flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition-colors"
                >
                  Yes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* New TTS Task Modal */}
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
                  Add TTS Task
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
                        voiceoverd.wav
                      </p>
                      <p className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                        1919-10-00 00:10
                      </p>
                    </div>
                    <span className="text-green-500 text-xs">• Complete</span>
                  </div>
                </div>

                <div className={`p-4 rounded-lg border ${isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-300'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Volume2 className="w-5 h-5 text-yellow-500" />
                    <div className="flex-1">
                      <p className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                        realvoice.wav
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
