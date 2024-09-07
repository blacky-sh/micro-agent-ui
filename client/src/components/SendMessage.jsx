import React, { useState } from "react";
import { useMessages } from "../MessagesContext";

const SendMessage = () => {
  const { messages, setMessages } = useMessages();
  const [inputText, setInputText] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    // Get the current time in HH:MM format
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      name: "User",
      time: currentTime, // Add time to the message
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-4 containerWrap flex">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white rounded-r-lg px-5"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
