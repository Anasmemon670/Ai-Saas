import { useState } from 'react';
import { Play, Pause, Settings } from 'lucide-react';

export function SystemSettings({ isDarkTheme }) {
  const [playingId, setPlayingId] = useState(null);

  const voices = [
    { id: 1, title: 'Voice Title', type: 'Male Voice', duration: '00:30', avatar: '👨' },
    { id: 2, title: 'Voice Title', type: 'Male Voice', duration: '00:15', avatar: '👨' },
    { id: 3, title: 'Voice Title', type: 'Male Voice', duration: '00:45', avatar: '👨' },
    { id: 4, title: 'Voice Title', type: 'Male Voice', duration: '01:00', avatar: '👨' },
    { id: 5, title: 'Voice Title', type: 'Male Voice', duration: '00:20', avatar: '👨' },
    { id: 6, title: 'Voice Title', type: 'Male Voice', duration: '00:35', avatar: '👨' },
    { id: 7, title: 'Voice Title', type: 'Male Voice', duration: '00:50', avatar: '👨' },
    { id: 8, title: 'Voice Title', type: 'Male Voice', duration: '01:15', avatar: '👨' },
    { id: 9, title: 'Voice Title', type: 'Male Voice', duration: '00:25', avatar: '👨' }
  ];

  const togglePlay = (id) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Page Header */}
      <div className={`px-4 md:px-6 py-4 md:py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <Settings className="w-8 h-8 text-yellow-400" />
          </div>
          <div>
            <h1 className={`text-xl md:text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              System
            </h1>
            <p className={`text-xs md:text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              System Settings
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl">
            {/* AI Voices Card */}
            <div className={`rounded-2xl shadow-lg overflow-hidden ${
              isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-white'
            }`}>
              {/* Card Header */}
              <div className={`px-6 py-4 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-100'}`}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <h2 className={`text-lg font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    AI - Voices
                  </h2>
                </div>
              </div>

              {/* Voices List */}
              <div className="p-4 md:p-6 space-y-3">
                {voices.map((voice) => (
                  <div
                    key={voice.id}
                    className={`rounded-xl p-4 transition-all hover:shadow-md ${
                      isDarkTheme 
                        ? 'bg-[#141414] hover:bg-[#1e1e1e]' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
                        isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'
                      }`}>
                        {voice.avatar}
                      </div>

                      {/* Voice Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className={`text-sm font-medium truncate ${
                              isDarkTheme ? 'text-white' : 'text-gray-900'
                            }`}>
                              {voice.title}
                            </h3>
                            <p className={`text-xs ${
                              isDarkTheme ? 'text-gray-500' : 'text-gray-600'
                            }`}>
                              {voice.type}
                            </p>
                          </div>

                          {/* Play Button */}
                          <button
                            onClick={() => togglePlay(voice.id)}
                            className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center flex-shrink-0 transition-colors"
                          >
                            {playingId === voice.id ? (
                              <Pause className="w-4 h-4 text-white" fill="white" />
                            ) : (
                              <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                            )}
                          </button>

                          {/* Duration */}
                          <div className={`text-xs font-mono flex-shrink-0 ${
                            isDarkTheme ? 'text-gray-500' : 'text-gray-600'
                          }`}>
                            {voice.duration}
                          </div>
                        </div>

                        {/* Waveform */}
                        <div className="flex items-center gap-[2px] h-6 overflow-x-auto">
                          {Array.from({ length: 80 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-[3px] rounded-full flex-shrink-0 transition-all"
                              style={{
                                height: `${Math.random() * 100}%`,
                                backgroundColor: playingId === voice.id 
                                  ? i < 30 ? '#06b6d4' : '#6366f1'
                                  : isDarkTheme ? '#374151' : '#d1d5db'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

