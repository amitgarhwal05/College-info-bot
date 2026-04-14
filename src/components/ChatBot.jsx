import { useState } from "react";
import ChatMessage from "./ChatMessage";
import InputBox from "./InputBox";
import { getResponse } from "../utils/getResponse";
import Suggestions from "./Suggestions";
import { useRef, useEffect } from "react";

function Chatbot() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "👋 Welcome! Ask me anything about campus." }
    ]);
    
    const [lastBotMessage, setLastBotMessage] = useState("");
    const chatEndRef = useRef(null);
    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (input) => {
        const userMsg = { sender: "user", text: input };
        const typingMsg = { sender: "bot", text: "Typing..." };

        setMessages((prev) => [...prev, userMsg, typingMsg]);

        setTimeout(() => {
            const reply = getResponse(input);

            setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                    sender: "bot",
                    text: reply
                };
                return updated;
            });

            setLastBotMessage(reply); // 🔥 important
        }, 600);
    };

    return (
        <div className="chat-container">

            <div className="chat-header">🎓 Campus Assistant</div>

            <div className="chat-body">
                {messages.map((msg, i) => (
                    <ChatMessage key={i} sender={msg.sender} text={msg.text} />
                ))}
                <div ref={chatEndRef} />
            </div>
            <Suggestions
                lastBotMessage={lastBotMessage}
                onSelect={handleSend}
            />
            <InputBox onSend={handleSend} />
        </div>
    );
}

export default Chatbot;