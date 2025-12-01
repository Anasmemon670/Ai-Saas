import { useState } from 'react';
import {
  ChevronDown, Download, RotateCcw, Trash2, Share2, User, RefreshCw,
  Volume2, Minimize2, Maximize2, X, Play, Pause, Settings, Clipboard
} from 'lucide-react';
import { motion } from 'motion/react';

export function AITranslatePage1({ isDarkTheme }) {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingTranslated, setIsPlayingTranslated] = useState(false);
  const [showSettings, setShowSettings] = useState({ original: false, translated: false });

  const [textPairs] = useState([
    {
      id: 1,
      original: {
        text: 'Text Will Be Be HereTextWillbe Here Text Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be',
        language: 'English',
        person: 'Person #1'
      },
      translated: {
        text: 'Text Will Be Be HereTextWillbe Here Text Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be',
        language: 'Kurdish',
        person: 'Person #1'
      }
    },
    {
      id: 2,
      original: {
        text: 'Text Will Be Be HereTextWillbe Here Text Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be',
        language: 'English',
        person: 'Person #1'
      },
      translated: {
        text: 'Text Will Be Be HereTextWillbe Here Text Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be',
        language: 'Kurdish',
        person: 'Person #1'
      }
    },
    {
      id: 3,
      original: {
        text: 'Text Will Be Be HereTextWillbe Here Text Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be',
        language: 'English',
        person: 'Person #1'
      },
      translated: {
        text: 'Text Will Be Be HereTextWillbe Here Text Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be Here Text Will Be',
        language: 'Kurdish',
        person: 'Person #1'
      }
    }
  ]);

  const handleVideoUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/mp4,video/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedVideo(URL.createObjectURL(file));
      }
    };
    input.click();
  };

  const handleRefresh = (type) => {
    console.log(`Refreshing ${type}`);
    // Add your refresh logic here
    alert(`${type} refreshed!`);
  };

  const handleDownload = () => {
    console.log('Download clicked');
    alert('Download functionality - File will be downloaded!');
  };

  const handleShare = (type, pairId = null) => {
    if (navigator.share) {
      navigator.share({
        title: 'AI Translate',
        text: pairId ? `Shared text pair ${pairId}` : 'Shared from AI Translate',
      }).catch(err => console.log('Error sharing', err));
    } else {
      console.log(`Sharing ${type}`, pairId);
      alert(`${type} shared!`);
    }
  };

  const handleRedo = () => {
    console.log('Redo clicked');
    alert('Redo functionality - Changes will be reverted!');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('Delete confirmed');
      setSelectedVideo(null);
      alert('Deleted successfully!');
    }
  };

  const handleSettings = (type) => {
    setShowSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    console.log(`${type} settings toggled`);
  };

  const handleRefreshText = (pairId, type) => {
    console.log(`Refreshing ${type} text for pair ${pairId}`);
    alert(`${type} text refreshed for pair ${pairId}!`);
  };

  return (
    <>
      <style>{`
        @keyframes waveformPulse {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.6);
          }
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-full flex flex-col overflow-hidden"
      >

      {/* TOP FILTER BAR */}
      <div className={`p-4 border-b flex gap-4 ${isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-200'}`}>

        {/* Select Speaker - with background box */}
        <div className={`flex-1 p-3 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'} shadow-sm`}>
          <label className={`text-xs font-medium mb-2 block ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
            Select Speaker
          </label>
          <div className="relative">
            <select className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${isDarkTheme
              ? 'bg-[#0a0a0a] border-gray-800 text-white'
              : 'bg-gray-50 border-gray-300 text-gray-900'
              }`}>
              <option>Select Speaker</option>
              <option>Speaker 1</option>
              <option>Speaker 2</option>
            </select>
            <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'
              }`} />
          </div>
        </div>

        {/* Video Language 1 - dropdown + refresh + dropdown */}
        <div className={`flex-1 p-3 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'} shadow-sm`}>
          <label className={`text-xs font-medium mb-2 block ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
            Video Language
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <select className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${isDarkTheme
                ? 'bg-[#0a0a0a] border-gray-800 text-white'
                : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}>
                <option>Select Language</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
              <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                }`} />
            </div>
            <button className={`p-1.5 rounded-full flex-shrink-0 ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
              <RefreshCw className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`} />
            </button>
            <div className="relative flex-1">
              <select className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${isDarkTheme
                ? 'bg-[#0a0a0a] border-gray-800 text-white'
                : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}>
                <option>Select Language</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
              <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                }`} />
            </div>
          </div>
        </div>

        {/* Video Language 2 - dropdown + refresh + dropdown */}
        <div className={`flex-1 p-3 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'} shadow-sm`}>
          <label className={`text-xs font-medium mb-2 block ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
            Video Language
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <select className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${isDarkTheme
                ? 'bg-[#0a0a0a] border-gray-800 text-white'
                : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}>
                <option>Select Language</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
              <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                }`} />
            </div>
            <button 
              onClick={() => handleRefresh('Video Language 2')}
              className={`p-1.5 rounded-full flex-shrink-0 ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <RefreshCw className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`} />
            </button>
            <div className="relative flex-1">
              <select className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${isDarkTheme
                ? 'bg-[#0a0a0a] border-gray-800 text-white'
                : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}>
                <option>Select Language</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
              <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                }`} />
            </div>
          </div>
        </div>

        {/* Options - 4 buttons */}
        <div className={`w-[240px] p-3 rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'} shadow-sm`}>
          <label className={`text-xs font-medium mb-2 block ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
            Options
          </label>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDownload}
              className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition"
            >
              <Download className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => handleShare('Project')}
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition"
            >
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={handleRedo}
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition"
            >
              <RotateCcw className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={handleDelete}
              className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition relative"
            >
              <Clipboard className="w-5 h-5 text-white" />
              <X className="w-3 h-3 text-white absolute top-0.5 right-0.5" />
            </button>
          </div>
        </div>

      </div>


      {/* MAIN CONTENT */}
      <div className={`flex flex-1 overflow-hidden ${isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-100'}`}>

        {/* TEXT OUTPUT LEFT */}
        <div className={`flex-1 overflow-y-auto p-6 ${isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-100'}`}>

          <h2 className={`text-lg font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
            Text output
          </h2>

          <div className="flex flex-col gap-4">

            {/* CARDS SIDE BY SIDE WITH SHARE ICON */}
            {textPairs.map((pair) => (
              <div key={pair.id} className="flex items-center gap-4">
                {/* ORIGINAL TEXT CARD */}
                <div
                  style={{ width: "295px" }}
                  className={`p-2 rounded-xl border shadow-lg break-words whitespace-normal ${isDarkTheme
                    ? 'border-gray-800 bg-[#141414] shadow-black/30'
                    : 'border-gray-300 bg-white shadow-gray-200/30'
                    }`}
                >

                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'
                      }`}>
                      <User className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                          {pair.original.person}
                        </span>
                        <button 
                          onClick={() => handleRefreshText(pair.id, 'original')}
                          className={`p-1 rounded ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                        >
                          <RefreshCw className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                        </button>
                      </div>

                      <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-red-500 text-white">
                        {pair.original.language}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    {pair.original.text}
                  </p>
                </div>

                {/* SHARE ICON BETWEEN CARDS */}
                <div className="flex items-center justify-center h-full min-h-[170px]">
                  <button 
                    onClick={() => handleShare('Text Pair', pair.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${isDarkTheme
                      ? 'bg-[#141414] border-gray-800'
                      : 'bg-white border-gray-300'
                      }`}
                  >
                    <Share2 className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                </div>

                {/* TRANSLATED CARD */}
                <div
                  style={{ width: "295px" }}
                  className={`p-2 rounded-xl border shadow-lg break-words whitespace-normal ${isDarkTheme
                    ? 'border-gray-800 bg-[#141414] shadow-black/30'
                    : 'border-gray-300 bg-white shadow-gray-200/30'
                    }`}
                >

                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'
                      }`}>
                      <User className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                          {pair.translated.person}
                        </span>
                        <button 
                          onClick={() => handleRefreshText(pair.id, 'translated')}
                          className={`p-1 rounded ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                        >
                          <RefreshCw className={`w-4 h-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
                        </button>
                      </div>

                      <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-green-500 text-white">
                        {pair.translated.language}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    {pair.translated.text}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* VIDEO UPLOAD → RIGHT */}
        <div
          className={`flex-1 border-l flex-shrink-0 flex flex-col pr-4 ${isDarkTheme ? 'border-gray-800 bg-[#0a0a0a]' : 'border-gray-300 bg-gray-100'
            }`}
        >
          <div
            className={`border-2 border-dashed flex-1 min-h-[1100px] mt-16 mb-6 rounded-xl
      flex flex-col items-center justify-center cursor-pointer 
      transition-colors relative overflow-hidden ${isDarkTheme
                ? 'border-gray-800 bg-[#141414] hover:border-gray-700'
                : 'border-gray-400 bg-gray-200 hover:border-gray-500'
              }`}
            onClick={handleVideoUpload}
          >
            {selectedVideo ? (
              <video src={selectedVideo} controls className="h-full w-full object-contain" />
            ) : (
              <div className="flex flex-col items-center justify-center text-center relative z-10">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto ${isDarkTheme ? 'bg-gray-800 text-gray-400' : 'bg-gray-300 text-gray-500'
                    }`}
                >
                  +
                </div>
                <p className={`mt-3 text-lg ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Upload Video MP4
                </p>
              </div>
            )}
          </div>
        </div>


      </div>

      {/* BOTTOM AUDIO TIMELINE SECTION */}
      <div className={`border-t flex-shrink-0 ${isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200'}`}>
        {/* Original Audio Line */}
        <div className={`p-4 border-b ${isDarkTheme ? 'border-gray-800 bg-[#141414]' : 'border-gray-200 bg-white'}`}>
          <div className="flex items-center gap-4">
            {/* Play Button */}
            <button
              onClick={() => setIsPlayingOriginal(!isPlayingOriginal)}
              className="p-2 rounded-full flex-shrink-0 bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              {isPlayingOriginal ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>

            {/* Header */}
            <div className="flex items-center gap-2">
              <span className={`font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}>Original</span>
              <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>Audio Line</span>
            </div>

            {/* Waveform */}
            <div className="flex-1 flex items-end gap-[1px] h-80 relative overflow-visible mx-4 min-w-0">
              {Array.from({ length: 500 }).map((_, i) => {
                // More variation: some very small, some very big
                const randomFactor = Math.random();
                const baseHeight = randomFactor < 0.3 
                  ? 15 + Math.random() * 20  // Small waves (15-35%)
                  : randomFactor < 0.7
                  ? 40 + Math.random() * 40  // Medium waves (40-80%)
                  : 70 + Math.random() * 30;  // Large waves (70-100%)
                const isFirstTwoThirds = i < 333; // First 2/3 green, last 1/3 red
                const isPlayhead = i === 167; // Playhead at 1/3 position
                const barColor = isFirstTwoThirds ? '#10b981' : '#ef4444'; // Green or red
                const animationDuration = 0.3 + (i % 5) * 0.1;
                const animationDelay = (i * 15) % 1000;
                return (
                  <div key={i} className="relative flex-1 min-w-[2px] max-w-[4px]">
                    <div
                      className="w-full"
                      style={{
                        height: `${baseHeight}%`,
                        backgroundColor: barColor,
                        borderRadius: '1px',
                        minHeight: '9px',
                        animation: isPlayingOriginal 
                          ? `waveformPulse ${animationDuration}s ease-in-out infinite`
                          : 'none',
                        animationDelay: `${animationDelay}ms`,
                        transformOrigin: 'bottom'
                      }}
                    />
                    {isPlayhead && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-teal-500 z-10" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Time Indicator */}
            <span className={`text-xs flex-shrink-0 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              00:00 / 19:25
            </span>

            {/* Right Icon */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <div className={`w-6 h-6 rounded flex items-center justify-center ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-300'}`}>
                <Settings className={`w-3 h-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Translated Audio Line */}
        <div className={`p-4 ${isDarkTheme ? 'bg-[#141414]' : 'bg-white'}`}>
          <div className="flex items-center gap-4">
            {/* Play Button */}
            <button
              onClick={() => setIsPlayingTranslated(!isPlayingTranslated)}
              className="p-2 rounded-full flex-shrink-0 bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              {isPlayingTranslated ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>

            {/* Header */}
            <div className="flex items-center gap-2">
              <span className={`font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}>Translated</span>
              <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>Audio Line</span>
            </div>

            {/* Waveform */}
            <div className="flex-1 flex items-end gap-[1px] h-80 relative overflow-visible mx-4 min-w-0">
              {Array.from({ length: 500 }).map((_, i) => {
                // More variation: some very small, some very big
                const randomFactor = Math.random();
                const baseHeight = randomFactor < 0.3 
                  ? 15 + Math.random() * 20  // Small waves (15-35%)
                  : randomFactor < 0.7
                  ? 40 + Math.random() * 40  // Medium waves (40-80%)
                  : 70 + Math.random() * 30;  // Large waves (70-100%)
                const isFirstTwoThirds = i < 333; // First 2/3 green, last 1/3 red
                const isPlayhead = i === 167; // Playhead at 1/3 position
                const barColor = isFirstTwoThirds ? '#10b981' : '#ef4444'; // Green or red
                const animationDuration = 0.3 + (i % 5) * 0.1;
                const animationDelay = (i * 15) % 1000;
                return (
                  <div key={i} className="relative flex-1 min-w-[2px] max-w-[4px]">
                    <div
                      className="w-full"
                      style={{
                        height: `${baseHeight}%`,
                        backgroundColor: barColor,
                        borderRadius: '1px',
                        minHeight: '9px',
                        animation: isPlayingTranslated 
                          ? `waveformPulse ${animationDuration}s ease-in-out infinite`
                          : 'none',
                        animationDelay: `${animationDelay}ms`,
                        transformOrigin: 'bottom'
                      }}
                    />
                    {isPlayhead && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-teal-500 z-10" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Time Indicator */}
            <span className={`text-xs flex-shrink-0 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              00:00 / 19:25
            </span>

            {/* Right Icon */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <button 
                onClick={() => handleSettings('translated')}
                className={`w-6 h-6 rounded flex items-center justify-center ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'} transition`}
              >
                <Settings className={`w-3 h-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      </motion.div>
    </>
  );
}
