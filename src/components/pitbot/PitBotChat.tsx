"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Sparkles,
  Phone,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { CONTACT, ROUTES } from "@/lib/constants";
import { PITBOT_CHAT_CONVERSATIONS } from "./pitBotMessages";

interface MessageItem {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  action?: {
    label: string;
    href: string;
  };
}

export function PitBotChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize messages on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("pitbot_chat_stream");
      if (saved) {
        setMessages(JSON.parse(saved));
        setShowWelcomeBubble(false);
      } else {
        const welcomeMsg: MessageItem = {
          id: "welcome-1",
          sender: "bot",
          text: PITBOT_CHAT_CONVERSATIONS.welcome,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages([welcomeMsg]);
      }
    } catch {
      // ignore
    }

    // Auto-dismiss initial floating welcome bubble after 8s
    const timer = setTimeout(() => setShowWelcomeBubble(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Save conversation
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem("pitbot_chat_stream", JSON.stringify(messages));
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
  }, [messages, isTyping, isOpen]);

  // Focus input and handle Escape key
  useEffect(() => {
    if (isOpen) {
      setShowWelcomeBubble(false);
      setTimeout(() => inputRef.current?.focus(), 250);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  // Handle selecting a predefined quick action option
  const handleSelectOption = (opt: (typeof PITBOT_CHAT_CONVERSATIONS.options)[number]) => {
    if (isTyping) return;

    const userMsg: MessageItem = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: opt.label,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: MessageItem = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: opt.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        action: {
          label: opt.actionLabel,
          href: opt.actionHref,
        },
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  // Handle free-form typed message
  const handleSendText = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: MessageItem = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simple keyword matcher for predefined intelligence, with fallback to API
    const lower = trimmed.toLowerCase();
    let matchedReply = "";
    let matchedAction: { label: string; href: string } | undefined;

    if (lower.includes("website") || lower.includes("web") || lower.includes("redesign")) {
      matchedReply =
        "We build fast, responsive websites with Next.js and Tailwind CSS! Would you like to review our plans or get an immediate estimate?";
      matchedAction = { label: "Get a Website Quote", href: "/services#website-development" };
    } else if (lower.includes("ecom") || lower.includes("shop") || lower.includes("store")) {
      matchedReply =
        "Our e-commerce stores feature lightning-fast carts, Razorpay & Stripe integrations, and automated order flows.";
      matchedAction = { label: "Explore E-commerce", href: "/services#ecommerce-stores" };
    } else if (lower.includes("seo") || lower.includes("rank") || lower.includes("google")) {
      matchedReply =
        "We optimize technical SEO, schema tags, and Core Web Vitals to get your brand onto Page 1 of Google.";
      matchedAction = { label: "Explore SEO Services", href: "/services#search-engine-optimization" };
    } else if (lower.includes("contact") || lower.includes("call") || lower.includes("talk") || lower.includes("whatsapp")) {
      matchedReply =
        "You can reach our team directly at 7871694931 or message us on WhatsApp anytime!";
      matchedAction = {
        label: "WhatsApp Team (7871694931)",
        href: "https://wa.me/917871694931?text=Hi%20PIT%20team,%20I'd%20like%20to%20discuss%20a%20project",
      };
    }

    if (matchedReply) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: matchedReply,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            action: matchedAction,
          },
        ]);
        setIsTyping(false);
      }, 500);
      return;
    }

    // Fallback to /api/chat
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      const botReply =
        data.reply ||
        "Thanks for asking! Our engineering team is available to discuss your specific requirements directly on WhatsApp.";

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          action: {
            label: "Chat on WhatsApp",
            href: `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`,
          },
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "I'm right here! Feel free to choose one of our quick topics below or chat with us directly on WhatsApp.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          action: {
            label: "WhatsApp Team",
            href: `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`,
          },
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    const welcomeMsg: MessageItem = {
      id: "welcome-1",
      sender: "bot",
      text: PITBOT_CHAT_CONVERSATIONS.welcome,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([welcomeMsg]);
    try {
      sessionStorage.removeItem("pitbot_chat_stream");
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Floating Welcome Speech Bubble on first visit */}
      <AnimatePresence>
        {!isOpen && showWelcomeBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            className="mb-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E8ED] shadow-[0_8px_24px_rgba(41,45,61,0.12)] flex items-center gap-2 cursor-pointer hover:border-[#E20A96]/40 transition-all select-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#E20A96] animate-pulse shrink-0" />
            <span className="text-xs font-bold text-[#292D3D]">
              Hey! I&apos;m PIT BOT. Need a hand? 👋
            </span>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-[#E8E8ED] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mb-3 w-[calc(100vw-2.5rem)] sm:w-[380px] max-h-[580px] h-[520px] bg-white rounded-3xl border border-[#E8E8ED] shadow-[0_20px_50px_rgba(41,45,61,0.18)] flex flex-col overflow-hidden"
            role="dialog"
            aria-label="PIT BOT Assistant"
          >
            {/* Header */}
            <div className="bg-[#292D3D] text-white p-4 flex items-center justify-between relative overflow-hidden shrink-0">
              {/* Soft magenta background glow */}
              <div
                className="absolute -right-6 -top-6 w-28 h-28 rounded-full pointer-events-none blur-xl opacity-40"
                style={{ background: "radial-gradient(circle, #E20A96 0%, transparent 70%)" }}
              />

              <div className="flex items-center gap-3 relative z-10">
                <div className="relative w-10 h-10 rounded-2xl bg-white/10 p-1 border border-white/20 flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/pit-bot/pit-bot-chat.webp"
                    alt="PIT BOT"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain drop-shadow"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#292D3D]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm text-white tracking-wide">PIT BOT</h3>
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-[#E20A96] text-white">
                      Guide
                    </span>
                  </div>
                  <p className="text-[11px] text-white/70">Online • Possible In Tech</p>
                </div>
              </div>

              {/* Action Buttons: Reset & Close */}
              <div className="flex items-center gap-1 relative z-10">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <RotateCcw size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close PIT BOT assistant"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Quick Action Chips Bar */}
            <div className="bg-[#F7F7FA] px-3.5 py-2 border-b border-[#E8E8ED] flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
              {PITBOT_CHAT_CONVERSATIONS.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt)}
                  className="shrink-0 text-[11px] font-semibold text-[#292D3D] bg-white hover:bg-[#FCEAF4] hover:text-[#E20A96] hover:border-[#E20A96]/30 border border-[#E8E8ED] px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-2xs"
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Messages Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-[#F7F7FA]/50 text-xs">
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}
                  >
                    <div className={`flex gap-2 max-w-[85%] ${isBot ? "items-start" : "items-end"}`}>
                      {isBot && (
                        <div className="w-7 h-7 rounded-xl bg-[#FCEAF4] border border-[#E20A96]/20 flex items-center justify-center shrink-0 p-0.5 mt-0.5">
                          <Image
                            src="/assets/pit-bot/pit-bot-chat.webp"
                            alt="Bot"
                            width={26}
                            height={26}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <div
                          className={`rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                            isBot
                              ? "bg-white border border-[#E8E8ED] text-[#292D3D] shadow-2xs"
                              : "bg-[#E20A96] text-white rounded-br-xs shadow-xs"
                          }`}
                        >
                          <p className="whitespace-pre-line">{msg.text}</p>
                        </div>

                        {/* Interactive Action Button from Bot */}
                        {isBot && msg.action && (
                          <div className="mt-1.5">
                            {msg.action.href.startsWith("http") ? (
                              <a
                                href={msg.action.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E20A96] hover:bg-[#C40882] text-white text-[11px] font-bold shadow-xs transition-colors"
                              >
                                <span>{msg.action.label}</span>
                                <ExternalLink size={11} />
                              </a>
                            ) : (
                              <Link
                                href={msg.action.href}
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#292D3D] hover:bg-[#E20A96] text-white text-[11px] font-bold shadow-xs transition-colors"
                              >
                                <span>{msg.action.label}</span>
                                <ArrowRight size={11} />
                              </Link>
                            )}
                          </div>
                        )}

                        <span
                          className={`text-[9px] block mt-1 ${
                            isBot ? "text-[#53596A]/60" : "text-white/70 text-right"
                          }`}
                        >
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-[#53596A] bg-white border border-[#E8E8ED] rounded-2xl px-3.5 py-2 w-fit shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] font-medium ml-1">PIT BOT is typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-white border-t border-[#E8E8ED] shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendText(inputValue);
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
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message"
                  className="w-9 h-9 rounded-xl bg-[#E20A96] hover:bg-[#C40882] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs shrink-0"
                >
                  <Send size={14} />
                </button>
              </form>

              {/* Direct WhatsApp Callout */}
              <div className="mt-2 pt-2 border-t border-[#E8E8ED]/60 flex items-center justify-between text-[11px] text-[#53596A]">
                <span>Prefer direct human chat?</span>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#E20A96] hover:underline"
                >
                  <MessageCircle size={12} />
                  <span>WhatsApp (7871694931)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button with Animated PIT BOT Avatar */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close PIT BOT Assistant" : "Open PIT BOT Assistant"}
        className="group relative flex items-center gap-3 bg-white border-2 border-[#E8E8ED] hover:border-[#E20A96]/60 pl-2 pr-4 py-2 rounded-full shadow-[0_10px_30px_rgba(41,45,61,0.15)] hover:shadow-[0_12px_36px_rgba(226,10,150,0.25)] transition-all cursor-pointer select-none"
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
      </motion.button>
    </div>
  );
}
