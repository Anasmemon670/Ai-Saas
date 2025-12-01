import { useState, useEffect } from 'react';
import { User, Key, Shield, Eye, ChevronDown } from 'lucide-react';

export function SystemSettings({ isDarkTheme, userData, toggleTheme }) {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Profile state
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: userData?.email || '',
    role: 'Admin'
  });

  // API Keys state
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: 'Production Key',
      key: 'sk_live_***********abc123',
      created: '2 days ago',
      type: 'production'
    },
    {
      id: 2,
      name: 'Development Key',
      key: 'sk_test_***********xyz789',
      created: '1 week ago',
      type: 'development'
    }
  ]);

  // Security state
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Appearance state
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    // Load user data from localStorage
    const email = localStorage.getItem('userEmail') || '';
    const name = localStorage.getItem('userName') || '';
    
    if (name) {
      const nameParts = name.split(' ');
      setProfileData(prev => ({
        ...prev,
        firstName: nameParts[0] || 'John',
        lastName: nameParts.slice(1).join(' ') || 'Doe',
        email: email
      }));
    }
  }, [userData]);

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    // Save to localStorage
    const fullName = `${profileData.firstName} ${profileData.lastName}`;
    localStorage.setItem('userName', fullName);
    localStorage.setItem('userEmail', profileData.email);
    console.log('Profile saved:', profileData);
    alert('Profile updated successfully!');
  };

  const handleRevokeKey = (id) => {
    if (window.confirm('Are you sure you want to revoke this API key?')) {
      setApiKeys(prev => prev.filter(key => key.id !== id));
      console.log('API key revoked:', id);
    }
  };

  const handleGenerateKey = () => {
    const newKey = {
      id: Date.now(),
      name: 'New API Key',
      key: `sk_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
      created: 'Just now',
      type: 'development'
    };
    setApiKeys(prev => [...prev, newKey]);
    console.log('New API key generated:', newKey);
  };

  const handleSecurityChange = (field, value) => {
    setSecurityData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdatePassword = () => {
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert('New password and confirm password do not match!');
      return;
    }
    if (securityData.newPassword.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    console.log('Password updated');
    setSecurityData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    alert('Password updated successfully!');
  };

  const handleToggle2FA = () => {
    setTwoFactorEnabled(prev => !prev);
    console.log('2FA', !twoFactorEnabled ? 'enabled' : 'disabled');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'api-keys', label: 'API Keys', icon: Key },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Eye }
  ];

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Page Header */}
      <div className={`px-4 md:px-6 py-4 md:py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div>
          <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
            Settings
          </h1>
          <p className={`text-sm md:text-base ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Manage your account and preferences
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className={`px-4 md:px-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? isDarkTheme
                      ? 'bg-yellow-400 text-black'
                      : 'bg-yellow-400 text-black'
                    : isDarkTheme
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl">
            {/* Profile Section */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h2 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Profile
                  </h2>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Update your profile information
                  </p>
                </div>

                {/* Avatar Section */}
                <div className="flex items-start gap-6">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold ${
                    isDarkTheme ? 'bg-yellow-400 text-black' : 'bg-yellow-400 text-black'
                  }`}>
                    {profileData.firstName.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isDarkTheme
                        ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                        : 'bg-yellow-400 text-black hover:bg-yellow-500'
                    }`}>
                      Change Avatar
                    </button>
                    <p className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                      JPG, PNG or GIF. Max 2MB
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      First Name
                    </label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => handleProfileChange('firstName', e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
                        isDarkTheme
                          ? 'bg-[#141414] border-gray-800 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => handleProfileChange('lastName', e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
                        isDarkTheme
                          ? 'bg-[#141414] border-gray-800 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
                        isDarkTheme
                          ? 'bg-[#141414] border-gray-800 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      Role
                    </label>
                    <div className="relative">
                      <select
                        value={profileData.role}
                        onChange={(e) => handleProfileChange('role', e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-lg border appearance-none text-sm ${
                          isDarkTheme
                            ? 'bg-[#141414] border-gray-800 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      >
                        <option>Admin</option>
                        <option>User</option>
                        <option>Editor</option>
                        <option>Viewer</option>
                      </select>
                      <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                        isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <button
                  onClick={handleSaveProfile}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    isDarkTheme
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                      : 'bg-yellow-400 text-black hover:bg-yellow-500'
                  }`}
                >
                  Save Changes
                </button>
              </div>
            )}

            {/* API Keys Section */}
            {activeTab === 'api-keys' && (
              <div className="space-y-6">
                <div>
                  <h2 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    API Keys
                  </h2>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manage your API keys for external integrations
                  </p>
                </div>

                {/* API Keys List */}
                <div className="space-y-4">
                  {apiKeys.map((apiKey) => (
                    <div
                      key={apiKey.id}
                      className={`p-4 rounded-xl border ${
                        isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className={`text-sm font-medium mb-1 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                            {apiKey.name}
                          </h3>
                          <p className={`text-sm font-mono mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                            {apiKey.key}
                          </p>
                          <p className={`text-xs ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                            Created {apiKey.created}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRevokeKey(apiKey.id)}
                          className="px-4 py-2 text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
                        >
                          Revoke
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Generate New Key Button */}
                <button
                  onClick={handleGenerateKey}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                    isDarkTheme
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                      : 'bg-yellow-400 text-black hover:bg-yellow-500'
                  }`}
                >
                  <Key className="w-4 h-4" />
                  Generate New Key
                </button>
              </div>
            )}

            {/* Security Section */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h2 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Security Settings
                  </h2>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manage your account security
                  </p>
                </div>

                {/* Password Change Form */}
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={securityData.currentPassword}
                      onChange={(e) => handleSecurityChange('currentPassword', e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
                        isDarkTheme
                          ? 'bg-[#141414] border-gray-800 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                        New Password
                      </label>
                      <input
                        type="password"
                        value={securityData.newPassword}
                        onChange={(e) => handleSecurityChange('newPassword', e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
                          isDarkTheme
                            ? 'bg-[#141414] border-gray-800 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        value={securityData.confirmPassword}
                        onChange={(e) => handleSecurityChange('confirmPassword', e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
                          isDarkTheme
                            ? 'bg-[#141414] border-gray-800 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Update Password Button */}
                <button
                  onClick={handleUpdatePassword}
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                    isDarkTheme
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                      : 'bg-yellow-400 text-black hover:bg-yellow-500'
                  }`}
                >
                  Update Password
                </button>

                {/* Two-Factor Authentication */}
                <div className="mt-6">
                  <h3 className={`text-sm font-medium mb-1 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Two-Factor Authentication
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      Add extra security to your account
                    </p>
                    <button
                      onClick={handleToggle2FA}
                      className={`text-sm font-medium transition-colors ${
                        twoFactorEnabled
                          ? 'text-yellow-400 hover:text-yellow-500'
                          : 'text-yellow-400 hover:text-yellow-500'
                      }`}
                    >
                      {twoFactorEnabled ? 'Disable' : 'Enable'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Section */}
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <div>
                  <h2 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Appearance
                  </h2>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Customize how the platform looks
                  </p>
                </div>

                {/* Theme Selection */}
                <div>
                  <h3 className={`text-sm font-medium mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Theme
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Dark Theme */}
                    <button
                      onClick={() => {
                        if (!isDarkTheme) toggleTheme();
                      }}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        isDarkTheme
                          ? 'border-yellow-400 bg-[#0a0a0a]'
                          : 'border-gray-800 bg-[#0a0a0a]'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-gray-700 flex-shrink-0"></div>
                      </div>
                      <p className="text-sm font-medium mb-1 text-white">
                        Dark
                      </p>
                      <p className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                        {isDarkTheme ? 'Current theme' : 'Switch to dark'}
                      </p>
                    </button>

                    {/* Light Theme */}
                    <button
                      onClick={() => {
                        if (isDarkTheme) toggleTheme();
                      }}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        !isDarkTheme
                          ? 'border-yellow-400 bg-[#0a0a0a]'
                          : 'border-gray-800 bg-[#0a0a0a]'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-white flex-shrink-0"></div>
                      </div>
                      <p className="text-sm font-medium mb-1 text-white">
                        Light
                      </p>
                      <p className={`text-xs ${!isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                        {!isDarkTheme ? 'Current theme' : 'Switch to light'}
                      </p>
                    </button>
                  </div>
                </div>

                {/* Language Selection */}
                <div>
                  <h3 className={`text-sm font-medium mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Language
                  </h3>
                  <div className="relative">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-lg border appearance-none text-sm ${
                        isDarkTheme
                          ? 'bg-[#141414] border-gray-800 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Italian</option>
                      <option>Portuguese</option>
                      <option>Chinese</option>
                      <option>Japanese</option>
                    </select>
                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
