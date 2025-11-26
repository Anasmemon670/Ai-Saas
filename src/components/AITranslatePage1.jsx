import { useState } from 'react';
import { ChevronDown, Link as LinkIcon, Upload, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

export function AITranslatePage1({ isDarkTheme, setStep }) {
  const [link, setLink] = useState('');

  const handleUpload = () => {
    setStep(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 sm:p-6 lg:p-8"
    >
      {/* Page Title */}
      <div className="mb-6 sm:mb-8">
        <h1 className={`text-2xl sm:text-3xl mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
          AI Translate
        </h1>
        <p className={`text-sm sm:text-base ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
          Live Translate
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column - Form Controls */}
        <div className="space-y-4 sm:space-y-6">
          {/* Dropdowns Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Select Ratio */}
            <div>
              <label className={`block text-xs sm:text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                Select Ratio
              </label>
              <div className={`relative`}>
                <select
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl border appearance-none cursor-pointer ${ 
                    isDarkTheme
                      ? 'bg-[#141414] border-gray-800 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option>Card 1 Speaker</option>
                  <option>16:9 - Horizontal</option>
                  <option>9:16 - Vertical</option>
                  <option>1:1 - Square</option>
                </select>
                <ChevronDown className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none ${ 
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`} />
              </div>
            </div>

            {/* Select Speaker */}
            <div>
              <label className={`block text-xs sm:text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                Select Speaker
              </label>
              <div className={`relative`}>
                <select
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl border appearance-none cursor-pointer ${ 
                    isDarkTheme
                      ? 'bg-[#141414] border-gray-800 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option>Select Speaker</option>
                  <option>Speaker 1</option>
                  <option>Speaker 2</option>
                  <option>Speaker 3</option>
                </select>
                <ChevronDown className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none ${ 
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`} />
              </div>
            </div>
          </div>

          {/* Translation Dropdown */}
          <div>
            <label className={`block text-xs sm:text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              Translation
            </label>
            <div className={`relative`}>
              <select
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl border appearance-none cursor-pointer ${ 
                  isDarkTheme
                    ? 'bg-[#141414] border-gray-800 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option>Only Audio</option>
                <option>Audio + Subtitles</option>
                <option>Subtitles Only</option>
              </select>
              <ChevronDown className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none ${ 
                isDarkTheme ? 'text-gray-400' : 'text-gray-600'
              }`} />
            </div>
          </div>

          {/* Language Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Video Language */}
            <div>
              <label className={`block text-xs sm:text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                Video Language
              </label>
              <div className={`relative`}>
                <select
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl border appearance-none cursor-pointer ${ 
                    isDarkTheme
                      ? 'bg-[#141414] border-gray-800 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option>Auto Language</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
                <ChevronDown className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none ${ 
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`} />
              </div>
            </div>

            {/* Voice Language */}
            <div>
              <label className={`block text-xs sm:text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                Voice Language
              </label>
              <div className={`relative`}>
                <select
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl border appearance-none cursor-pointer ${ 
                    isDarkTheme
                      ? 'bg-[#141414] border-gray-800 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option>Select Language</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
                <ChevronDown className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none ${ 
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`} />
              </div>
            </div>
          </div>

          {/* Add Link Section */}
          <div className={`p-4 sm:p-6 rounded-xl border ${ 
            isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'
          }`}>
            <h3 className={`text-xs sm:text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              Add Link
            </h3>
            <p className={`text-xs mb-3 sm:mb-4 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
              Easily add videos by pasting a link
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter https://www.youtube.com/embed/T_JebdqJbk..."
                className={`flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm ${ 
                  isDarkTheme
                    ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-600'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
              />
              <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs sm:text-sm transition-colors whitespace-nowrap">
                Create
              </button>
            </div>
          </div>

          {/* Upload Video Section */}
          <div className={`p-4 sm:p-6 rounded-xl border ${ 
            isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'
          }`}>
            <h3 className={`text-xs sm:text-sm mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              Upload Video
            </h3>
            <p className={`text-xs mb-3 sm:mb-4 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
              Drag or choose file
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Click the choose file and choose desired .MOV file"
                className={`flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm ${ 
                  isDarkTheme
                    ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-600'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
                readOnly
              />
              <button 
                onClick={handleUpload}
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Choose
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Video Preview Areas */}
        <div className="space-y-4">
          {/* Video Preview 1 */}
          <div className={`aspect-video rounded-xl border flex items-center justify-center ${ 
            isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-300'
          }`}>
            <div className="text-center">
              <Maximize2 className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 ${isDarkTheme ? 'text-gray-600' : 'text-gray-400'}`} />
              <p className={`text-xs sm:text-sm ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                Video Preview
              </p>
            </div>
          </div>

          {/* Video Preview 2 */}
          <div className={`aspect-video rounded-xl border flex items-center justify-center ${ 
            isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-300'
          }`}>
            <div className="text-center">
              <Maximize2 className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 ${isDarkTheme ? 'text-gray-600' : 'text-gray-400'}`} />
              <p className={`text-xs sm:text-sm ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                Video Preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

