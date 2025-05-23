import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { parsedMessage } from "./utils/parser";
import ChatBar from "./components/ChatBar";
import ChatWindow from "./components/ChatWindow";
import { v4 as uuid } from "uuid";
function App() {
  const initalmessages = JSON.parse(localStorage.getItem("messages")) || [];
  const [messages, setMessages] = useState(initalmessages);

  const deleteChatHandler = () => {
    setMessages([]);
    localStorage.removeItem("messages");
  };
  const submitHandler = async (textFromUser) => {
    const userMessage = {
      id: uuid(),
      sender: "user",
      content: textFromUser,
      type: "text",
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    //////////////////////////////////
    try {
      const expectedResult = await parsedMessage(textFromUser);
      const botMessage = {
        id: uuid(),
        sender: "assistant",
        content: expectedResult.content,
        type: expectedResult.type,
        pluginName: expectedResult.pluginName,
        timestamp: new Date().toISOString(),
      };

      const newMessages = [...updatedMessages, botMessage];
      setMessages(newMessages);

      localStorage.setItem("messages", JSON.stringify(newMessages));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="delete-chat-button" onClick={deleteChatHandler}>
        Start Fresh
      </button>
      <ChatWindow messages={messages} />
      <ChatBar onSubmit={submitHandler} />
    </>
  );
}

export default App;
