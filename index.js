import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Arquivo: src/App.js
import React, { useState } from 'react';
import './App.css';
import BotMessage from './components/BotMessage';
import UserMessage from './components/UserMessage';
import { FaRobot } from 'react-icons/fa';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);
      setInput('');
      
      // Simula a resposta do agente (pode ser substituído por uma chamada à API)
      setTimeout(() => {
        const botResponse = { sender: 'bot', text: 'Estou aqui para ajudar com o Monday!' };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <FaRobot className="bot-icon" />
        <h1>Monday Bot</h1>
      </header>
      <div className="chat-window">
        {messages.map((msg, index) => (
          msg.sender === 'user' ? <UserMessage key={index} text={msg.text} /> : <BotMessage key={index} text={msg.text} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default App;

// Arquivo: src/components/BotMessage.js
import React from 'react';
import './BotMessage.css';

function BotMessage({ text }) {
  return (
    <div className="bot-message">
      <p>{text}</p>
    </div>
  );
}

export default BotMessage;

// Arquivo: src/components/UserMessage.js
import React from 'react';
import './UserMessage.css';

function UserMessage({ text }) {
  return (
    <div className="user-message">
      <p>{text}</p>
    </div>
  );
}

export default UserMessage;

// Arquivo: src/App.css
body {
  font-family: 'Arial', sans-serif;
  background: #0d0d0d;
  color: #fff;
  margin: 0;
  padding: 0;
}

.app-container {
  max-width: 600px;
  margin: 50px auto;
  background: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.app-header {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #262626;
  border-bottom: 1px solid #333;
}

.bot-icon {
  font-size: 24px;
  margin-right: 10px;
}

.chat-window {
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
}

.input-container {
  display: flex;
  padding: 10px;
  background: #333;
  border-top: 1px solid #444;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  background: #444;
  color: #fff;
}

button {
  padding: 10px;
  border: none;
  background: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

// Arquivo: src/components/BotMessage.css
.bot-message {
  background: #007bff;
  color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  text-align: left;
  max-width: 70%;
}

// Arquivo: src/components/UserMessage.css
.user-message {
  background: #333;
  color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  text-align: right;
  max-width: 70%;
  align-self: flex-end;
}
