import { 
  LayoutDashboard, 
  Languages, 
  Volume2, 
  Mic, 
  Sparkles, 
  Clapperboard,
  Cpu,
  Settings,
  LogOut,
  Copy
} from 'lucide-react';
import zebracatLogo from '../../images/zebracat-logo.png';

export function Sidebar({ isDarkTheme, currentPage, setCurrentPage, onLogout }) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', page: 'home' },
    { icon: Languages, label: 'Dubbing', page: 'ai-translate' },
    { icon: Sparkles, label: 'AI Stories', page: 'ai-stories' },
    { icon: Clapperboard, label: 'Movie Studio', page: 'video-studio' },
    { icon: Cpu, label: 'AI Agent', page: 'ai-agent' },
    { icon: Volume2, label: 'TTS Training', page: 'tts-training' },
    { icon: Mic, label: 'STT Training', page: 'stt-training' },
    { icon: Copy, label: 'Voice Cloning', page: 'voice-cloning' },
    { icon: Settings, label: 'Tool-Setting', page: 'system-settings' },
  ];

  return (
    <aside 
      className={`fixed left-0 top-0 h-full w-[60px] sm:w-[80px] lg:w-[200px] border-r overflow-y-hidden z-40 ${ 
        isDarkTheme 
          ? 'bg-[#0a0a0a] border-gray-800' 
          : 'bg-white border-gray-200'
      }`}
    >
      {/* Top border matching header height */}
      <div className={`h-[64px] sm:h-[72px] border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="h-full flex items-center justify-center lg:justify-start px-2 sm:px-3 lg:px-4">
          <img 
            src={zebracatLogo} 
            alt="ZEBRACAT Logo" 
            className="h-8 sm:h-10 lg:h-12 w-auto"
          />
        </div>
      </div>
      
      <div className="p-2 sm:p-3 lg:p-4">
        
        {/* Menu Items */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.page ? currentPage === item.page : false;
            return (
              <button
                key={index}
                onClick={() => item.page && setCurrentPage(item.page)}
                className={`w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-3 px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 rounded-xl transition-all ${ 
                  isActive
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : isDarkTheme
                    ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                title={item.label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="hidden lg:inline text-sm">{item.label}</span>
              </button>
            );
          })}

          {/* Logout */}
          <button
            onClick={onLogout}
            className={`w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-3 px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 rounded-xl transition-all mt-4 ${ 
              isDarkTheme
                ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
            title="Logout"
          >
            <LogOut className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="hidden lg:inline text-sm">Logout</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}

