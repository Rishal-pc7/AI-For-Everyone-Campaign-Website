"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AiTerminalMessages, { AiTerminalInput } from "./AiTerminalServer";

interface Message {
    id: string;
    role: 'user' | 'ai';
    content: string;
}

export default function AiTerminalClient({ SCENARIOS }: { SCENARIOS: { question: string; answer: string }[] }) {
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
    }, [messages, isAiThinking]);

    // Autoplay Loop
    useEffect(() => {
        let isMounted = true;
        const runScenario = async () => {
            const currentScenario = SCENARIOS[scenarioIndex];

            // 1. Wait before starting new scenario
            await new Promise(r => setTimeout(r, 100));
            if (!isMounted) return;

            // 2. Simulate User Typing
            for (let i = 0; i <= currentScenario.question.length; i++) {
                if (!isMounted) return;
                setInputValue(currentScenario.question.substring(0, i));
                await new Promise(r => setTimeout(r, 20)); // Typing speed
            }
            await new Promise(r => setTimeout(r, 50));
            if (!isMounted) return;

            // 3. Send User Message
            const userMsgId = Date.now().toString();
            setMessages(prev => [...prev, { id: userMsgId, role: 'user', content: currentScenario.question }]);
            setInputValue('');

            // 4. AI Thinking
            setIsAiThinking(true);
            await new Promise(r => setTimeout(r, 200)); // Reduced from 500ms
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
                await new Promise(r => setTimeout(r, 1200)); // Reduced from 2000ms
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
        <div suppressHydrationWarning className="w-full h-96 flex flex-col mb-6 px-4 mask-image-fade-top">
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto space-y-6 no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style jsx>{`
                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <AnimatePresence mode='popLayout'>
                    <AiTerminalMessages messages={messages} isAiThinking={isAiThinking} />
                </AnimatePresence>
            </div>

            <AiTerminalInput inputValue={inputValue} />
        </div>
    )
}