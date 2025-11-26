import { useState } from 'react';
import { Upload, ChevronDown, Plus, MoreVertical, AlertCircle, X, Calendar, Clock, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AIAvatar({ isDarkTheme }) {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatarName, setAvatarName] = useState('');
  const [avatarDescription, setAvatarDescription] = useState('');

  const avatarProfiles = [
    {
      id: 1,
      name: 'Avatar Name',
      joinDate: 'Join Date: 00:00:00 - 10:35',
      memberSince: 'Member Since: 00/00/0000',
      dailyUsed: 'Daily used: 00',
      feedTime: 'Feed Time: 0 Sec - 0 Sec',
      totalVideos: 'Total Videos: 00'
    },
    {
      id: 2,
      name: 'Avatar Name',
      joinDate: 'Join Date: 00:00:00 - 10:35',
      memberSince: 'Member Since: 00/00/0000',
      dailyUsed: 'Daily used: 00',
      feedTime: 'Feed Time: 0 Sec - 0 Sec',
      totalVideos: 'Total Videos: 00'
    },
    {
      id: 3,
      name: 'Avatar Name',
      joinDate: 'Join Date: 00:00:00 - 10:35',
      memberSince: 'Member Since: 00/00/0000',
      dailyUsed: 'Daily used: 00',
      feedTime: 'Feed Time: 0 Sec - 0 Sec',
      totalVideos: 'Total Videos: 00'
    },
    {
      id: 4,
      name: 'Avatar Name',
      joinDate: 'Join Date: 00:00:00 - 10:35',
      memberSince: 'Member Since: 00/00/0000',
      dailyUsed: 'Daily used: 00',
      feedTime: 'Feed Time: 0 Sec - 0 Sec',
      totalVideos: 'Total Videos: 00'
    }
  ];

  const createdVideos = [
    {
      id: 1,
      title: 'Video Title',
      category: 'Category',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80'
    },
    {
      id: 2,
      title: 'Video Title',
      category: 'Category',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80'
    }
  ];

  const imageStyles = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80',
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80'
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <div className={`px-6 py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className={`text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              AI - Avatar
            </h1>
            <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              Auto Content Avatar
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Create Avatar */}
          <div className="lg:col-span-3">
            <div className={`rounded-xl border p-6 ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
              {/* Create Avatar Button */}
              <button 
                onClick={() => {
                  if (!avatarName.trim()) {
                    alert('Please enter an avatar name');
                    return;
                  }
                  console.log('Creating avatar:', { avatarName, avatarDescription });
                  // Add create avatar logic here
                  setShowAlert(true);
                }}
                className="w-full mb-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Create Avatar</span>
              </button>

              {/* Upload Section */}
              <div className="mb-6">
                <h3 className={`text-sm mb-3 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  LANGUANGEIS
                </h3>
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        console.log('Avatar picture selected:', file.name);
                        // Add file upload logic here
                      }
                    }}
                    className="hidden"
                  />
                  <div className={`aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center hover:border-cyan-500 transition-colors ${
                    isDarkTheme ? 'border-gray-700 bg-[#0a0a0a]' : 'border-gray-300 bg-gray-50'
                  }`}>
                    <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center mb-2">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      Avatar Picture
                    </span>
                  </div>
                </label>
              </div>

              {/* Avatar Details */}
              <div className="mb-4">
                <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Type avatar name
                </label>
                <input
                  type="text"
                  value={avatarName}
                  onChange={(e) => setAvatarName(e.target.value)}
                  placeholder="Enter avatar name"
                  className={`w-full px-3 py-2 rounded-lg border text-sm ${
                    isDarkTheme
                      ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-600'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div className="mb-4">
                <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  Type avatar description
                </label>
                <input
                  type="text"
                  value={avatarDescription}
                  onChange={(e) => setAvatarDescription(e.target.value)}
                  placeholder="Enter avatar description"
                  className={`w-full px-3 py-2 rounded-lg border text-sm ${
                    isDarkTheme
                      ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-600'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              {/* Language Settings */}
              <div className="mb-6">
                <h3 className={`text-sm mb-3 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Language Settings
                </h3>
                <div className="relative">
                  <select
                    className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${
                      isDarkTheme
                        ? 'bg-[#0a0a0a] border-gray-800 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option>Auto select lang</option>
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                    isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                </div>
              </div>

              {/* Avatar Options */}
              <div className="mb-6">
                <h3 className={`text-sm mb-3 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Avatar Options
                </h3>
                <div className="space-y-2">
                  <div className="relative">
                    <select
                      className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option>Select one Avatar</option>
                    </select>
                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="relative">
                    <select
                      className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option>Select Loactions</option>
                    </select>
                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </div>
                </div>
              </div>

              {/* Images Style */}
              <div className="mb-6">
                <h3 className={`text-sm mb-3 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Images Style
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {imageStyles.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                      <img src={image} alt={`Style ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Avatar Activity */}
              <div className="mb-6">
                <h3 className={`text-sm mb-3 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Avatar Activity
                </h3>
                <div className="space-y-2">
                  <div className="relative">
                    <select
                      className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option>Working Status</option>
                    </select>
                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="relative">
                    <select
                      className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option>Working Hours</option>
                    </select>
                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </div>
                </div>
              </div>

              {/* INSPCRT */}
              <div className="mb-6">
                <h3 className={`text-sm mb-3 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  INSPCRT
                </h3>
                <div className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                  isDarkTheme ? 'bg-[#0a0a0a] border-gray-800 text-gray-400' : 'bg-white border-gray-300 text-gray-600'
                }`}>
                  <span>Add caracter like "lorem"</span>
                  <button className="p-1">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className={`mt-2 p-3 rounded-lg border text-xs flex items-center justify-between ${
                  isDarkTheme ? 'bg-[#0a0a0a] border-gray-800 text-gray-400' : 'bg-white border-gray-300 text-gray-600'
                }`}>
                  <span>Add caracter like "lorem"</span>
                  <button className="p-1">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Create Button */}
              <button className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                <span>Create</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Middle Panel - Avatar Profiles */}
          <div className="lg:col-span-5">
            <div className={`rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
              <div className={`p-4 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
                <h2 className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Actually created
                </h2>
                <p className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                  from Date 00/00/00 to 00/00/00
                </p>
              </div>

              <div className="p-4 space-y-3 max-h-[800px] overflow-y-auto">
                {avatarProfiles.map((profile) => (
                  <div
                    key={profile.id}
                    className={`flex items-start gap-3 p-4 rounded-lg border ${
                      isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-300'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                          {profile.name}
                        </h3>
                        <button
                          onClick={() => {
                            setSelectedAvatar(profile.name);
                            setShowAlert(true);
                          }}
                          className={`p-1 rounded hover:bg-gray-700 transition-colors ${
                            isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-1 text-xs">
                        <p className={isDarkTheme ? 'text-gray-500' : 'text-gray-500'}>
                          {profile.joinDate}
                        </p>
                        <p className={isDarkTheme ? 'text-gray-500' : 'text-gray-500'}>
                          {profile.memberSince}
                        </p>
                        <p className={isDarkTheme ? 'text-gray-500' : 'text-gray-500'}>
                          {profile.dailyUsed}
                        </p>
                        <p className={isDarkTheme ? 'text-gray-500' : 'text-gray-500'}>
                          {profile.feedTime}
                        </p>
                        <p className={isDarkTheme ? 'text-gray-500' : 'text-gray-500'}>
                          {profile.totalVideos}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Footer */}
              <div className={`p-4 border-t ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className={`text-xs mb-1 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                      Working Time
                    </div>
                    <div className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      00:00:00 - 10:35
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs mb-1 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                      Daily Events
                    </div>
                    <div className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      0 Sec - 0 Sec
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs mb-1 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                      Total Videos
                    </div>
                    <div className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Created Avatars */}
          <div className="lg:col-span-4 space-y-4">
            {createdVideos.map((video) => (
              <div
                key={video.id}
                className={`rounded-xl border overflow-hidden ${
                  isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'
                }`}
              >
                <div className="relative">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <button className="p-1.5 rounded bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="p-1.5 rounded bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <button className="p-1.5 rounded bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors">
                      <MoreVertical className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`mb-1 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    {video.title}
                  </h3>
                  <span className={`inline-block px-2 py-1 rounded text-xs ${
                    isDarkTheme ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                  }`}>
                    {video.category}
                  </span>
                </div>
              </div>
            ))}
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
                !! Alert !!
              </h3>
              <p className={`text-sm mb-6 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                Your about to delete this Content and you want to remove it ?
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
    </div>
  );
}

