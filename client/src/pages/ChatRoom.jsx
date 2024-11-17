import React, { useState, useEffect } from 'react';
import ChatBox from '../components/ChatBox';
import SendMessage from '../components/SendMessage';
import { MessagesProvider } from '../MessagesContext';
import { useNavigate } from 'react-router-dom';

const ChatRoom = () => {
  const [isSet, setIsSet] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedApiProvider = localStorage.getItem('apiProvider');
    const savedApiKey = localStorage.getItem('apiKey');
    const savedModel = localStorage.getItem('model');

    if (savedApiProvider && savedApiKey && savedModel) {
      setIsSet(true);
    } else {
      navigate('/setting');
    }
  }, [navigate]); // Add navigate to the dependency array

  return (
    <>
      {isSet ? (
        <MessagesProvider>
          <div>
            <ChatBox />
            <SendMessage />
          </div>
        </MessagesProvider>
      ) : null}
    </>
  );
};

export default ChatRoom;