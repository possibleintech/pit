"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  MessageSquare,
  Sparkles,
  Phone,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  RefreshCw,
  Calendar,
  Layers,
} from "lucide-react";
import { CONTACT, SITE, ROUTES } from "@/lib/constants";
import { PitBot } from "./PitBot";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: string;
}

const QUICK_ACTIONS = [
  {
    label: "Get a Website Quote",
    action: "quote",
    prompt: "I want to get a quote for a new modern website or e-commerce store.",
  },
  {
    label: "Book Free Consultation",
    action: "consult",
    prompt: "How can I book a free project consultation with the PIT engineering team?",
  },
  {
    label: "Explore Services",
    action: "services",
    link: ROUTES.services,
  },
  {
    label: "Chat on WhatsApp",
    action: "whatsapp",
    link: `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20PIT%20team!%20I'm%20interested%20in%20building%20a%20digital%20solution.`,
  },
];

export function PitBotChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewNotification, setHasNewNotification] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with PIT BOT welcome message
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("pit_bot_chat_history");
      if (saved) {
        setMessages(JSON.parse(saved));
      } else {
        const initialGreeting: ChatMessage = {
          id: "welcome",
          role: "model",
          content: `Hi there! 👋 I'm **PIT BOT**, your digital technology assistant. I can help you explore modern website development, e-commerce, Google SEO, or connect you directly with our engineering team!`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages([initialGreeting]);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  // Sync to session storage
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem("pit_bot_chat_history", JSON.stringify(messages));
      } catch {
        // ignore
      }
    }
  }, [messages]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when open
  useEffect(() => {
    if (isOpen) {
      setHasNewNotification(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  const handleSend = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const payloadHistory = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history: payloadHistory }),
      });

      if (!res.ok) throw new Error("API failed");

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "model",
        content:
          data.reply ||
          "Thanks for reaching out! You can also chat directly with us on WhatsApp at 7871694931.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "model",
        content:
          "I'm momentarily reconnecting! Feel free to click below to reach us on WhatsApp or explore our services.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: (typeof QUICK_ACTIONS)[number]) => {
    if (action.link) {
      if (action.action === "whatsapp") {
        window.open(action.link, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = action.link;
      }
      return;
    }
    if (action.prompt) {
      handleSend(action.prompt);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Floating Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-[calc(100vw-2.5rem)] sm:w-[380px] max-h-[580px] h-[520px] bg-white rounded-3xl border border-[#E8E8ED] shadow-[0_20px_50px_rgba(41,45,61,0.18)] flex flex-col overflow-hidden"
          >
            {/* Header with PIT BOT branding */}
            <div className="bg-[#292D3D] text-white p-4 sm:p-4.5 flex items-center justify-between relative overflow-hidden shrink-0">
              {/* Subtle magenta ambient background swirl */}
              <div
                className="absolute -right-8 -top-8 w-32 h-32 rounded-full pointer-events-none blur-xl opacity-40"
                style={{ background: "radial-gradient(circle, #E20A96 0%, transparent 70%)" }}
              />

              <div className="flex items-center gap-3 relative z-10">
                <div className="relative w-11 h-11 rounded-2xl bg-white/10 p-1 border border-white/20 flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/pit-bot/pit-bot-chat.webp"
                    alt="PIT BOT"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain drop-shadow"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#292D3D]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm text-white tracking-wide">PIT BOT</h3>
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-[#E20A96] text-white">
                      AI Guide
                    </span>
                  </div>
                  <p className="text-[11px] text-white/70">Online • Possible In Tech</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close PIT BOT assistant"
                className="relative z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Action Chips Bar */}
            <div className="bg-[#F7F7FA] px-3.5 py-2 border-b border-[#E8E8ED] flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
              {QUICK_ACTIONS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleQuickAction(item)}
                  className="shrink-0 text-[11px] font-semibold text-[#292D3D] bg-white hover:bg-[#FCEAF4] hover:text-[#E20A96] hover:border-[#E20A96]/30 border border-[#E8E8ED] px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-2xs"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gradient-to-b from-white to-[#F7F7FA]/50 text-xs">
              {messages.map((msg) => {
                const isBot = msg.role === "model";
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 ${isBot ? "items-start" : "items-end justify-end"}`}
                  >
                    {isBot && (
                      <div className="w-7 h-7 rounded-xl bg-[#FCEAF4] border border-[#E20A96]/20 flex items-center justify-center shrink-0 p-0.5">
                        <Image
                          src="/assets/pit-bot/pit-bot-chat.webp"
                          alt="Bot"
                          width={26}
                          height={26}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                        isBot
                          ? "bg-white border border-[#E8E8ED] text-[#292D3D] shadow-2xs"
                          : "bg-[#E20A96] text-white rounded-br-xs shadow-xs"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.content}</p>
                      <span
                        className={`text-[9px] block mt-1 ${
                          isBot ? "text-[#53596A]/60" : "text-white/70 text-right"
                        }`}
                      >
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-[#53596A] bg-white border border-[#E8E8ED] rounded-2xl px-3.5 py-2 w-fit shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] font-medium ml-1">PIT BOT is typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-[#E8E8ED] shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask PIT BOT anything..."
                  className="flex-1 text-xs bg-[#F7F7FA] border border-[#E8E8ED] rounded-xl px-3 py-2.5 text-[#292D3D] focus:outline-none focus:border-[#E20A96] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-9 h-9 rounded-xl bg-[#E20A96] hover:bg-[#C40882] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs shrink-0"
                >
                  <Send size={14} />
                </button>
              </form>

              {/* Direct WhatsApp Quick Link */}
              <div className="mt-2 pt-2 border-t border-[#E8E8ED]/60 flex items-center justify-between text-[11px] text-[#53596A]">
                <span>Want instant human response?</span>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#E20A96] hover:underline"
                >
                  <span>WhatsApp Team</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button Featuring Animated PIT BOT */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close PIT BOT Assistant" : "Open PIT BOT Assistant"}
        className="group relative flex items-center gap-3 bg-white border-2 border-[#E8E8ED] hover:border-[#E20A96]/60 pl-2 pr-4 py-2 rounded-full shadow-[0_10px_30px_rgba(41,45,61,0.15)] hover:shadow-[0_12px_36px_rgba(226,10,150,0.25)] transition-all cursor-pointer"
      >
        {/* Soft pink ambient halo */}
        <div
          className="absolute inset-0 rounded-full blur-md opacity-30 pointer-events-none -z-10 group-hover:opacity-70 transition-opacity"
          style={{ background: "radial-gradient(circle, #E20A96 0%, transparent 70%)" }}
        />

        {/* Mascot Avatar */}
        <div className="relative w-11 h-11 rounded-full bg-[#FCEAF4] border border-[#E20A96]/30 flex items-center justify-center overflow-hidden shrink-0">
          <Image
            src="/assets/pit-bot/pit-bot-chat.webp"
            alt="PIT BOT Mascot"
            width={44}
            height={44}
            className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition-transform duration-300"
          />

          {/* Online green indicator badge */}
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-[#292D3D]/10" />
        </div>

        {/* Label Text */}
        <div className="text-left hidden xs:block">
          <div className="text-[11px] font-extrabold text-[#292D3D] group-hover:text-[#E20A96] transition-colors leading-tight flex items-center gap-1">
            <span>PIT BOT</span>
            <Sparkles size={11} className="text-[#E20A96]" />
          </div>
          <div className="text-[10px] text-[#53596A] font-medium leading-tight">
            Chat with us
          </div>
        </div>

        {/* Unread Notification Pill */}
        {hasNewNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E20A96] opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E20A96] text-white text-[9px] font-bold items-center justify-center">
              1
            </span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
