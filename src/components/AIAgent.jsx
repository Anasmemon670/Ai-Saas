import { useState, useEffect } from 'react';
import { Cpu, Plus, Edit2, Trash2, RotateCcw, ChevronDown, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AIAgent({ isDarkTheme, setCurrentPage }) {
  const [agentName, setAgentName] = useState('');
  const [agentDescription, setAgentDescription] = useState('');
  const [agentRole, setAgentRole] = useState('');
  const [agentType, setAgentType] = useState('General');
  const [voiceStyle, setVoiceStyle] = useState('Friendly');
  const [enableMemory, setEnableMemory] = useState(false);
  const [maxTokens, setMaxTokens] = useState(1000);
  const [agents, setAgents] = useState(() => {
    const saved = localStorage.getItem('aiAgents');
    return saved ? JSON.parse(saved) : [];
  });
  const [editingAgent, setEditingAgent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Save agents to localStorage whenever agents change
  useEffect(() => {
    localStorage.setItem('aiAgents', JSON.stringify(agents));
  }, [agents]);

  const handleCreateAgent = () => {
    if (!agentName.trim()) {
      console.log('Please enter an agent name');
      return;
    }
    
    console.log('Creating agent:', { 
      agentName, 
      agentDescription, 
      agentRole,
      agentType, 
      voiceStyle, 
      enableMemory, 
      maxTokens 
    });
    
    // Add agent to list
    const newAgent = {
      id: Date.now(),
      name: agentName,
      description: agentDescription,
      role: agentRole,
      type: agentType,
      voiceStyle: voiceStyle,
      enableMemory: enableMemory,
      maxTokens: maxTokens,
      createdAt: new Date().toLocaleDateString()
    };
    
    setAgents([...agents, newAgent]);
    handleReset();
  };

  const handleReset = () => {
    setAgentName('');
    setAgentDescription('');
    setAgentRole('');
    setAgentType('General');
    setVoiceStyle('Friendly');
    setEnableMemory(false);
    setMaxTokens(1000);
    console.log('Form reset');
  };

  const handleEdit = (agent) => {
    setEditingAgent({ ...agent });
    setShowEditModal(true);
  };

  const handleUpdateAgent = () => {
    if (!editingAgent || !editingAgent.name.trim()) {
      console.log('Please enter an agent name');
      return;
    }
    
    console.log('Updating agent:', editingAgent);
    
    setAgents(agents.map(agent => 
      agent.id === editingAgent.id ? editingAgent : agent
    ));
    
    setShowEditModal(false);
    setEditingAgent(null);
  };

  const handleDelete = (agentId) => {
    console.log('Deleting agent:', agentId);
    setAgents(agents.filter(agent => agent.id !== agentId));
  };

  const handleChat = (agent) => {
    // Store selected agent in localStorage for chat component
    localStorage.setItem('selectedAgent', JSON.stringify(agent));
    // Navigate to chat page
    if (setCurrentPage) {
      setCurrentPage('ai-agent-chat');
    }
  };

  const handleEditChange = (field, value) => {
    setEditingAgent({
      ...editingAgent,
      [field]: value
    });
  };

  return (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <div className={`px-6 py-6 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDarkTheme ? 'bg-[#141414]' : 'bg-gray-100'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <h1 className={`text-2xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              AI - Agent
            </h1>
            <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              Create and manage AI agents
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Panel - Create Agent Form */}
            <div className="lg:col-span-5">
              <div className={`rounded-xl border p-6 ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
                <h2 className={`text-lg font-medium mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Create New Agent
                </h2>

                {/* Agent Information Section */}
                <div className="mb-6">
                  <h3 className={`text-sm font-medium mb-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    Agent Information
                  </h3>
                  
                  {/* Agent Name Input */}
                  <div className="mb-4">
                    <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      Agent Name
                    </label>
                    <input
                      type="text"
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      placeholder="Enter agent name"
                      className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-600 focus:ring-cyan-500 focus:border-cyan-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500'
                      }`}
                    />
                  </div>

                  {/* Description Input */}
                  <div className="mb-4">
                    <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      Description
                    </label>
                    <textarea
                      value={agentDescription}
                      onChange={(e) => setAgentDescription(e.target.value)}
                      placeholder="Enter agent description"
                      rows={3}
                      className={`w-full px-3 py-2 rounded-lg border text-sm resize-none transition-colors focus:outline-none focus:ring-2 ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-600 focus:ring-cyan-500 focus:border-cyan-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500'
                      }`}
                    />
                  </div>

                  {/* Agent Role / Purpose Input */}
                  <div>
                    <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      Agent Role / Purpose
                    </label>
                    <textarea
                      value={agentRole}
                      onChange={(e) => setAgentRole(e.target.value)}
                      placeholder="Enter agent role or purpose"
                      rows={3}
                      className={`w-full px-3 py-2 rounded-lg border text-sm resize-none transition-colors focus:outline-none focus:ring-2 ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-600 focus:ring-cyan-500 focus:border-cyan-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Agent Configuration Section */}
                <div className="mb-6">
                  <h3 className={`text-sm font-medium mb-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    Agent Configuration
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Agent Type Dropdown */}
                    <div>
                      <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                        Agent Type
                      </label>
                      <div className="relative">
                        <select
                          value={agentType}
                          onChange={(e) => setAgentType(e.target.value)}
                          className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm transition-colors focus:outline-none focus:ring-2 ${
                            isDarkTheme
                              ? 'bg-[#0a0a0a] border-gray-800 text-white focus:ring-cyan-500 focus:border-cyan-500'
                              : 'bg-white border-gray-300 text-gray-900 focus:ring-cyan-500 focus:border-cyan-500'
                          }`}
                        >
                          <option value="General">General</option>
                          <option value="Support">Support</option>
                          <option value="Creative">Creative</option>
                        </select>
                        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                          isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                        }`} />
                      </div>
                    </div>

                    {/* Voice Tone Dropdown */}
                    <div>
                      <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                        Voice Tone
                      </label>
                      <div className="relative">
                        <select
                          value={voiceStyle}
                          onChange={(e) => setVoiceStyle(e.target.value)}
                          className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm transition-colors focus:outline-none focus:ring-2 ${
                            isDarkTheme
                              ? 'bg-[#0a0a0a] border-gray-800 text-white focus:ring-cyan-500 focus:border-cyan-500'
                              : 'bg-white border-gray-300 text-gray-900 focus:ring-cyan-500 focus:border-cyan-500'
                          }`}
                        >
                          <option value="Friendly">Friendly</option>
                          <option value="Formal">Formal</option>
                          <option value="Energetic">Energetic</option>
                        </select>
                        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                          isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                        }`} />
                      </div>
                    </div>

                    {/* Enable Memory Toggle */}
                    <div className="flex items-center justify-between">
                      <label className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                        Memory
                      </label>
                      <button
                        type="button"
                        onClick={() => setEnableMemory(!enableMemory)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                          enableMemory
                            ? 'bg-cyan-500'
                            : isDarkTheme
                            ? 'bg-gray-700'
                            : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            enableMemory ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Max Tokens Number Input */}
                    <div>
                      <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                        Max Tokens
                      </label>
                      <input
                        type="number"
                        value={maxTokens}
                        onChange={(e) => setMaxTokens(Number(e.target.value))}
                        min="100"
                        max="10000"
                        step="100"
                        className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                          isDarkTheme
                            ? 'bg-[#0a0a0a] border-gray-800 text-white focus:ring-cyan-500 focus:border-cyan-500'
                            : 'bg-white border-gray-300 text-gray-900 focus:ring-cyan-500 focus:border-cyan-500'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Actions Section */}
                <div className="space-y-3">
                  <button
                    onClick={handleCreateAgent}
                    className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Agent</span>
                  </button>
                  
                  <button
                    onClick={handleReset}
                    className={`w-full py-2.5 rounded-lg border text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                      isDarkTheme
                        ? 'bg-[#0a0a0a] border-gray-800 text-gray-300 hover:bg-gray-800'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - Agents List */}
            <div className="lg:col-span-7">
              <div className={`rounded-xl border ${isDarkTheme ? 'bg-[#141414] border-gray-800' : 'bg-white border-gray-300'}`}>
                <div className={`p-4 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
                  <h2 className={`text-lg font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Created Agents
                  </h2>
                  <p className={`text-xs mt-1 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                    {agents.length} agent{agents.length !== 1 ? 's' : ''} created
                  </p>
                </div>

                <div className="p-4">
                  {agents.length === 0 ? (
                    <div className={`text-center py-12 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                      <Cpu className={`w-12 h-12 mx-auto mb-4 ${isDarkTheme ? 'text-gray-700' : 'text-gray-400'}`} />
                      <p className="text-sm">No agents created yet</p>
                      <p className="text-xs mt-1">Create your first AI agent to get started</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {agents.map((agent) => (
                        <div
                          key={agent.id}
                          className={`p-4 rounded-lg border ${
                            isDarkTheme ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-300'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                                  {agent.name}
                                </h3>
                                <span className={`px-2 py-0.5 rounded text-xs ${
                                  isDarkTheme 
                                    ? 'bg-cyan-500/20 text-cyan-400' 
                                    : 'bg-cyan-100 text-cyan-700'
                                }`}>
                                  {agent.type}
                                </span>
                              </div>
                              {agent.description && (
                                <p className={`text-xs mb-1 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {agent.description}
                                </p>
                              )}
                              {agent.role && (
                                <p className={`text-xs mb-2 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                                  Role: {agent.role}
                                </p>
                              )}
                              <div className="flex items-center gap-4 text-xs">
                                <span className={isDarkTheme ? 'text-gray-500' : 'text-gray-500'}>
                                  Tone: {agent.voiceStyle}
                                </span>
                                <span className={isDarkTheme ? 'text-gray-500' : 'text-gray-500'}>
                                  Tokens: {agent.maxTokens}
                                </span>
                                {agent.enableMemory && (
                                  <span className={`px-2 py-0.5 rounded ${
                                    isDarkTheme 
                                      ? 'bg-green-500/20 text-green-400' 
                                      : 'bg-green-100 text-green-700'
                                  }`}>
                                    Memory
                                  </span>
                                )}
                              </div>
                              <p className={`text-xs mt-2 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                                Created: {agent.createdAt}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <button
                                onClick={() => handleChat(agent)}
                                className={`p-2 rounded-lg transition-colors ${
                                  isDarkTheme
                                    ? 'text-gray-400 hover:bg-gray-800 hover:text-cyan-400'
                                    : 'text-gray-600 hover:bg-gray-200 hover:text-cyan-600'
                                }`}
                                title="Chat with Agent"
                              >
                                <MessageCircle className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleEdit(agent)}
                                className={`p-2 rounded-lg transition-colors ${
                                  isDarkTheme
                                    ? 'text-gray-400 hover:bg-gray-800 hover:text-cyan-400'
                                    : 'text-gray-600 hover:bg-gray-200 hover:text-cyan-600'
                                }`}
                                title="Edit Agent"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(agent.id)}
                                className={`p-2 rounded-lg transition-colors ${
                                  isDarkTheme
                                    ? 'text-gray-400 hover:bg-gray-800 hover:text-red-400'
                                    : 'text-gray-600 hover:bg-gray-200 hover:text-red-600'
                                }`}
                                title="Delete Agent"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Agent Modal */}
      <AnimatePresence>
        {showEditModal && editingAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => {
              setShowEditModal(false);
              setEditingAgent(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-md rounded-xl p-6 ${isDarkTheme ? 'bg-[#141414]' : 'bg-white'}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Edit Agent
                </h3>
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingAgent(null);
                  }}
                  className={`p-1 rounded-lg transition-colors ${
                    isDarkTheme
                      ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Agent Name */}
                <div>
                  <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Agent Name
                  </label>
                  <input
                    type="text"
                    value={editingAgent.name}
                    onChange={(e) => handleEditChange('name', e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                      isDarkTheme
                        ? 'bg-[#0a0a0a] border-gray-800 text-white focus:ring-cyan-500 focus:border-cyan-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Description
                  </label>
                  <textarea
                    value={editingAgent.description || ''}
                    onChange={(e) => handleEditChange('description', e.target.value)}
                    rows={3}
                    className={`w-full px-3 py-2 rounded-lg border text-sm resize-none transition-colors focus:outline-none focus:ring-2 ${
                      isDarkTheme
                        ? 'bg-[#0a0a0a] border-gray-800 text-white focus:ring-cyan-500 focus:border-cyan-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                  />
                </div>

                {/* Agent Role */}
                <div>
                  <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Agent Role / Purpose
                  </label>
                  <textarea
                    value={editingAgent.role || ''}
                    onChange={(e) => handleEditChange('role', e.target.value)}
                    rows={3}
                    className={`w-full px-3 py-2 rounded-lg border text-sm resize-none transition-colors focus:outline-none focus:ring-2 ${
                      isDarkTheme
                        ? 'bg-[#0a0a0a] border-gray-800 text-white focus:ring-cyan-500 focus:border-cyan-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                  />
                </div>

                {/* Agent Type */}
                <div>
                  <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Agent Type
                  </label>
                  <div className="relative">
                    <select
                      value={editingAgent.type}
                      onChange={(e) => handleEditChange('type', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm transition-colors focus:outline-none focus:ring-2 ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white focus:ring-cyan-500 focus:border-cyan-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:ring-cyan-500 focus:border-cyan-500'
                      }`}
                    >
                      <option value="General">General</option>
                      <option value="Support">Support</option>
                      <option value="Creative">Creative</option>
                    </select>
                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </div>
                </div>

                {/* Voice Tone */}
                <div>
                  <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Voice Tone
                  </label>
                  <div className="relative">
                    <select
                      value={editingAgent.voiceStyle}
                      onChange={(e) => handleEditChange('voiceStyle', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border appearance-none text-sm transition-colors focus:outline-none focus:ring-2 ${
                        isDarkTheme
                          ? 'bg-[#0a0a0a] border-gray-800 text-white focus:ring-cyan-500 focus:border-cyan-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:ring-cyan-500 focus:border-cyan-500'
                      }`}
                    >
                      <option value="Friendly">Friendly</option>
                      <option value="Formal">Formal</option>
                      <option value="Energetic">Energetic</option>
                    </select>
                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </div>
                </div>

                {/* Enable Memory */}
                <div className="flex items-center justify-between">
                  <label className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Memory
                  </label>
                  <button
                    type="button"
                    onClick={() => handleEditChange('enableMemory', !editingAgent.enableMemory)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                      editingAgent.enableMemory
                        ? 'bg-cyan-500'
                        : isDarkTheme
                        ? 'bg-gray-700'
                        : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        editingAgent.enableMemory ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Max Tokens */}
                <div>
                  <label className={`text-xs mb-2 block ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Max Tokens
                  </label>
                  <input
                    type="number"
                    value={editingAgent.maxTokens}
                    onChange={(e) => handleEditChange('maxTokens', Number(e.target.value))}
                    min="100"
                    max="10000"
                    step="100"
                    className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                      isDarkTheme
                        ? 'bg-[#0a0a0a] border-gray-800 text-white focus:ring-cyan-500 focus:border-cyan-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingAgent(null);
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    isDarkTheme
                      ? 'bg-[#0a0a0a] border-gray-800 text-gray-300 hover:bg-gray-800'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateAgent}
                  className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
