import { Bot, Send, Sparkles, User } from "lucide-react";
import { AnimatedDiv } from "../../shared/animation-wrapper";

interface Message {
    id: string;
    role: 'user' | 'ai';
    content: string;
}

export default function AiTerminalMessages({ messages, isAiThinking }: { messages: Message[], isAiThinking: boolean }) {
    return (
        <>
            {messages.map((msg) => (
                <AnimatedDiv
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
                </AnimatedDiv>

            ))}
            {/* Thinking Indicator */}
            {isAiThinking && (
                <AnimatedDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-gray-500 text-xs ml-12"
                >
                    <Bot className="w-3 h-3 animate-bounce" />
                    Thinking...
                </AnimatedDiv>
            )}
        </>
    )
}

export function AiTerminalInput({ inputValue }: { inputValue: string }) {
    return (
        <div className="w-full relative group mt-4">
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>

            <div className="relative bg-white/5 backdrop-blur-xl rounded-full flex items-center p-2 h-14">
                <div className="pl-4 pr-3">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <input
                    type="text"
                    value={inputValue}
                    readOnly
                    suppressHydrationWarning
                    placeholder="About our AI mission..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 h-full text-sm cursor-not-allowed"
                    disabled
                />
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    <Send className="w-4 h-4 text-white/50" />
                </div>
            </div>
        </div>
    )
}