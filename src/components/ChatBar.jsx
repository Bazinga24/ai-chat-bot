import React from "react";
import { useState } from "react";
import "./ChatBar.css";
function ChatBar({ onSubmit }) {
  const [inputText, setInputText] = useState("");
  const submitHandler = () => {
    if (inputText) {
      const trimmedText = inputText.trim();
      onSubmit(trimmedText);
      setInputText("");
    }
  };

  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="chatbar-container">
      <div className="chatbar-input">
        <input
          type="text"
          placeholder="Go for it !"
          value={inputText}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="chatbar-button">
        <button onClick={submitHandler}>Send</button>
      </div>
    </div>
  );
}

export default ChatBar;
