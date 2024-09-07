import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useMessages } from "../MessagesContext";

const ChatBox = () => {
  const { messages } = useMessages();
  const messagesEndRef = useRef(null);

  // Scroll to bottom when a new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {/* Dummy div to act as the scroll anchor */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatBox;
