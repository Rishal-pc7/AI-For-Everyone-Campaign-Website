import AiTerminalClient from './AiTerminalClient';

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

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-end min-h-[500px] md:min-h-[400px]">
            {/* Conversation Area */}
            <AiTerminalClient SCENARIOS={SCENARIOS} />
        </div>
    );
};

export default AiSearchBar;
