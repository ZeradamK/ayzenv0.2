import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Chatbot from './Components/ChatbotPage/Chatbot';
import './App.css';

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chatbot />} />
            </Routes>
    );
}

export default App;
