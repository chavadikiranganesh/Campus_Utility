import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your Campus Utility assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: input, user_id: 1 })
    });
    const data = await response.json();
    const botMessage = { text: data.response, sender: 'bot' };
    setMessages(prev => [...prev, botMessage]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col">
        <div className="bg-blue-600 text-white p-6 rounded-t-xl">
          <h1 className="text-2xl font-bold">Campus Utility Chatbot</h1>
          <p className="text-blue-100">Ask me anything about the platform!</p>
        </div>
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-900'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-gray-200">
          <div className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
            >
              Send
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Try asking about listing items, finding accommodations, or general help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;