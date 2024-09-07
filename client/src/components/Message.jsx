import React from "react";
import logo from "../assets/images/logo.jpg";
import userIcon from "../assets/images/userIcon.png";

const Message = ({ message }) => {
  return (
    <div>
      {message.name === "Micro Agent" ? (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Micro Agent Logo" src={logo} />
            </div>
          </div>
          <div className="chat-header pb-1">
            {message.name}
            {/* Display the dynamic time here */}
            <time className="text-xs opacity-50 pl-1">{message.time}</time>
          </div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      ) : (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="User Icon" src={userIcon} />
            </div>
          </div>
          <div className="chat-header pb-1">
            {message.name}
            {/* Display the dynamic time here */}
            <time className="text-xs opacity-50 pl-1">{message.time}</time>
          </div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      )}
    </div>
  );
};

export default Message;
