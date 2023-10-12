import React from 'react';
import ChatMessage from './chatMessage';
import MyComponent from './apiData';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div>
        <ChatMessage
          key={index}
          message={message.text}
          isUser={message.isUser}
        />
        <MyComponent query={messages}/>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;