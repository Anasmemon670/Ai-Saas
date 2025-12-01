import { TTSTrainingPage } from './training/TTSTrainingPage';

export function TTSTraining({ isDarkTheme }) {
  return (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <div className={`px-6 py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">TTS</span>
            </div>
          </div>
          <div>
            <h1 className={`text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Text To Speech
            </h1>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 overflow-y-auto">
        <TTSTrainingPage isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
}

