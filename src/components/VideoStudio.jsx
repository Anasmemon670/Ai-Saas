import { useState, useEffect } from 'react';
import { ChevronDown, Play, Pause, Menu, X, Download, RotateCcw, Trash2, ChevronLeft } from 'lucide-react';

export function VideoStudio({ isDarkTheme, onEditorModeChange }) {
  const [currentView, setCurrentView] = useState('create');
  const [activeTab, setActiveTab] = useState('link');

  // Notify parent when switching to editor mode
  useEffect(() => {
    onEditorModeChange(currentView === 'timeline-editor');
  }, [currentView, onEditorModeChange]);

  const handleConvertNow = () => {
    setCurrentView('timeline-editor');
  };

  const handleBackToCreate = () => {
    setCurrentView('create');
  };

  if (currentView === 'timeline-editor') {
    return <TimelineEditor isDarkTheme={isDarkTheme} onBack={handleBackToCreate} />;
  }

  return <CreateView isDarkTheme={isDarkTheme} activeTab={activeTab} setActiveTab={setActiveTab} onConvert={handleConvertNow} />;
}

// Create View Component (Initial Page - Uses Global Sidebar)
function CreateView({ 
  isDarkTheme, 
  activeTab, 
  setActiveTab,
  onConvert 
}) {
  const [videoLength, setVideoLength] = useState(30);
  const [aspectRatio, setAspectRatio] = useState(50);
  const [uploadedImages, setUploadedImages] = useState([]);

  const imageStyles = [
    { url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&q=80', label: 'Mountain Landscape' },
    { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80', label: 'Forest Scene' },
    { url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&q=80', label: 'Nature View' },
    { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&q=80', label: 'Coastal Scene' },
    { url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&q=80', label: 'Ocean View' },
    { url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&q=80', label: 'Beach Sunset' }
  ];

  const musicTracks = [
    { title: 'SOUNDTRACKS', color: 'from-purple-900 to-purple-700' },
    { title: 'SOUNDTRACKS', color: 'from-purple-800 to-purple-600' },
    { title: 'SOUNDTRACKS', color: 'from-purple-900 to-purple-700' },
    { title: 'EPIC', color: 'from-purple-700 to-purple-500' },
    { title: 'EPIC', color: 'from-black to-purple-900' },
    { title: 'SOUNDTRACKS', color: 'from-purple-900 to-purple-700' }
  ];

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Page Header */}
      <div className={`px-4 md:px-6 py-4 md:py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className={`text-xl md:text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Video Studio
            </h1>
            <p className={`text-xs md:text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              AI Videos Creator
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 md:gap-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab('link')}
            className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'link'
                ? isDarkTheme
                  ? 'bg-white text-black shadow-md'
                  : 'bg-gray-900 text-white shadow-md'
                : isDarkTheme
                ? 'bg-[#141414] text-gray-400 hover:text-gray-300'
                : 'bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span>Create from Link</span>
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'text'
                ? isDarkTheme
                  ? 'bg-white text-black shadow-md'
                  : 'bg-gray-900 text-white shadow-md'
                : isDarkTheme
                ? 'bg-[#141414] text-gray-400 hover:text-gray-300'
                : 'bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Create from Text</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4 md:space-y-5">
              {/* Select Voice */}
              <div>
                <label className={`block text-xs uppercase tracking-wider mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Select Voice
                </label>
                <div className="relative">
                  <select
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm appearance-none ${
                      isDarkTheme
                        ? 'bg-[#1a1a1a] border-gray-800 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option>Don't change</option>
                    <option>Male Voice</option>
                    <option>Female Voice</option>
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                    isDarkTheme ? 'text-gray-500' : 'text-gray-600'
                  }`} />
                </div>
              </div>

              {/* Select Speaker */}
              <div>
                <label className={`block text-xs uppercase tracking-wider mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Select Speaker
                </label>
                <div className="relative">
                  <select
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm appearance-none ${
                      isDarkTheme
                        ? 'bg-[#1a1a1a] border-gray-800 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option>Select one</option>
                    <option>Speaker 1</option>
                    <option>Speaker 2</option>
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                    isDarkTheme ? 'text-gray-500' : 'text-gray-600'
                  }`} />
                </div>
              </div>

              {/* Video Length */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className={`text-xs uppercase tracking-wider ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Video Length
                  </label>
                  <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                    Video length can vary based on Video - Medi...
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={videoLength}
                  onChange={(e) => setVideoLength(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #22c55e 0%, #22c55e ${((videoLength - 10) / 50) * 100}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} ${((videoLength - 10) / 50) * 100}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} 100%)`
                  }}
                />
              </div>

              {/* Aspect Ratio */}
              <div>
                <label className={`block text-xs uppercase tracking-wider mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Aspect Ratio (sensitivity)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={aspectRatio}
                  onChange={(e) => setAspectRatio(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #22c55e 0%, #22c55e ${aspectRatio}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} ${aspectRatio}%, ${isDarkTheme ? '#374151' : '#e5e7eb'} 100%)`
                  }}
                />
              </div>

              {/* Blog Link / Text Input */}
              <div>
                <label className={`block text-xs uppercase tracking-wider mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  {activeTab === 'link' ? 'Blog Link' : 'Text Input'}
                </label>
                <input
                  type="text"
                  placeholder={activeTab === 'link' ? 'Paste your blog URL here' : 'Type or paste text here'}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm ${
                    isDarkTheme
                      ? 'bg-[#1a1a1a] border-gray-800 text-white placeholder-gray-600'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              {/* Prompted Script */}
              <div>
                <label className={`block text-xs uppercase tracking-wider mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Prompted Script
                </label>
                <div className={`relative rounded-lg border ${
                  isDarkTheme ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-300'
                }`}>
                  <textarea
                    rows={5}
                    className={`w-full px-3 py-2.5 rounded-lg text-sm resize-none bg-transparent ${
                      isDarkTheme ? 'text-white placeholder-gray-600' : 'text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="AI-generated script will appear here..."
                  />
                  <button className={`absolute bottom-2 right-2 p-1.5 rounded hover:bg-gray-700 ${
                    isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 md:space-y-5">
              {/* Select Images */}
              <div>
                <label className={`block text-xs uppercase tracking-wider mb-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Select Images
                </label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button className={`flex flex-col items-center gap-2 py-4 px-3 rounded-lg border ${
                    isDarkTheme
                      ? 'bg-[#1a1a1a] border-gray-800 hover:border-gray-700'
                      : 'bg-white border-gray-300 hover:border-gray-400'
                  }`}>
                    <svg className={`w-7 h-7 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div className="text-center">
                      <div className={`text-xs font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                        All Visuals
                      </div>
                      <div className={`text-[10px] ${isDarkTheme ? 'text-gray-600' : 'text-gray-500'}`}>
                        Create your own Image
                      </div>
                    </div>
                  </button>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        if (files.length > 0) {
                          setUploadedImages(files);
                          console.log('Images uploaded:', files.map(f => f.name));
                          // You can add file upload logic here
                        }
                      }}
                      className="hidden"
                    />
                    <div className={`flex flex-col items-center gap-2 py-4 px-3 rounded-lg border transition-colors ${
                      isDarkTheme
                        ? 'bg-[#1a1a1a] border-gray-800 hover:border-gray-700 hover:bg-[#222222]'
                        : 'bg-white border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                    }`}>
                      <svg className={`w-7 h-7 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div className="text-center">
                        <div className={`text-xs font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                          Upload Image
                        </div>
                        <div className={`text-[10px] ${isDarkTheme ? 'text-gray-600' : 'text-gray-500'}`}>
                          Upload your own files
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Graphics Style */}
              <div>
                <label className={`block text-xs uppercase tracking-wider mb-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Graphics Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {imageStyles.map((style, index) => (
                    <div
                      key={index}
                      className={`aspect-video rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-green-500 transition-all ${
                        isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'
                      }`}
                    >
                      <img
                        src={style.url}
                        alt={style.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Select Music */}
              <div>
                <label className={`block text-xs uppercase tracking-wider mb-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Select Music
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {musicTracks.map((track, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-purple-500 transition-all"
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${track.color} flex flex-col items-center justify-center relative p-2`}>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-1">
                          <Play className="w-4 h-4 text-white" fill="white" />
                        </div>
                        <span className="text-white text-[9px] font-medium text-center">{track.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Format */}
          <div className="max-w-7xl mx-auto mt-6">
            <label className={`block text-xs uppercase tracking-wider mb-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              Video Format
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <button className={`px-4 md:px-6 py-2 rounded-lg border text-sm font-medium ${
                isDarkTheme
                  ? 'bg-[#1a1a1a] border-gray-800 text-white hover:bg-gray-800'
                  : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}>
                16:9
              </button>
              <button className={`px-4 md:px-6 py-2 rounded-lg border text-sm font-medium ${
                isDarkTheme
                  ? 'bg-[#1a1a1a] border-gray-800 text-white hover:bg-gray-800'
                  : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}>
                9:16
              </button>
              <button className={`px-4 md:px-6 py-2 rounded-lg border text-sm font-medium flex items-center gap-2 ${
                isDarkTheme
                  ? 'bg-[#1a1a1a] border-gray-800 text-white hover:bg-gray-800'
                  : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}>
                <span>High Size</span>
                <div className="w-4 h-4 bg-green-500 rounded-sm" />
              </button>
            </div>
          </div>

          {/* Convert Now Button */}
          <div className="flex justify-center mt-6 md:mt-8 mb-4">
            <button
              onClick={onConvert}
              className="w-full md:w-auto px-8 md:px-10 py-3 md:py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg font-medium"
            >
              <span>Convert Now</span>
              <Play className="w-5 h-5" fill="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Timeline Editor Component (Editor Page - Uses Mini Sidebar)
function TimelineEditor({ isDarkTheme, onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Social Media Platforms with engagement numbers
  const socialPlatforms = [
    { icon: 'instagram', name: 'Instagram', color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400', engagement: '1:1' },
    { icon: 'tiktok', name: 'TikTok', color: 'bg-black', engagement: '9:16' },
    { icon: 'facebook', name: 'Facebook', color: 'bg-blue-600', engagement: '4:3' },
    { icon: 'youtube', name: 'YouTube', color: 'bg-red-600', engagement: '16:9' },
    { icon: 'yalla', name: 'Yalla', color: 'bg-gradient-to-br from-green-400 to-blue-500', engagement: '1:2' },
    { icon: 'valas', name: 'Valas', color: 'bg-gradient-to-br from-blue-400 to-purple-500', engagement: '3:1' }
  ];

  // Editor Tools
  const editorTools = [
    { id: 'back', icon: 'back', label: 'Back', onClick: onBack },
    { id: 'format', icon: 'format', label: 'Format' },
    { id: 'media', icon: 'media', label: 'Media' },
    { id: 'voices', icon: 'voices', label: 'Voices' },
    { id: 'music', icon: 'music', label: 'Music' },
    { id: 'animation', icon: 'animation', label: 'Animation' },
    { id: 'text', icon: 'text', label: 'Text' },
    { id: 'copywrite', icon: 'copywrite', label: 'Copy-Write' }
  ];

  const renderToolIcon = (iconName, size = 'w-5 h-5') => {
    switch (iconName) {
      case 'back':
        return <ChevronLeft className={size} />;
      case 'format':
        return (
          <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
          </svg>
        );
      case 'media':
        return (
          <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
        );
      case 'voices':
        return (
          <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        );
      case 'music':
        return (
          <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      case 'animation':
        return (
          <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'text':
        return (
          <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'copywrite':
        return (
          <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderSocialIcon = (iconName) => {
    const iconClass = "text-white";
    switch (iconName) {
      case 'instagram':
        return (
          <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'tiktok':
        return (
          <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        );
      case 'facebook':
        return (
          <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return (
          <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <div className={`h-screen flex ${isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Left Sidebar - Desktop & Mobile Drawer */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50
        w-[240px] lg:w-[68px]
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        border-r flex flex-col
        ${isDarkTheme ? 'bg-[#2c2f48] border-gray-800' : 'bg-[#3a3d58] border-gray-700'}
      `}>
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-white font-medium">Editor Tools</h3>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-700 rounded-lg text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Social Media Platforms */}
        <div className="py-3 lg:py-4 space-y-2 border-b border-gray-700">
          {socialPlatforms.map((platform, index) => (
            <div key={index} className="px-3 lg:px-0 lg:flex lg:justify-center">
              <button
                className={`
                  w-full lg:w-12 h-12 rounded-xl ${platform.color}
                  flex items-center lg:justify-center gap-3 lg:gap-0
                  px-3 lg:px-0
                  hover:scale-105 transition-transform shadow-lg
                  text-white
                `}
                title={platform.name}
              >
                {renderSocialIcon(platform.icon)}
                <span className="lg:hidden text-sm font-medium">{platform.name}</span>
                <span className="lg:hidden ml-auto text-xs opacity-75">{platform.engagement}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Editor Tools */}
        <div className="flex-1 py-3 overflow-y-auto">
          {editorTools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => {
                if (tool.onClick) tool.onClick();
                setIsMobileMenuOpen(false);
              }}
              className={`
                w-full py-3 px-3 lg:px-0
                flex items-center lg:flex-col lg:justify-center gap-3 lg:gap-1
                transition-colors
                ${isDarkTheme ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-200 hover:bg-gray-600/50'}
              `}
              title={tool.label}
            >
              {renderToolIcon(tool.icon, 'w-5 h-5 flex-shrink-0')}
              <span className="text-sm lg:text-[8px] text-left lg:text-center leading-tight">{tool.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className={`h-14 px-3 md:px-6 border-b flex items-center justify-between ${
          isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center gap-2 md:gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-lg ${isDarkTheme ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className={`p-1.5 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className={`text-xs md:text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Video Studio
              </h2>
              <p className={`text-[10px] md:text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                AI Videos Creator
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <button className={`p-1.5 md:p-2 rounded-lg transition-colors ${isDarkTheme ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            <button className={`p-1.5 md:p-2 rounded-lg transition-colors ${isDarkTheme ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Video Preview Area */}
        <div className="flex-1 flex flex-col lg:flex-row p-3 md:p-6 gap-3 md:gap-4 overflow-auto">
          {/* Center - Video Preview */}
          <div className="flex-1 flex items-center justify-center">
            <div className={`relative rounded-xl overflow-hidden shadow-2xl w-full max-w-sm ${isDarkTheme ? 'bg-black' : 'bg-gray-900'}`}>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                alt="Video Preview"
                className="w-full aspect-[9/16] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-xl hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 md:w-8 md:h-8 text-black" fill="black" />
                  ) : (
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-black ml-1" fill="black" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right - Action Buttons */}
          <div className="flex lg:flex-col gap-3 justify-center">
            <button 
              className={`flex-1 lg:flex-none p-3 md:p-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 ${
                isDarkTheme ? 'bg-[#1a1a1a] hover:bg-gray-800 border border-gray-800' : 'bg-white hover:bg-gray-50 shadow-md border border-gray-200'
              }`} 
              title="Download"
            >
              <Download className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
              <span className="lg:hidden text-sm text-green-500">Download</span>
            </button>
            <button 
              className={`flex-1 lg:flex-none p-3 md:p-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 ${
                isDarkTheme ? 'bg-[#1a1a1a] hover:bg-gray-800 border border-gray-800' : 'bg-white hover:bg-gray-50 shadow-md border border-gray-200'
              }`} 
              title="Repeat"
            >
              <RotateCcw className={`w-5 h-5 md:w-6 md:h-6 ${isDarkTheme ? 'text-cyan-400' : 'text-cyan-600'}`} />
              <span className={`lg:hidden text-sm ${isDarkTheme ? 'text-cyan-400' : 'text-cyan-600'}`}>Repeat</span>
            </button>
            <button 
              className={`flex-1 lg:flex-none p-3 md:p-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 ${
                isDarkTheme ? 'bg-[#1a1a1a] hover:bg-gray-800 border border-gray-800' : 'bg-white hover:bg-gray-50 shadow-md border border-gray-200'
              }`} 
              title="Delete"
            >
              <Trash2 className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
              <span className="lg:hidden text-sm text-red-500">Delete</span>
            </button>
          </div>
        </div>

        {/* Playback Controls */}
        <div className={`px-3 md:px-6 py-2 md:py-3 border-t ${isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="flex items-center gap-2 md:gap-4">
            <button className={`p-1.5 md:p-2 rounded transition-colors ${isDarkTheme ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-200'}`}>
              {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
            <span className={`text-xs font-mono ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>00:00</span>
            <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-cyan-500 rounded-full" />
            </div>
            <span className={`text-xs font-mono ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>03:00</span>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={`border-t ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="p-2 md:p-4">
            {/* Timeline Header */}
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <div className="flex items-center gap-2 md:gap-4">
                <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>00:00</span>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>Text Will Be Here</span>
                <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>Text</span>
              </div>
              <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>00:01</span>
            </div>

            {/* Timeline Tracks - Horizontally Scrollable */}
            <div className="space-y-2 overflow-x-auto">
              {/* Thumbnail Track with Text Labels */}
              <div className="flex items-center gap-2 min-w-max">
                <div className={`w-6 h-6 md:w-8 md:h-8 flex-shrink-0 rounded flex items-center justify-center ${
                  isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="relative flex-shrink-0">
                      <div className={`w-12 md:w-16 h-12 md:h-16 rounded overflow-hidden ${
                        isDarkTheme ? 'bg-gray-800' : 'bg-gray-300'
                      }`}>
                        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900" />
                      </div>
                      {i % 5 === 0 && (
                        <>
                          <div className="absolute -top-3 left-0 text-[8px] text-gray-500">Text Will Be Here</div>
                          <div className="absolute top-0 left-0 w-0.5 h-full bg-red-500" />
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Blue Audio Waveform Track */}
              <div className="flex items-center gap-2 min-w-max">
                <div className={`w-6 h-6 md:w-8 md:h-8 flex-shrink-0 rounded flex items-center justify-center ${
                  isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div className={`flex-1 h-10 md:h-14 rounded-lg flex items-center px-2 ${
                  isDarkTheme ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <div className="flex items-end gap-[1px] h-6 md:h-10 min-w-max">
                    {Array.from({ length: 200 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-[2px] md:w-1 bg-blue-500 rounded-sm flex-shrink-0"
                        style={{ height: `${Math.random() * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Orange Audio Waveform Track */}
              <div className="flex items-center gap-2 min-w-max">
                <div className={`w-6 h-6 md:w-8 md:h-8 flex-shrink-0 rounded flex items-center justify-center ${
                  isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div className={`flex-1 h-10 md:h-14 rounded-lg flex items-center px-2 ${
                  isDarkTheme ? 'bg-orange-500/20' : 'bg-orange-100'
                }`}>
                  <div className="flex items-end gap-[1px] h-6 md:h-10 min-w-max">
                    {Array.from({ length: 200 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-[2px] md:w-1 bg-orange-500 rounded-sm flex-shrink-0"
                        style={{ height: `${Math.random() * 100}%` }}
                      />
                    ))}
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
