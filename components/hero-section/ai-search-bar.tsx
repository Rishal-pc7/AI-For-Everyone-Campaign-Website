'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, User, Bot } from 'lucide-react';

// --- Types ---
interface Message {
    id: string;
    role: 'user' | 'ai';
    content: string;
}

// --- Scenarios for Autoplay ---
const SCENARIOS = [
    {
        question: "What is AI For Everyone?",
        answer: "AI For Everyone is a specialized initiative to shift Kerala from being a Consumer of AI to a Creator of AI. We are building a future where technology serves us, not replaces us."
    },
    {
        question: "How does it work?",
        answer: "We are democratizing knowledge. No complex jargon—just open, multilingual, grassroots learning circles in your neighborhood."
    },
    {
        question: "Why does Kerala need this?",
        answer: "Kerala has a rich history of literacy. Now, it's time for AI literacy. We want to ensure no one is left behind in this technological revolution."
    },
    {
        question: "How do I actually participate?",
        answer: "Don't just watch—Build. Join a local Learning Circle, compete in a Hackathon, or mentor a beginner. We provide the tools; you provide the curiosity."
    }
];

const AiSearchBar = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isAiThinking, setIsAiThinking] = useState(false);
    const [scenarioIndex, setScenarioIndex] = useState(0);

    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, inputValue, isAiThinking]);

    // Autoplay Loop
    useEffect(() => {
        let isMounted = true;

        const runScenario = async () => {
            const currentScenario = SCENARIOS[scenarioIndex];

            // 1. Wait before starting new scenario
            await new Promise(r => setTimeout(r, 500));
            if (!isMounted) return;

            // 2. Simulate User Typing
            for (let i = 0; i <= currentScenario.question.length; i++) {
                if (!isMounted) return;
                setInputValue(currentScenario.question.substring(0, i));
                await new Promise(r => setTimeout(r, 20)); // Typing speed
            }

            await new Promise(r => setTimeout(r, 150)); // Pause before sending
            if (!isMounted) return;

            // 3. Send User Message
            const userMsgId = Date.now().toString();
            setMessages(prev => [...prev, { id: userMsgId, role: 'user', content: currentScenario.question }]);
            setInputValue('');

            // 4. AI Thinking
            setIsAiThinking(true);
            await new Promise(r => setTimeout(r, 500)); // Thinking time
            if (!isMounted) return;
            setIsAiThinking(false);

            // 5. Stream AI Response
            const aiMsgId = (Date.now() + 1).toString();
            let currentAnswer = "";
            setMessages(prev => [...prev, { id: aiMsgId, role: 'ai', content: "" }]);

            for (let i = 0; i <= currentScenario.answer.length; i++) {
                if (!isMounted) return;
                currentAnswer = currentScenario.answer.substring(0, i);
                setMessages(prev => prev.map(m => m.id === aiMsgId ? { ...m, content: currentAnswer } : m));
                await new Promise(r => setTimeout(r, 15)); // AI typing speed
            }

            // 6. Wait before next scenario
            await new Promise(r => setTimeout(r, 500)); // Read time
            if (!isMounted) return;
    
            // 7. Prepare next loop
            if (scenarioIndex === SCENARIOS.length - 1) {
                await new Promise(r => setTimeout(r, 2000)); // Read time
                setMessages([]); // Reset chat after last scenario
                setScenarioIndex(0);
            } else {
                setScenarioIndex(prev => prev + 1);
            }
        };

        runScenario();

        return () => { isMounted = false; };
    }, [scenarioIndex]);

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[400px]">

            {/* Conversation Area */}
            <div
                ref={scrollRef}
                className="w-full h-80 overflow-y-auto mb-6 space-y-6 px-4 no-scrollbar mask-image-fade-top"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
                <AnimatePresence mode='popLayout'>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai'
                                ? 'bg-linear-to-tr from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/20'
                                : 'bg-white/10'
                                }`}>
                                {msg.role === 'ai' ? <Sparkles className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-gray-400" />}
                            </div>

                            {/* Message Bubble */}
                            <div className={`max-w-[80%] text-sm leading-relaxed ${msg.role === 'user'
                                ? 'text-white/90'
                                : 'text-gray-200'
                                }`}>
                                {msg.content}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Thinking Indicator */}
                {isAiThinking && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-gray-500 text-xs ml-12"
                    >
                        <Bot className="w-3 h-3 animate-bounce" />
                        Thinking...
                    </motion.div>
                )}
            </div>

            {/* Input Area */}
            <div className="w-full relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>

                <div className="relative bg-white/5 backdrop-blur-xl rounded-full flex items-center p-2 h-14">
                    <div className="pl-4 pr-3">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <input
                        type="text"
                        value={inputValue}
                        readOnly
                        placeholder="About our AI mission..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 h-full text-sm cursor-not-allowed"
                        disabled
                    />
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                        <Send className="w-4 h-4 text-white/50" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AiSearchBar;
