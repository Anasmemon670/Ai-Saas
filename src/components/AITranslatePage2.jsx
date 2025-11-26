import { useState } from 'react';
import { Play, ChevronDown, Copy, Download, RotateCcw, Trash2, X } from 'lucide-react';
import { motion } from 'motion/react';

export function AITranslatePage2({ isDarkTheme, setStep }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedScene, setSelectedScene] = useState(0);

  const scenes = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80',
      text: 'You are the best developer in the world. You are just like you are. You are the best developer in the world.',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80',
      text: 'You are the best. You can just like this You are the best developer in the world.',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=400&q=80',
      text: 'You are the best developer in the world. You are just like you are. You are the best developer.',
    },
  ];

  const handlePlayClick = () => {
    setStep(3);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col"
    >
      {/* Header Section */}
      <div className={`px-6 py-4 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">AI</span>
              </div>
            </div>
            <div>
              <h1 className={`text-xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                AI-Translate
              </h1>
              <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                Live Translate
              </p>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <button className={`p-2 rounded-lg ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
              <Copy className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
            <button className={`p-2 rounded-lg ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
              <Download className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
            <button className={`p-2 rounded-lg ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
              <RotateCcw className={`w-5 h-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        {/* Language Dropdowns */}
        <div className="grid grid-cols-4 gap-4">
          {['Select Ratio', 'Select Speaker', 'Video Language', 'Voice Language'].map((label, index) => (
            <div key={index}>
              <label className={`block text-xs mb-1 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                {label}
              </label>
              <div className="relative">
                <select
                  className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${
                    isDarkTheme
                      ? 'bg-[#141414] border-gray-800 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option>Auto Language</option>
                </select>
                <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Scenes List */}
        <div className={`w-80 border-r overflow-y-auto ${isDarkTheme ? 'border-gray-800 bg-[#0a0a0a]' : 'border-gray-200 bg-white'}`}>
          <div className="p-4 space-y-3">
            {scenes.map((scene, index) => (
              <div
                key={scene.id}
                onClick={() => setSelectedScene(index)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedScene === index
                    ? isDarkTheme
                      ? 'border-yellow-400 bg-yellow-400/10'
                      : 'border-yellow-500 bg-yellow-50'
                    : isDarkTheme
                    ? 'border-gray-800 hover:bg-[#141414]'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={scene.thumbnail}
                    alt={`Scene ${index + 1}`}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                        Scene {index + 1}
                      </span>
                      <div className="flex gap-1">
                        <button className={`p-1 rounded ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}>
                          <Copy className="w-3 h-3" />
                        </button>
                        <button className={`p-1 rounded ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}>
                          <Download className="w-3 h-3" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDeleteModal(true);
                          }}
                          className={`p-1 rounded ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <p className={`text-xs line-clamp-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      {scene.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center - Video Preview */}
        <div className="flex-1 flex flex-col">
          {/* Video Display */}
          <div className={`flex-1 flex items-center justify-center p-8 ${isDarkTheme ? 'bg-black' : 'bg-gray-900'}`}>
            <div className="relative">
              <div className="w-full max-w-3xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4" style={{ fontWeight: 900, color: '#888' }}>
                    HALO
                  </div>
                  <p className="text-gray-500 text-lg">Video Preview</p>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <button
                onClick={handlePlayClick}
                className="absolute top-4 right-4 w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <Play className="w-6 h-6 text-white ml-1" fill="white" />
              </button>
            </div>
          </div>

          {/* Progress Status Bar */}
          <div className={`px-8 py-4 border-t ${isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                Progress Status
              </span>
              <span className={`text-sm ${isDarkTheme ? 'text-green-400' : 'text-green-600'}`}>
                75% complete
              </span>
            </div>
            <div className="flex items-center gap-2">
              {['Upload Video', 'Collect Language', 'Collect Voices', 'Upload Complete'].map((label, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div className={`flex items-center gap-2 flex-1`}>
                    <div className={`w-3 h-3 rounded-full ${
                      index < 3
                        ? 'bg-green-500'
                        : isDarkTheme
                        ? 'bg-gray-700'
                        : 'bg-gray-300'
                    }`} />
                    <span className={`text-xs ${
                      index < 3
                        ? isDarkTheme ? 'text-green-400' : 'text-green-600'
                        : isDarkTheme ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {label}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className={`h-0.5 flex-1 ${
                      index < 2
                        ? 'bg-green-500'
                        : isDarkTheme
                        ? 'bg-gray-700'
                        : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Audio Waveforms Section */}
          <div className={`p-8 border-t ${isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="space-y-6">
              {/* Original Audio */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    Original
                  </span>
                  <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                    00:00 / 1:42:35
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    <Play className="w-4 h-4" />
                  </button>
                  <div className="flex-1 h-16 flex items-end gap-0.5">
                    {Array.from({ length: 100 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm ${
                          i % 3 === 0 ? 'bg-green-500' : i % 2 === 0 ? 'bg-cyan-500' : 'bg-purple-500'
                        }`}
                        style={{ height: `${Math.random() * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Translation Audio */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    Translation
                  </span>
                  <span className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                    00:00 / 1:42:35
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    <Play className="w-4 h-4" />
                  </button>
                  <div className="flex-1 h-16 flex items-end gap-0.5">
                    {Array.from({ length: 100 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm ${
                          i % 3 === 0 ? 'bg-orange-500' : i % 2 === 0 ? 'bg-pink-500' : 'bg-red-500'
                        }`}
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowDeleteModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-md rounded-2xl p-6 ${
              isDarkTheme ? 'bg-[#141414]' : 'bg-white'
            }`}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                <Trash2 className="w-8 h-8 text-red-500" />
              </div>
              <h3 className={`text-xl mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                You are about to reduce file when want to turn about it
              </h3>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors"
              >
                NO
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
              >
                YES
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

