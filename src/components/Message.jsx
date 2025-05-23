import React from "react";
import "./Message.css";
function Message({ content, sender }) {
  return (
    <div className={sender === "user" ? "left" : "right"}>
      <h3 className="message-container">{content}</h3>
    </div>
  );
}

export default Message;
