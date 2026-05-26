"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "./ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const initialMessage: Message = {
  role: "assistant",
  content: "Hi! I'm Orindle's AI assistant. I can help you understand our website + WhatsApp lead system, pricing, services, and how we can build a free demo homepage for your local business.",
};

const quickReplies = [
  "What services do you offer?",
  "Show pricing",
  "Can I get a free demo?",
  "How does WhatsApp lead system work?",
  "Do you work with my business type?",
  "Contact on WhatsApp"
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Load messages from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("orindle_chat");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages([initialMessage]);
      }
    } else {
      setMessages([initialMessage]);
    }
  }, []);

  // Save messages to local storage when they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("orindle_chat", JSON.stringify(messages));
    }
    // Auto-scroll
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async (messageText: string = input) => {
    if (!messageText.trim()) return;
    
    // Check if it's the WhatsApp quick reply
    if (messageText === "Contact on WhatsApp") {
      window.open("https://wa.me/919021923579", "_blank");
      return;
    }

    const newUserMessage: Message = { role: "user", content: messageText.trim() };
    const newMessages = [...messages, newUserMessage];
    
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err: any) {
      setError(err.message || "An error occurred");
      // Add a fallback message
      setMessages((prev) => [
        ...prev, 
        { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again or contact us directly on WhatsApp." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([initialMessage]);
    localStorage.removeItem("orindle_chat");
    setError(null);
  };

  return (
    <>
      <div 
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 pointer-events-none translate-y-4 shadow-none" : "opacity-100 translate-y-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg shadow-gray-900/20 hover:scale-105 hover:bg-gray-800 transition-all duration-300"
          aria-label="Open Chat assistant"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-0 top-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 ring-2 ring-white">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          </span>
        </button>
      </div>

      <div
        ref={chatWindowRef}
        className={`fixed z-50 flex flex-col bg-white shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 rounded-2xl
          w-[calc(100vw-32px)] left-1/2 top-1/2 h-[75vh] max-h-[600px] 
          md:w-[360px] md:top-auto md:bottom-24 md:left-auto md:right-6 md:h-[500px] 
          ${
          isOpen ? "opacity-100 scale-100 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0" : "opacity-0 scale-95 pointer-events-none -translate-x-1/2 -translate-y-[45%] md:translate-x-0 md:translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-white p-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
              <Bot className="h-5 w-5" />
              <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></div>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-gray-900">Orindle Assistant</h3>
              <p className="text-[11px] text-gray-500">Ask about websites & leads</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {messages.length === 1 && (
            <div className="mb-4 flex flex-col gap-2">
              <div className="text-center text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-2">Suggested</div>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[12px] text-gray-600 shadow-sm transition-colors hover:border-gray-900 hover:text-gray-900 text-left"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`relative max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-gray-900 text-white rounded-tr-none"
                      : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                  }`}
                >
                  {/* Basic text rendering with line breaks */}
                  {msg.content.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i !== msg.content.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex w-full justify-start">
                <div className="bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-none px-4 py-3.5 max-w-[85%] shadow-sm">
                  <div className="flex space-x-1.5">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 bg-white p-3 rounded-b-2xl">
          {error && <div className="mb-2 px-2 text-[11px] text-red-500">{error}</div>}
          <div className="relative flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="max-h-[120px] min-h-[44px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-3 pr-10 text-[13px] text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-0 transition-colors scrollbar-thin"
              rows={1}
              disabled={isLoading}
            />
            <Button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="absolute right-1 bottom-1 h-9 w-9 shrink-0 rounded-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2 flex items-center justify-between px-1">
             <div className="text-[10px] text-gray-400">Powered by Gemini AI</div>
             <button onClick={clearChat} className="text-[10px] text-gray-400 hover:text-gray-900 transition-colors">Clear Chat</button>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile to close when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
