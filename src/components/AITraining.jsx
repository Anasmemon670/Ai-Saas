import { useState } from 'react';
import { TTSTrainingPage } from './training/TTSTrainingPage';
import { STTTrainingPage } from './training/STTTrainingPage';
import { CloneVoicesPage } from './training/CloneVoicesPage';

export function AITraining({ isDarkTheme }) {
  const [activeTab, setActiveTab] = useState('tts');

  return (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <div className={`px-6 py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">TTS</span>
            </div>
          </div>
          <div>
            <h1 className={`text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              TTS - STT Training
            </h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab('tts')}
            className={`px-6 py-2.5 rounded-lg transition-all ${
              activeTab === 'tts'
                ? isDarkTheme
                  ? 'bg-[#141414] text-white border border-gray-700'
                  : 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                : isDarkTheme
                ? 'text-gray-400 hover:text-gray-300'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            TTS - Training
          </button>
          <button
            onClick={() => setActiveTab('stt')}
            className={`px-6 py-2.5 rounded-lg transition-all ${
              activeTab === 'stt'
                ? isDarkTheme
                  ? 'bg-[#141414] text-white border border-gray-700'
                  : 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                : isDarkTheme
                ? 'text-gray-400 hover:text-gray-300'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            STT - Training
          </button>
          <button
            onClick={() => setActiveTab('clone')}
            className={`px-6 py-2.5 rounded-lg transition-all ${
              activeTab === 'clone'
                ? isDarkTheme
                  ? 'bg-[#141414] text-white border border-gray-700'
                  : 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                : isDarkTheme
                ? 'text-gray-400 hover:text-gray-300'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Clone Voices
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'tts' && <TTSTrainingPage isDarkTheme={isDarkTheme} />}
        {activeTab === 'stt' && <STTTrainingPage isDarkTheme={isDarkTheme} />}
        {activeTab === 'clone' && <CloneVoicesPage isDarkTheme={isDarkTheme} />}
      </div>
    </div>
  );
}

