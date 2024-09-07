import React, { createContext, useContext, useState } from 'react';

// Create the context
const MessagesContext = createContext();

// Custom hook to use the Messages context
export const useMessages = () => {
  return useContext(MessagesContext);
};

// Provider to wrap the components that need access to messages
export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello there!", name: "User" },
    { id: 2, text: "Hi.", name: "Micro Agent" },
  ]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
};
