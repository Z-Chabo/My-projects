import { useState, useRef, useEffect } from "react";
import "../styles/ChatWidgetStyles.css";

interface Message {
  id: string;
  content: string;
  type: "human" | "ai";
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "ai-initial",
      content:
        "Hi, I'm Z-Bot, Zeidan's personal AI assistant. I can answer questions about him. What would you like to know?",
      type: "ai",
    },
  ]);
  // a referenc to the div that contains all messages between user and ai
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the chat body when messages change
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to history
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      type: "human",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      // Use the environment variable for the API base URL
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${apiBaseUrl}/aiAgent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: input,
          history: [...messages, userMessage],
        }),
      });

      const data = await res.json();

      // Add AI response to messages
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        content: data.response,
        type: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (err) {
      console.error("Error sending message:", err);
      const errorMessage: Message = {
        id: `err-${Date.now()}`,
        content:
          "Sorry, I'm having trouble connecting. Please try again later.",
        type: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="chat-widget-wrapper">
      {/* Floating Button */}
      {!isOpen && (
        <button className="chat-widget-button" onClick={toggleChat}>
          💬
        </button>
      )}

      {/* Chat Window */}
      <div className={`chat-widget-window ${isOpen ? "open" : "closed"}`}>
        <div className="chat-header">
          <span>Z-Bot</span>
          <button className="chat-close-btn" onClick={toggleChat}>
            ✖
          </button>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg) => (
            <p
              key={msg.id}
              className={`chat-message ${
                msg.type === "human" ? "human" : "ai"
              }`}
            >
              {msg.content}
            </p>
          ))}
        </div>

        <div className="chat-input-section">
          <input
            className="chat-input"
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="chat-send-btn" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
