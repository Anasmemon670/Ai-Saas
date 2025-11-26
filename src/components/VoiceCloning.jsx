import { CloneVoicesPage } from './training/CloneVoicesPage';

export function VoiceCloning({ isDarkTheme }) {
  return (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <div className={`px-6 py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className={`text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Clone Voices
            </h1>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 overflow-y-auto">
        <CloneVoicesPage isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
}

