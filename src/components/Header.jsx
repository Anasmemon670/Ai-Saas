import { Sun, Moon, Languages } from 'lucide-react';

export function Header({ isDarkTheme, toggleTheme, onLogout, userData, currentPage }) {
  const userName = userData?.name || 'User';
  const userEmail = userData?.email || '';
  const userInitial = userName.charAt(0).toUpperCase();
  const isDubbingPage = currentPage === 'ai-translate';
  
  return (
    <header 
      className={`h-[64px] sm:h-[72px] flex items-center px-3 sm:px-4 md:px-6 border-b ${ 
        isDarkTheme 
          ? 'bg-[#0a0a0a] border-gray-800' 
          : 'bg-white border-gray-200'
      }`}
    >
      {/* User Greeting - Left Side */}
      <div className="flex flex-col">
        {isDubbingPage ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center ${isDarkTheme ? 'bg-yellow-400' : 'bg-yellow-400'}`}>
              <Languages className={`w-5 h-5 sm:w-6 sm:h-6 text-black`} />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-2xl sm:text-3xl mb-0 leading-none ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                AI Translate
              </h1>
              <p className={`text-sm sm:text-base mt-1 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                Live Translate
              </p>
            </div>
          </div>
        ) : (
          <>
            <h1 className={`text-lg sm:text-xl mb-0 leading-none ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Hello {userName}
            </h1>
            <p className={`text-xs sm:text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              {userEmail || 'Welcome!'}
            </p>
          </>
        )}
      </div>
      
      {/* Empty space in the middle */}
      <div className="flex-1"></div>
      
      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pr-4 sm:pr-6 md:pr-8">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-1.5 sm:p-2 rounded-lg transition-colors ${ 
            isDarkTheme 
              ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
              : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkTheme ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>

        {/* Profile - Hide on Dubbing page */}
        {!isDubbingPage && (
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-yellow-400 flex items-center justify-center">
              <span className="text-black text-sm sm:text-base font-semibold">{userInitial}</span>
            </div>
            <span className={`hidden sm:inline text-sm md:text-base ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              {userName}
            </span>
          </div>
        )}

      </div>
    </header>
  );
}

