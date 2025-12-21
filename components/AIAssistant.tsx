
import React, { useState, useRef, useEffect } from 'react';
import { getAIAnalysis } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hello! I'm your research assistant. I've read the study on Urban Heat Islands. Ask me anything about Houston's deterministic heating or why Phoenix behaves differently!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const aiResponse = await getAIAnalysis(input);
    setMessages(prev => [...prev, { role: 'model', content: aiResponse || 'No response.' }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[500px] glass-effect rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
      <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex items-center justify-between">
        <h3 className="font-bold flex items-center gap-2">
          <i className="fa-solid fa-robot text-indigo-400"></i>
          AI Research Peer
        </h3>
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-br-none' 
                : 'bg-slate-700/50 text-slate-200 rounded-bl-none border border-slate-600'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-700/50 p-3 rounded-2xl rounded-bl-none border border-slate-600 flex gap-1">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-800/30 border-t border-slate-700">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about the methodology..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button 
            onClick={handleSend}
            className="p-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
