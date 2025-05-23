import React from "react";
import Message from "./Message";
import "./ChatWindow.css";
import { useEffect, useRef } from "react";

function ChatWindow({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="empty-chatwindow">
        <h2>Try Searching !!!</h2>
      </div>
    );
  }

  return (
    <>
      <div className="chatwindow-content">
        {messages.map((message) => (
          <Message
            key={message.id}
            content={message.content}
            sender={message.sender}
          />
        ))}
        <div ref={bottomRef} />
      </div>
    </>
  );
}

export default ChatWindow;
