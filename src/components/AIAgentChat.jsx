import { useState, useEffect, useRef } from 'react';
import { Cpu, Send, ArrowLeft, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export function AIAgentChat({ isDarkTheme, setCurrentPage }) {
  const [agent, setAgent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  // Load agent from localStorage on mount
  useEffect(() => {
    const savedAgent = localStorage.getItem('selectedAgent');
    if (savedAgent) {
      const agentData = JSON.parse(savedAgent);
      setAgent(agentData);
      // Initialize with welcome message
      setMessages([{
        id: Date.now(),
        type: 'agent',
        text: getWelcomeMessage(agentData),
        timestamp: new Date()
      }]);
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getWelcomeMessage = (agentData) => {
    const tone = agentData.voiceStyle || 'Friendly';
    const name = agentData.name || 'Agent';
    const role = agentData.role || 'assist you';
    
    const welcomeMessages = {
      Friendly: `Hi! I'm ${name}, and I'm here to ${role}. How can I help you today? 😊`,
      Formal: `Good day. I am ${name}, designed to ${role}. How may I assist you?`,
      Energetic: `Hey there! I'm ${name}, ready to ${role}! What can I do for you? 🚀`
    };
    
    return welcomeMessages[tone] || welcomeMessages.Friendly;
  };

  const generateAgentResponse = (userMessage, agentData) => {
    // Frontend-only response generation based on agent settings
    const tone = agentData.voiceStyle || 'Friendly';
    const role = agentData.role || 'assist you';
    const type = agentData.type || 'General';
    
    // Simple response patterns based on tone
    const responses = {
      Friendly: [
        `That's a great question! Based on my role as ${role}, I'd say that's something worth exploring. Let me help you think through this.`,
        `I understand what you're asking. As ${role}, I think we can work through this together. What else would you like to know?`,
        `Thanks for sharing that! Given my purpose to ${role}, here's my perspective on that topic.`
      ],
      Formal: [
        `I acknowledge your inquiry. As an agent designed to ${role}, I can provide the following perspective on this matter.`,
        `Understood. Based on my configured role of ${role}, I would suggest the following approach.`,
        `Thank you for your question. In my capacity to ${role}, I can offer the following insights.`
      ],
      Energetic: [
        `Awesome! I love this question! As someone who's all about ${role}, I'm excited to dive into this with you!`,
        `Yes! This is exactly the kind of thing I'm built for - ${role}! Let's explore this together!`,
        `Great question! I'm pumped to help with this because ${role} is what I do best!`
      ]
    };
    
    const responsePool = responses[tone] || responses.Friendly;
    const randomResponse = responsePool[Math.floor(Math.random() * responsePool.length)];
    
    // Add some context awareness based on message content
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      return `Hello! I'm here to ${role}. What would you like to discuss?`;
    }
    
    if (userMessage.toLowerCase().includes('help')) {
      return `I'm here to help! My role is to ${role}. What specific assistance do you need?`;
    }
    
    return randomResponse;
  };

  const handleSendMessage = () => {
    // Prevent sending if already loading or input is empty
    if (isLoading || !inputMessage.trim()) {
      if (!inputMessage.trim()) {
        setError('Please enter a message');
        setTimeout(() => setError(''), 3000);
      }
      return;
    }

    if (!agent) {
      setError('Agent not found');
      return;
    }

    setError('');
    
    // Store the message text before clearing input
    const messageText = inputMessage.trim();
    
    // Add user message to chat history
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: messageText,
      timestamp: new Date()
    };
    
    // Save to messages state (chat history)
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate agent thinking time (1-2 seconds)
    setTimeout(() => {
      const agentResponse = {
        id: Date.now() + 1,
        type: 'agent',
        text: generateAgentResponse(messageText, agent),
        timestamp: new Date()
      };
      
      // Add agent response to chat history
      setMessages(prev => [...prev, agentResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    // Prevent sending if loading
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('ai-agent');
    }
  };

  if (!agent) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className={`text-center ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
          <Cpu className={`w-12 h-12 mx-auto mb-4 ${isDarkTheme ? 'text-gray-700' : 'text-gray-400'}`} />
          <p>No agent selected</p>
          <button
            onClick={handleBack}
            className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Chat Header */}
      <div className={`px-6 py-4 border-b flex-shrink-0 ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            className={`p-2 rounded-lg transition-colors ${
              isDarkTheme
                ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              {agent.name}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                isDarkTheme 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'bg-cyan-100 text-cyan-700'
              }`}>
                {agent.type}
              </span>
              <span className={`text-xs font-medium ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                {agent.voiceStyle} tone
              </span>
              {agent.enableMemory && (
                <span className={`px-2 py-0.5 rounded text-xs ${
                  isDarkTheme 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  Memory
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area - Scrollable Container */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 p-6" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] lg:max-w-[70%] rounded-lg px-4 py-3 ${
                  message.type === 'user'
                    ? isDarkTheme
                      ? 'bg-cyan-500 text-white'
                      : 'bg-cyan-500 text-white'
                    : isDarkTheme
                    ? 'bg-[#1a1a1a] border border-gray-700 text-white'
                    : 'bg-gray-200 border border-gray-300 text-gray-900'
                }`}
              >
                <p className="text-sm font-normal whitespace-pre-wrap leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-2 font-medium ${
                  message.type === 'user'
                    ? 'text-white/80'
                    : isDarkTheme
                    ? 'text-gray-400'
                    : 'text-gray-600'
                }`}>
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div
                className={`max-w-[80%] lg:max-w-[70%] rounded-lg px-4 py-3 ${
                  isDarkTheme
                    ? 'bg-[#1a1a1a] border border-gray-700'
                    : 'bg-gray-200 border border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Loader2 className={`w-4 h-4 animate-spin ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                  }`} />
                  <span className={`text-sm font-medium ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Agent is thinking...
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <div className={`px-4 py-2 rounded-lg text-sm ${
                isDarkTheme
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : 'bg-red-100 text-red-700 border border-red-300'
              }`}>
                {error}
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area - Fixed at Bottom */}
      <div className={`px-6 py-4 border-t flex-shrink-0 ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <textarea
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={1}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border text-sm resize-none transition-colors focus:outline-none focus:ring-2 overflow-y-auto ${
                  isDarkTheme
                    ? isLoading
                      ? 'bg-[#0a0a0a] border-gray-800 text-gray-500 placeholder-gray-700 cursor-not-allowed'
                      : 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-600 focus:ring-cyan-500 focus:border-cyan-500'
                    : isLoading
                    ? 'bg-gray-100 border-gray-300 text-gray-400 placeholder-gray-400 cursor-not-allowed'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500'
                }`}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className={`p-3 rounded-lg transition-colors flex-shrink-0 ${
                isLoading || !inputMessage.trim()
                  ? isDarkTheme
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-cyan-500 hover:bg-cyan-600 text-white'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

