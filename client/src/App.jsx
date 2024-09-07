import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatRoom from "./pages/ChatRoom";
import { PrivateRoute } from "./Routes/PrivateRoute";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
