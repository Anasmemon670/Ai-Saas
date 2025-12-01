import { useState } from 'react';
import { Play, Pause, Download, AlertCircle, X, Upload as UploadIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CloneVoicesPage({ isDarkTheme }) {
  const [showSave, setShowSave] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [playing, setPlaying] = useState(null);
  const [strong, setStrong] = useState(65);
  const [isPlaying, setIsPlaying] = useState(false);

  const uploadedVoices = [
    { id: '001', time: '10:29', duration: '00/00' },
    { id: '002', time: '10:29', duration: '00/00' },
    { id: '003', time: '10:29', duration: '00/00' },
  ];

  const aiVoices = [
    { id: 1, name: 'Yasuo Title', subtitle: 'Male Voice', duration: '00:00', color: 'bg-purple-500' },
    { id: 2, name: 'Yasuo Title', subtitle: 'Male Voice', duration: '00:00', color: 'bg-blue-500' },
    { id: 3, name: 'Yasuo Title', subtitle: 'Male Voice', duration: '00:00', color: 'bg-pink-500' },
    { id: 4, name: 'Yasuo Title', subtitle: 'Male Voice', duration: '00:00', color: 'bg-green-500' },
    { id: 5, name: 'Yasuo Title', subtitle: 'Male Voice', duration: '00:00', color: 'bg-orange-500' },
    { id: 6, name: 'Yasuo Title', subtitle: 'Male Voice', duration: '00:00', color: 'bg-cyan-500' },
    { id: 7, name: 'Yasuo Title', subtitle: 'Male Voice', duration: '00:00', color: 'bg-red-500' },
    { id: 8, name: 'Yasuo Title', subtitle: 'Male Voice', duration: '00:00', color: 'bg-yellow-500' },
  ];

  return (
    <div className="p-6 lg:p-8">
      {/* Top Link Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="https://voicover.com/"
          className={`w-full px-4 py-3 rounded-lg border ${
            isDarkTheme
              ? 'bg-[#141414] border-gray-800 text-white placeholder-gray-500'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
          }`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Uploaded Voices */}
        <div className="space-y-4">
          {/* Uploaded Voices Section */}
          <div className={`p-6 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <h3 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Uploaded Voices
              </h3>
            </div>

            <div className="space-y-2 mb-4">
              {uploadedVoices.map((voice) => (
                <div
                  key={voice.id}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-50'
                  }`}
                >
                  <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    {voice.id}
                  </span>
                  <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    {voice.time}
                  </span>
                  <button
                    onClick={() => setPlaying(playing === voice.id ? null : voice.id)}
                    className="p-1"
                  >
                    {playing === voice.id ? (
                      <Pause className="w-4 h-4 text-green-500" />
                    ) : (
                      <Play className="w-4 h-4 text-green-500" />
                    )}
                  </button>
                  <span className={`text-xs ml-auto ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                    {voice.duration}
                  </span>
                  <button 
                    onClick={() => {
                      console.log('Downloading uploaded voice:', voice.id);
                      // Add download logic here
                    }}
                    className={`p-1 ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded`}
                  >
                    <Download className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                console.log('Saving uploaded voices...');
                // Add save logic here
              }}
              className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-colors"
            >
              Save Load
            </button>
          </div>

          {/* Voice Output Section */}
          <div className={`p-6 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
            <div className="flex items-center gap-2 mb-4">
              <UploadIcon className="w-5 h-5" />
              <h3 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Voice Output
              </h3>
            </div>

            <div className={`p-4 rounded-lg border mb-4 ${isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-300'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  86% 10 complete
                </span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <div className="h-full bg-green-500" style={{ width: '86%' }} />
              </div>
              <p className={`text-xs mt-2 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                + 32 min
              </p>
            </div>

            <div className={`p-4 rounded-lg text-center ${isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
              <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                "We will be able to add more text here just to test the output We there are need Text Field to write or to past the text here"
              </p>
            </div>
          </div>
        </div>

        {/* Middle Column - Adjustment */}
        <div>
          <div className={`p-6 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h3 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Adjustment
              </h3>
            </div>

            {/* Strong Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                  Strong
                </label>
                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                  <span className="text-white text-sm">{strong}</span>
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

            {/* Audio Waveform */}
            <div className={`p-6 rounded-lg ${isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-4 mb-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <div className="flex-1 h-16 flex items-end gap-0.5">
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
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowSave(true)}
                className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => setShowAlert(true)}
                className={`flex-1 py-3 rounded-lg border transition-colors ${
                  isDarkTheme
                    ? 'border-gray-700 hover:bg-gray-800 text-white'
                    : 'border-gray-300 hover:bg-gray-50 text-gray-900'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - AI Voices */}
        <div>
          <div className={`p-6 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <h3 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  AI - Voices
                </h3>
              </div>
              <button
                onClick={() => setShowDownload(true)}
                className="text-sm text-green-500 hover:text-green-600"
              >
                Download
              </button>
            </div>

            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {aiVoices.map((voice) => (
                <div
                  key={voice.id}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full ${voice.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs">AI</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      {voice.name}
                    </p>
                    <p className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                      {voice.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setPlaying(playing === `ai-${voice.id}` ? null : `ai-${voice.id}`)}
                    className="p-2"
                  >
                    {playing === `ai-${voice.id}` ? (
                      <Pause className="w-4 h-4 text-green-500" />
                    ) : (
                      <Play className="w-4 h-4 text-green-500" />
                    )}
                  </button>
                  <div className="flex items-end gap-0.5 w-16 h-6">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-green-500 rounded-sm"
                        style={{ height: `${Math.random() * 100}%` }}
                      />
                    ))}
                  </div>
                  <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                    {voice.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Save Modal */}
      <AnimatePresence>
        {showSave && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowSave(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-sm rounded-2xl p-6 ${
                isDarkTheme ? 'bg-[#141414]' : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Save
                </h3>
                <button onClick={() => setShowSave(false)}>
                  <X className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={`block text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    Voice Type
                  </label>
                  <input
                    type="text"
                    placeholder="male, female, child"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkTheme
                        ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    Voice Title
                  </label>
                  <input
                    type="text"
                    placeholder="Write voice name here"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkTheme
                        ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>
              </div>

              <button
                onClick={() => setShowSave(false)}
                className="w-full mt-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                Save and Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                Your about to delete this Ads - "TITLE OF ADS" are you to remove this Ads
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
                  className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
                >
                  Yes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Modal */}
      <AnimatePresence>
        {showDownload && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowDownload(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-sm rounded-2xl p-6 ${
                isDarkTheme ? 'bg-[#141414]' : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Download
                </h3>
                <button onClick={() => setShowDownload(false)}>
                  <X className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>

              <div className="space-y-3">
                {['Download', 'Download', 'Remove'].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (option === 'Remove') {
                        if (window.confirm('Are you sure you want to remove this?')) {
                          console.log('Removing...');
                          setShowDownload(false);
                        }
                      } else {
                        console.log(option);
                        // Add download logic here
                        setShowDownload(false);
                      }
                    }}
                    className={`w-full flex items-center gap-3 p-4 rounded-lg border transition-colors ${
                      isDarkTheme
                        ? 'border-gray-800 hover:bg-[#0a0a0a]'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Download className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
