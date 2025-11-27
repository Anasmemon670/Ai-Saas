import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { AITranslate } from './components/AITranslate';
import { AIStories } from './components/AIStories';
import { VideoStudio } from './components/VideoStudio';
import { AIAgent } from './components/AIAgent';
import { AIAgentChat } from './components/AIAgentChat';
import { TTSTraining } from './components/TTSTraining';
import { STTTraining } from './components/STTTraining';
import { VoiceCloning } from './components/VoiceCloning';
import { SystemSettings } from './components/SystemSettings';
import { Auth } from './components/Auth';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check localStorage on initial load
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isVideoEditorMode, setIsVideoEditorMode] = useState(false);

  // Load user data from localStorage
  const [userData, setUserData] = useState(() => {
    return {
      email: localStorage.getItem('userEmail') || '',
      name: localStorage.getItem('userName') || ''
    };
  });

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    // Update user data when localStorage changes
    setUserData({
      email: localStorage.getItem('userEmail') || '',
      name: localStorage.getItem('userName') || ''
    });
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    // Update user data after login
    setUserData({
      email: localStorage.getItem('userEmail') || '',
      name: localStorage.getItem('userName') || ''
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
    setIsVideoEditorMode(false);
    // Clear localStorage on logout
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
  };

  // Show Auth screens if not authenticated
  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  // Show Dashboard if authenticated
  return (
    <div className={`min-h-screen flex ${isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
      {/* Show default sidebar only when NOT in video editor mode */}
      {!isVideoEditorMode && (
        <Sidebar isDarkTheme={isDarkTheme} currentPage={currentPage} setCurrentPage={setCurrentPage} onLogout={handleLogout} />
      )}
      
      <div className={`flex-1 flex flex-col ${!isVideoEditorMode ? 'ml-[60px] sm:ml-[80px] lg:ml-[200px]' : ''}`}>
        {/* Show header only when NOT in video editor mode */}
        {!isVideoEditorMode && (
          <Header 
            isDarkTheme={isDarkTheme} 
            toggleTheme={toggleTheme}
            onLogout={handleLogout}
            userData={userData}
            currentPage={currentPage}
          />
        )}
        
        <main className={`flex-1 ${!isVideoEditorMode ? '' : 'h-screen'}`}>
          {currentPage === 'home' && <Dashboard isDarkTheme={isDarkTheme} userData={userData} />}
          {currentPage === 'ai-translate' && <AITranslate isDarkTheme={isDarkTheme} />}
          {currentPage === 'tts-training' && <TTSTraining isDarkTheme={isDarkTheme} />}
          {currentPage === 'stt-training' && <STTTraining isDarkTheme={isDarkTheme} />}
          {currentPage === 'voice-cloning' && <VoiceCloning isDarkTheme={isDarkTheme} />}
          {currentPage === 'ai-stories' && <AIStories isDarkTheme={isDarkTheme} />}
          {currentPage === 'video-studio' && (
            <VideoStudio 
              isDarkTheme={isDarkTheme} 
              onEditorModeChange={setIsVideoEditorMode}
            />
          )}
          {currentPage === 'ai-agent' && <AIAgent isDarkTheme={isDarkTheme} setCurrentPage={setCurrentPage} />}
          {currentPage === 'ai-agent-chat' && <AIAgentChat isDarkTheme={isDarkTheme} setCurrentPage={setCurrentPage} />}
          {currentPage === 'system-settings' && <SystemSettings isDarkTheme={isDarkTheme} userData={userData} toggleTheme={toggleTheme} />}
        </main>
      </div>
    </div>
  );
}

