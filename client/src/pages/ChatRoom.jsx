import React from "react";
import ChatBox from "../components/ChatBox";
import SendMessage from "../components/SendMessage";
import { MessagesProvider } from "../MessagesContext";

const ChatRoom = () => {
  return (
    <MessagesProvider>
      <div>
        <ChatBox />
        <SendMessage />
      </div>
    </MessagesProvider>
  );
};

export default ChatRoom;
