import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import { PiSidebarBold } from "react-icons/pi";
import { FaPenToSquare } from "react-icons/fa6";
import aizenLogo from '../../Icons/ayzen-logo.png';
import { PiCirclesFour } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { IoSend, IoSettingsSharp, IoWarningOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";

const Chatbot = () => {
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };


    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");
        }
    };

    return (
        <div className={`chat-frame ${loading ? 'loading' : ''}`}>
            {loading ? (
                <div className="loader-container flex ">
                    <div className="loader" style={{ backgroundImage: `url(${aizenLogo})` }}></div>
                </div>
            ) : (
                <div className={`chat-main flex flex-row`}>
                    <div className={`chat-nav ${isExpanded ? 'expanded' : 'collapsed'}`}>
                        <div className="top-bar">
                            <div className="side-bar-div">
                                <PiSidebarBold className="side-bar-icon" onClick={toggleSidebar} />
                            </div>
                            <div className="edit-div">
                                <FaPenToSquare className="edit-icon" />
                            </div>
                        </div>
                        <div className="logo-area">
                            <div className="aizen-logo-area">
                                <div className="aizen-logo-div ml-2">
                                    <img src={aizenLogo} alt="aizen-logo" />
                                </div>
                                <div className="aizen-logo-text ml-2">
                                    <h1 className={`aizen-text ${isExpanded ? 'show' : 'hide'}`}>AYZEN</h1>
                                </div>
                            </div>
                            <div className="home-logo-area">
                                <div className="home-logo-div">
                                    <PiCirclesFour className="home-logo"/>
                                </div>
                                <div className="home-logo-text">
                                    <h1 className={`home-text ${isExpanded ? 'show' : 'hide'}`}>Home Page</h1>
                                </div>
                            </div>
                        </div>
                        <div className="nav-footer mt-auto">
                            <div className="bookmarks-div">
                                <div className="bookmarks-logo-div">
                                    <FaBookmark className="bookmarks-icon"/>
                                </div>
                                <div className="bookmarks-text-div">
                                    <h1 className="bookmarks-text">Bookmarks</h1>
                                </div>
                            </div>
                            <div className="setting-div">
                                <div className="setting-logo-div">
                                    <IoSettingsSharp className="setting-icon"/>
                                </div>
                                <div className="settings-text-div">
                                    <h1 className="settings-text">Settings</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`chat-main-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                        <div className="chat-ui">
                            <div className="chat-content">
                                <div className="chat-content-ayzen-text mb-2">
                                    <h1 className="chat-content-ayzen-text">AYZEN</h1>
                                </div>
                                <div className="chat-content-features mb-20">
                                    <div className="chat-list flex flex-col md:flex-row justify-center gap-x-5">
                                        <div className="chat-examples flex flex-col items-center">
                                            <FiSun className="chat-sun text-white text-2xl mb-3"/>
                                            <h1 className="chat-examples-text text-white mb-5">Examples</h1>
                                            <div className="chat-examples-cards">
                                                <div className="chat-cards example-card1">
                                                    <p>"What’s the weather like today?"</p>
                                                </div>
                                                <div className="chat-cards example-card2">
                                                    <p>"Can you help me write a cover letter for a job application?"</p>
                                                </div>
                                                <div className="chat-cards example-card3">
                                                    <p>"What are some healthy meal ideas for a week?"</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-capabilities flex flex-col items-center">
                                            <BsLightningCharge className="chat-lighting text-white text-2xl mb-3"/>
                                            <h1 className="chat-capabilities-text text-white mb-5">Capabilities</h1>
                                            <div className="chat-lighting-cards">
                                                <div className="chat-cards example-card1">
                                                    <p>"I can provide detailed answers to a wide range of questions"</p>
                                                </div>
                                                <div className="chat-cards example-card2">
                                                    <p>"I can help you write, debug, and understand code"</p>
                                                </div>
                                                <div className="chat-cards example-card3">
                                                    <p>"I can brainstorm ideas for projects, content, or solutions."</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-limitations flex flex-col items-center">
                                            <IoWarningOutline className="chat-warning text-white text-2xl mb-3"/>
                                            <h1 className="chat-limitations-text text-white mb-5">Limitations</h1>
                                            <div className="chat-limitations-cards">
                                                <div className="chat-cards example-card1">
                                                    <p>"I don't have access to the internet in real-time."</p>
                                                </div>
                                                <div className="chat-cards example-card2">
                                                    <p>"I don't have personal experiences, emotions, or consciousness."</p>
                                                </div>
                                                <div className="chat-cards example-card3">
                                                    <p>"I might struggle with understanding context-dependent language."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {messages.length > 0 && (
                                    <div className="chat-messages">
                                        {messages.map((msg, index) => (
                                            <div
                                                key={index}
                                                className={`chat-message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                                            >
                                                {msg.text}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="chat-main-content-input">
                                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="p-5 chat-main-chat-input outline-none" placeholder="Send a message..."/>
                                    <button className={"send-text-button"} onClick={handleSendMessage}><IoSend className="chat-send-icon"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
