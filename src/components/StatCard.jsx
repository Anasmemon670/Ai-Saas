export function StatCard({ value, label, subtitle, icon: Icon, isDarkTheme }) {
  return (
    <div 
      className={`p-4 sm:p-6 rounded-2xl border ${ 
        isDarkTheme 
          ? 'bg-[#141414] border-gray-800' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className={`text-3xl sm:text-4xl mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
            {value}
          </div>
          <div className={`text-sm sm:text-base mb-1 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
            {label}
          </div>
          <div className={`text-xs sm:text-sm ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
            {subtitle}
          </div>
        </div>
        <div className={`p-2 sm:p-3 rounded-lg ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
        </div>
      </div>
    </div>
  );
}

