import React, { useState } from 'react';
import './App.css'; 
import ChatWindow from './components/chatWindow';
import UserInput from './components/userInput';


function App() {
  const [messages, setMessages] = useState([]);

  const handleUserInput = (userMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, isUser: true },
    ]);
  };

  return (
    <div class="fullPage">
      <div className="app">
        {
          <div className='NavBar'>
            <li><img src={require('./Images/ministryOfCoal.png')} alt="Ministry Of Coal" ></img></li>
            <li><img src={require('./Images/g20.jpeg')} alt="G-20" ></img></li>
            <li><img src={require('./Images/gatiShakti.png')} alt="Gati Shakti" ></img></li>
            <li><img src={require('./Images/CoalBlockAuction.jpg')} alt="Coal Block Auction" ></img></li>
          </div> 
        }
        <h2 id="heading">Chat Interface</h2>
        <ChatWindow messages={messages} />
        <UserInput onSubmit={handleUserInput} />
      </div>
    </div>
  );

}

export default App;
