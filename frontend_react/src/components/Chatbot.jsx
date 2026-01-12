import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Chatbot</h1>
      <div className="border h-64 overflow-y-scroll mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === 'user' ? 'text-right' : 'text-left'}>
            <p className="inline-block bg-gray-200 p-2 m-1 rounded">{msg.text}</p>
          </div>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="w-full p-2 border" onKeyPress={(e) => e.key === 'Enter' && sendMessage()} />
      <button onClick={sendMessage} className="mt-2 bg-blue-500 text-white p-2">Send</button>
    </div>
  );
};

export default Chatbot;