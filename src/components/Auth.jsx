import { useState, useEffect } from 'react';
import { Mail, User, Lock, Eye, EyeOff } from 'lucide-react';
import artworkVideo from '../../images/zebracat-login3.webm';
import zebracatLogo from '../../images/zebracat-logo.png';

export function Auth({ onLogin }) {
  const [screen, setScreen] = useState('login');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [countdown, setCountdown] = useState(54);

  // Countdown timer for resend email
  useEffect(() => {
    if (screen === 'verification' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [screen, countdown]);

  const handleLoginContinue = (e) => {
    e.preventDefault();
    if (email) {
      // Store email in localStorage
      localStorage.setItem('userEmail', email);
      setScreen('signup');
    }
  };

  const handleSignupContinue = (e) => {
    e.preventDefault();
    if (fullName && password && password.length >= 8) {
      // Store user name in localStorage
      localStorage.setItem('userName', fullName);
      setScreen('verification');
      setCountdown(54);
    } else if (password && password.length < 8) {
      alert('Password must be at least 8 characters long');
    }
  };

  const handleResendEmail = () => {
    setCountdown(54);
  };

  const handleVerificationComplete = () => {
    // Store authentication state
    localStorage.setItem('isAuthenticated', 'true');
    onLogin();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#0C0C0E] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-8 gap-8 lg:gap-0">
      {/* Zebracat Logo - Top Left Fixed */}
      <div className="fixed top-4 left-4 sm:left-8 flex items-center gap-2 z-50">
        <img 
          src={zebracatLogo} 
          alt="ZEBRACAT Logo" 
          className="h-8 sm:h-10 w-auto"
        />
      </div>

      {/* Left Side - Artwork with Grid and Content */}
      <div className="w-full lg:flex-1 max-w-full lg:max-w-[800px] mt-16 lg:mt-0 lg:mr-16">
        {/* Artwork Container with Grid */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-2 sm:mb-3">
          {/* Background Video */}
          <video 
            src={artworkVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Yellow Grid Overlay */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FFD200" strokeWidth="0.8" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Heading Below Image */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-none mb-3 sm:mb-4">
          Craft Viral Videos in Seconds with <span className="text-[#FFD200]">AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          Transform your ideas into stunning content with our AI-powered orchestration platform
        </p>
      </div>

      {/* Right Side - Login/Signup/Verification Card */}
      <div className="w-full max-w-[420px] lg:max-w-[420px]">
        {screen === 'verification' ? (
          // Verification Screen - Centered Content
          <div className="flex flex-col items-center text-center px-4 sm:px-0">
            {/* Yellow Email Icon */}
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#FFD200] rounded-full flex items-center justify-center mb-6 sm:mb-8">
              <Mail className="w-8 sm:w-10 h-8 sm:h-10 text-black" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
              Verify Your Email
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-[380px]">
              We've sent a verification email to your email address. Please check your inbox and click the verification link to continue.
            </p>

            {/* Resend Email Section */}
            <div className="mb-6 sm:mb-8">
              <p className="text-gray-400 text-sm mb-2">
                Didn't get the email?
              </p>
              {countdown > 0 ? (
                <p className="text-gray-300 text-sm">
                  Resend email in <span className="text-[#FFD200] font-semibold">{formatTime(countdown)}</span>
                </p>
              ) : (
                <button
                  onClick={handleResendEmail}
                  className="text-[#FFD200] text-sm font-semibold hover:text-[#ffc700] transition-colors"
                >
                  Resend Email
                </button>
              )}
            </div>

            {/* Simulate Verification Button (for demo) */}
            <button
              onClick={handleVerificationComplete}
              className="px-6 sm:px-8 py-3 bg-[#FFD200] hover:bg-[#ffc700] text-black font-semibold rounded-xl transition-all mb-6 sm:mb-8"
            >
              I've Verified My Email
            </button>

            {/* Footer */}
            <div className="text-xs text-gray-500">
              By continuing you agree to our{' '}
              <a href="#" className="text-gray-400 underline hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-[#1a1a1c] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            {screen === 'login' ? (
              <>
                {/* Login Screen */}
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Welcome Back
                </h2>

                <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
                  Enter your email to continue to your AI studio
                </p>

                <form onSubmit={handleLoginContinue} className="space-y-4">
                  {/* Email Input */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                      required
                      className="w-full h-12 sm:h-14 pl-12 pr-4 bg-white rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD200] transition-all"
                    />
                  </div>

                  {/* Continue Button */}
                  <button
                    type="submit"
                    className="w-full h-12 sm:h-14 bg-[#FFD200] hover:bg-[#ffc700] text-black font-semibold rounded-xl transition-all"
                  >
                    Continue
                  </button>

                  {/* Help Text */}
                  <div className="text-center pt-2">
                    <button
                      type="button"
                      className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      Need help signing in?
                    </button>
                  </div>
                </form>

                {/* Footer */}
                <div className="mt-8 sm:mt-10 text-center text-xs text-gray-500">
                  By continuing you agree to our{' '}
                  <a href="#" className="text-gray-400 underline hover:text-gray-300 transition-colors">
                    Terms of Service
                  </a>
                </div>
              </>
            ) : (
              <>
                {/* Create Account Screen */}
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Create Account
                </h2>

                <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
                  Complete your account setup
                </p>

                <form onSubmit={handleSignupContinue} className="space-y-4">
                  {/* Full Name Input */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full h-12 sm:h-14 pl-12 pr-4 bg-white rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD200] transition-all"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password (min 8 characters)"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password"
                      required
                      minLength={8}
                      className="w-full h-12 sm:h-14 pl-12 pr-12 bg-white rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD200] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                    {password && password.length > 0 && (
                      <div className="mt-1 text-xs text-gray-500">
                        {password.length < 8 ? (
                          <span className="text-red-500">Password must be at least 8 characters ({password.length}/8)</span>
                        ) : (
                          <span className="text-green-500">✓ Password length is valid</span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Continue Button */}
                  <button
                    type="submit"
                    className="w-full h-12 sm:h-14 bg-[#FFD200] hover:bg-[#ffc700] text-black font-semibold rounded-xl transition-all"
                  >
                    Continue
                  </button>

                  {/* Help Text */}
                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        console.log('Help requested for signing in');
                        // Add help/support logic here
                        alert('Please contact support for assistance with signing in.');
                      }}
                      className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      Need help signing in?
                    </button>
                  </div>
                </form>

                {/* Footer */}
                <div className="mt-8 sm:mt-10 text-center text-xs text-gray-500">
                  By continuing you agree to our{' '}
                  <a href="#" className="text-gray-400 underline hover:text-gray-300 transition-colors">
                    Terms of Service
                  </a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

