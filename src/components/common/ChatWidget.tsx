"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, AlertCircle, RefreshCw } from "lucide-react";
import { PUBLIC_ASSETS, SITE } from "@/lib/constants";

interface Message {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: string;
}

const SUGGESTED_PROMPTS = [
  "What services does PIT offer?",
  "How do you handle SEO & Analytics?",
  "Can you build our e-commerce store?",
  "How can I book a consultation?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);

  // Load chat history from Session Storage on mount
  useEffect(() => {
    try {
      const savedHistory = sessionStorage.getItem("pit_chat_history");
      if (savedHistory) {
        setMessages(JSON.parse(savedHistory));
      } else {
        // Initial bot greeting
        const initialMessage: Message = {
          id: "welcome",
          role: "model",
          content: `Hi! Welcome to **${SITE.name}**. I'm your digital solutions assistant. How can I help you today? Feel free to ask about our website development, e-commerce stores, SEO, analytics, or mobile platforms!`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages([initialMessage]);
      }
    } catch (err) {
      console.error("Failed to load chat history from session storage", err);
    }
  }, []);

  // Save chat history to Session Storage when messages update
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem("pit_chat_history", JSON.stringify(messages));
      } catch (err) {
        console.error("Failed to save chat history to session storage", err);
      }
    }
  }, [messages]);

  // Auto-scroll to the bottom of the chat list on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when the chat widget opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        chatInputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: Message = {
      id: userMsgId,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);
    setHasError(false);

    try {
      const historyPayload = messages
        .filter((msg) => msg.id !== "welcome")
        .map((msg) => ({
          role: msg.role,
          content: msg.content,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: historyPayload }),
      });

      if (!res.ok) {
        throw new Error("Server response was not ok");
      }

      const data = await res.json();
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: "model",
        content: data.reply || "I apologize, but I could not process that. Please try again or reach out on WhatsApp.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const clearChatHistory = () => {
    sessionStorage.removeItem("pit_chat_history");
    const initialMessage: Message = {
      id: "welcome",
      role: "model",
      content: `Hi! Welcome to **${SITE.name}**. I'm your digital solutions assistant. How can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([initialMessage]);
    setHasError(false);
  };

  const formatMessageContent = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="font-bold text-[#292D3D]">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[360px] sm:w-[400px] h-[520px] max-h-[calc(100vh-100px)] bg-white rounded-3xl shadow-[0_16px_50px_rgba(41,45,61,0.18)] border border-[#E8E8ED] flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-[#292D3D] text-white p-4 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E20A96]/40 shadow-sm relative bg-white p-1">
                    <Image
                      src={PUBLIC_ASSETS.logo}
                      alt="PIT Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#292D3D] rounded-full z-10"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">PIT Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-300 font-medium">Digital Agency AI</span>
                    <span className="text-[8px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-400 font-bold rounded-full">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChatHistory}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/60 transition-colors"
                >
                  <RefreshCw size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/60 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-[#F7F7FA]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-xs ${
                      msg.role === "user"
                        ? "bg-[#E20A96] text-white rounded-br-none"
                        : "bg-white text-[#292D3D] border border-[#E8E8ED] rounded-bl-none"
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words text-xs sm:text-sm leading-relaxed">
                      {msg.role === "user" ? (
                        <p>{msg.content}</p>
                      ) : (
                        formatMessageContent(msg.content)
                      )}
                    </div>
                    <div
                      className={`text-[9px] mt-1.5 text-right ${
                        msg.role === "user" ? "text-pink-200" : "text-[#53596A]"
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#E8E8ED] rounded-2xl rounded-bl-none px-4 py-3 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#E20A96] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-[#E20A96] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-[#E20A96] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}

              {/* Error Block */}
              {hasError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2">
                  <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                  <div className="text-xs text-red-700">
                    <p className="font-semibold">Unable to connect</p>
                    <p className="mt-0.5">Please check your network or message us directly on WhatsApp.</p>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-3 pt-2 border-t border-[#E8E8ED] bg-white">
                <p className="text-[10px] font-bold text-[#53596A] uppercase tracking-wider mb-2">Suggested Topics</p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-xs bg-[#F7F7FA] text-[#292D3D] border border-[#E8E8ED] hover:border-[#E20A96] hover:bg-[#FCEAF4] px-3 py-1.5 rounded-full text-left transition-colors cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 bg-white border-t border-[#E8E8ED] flex items-center gap-2"
            >
              <input
                ref={chatInputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about websites, e-commerce, SEO..."
                disabled={isLoading}
                className="flex-1 bg-[#F7F7FA] border border-[#E8E8ED] rounded-full px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#E20A96] text-[#292D3D] placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-[#E20A96] text-white flex items-center justify-center hover:bg-[#C40882] transition-colors disabled:opacity-40"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#E20A96] hover:bg-[#C40882] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(226,10,150,0.36)] transition-all select-none cursor-pointer"
        aria-label="Toggle assistant chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
