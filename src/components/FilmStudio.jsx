import { useState } from 'react';
import { Play, Pause, ChevronDown, Download, RotateCcw, Trash2, Volume2 } from 'lucide-react';

export function FilmStudio({ isDarkTheme }) {
  const [currentView, setCurrentView] = useState('translate');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Kundi');
  const [activeTab, setActiveTab] = useState('translate');

  if (currentView === 'download') {
    return <DownloadView isDarkTheme={isDarkTheme} onBack={() => setCurrentView('translate')} />;
  }

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className={`px-4 md:px-6 py-4 md:py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          <div>
            <h1 className={`text-xl md:text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Film - Studio
            </h1>
            <p className={`text-xs md:text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              Translate
            </p>
          </div>
        </div>

        {/* Translate / Area Tabs */}
        <div className="flex gap-3">
          <button 
            onClick={() => setActiveTab('translate')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'translate'
                ? isDarkTheme
                  ? 'bg-yellow-400 text-black shadow-md'
                  : 'bg-gray-900 text-white shadow-md'
                : isDarkTheme
                  ? 'bg-[#141414] text-gray-400 hover:text-gray-300'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            Translate
          </button>
          <button 
            onClick={() => setActiveTab('area')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'area'
                ? isDarkTheme
                  ? 'bg-yellow-400 text-black shadow-md'
                  : 'bg-gray-900 text-white shadow-md'
                : isDarkTheme
                  ? 'bg-[#141414] text-gray-400 hover:text-gray-300'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            Area
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Top Section - Video Language Selector */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                Video Language
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className={`px-4 py-2 pr-10 rounded-lg border text-sm appearance-none ${
                      isDarkTheme
                        ? 'bg-[#1a1a1a] border-gray-800 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option>Select</option>
                    <option>Kundi</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                    isDarkTheme ? 'text-gray-500' : 'text-gray-600'
                  }`} />
                </div>
                <button className={`p-2 rounded-lg border ${
                  isDarkTheme
                    ? 'bg-[#1a1a1a] border-gray-800 text-gray-400 hover:text-white'
                    : 'bg-white border-gray-300 text-gray-600 hover:text-gray-900'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left - Video Preview */}
              <div className="lg:col-span-5">
                <div className={`rounded-xl overflow-hidden shadow-xl ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-800'}`}>
                  <div className="relative aspect-video">
                    <img
                      src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80"
                      alt="Video Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center hover:bg-white transition-all shadow-xl hover:scale-110"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-black" fill="black" />
                        ) : (
                          <Play className="w-8 h-8 text-black ml-1" fill="black" />
                        )}
                      </button>
                    </div>
                    <div className={`absolute bottom-3 right-3 px-2 py-1 rounded text-xs font-mono ${
                      isDarkTheme ? 'bg-black/70 text-white' : 'bg-black/80 text-white'
                    }`}>
                      01:30:00
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Audio Lines & Controls */}
              <div className="lg:col-span-7 space-y-4">
                {/* Audio Line - Original */}
                <div className={`rounded-xl p-4 ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <button className={`p-2 rounded-lg ${isDarkTheme ? 'bg-gray-800 text-cyan-400' : 'bg-white text-cyan-600'}`}>
                        <Play className="w-4 h-4" />
                      </button>
                      <div>
                        <div className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                          Original
                        </div>
                        <div className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                          Audio Line
                        </div>
                      </div>
                    </div>
                    <div className={`text-xs font-mono ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                      00:00 / 1:12:25
                    </div>
                  </div>
                  {/* Waveform */}
                  <div className={`h-12 rounded-lg overflow-hidden ${isDarkTheme ? 'bg-gray-900/50' : 'bg-gray-200'}`}>
                    <div className="flex items-end h-full gap-[2px] px-2">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${Math.random() * 100}%`,
                            backgroundColor: i < 30 ? '#22c55e' : i < 60 ? '#3b82f6' : '#f97316'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Translation Items */}
                <div className={`rounded-xl p-4 space-y-3 ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
                  <div className="flex items-center justify-between">
                    <div className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      Original 123456
                    </div>
                    <div className="flex gap-2">
                      <button className={`p-1.5 rounded ${isDarkTheme ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-200 text-gray-600'}`}>
                        <Download className="w-4 h-4" />
                      </button>
                      <button className={`p-1.5 rounded ${isDarkTheme ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-200 text-gray-600'}`}>
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button className={`p-1.5 rounded ${isDarkTheme ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-200 text-gray-600'}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className={`p-3 rounded-lg text-sm ${isDarkTheme ? 'bg-gray-900/50 text-gray-300' : 'bg-white text-gray-700'}`}>
                    Translation of a 6 hour short language I -2-
                  </div>

                  <div className={`p-3 rounded-lg text-sm ${isDarkTheme ? 'bg-gray-900/50 text-gray-300' : 'bg-white text-gray-700'}`}>
                    Character #A - 0 = English Language
                  </div>

                  <div className={`p-3 rounded-lg text-sm ${isDarkTheme ? 'bg-gray-900/50 text-gray-300' : 'bg-white text-gray-700'}`}>
                    Translation of a 6 hour Short Language I -0-
                  </div>

                  <div className={`p-3 rounded-lg text-sm ${isDarkTheme ? 'bg-gray-900/50 text-gray-300' : 'bg-white text-gray-700'}`}>
                    Original 111 text
                  </div>

                  <div className={`p-3 rounded-lg text-sm ${isDarkTheme ? 'bg-gray-900/50 text-gray-300' : 'bg-white text-gray-700'}`}>
                    New translation 111 text
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>Total Lines</span>
                      <span className={`text-xs font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>5/2</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-300'}`}>
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>

                  <button className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Repeat</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Audio Lines */}
            <div className="mt-6 space-y-4">
              {/* Original Audio Line */}
              <div className={`rounded-xl p-4 ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <button className={`p-2 rounded-lg ${isDarkTheme ? 'bg-gray-800 text-cyan-400' : 'bg-white text-cyan-600'}`}>
                      <Play className="w-4 h-4" />
                    </button>
                    <div>
                      <div className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                        Original
                      </div>
                      <div className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                        Audio Line
                      </div>
                    </div>
                  </div>
                  <div className={`text-xs font-mono ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                    00:00 / 1:12:25
                  </div>
                </div>
                <div className={`h-16 rounded-lg overflow-hidden ${isDarkTheme ? 'bg-gray-900/50' : 'bg-gray-200'}`}>
                  <div className="flex items-end h-full gap-[1px] px-2">
                    {Array.from({ length: 150 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${Math.random() * 100}%`,
                          backgroundColor: i < 50 ? '#22c55e' : i < 100 ? '#3b82f6' : '#f97316'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Translated Audio Line */}
              <div className={`rounded-xl p-4 ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <button className={`p-2 rounded-lg ${isDarkTheme ? 'bg-gray-800 text-cyan-400' : 'bg-white text-cyan-600'}`}>
                      <Play className="w-4 h-4" />
                    </button>
                    <div>
                      <div className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                        Translated
                      </div>
                      <div className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                        Audio Line
                      </div>
                    </div>
                  </div>
                  <div className={`text-xs font-mono ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                    00:00 / 1:12:25
                  </div>
                </div>
                <div className={`h-16 rounded-lg overflow-hidden ${isDarkTheme ? 'bg-gray-900/50' : 'bg-gray-200'}`}>
                  <div className="flex items-end h-full gap-[1px] px-2">
                    {Array.from({ length: 150 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${Math.random() * 100}%`,
                          backgroundColor: i < 50 ? '#22c55e' : i < 100 ? '#3b82f6' : '#f97316'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Replace Audio Line Button */}
              <div className="flex justify-center">
                <button className={`px-6 py-2 rounded-lg border text-sm font-medium ${
                  isDarkTheme
                    ? 'bg-[#1a1a1a] border-gray-800 text-gray-300 hover:bg-gray-800'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Replace Audio Line
                </button>
              </div>

              {/* Convert Now Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setCurrentView('download')}
                  className="px-12 py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors shadow-lg"
                >
                  Convert Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Download View Component (Image B Layout)
function DownloadView({ isDarkTheme, onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className={`px-4 md:px-6 py-4 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className={`p-2 rounded-lg ${isDarkTheme ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          <div>
            <h1 className={`text-xl md:text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Film - Studio
            </h1>
            <p className={`text-xs md:text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              Translate
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left - Large Video Preview */}
              <div className="lg:col-span-8">
                <div className={`rounded-xl overflow-hidden shadow-2xl ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-800'}`}>
                  <div className="relative aspect-video">
                    <img
                      src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80"
                      alt="Video Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center hover:bg-white transition-all shadow-xl hover:scale-110"
                      >
                        {isPlaying ? (
                          <Pause className="w-10 h-10 text-black" fill="black" />
                        ) : (
                          <Play className="w-10 h-10 text-black ml-1" fill="black" />
                        )}
                      </button>
                    </div>
                    <div className={`absolute bottom-4 right-4 px-3 py-1.5 rounded text-sm font-mono ${
                      isDarkTheme ? 'bg-black/70 text-white' : 'bg-black/80 text-white'
                    }`}>
                      01:30:00
                    </div>
                  </div>
                </div>

                {/* Audio Lines Below Video */}
                <div className="mt-6 space-y-4">
                  {/* Original Audio */}
                  <div className={`rounded-xl p-4 ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <button className={`p-2 rounded-lg ${isDarkTheme ? 'bg-gray-800 text-cyan-400' : 'bg-white text-cyan-600'}`}>
                          <Play className="w-4 h-4" />
                        </button>
                        <div>
                          <div className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                            Original
                          </div>
                          <div className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                            Audio Line
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs font-mono ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                        00:00 / 1:12:25
                      </div>
                    </div>
                    <div className={`h-16 rounded-lg overflow-hidden ${isDarkTheme ? 'bg-gray-900/50' : 'bg-gray-200'}`}>
                      <div className="flex items-end h-full gap-[1px] px-2">
                        {Array.from({ length: 200 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${Math.random() * 100}%`,
                              backgroundColor: i < 70 ? '#22c55e' : i < 140 ? '#3b82f6' : '#f97316'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* New Audio */}
                  <div className={`rounded-xl p-4 ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <button className={`p-2 rounded-lg ${isDarkTheme ? 'bg-gray-800 text-cyan-400' : 'bg-white text-cyan-600'}`}>
                          <Play className="w-4 h-4" />
                        </button>
                        <div>
                          <div className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                            New
                          </div>
                          <div className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                            Audio Line
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs font-mono ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                        00:00 / 1:12:25
                      </div>
                    </div>
                    <div className={`h-16 rounded-lg overflow-hidden ${isDarkTheme ? 'bg-gray-900/50' : 'bg-gray-200'}`}>
                      <div className="flex items-end h-full gap-[1px] px-2">
                        {Array.from({ length: 200 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${Math.random() * 100}%`,
                              backgroundColor: i < 70 ? '#22c55e' : i < 140 ? '#3b82f6' : '#f97316'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Progress Stats */}
              <div className="lg:col-span-4">
                <div className={`rounded-xl p-6 ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
                  <div className="mb-6">
                    <h3 className={`text-lg font-medium mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      Your progress. Your progress.
                    </h3>
                    <div className="space-y-2">
                      <div className={`text-sm ${isDarkTheme ? 'text-green-400' : 'text-green-600'}`}>
                        75% to complete
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-300'}`}>
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                  </div>

                  <div className={`mb-6 p-4 rounded-lg ${isDarkTheme ? 'bg-gray-900/50' : 'bg-white'}`}>
                    <div className={`text-sm mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      Converting time
                    </div>
                    <div className={`text-lg font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      3 m - 21 sec - 45 sec
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </button>

                    <button className={`w-full px-6 py-3 rounded-lg border font-medium transition-colors flex items-center justify-center gap-2 ${
                      isDarkTheme
                        ? 'bg-[#141414] border-gray-800 text-cyan-400 hover:bg-gray-800'
                        : 'bg-white border-gray-300 text-cyan-600 hover:bg-gray-50'
                    }`}>
                      <RotateCcw className="w-5 h-5" />
                      <span>Repeat</span>
                    </button>

                    <button className={`w-full px-6 py-3 rounded-lg border font-medium transition-colors flex items-center justify-center gap-2 ${
                      isDarkTheme
                        ? 'bg-[#141414] border-gray-800 text-red-400 hover:bg-gray-800'
                        : 'bg-white border-gray-300 text-red-600 hover:bg-gray-50'
                    }`}>
                      <Trash2 className="w-5 h-5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
