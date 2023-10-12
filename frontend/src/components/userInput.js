import React, { useState } from 'react';

const UserInput = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      onSubmit(inputText);
      setInputText('');
    }
  };

  return (
    <form className="user-input" onSubmit={handleSubmit}>
      <input id="userInputBox" type="text" placeholder="Type your message..." value={inputText} onChange={handleInputChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default UserInput;