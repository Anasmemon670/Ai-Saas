import { useState } from 'react';
import { ChevronDown, Volume2, Upload, Play, Download, RotateCcw, Trash2, Mic, Pause } from 'lucide-react';
import { motion } from 'motion/react';

export function AIStories({ isDarkTheme }) {
  const [activeTab, setActiveTab] = useState('text');
  const [speed, setSpeed] = useState(50);
  const [strong, setStrong] = useState(70);
  const [isRecording, setIsRecording] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [progress, setProgress] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <div className={`px-6 py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className={`text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              AI - Storie
            </h1>
            <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              Image to Video
            </p>
          </div>
        </div>

        {/* Control Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {/* Select Voice */}
          <div>
            <label className={`flex items-center gap-2 text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              <Volume2 className="w-4 h-4" />
              Select a Voice
            </label>
            <div className="relative">
              <select
                className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${
                  isDarkTheme
                    ? 'bg-[#141414] border-gray-800 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option>Male Name</option>
                <option>Female Name</option>
              </select>
              <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
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
                className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${
                  isDarkTheme
                    ? 'bg-[#141414] border-gray-800 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option>None - Emotions</option>
                <option>Happy</option>
                <option>Sad</option>
              </select>
              <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
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
              className={`w-full px-3 py-2 rounded-lg border text-sm ${
                isDarkTheme
                  ? 'bg-[#141414] border-gray-800 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>

          {/* Speed */}
          <div>
            <label className={`flex items-center gap-2 text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Speed
            </label>
            <div className="relative">
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
              <div 
                className="absolute -top-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                style={{ left: `calc(${speed}% - 10px)` }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* Strong */}
          <div>
            <label className={`flex items-center gap-2 text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Strong
            </label>
            <div className="relative">
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
              <div 
                className="absolute -top-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center"
                style={{ left: `calc(${strong}% - 10px)` }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Upload Image */}
          <div className="lg:col-span-3">
            <div 
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/png,image/jpeg,image/jpg';
                input.onchange = (e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setSelectedImage(event.target.result);
                    };
                    reader.readAsDataURL(file);
                  }
                };
                input.click();
              }}
              className={`p-6 rounded-xl border-2 border-dashed h-[400px] flex flex-col items-center justify-center cursor-pointer hover:border-green-500 transition-colors ${
                isDarkTheme ? 'border-gray-700 bg-[#141414]' : 'border-gray-300 bg-gray-50'
              }`}
            >
              {selectedImage ? (
                <img src={selectedImage} alt="Uploaded" className="w-full h-full object-contain rounded-lg" />
              ) : (
                <div className="text-center">
                  <Upload className={`w-12 h-12 mx-auto mb-4 ${isDarkTheme ? 'text-gray-600' : 'text-gray-400'}`} />
                  <h3 className={`mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Upload Image
                  </h3>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                    PNG
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Middle Column - Text/Audio Input */}
          <div className="lg:col-span-5">
            <div className={`rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
              {/* Tabs */}
              <div className={`flex border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
                <button
                  onClick={() => setActiveTab('text')}
                  className={`flex-1 px-6 py-3 text-sm transition-colors ${
                    activeTab === 'text'
                      ? isDarkTheme
                        ? 'border-b-2 border-green-500 text-white'
                        : 'border-b-2 border-green-500 text-gray-900'
                      : isDarkTheme
                      ? 'text-gray-400 hover:text-gray-300'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Use Text
                </button>
                <button
                  onClick={() => setActiveTab('audio')}
                  className={`flex-1 px-6 py-3 text-sm transition-colors ${
                    activeTab === 'audio'
                      ? isDarkTheme
                        ? 'border-b-2 border-green-500 text-white'
                        : 'border-b-2 border-green-500 text-gray-900'
                      : isDarkTheme
                      ? 'text-gray-400 hover:text-gray-300'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Use Audio
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {activeTab === 'text' ? (
                  <>
                    <textarea
                      value={textContent}
                      onChange={(e) => setTextContent(e.target.value)}
                      placeholder="Type or Speak or Copy and Pase your text Here..."
                      className={`w-full h-[280px] p-4 rounded-lg border resize-none text-sm ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-600'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </>
                ) : (
                  <div className={`h-[280px] rounded-lg border flex flex-col items-center justify-center ${
                    isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-300'
                  }`}>
                    {/* Audio Waveform */}
                    <div className="flex items-center gap-2 mb-6">
                      <button
                        onClick={() => setIsRecording(!isRecording)}
                        className={`p-3 rounded-full ${
                          isRecording ? 'bg-red-500' : 'bg-green-500'
                        } hover:opacity-90 transition-opacity`}
                      >
                        <Mic className="w-5 h-5 text-white" />
                      </button>
                      <div className="flex items-center gap-1 h-12">
                        {Array.from({ length: 40 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 rounded-full ${
                              isRecording ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                            }`}
                            style={{ 
                              height: `${isRecording ? Math.random() * 100 : 20}%`,
                              animationDelay: `${i * 50}ms`
                            }}
                          />
                        ))}
                      </div>
                      <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                        00:00
                      </span>
                    </div>
                  </div>
                )}

                {/* Create Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!textContent.trim() && activeTab === 'text') {
                      alert('Please enter some text to create the story');
                      return;
                    }
                    setIsCreating(true);
                    setProgress(0);
                    // Simulate progress
                    const interval = setInterval(() => {
                      setProgress((prev) => {
                        if (prev >= 100) {
                          clearInterval(interval);
                          setIsCreating(false);
                          return 100;
                        }
                        return prev + 2;
                      });
                    }, 100);
                  }}
                  disabled={isCreating}
                  className={`w-full mt-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    isCreating ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span>{isCreating ? 'Creating...' : 'Create'}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="lg:col-span-4">
            <div className={`rounded-xl border overflow-hidden ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
              {/* Video Preview */}
              <div className="aspect-[9/16] bg-gradient-to-br from-gray-900 to-gray-800 relative">
                <img
                  src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600&q=80"
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-xs">{progress}% to complete</span>
                    <span className="text-white text-xs">{Math.ceil((100 - progress) / 10)} min</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-400">
                    <span>Converting time:</span>
                    <span>3/14</span>
                    <span>25 sec</span>
                    <span>45 Sec</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 space-y-2">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (progress < 100) {
                      alert('Please wait for the video to complete processing');
                      return;
                    }
                    // Create a download link
                    const link = document.createElement('a');
                    link.href = selectedImage || 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600&q=80';
                    link.download = 'ai-story-video.mp4';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    alert('Download started!');
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-colors ${
                    isDarkTheme
                      ? 'border-gray-800 hover:bg-[#0a0a0a]'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Download
                  </span>
                  <Download className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>

                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (progress < 100) {
                      alert('Please wait for the video to complete processing');
                      return;
                    }
                    setIsPlaying(!isPlaying);
                    alert(isPlaying ? 'Video paused' : 'Video playing');
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-colors ${
                    isDarkTheme
                      ? 'border-gray-800 hover:bg-[#0a0a0a]'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    {isPlaying ? 'Pause Video' : 'Play Video'}
                  </span>
                  {isPlaying ? (
                    <Pause className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                  ) : (
                    <Play className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                  )}
                </button>

                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!textContent.trim() && activeTab === 'text') {
                      alert('Please enter some text to re-generate the story');
                      return;
                    }
                    setIsCreating(true);
                    setProgress(0);
                    setIsPlaying(false);
                    // Simulate progress
                    const interval = setInterval(() => {
                      setProgress((prev) => {
                        if (prev >= 100) {
                          clearInterval(interval);
                          setIsCreating(false);
                          return 100;
                        }
                        return prev + 2;
                      });
                    }, 100);
                    alert('Re-generating video...');
                  }}
                  disabled={isCreating}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-colors ${
                    isDarkTheme
                      ? 'border-gray-800 hover:bg-[#0a0a0a]'
                      : 'border-gray-300 hover:bg-gray-50'
                  } ${isCreating ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    {isCreating ? 'Re-generating...' : 'Re-generate'}
                  </span>
                  <RotateCcw className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>

                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (window.confirm('Are you sure you want to delete this video?')) {
                      setSelectedImage(null);
                      setProgress(0);
                      setIsPlaying(false);
                      setIsCreating(false);
                      setTextContent('');
                      alert('Video deleted successfully');
                    }
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-red-500/20 hover:bg-red-500/10 transition-colors"
                >
                  <span className="text-sm text-red-500">
                    Delete Video
                  </span>
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

