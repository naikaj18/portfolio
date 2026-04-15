import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey! I'm Naikaj's portfolio assistant. Ask me anything about his experience, skills, or projects.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    const messageText = text ?? input;
    if (!messageText.trim() || loading) return;

    const userMessage = { role: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const history = messages
      .slice(1)
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.text }],
      }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText, history }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestions = [
    "What does Naikaj do?",
    "Tell me about his projects",
    "What are his skills?",
    "How can I contact him?",
  ];

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl border border-[#d2d2d7] dark:border-[#3a3a3c] shadow-2xl bg-[#f6f5f3] dark:bg-[#1c1c1e]"
            style={{
              width: "360px",
              maxWidth: "calc(100vw - 3rem)",
              height: "500px",
              maxHeight: "70vh",
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-[#d2d2d7] dark:border-[#3a3a3c] backdrop-blur-md rounded-t-2xl">
              <p className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] text-sm">
                Ask about Naikaj
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#1d1d1f] dark:bg-[#f6f5f3] text-[#f5f5f7] dark:text-[#1d1d1f] rounded-2xl rounded-br-md"
                        : "bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#d2d2d7] dark:border-[#3a3a3c] rounded-2xl rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Loading */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-white/10 border border-[#d2d2d7] dark:border-[#3a3a3c] rounded-2xl rounded-bl-md px-4 py-2.5">
                    <Loader2 className="w-4 h-4 animate-spin text-[#6e6e73] dark:text-[#a1a1a6]" />
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-[#d2d2d7] dark:border-[#3a3a3c] text-[#6e6e73] dark:text-[#a1a1a6] hover:bg-[#1d1d1f] hover:text-[#f5f5f7] dark:hover:bg-[#f6f5f3] dark:hover:text-[#1d1d1f] hover:border-transparent transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#d2d2d7] dark:border-[#3a3a3c] backdrop-blur-md rounded-b-2xl flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                placeholder="Ask something..."
                className="flex-1 text-sm bg-transparent text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#6e6e73] dark:placeholder-[#a1a1a6] outline-none disabled:opacity-50"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1d1d1f] dark:bg-[#f6f5f3] text-[#f5f5f7] dark:text-[#1d1d1f] disabled:opacity-40 transition-opacity"
              >
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-[#1d1d1f] dark:bg-[#f6f5f3] text-[#f5f5f7] dark:text-[#1d1d1f] shadow-2xl"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
