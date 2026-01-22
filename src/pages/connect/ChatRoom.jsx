import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, MoreVertical, Send } from "lucide-react"; // Assuming you have lucide, otherwise revert to text/emoji

const mockMessages = [
  {
    id: 1,
    sender: "them",
    text: "Hi Alex, I saw your startup profile. Interesting idea."
  },
  {
    id: 2,
    sender: "me",
    text: "Thanks! Happy to connect. Would love to hear your thoughts."
  },
  {
    id: 3,
    sender: "them",
    text: "Can you share more details about your target market?"
  }
];

const ChatRoom = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { id: Date.now(), sender: "me", text: input }
    ]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    // Mobile: Full viewport height (100dvh) to avoid browser bar issues. No border/radius.
    // Desktop (md): Card style with border and radius, fitting inside the parent layout.
    <div className="flex flex-col h-[100dvh] md:h-full w-full bg-white md:border md:border-slate-200 md:rounded-2xl overflow-hidden relative">
      
      {/* Header - Fixed height, shrink-0 to prevent crushing */}
      <div className="shrink-0 px-4 py-3 border-b border-slate-200 flex items-center justify-between bg-white z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-1 -ml-1 text-slate-500 hover:text-slate-900 transition rounded-full hover:bg-slate-100"
          >
            {/* Using a simple arrow or icon */}
            <span className="text-xl leading-none">←</span> 
          </button>

          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600 border border-slate-100">
            A
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-slate-900 leading-tight">
              Aman Verma
            </h3>
            <p className="text-[11px] text-slate-500 leading-tight">
              Founder • Delhi
            </p>
          </div>
        </div>

        <button className="text-slate-400 hover:text-slate-900 transition p-2">
            <span className="text-lg">⋮</span>
        </button>
      </div>

      {/* Messages Area - Flex 1 to take remaining space, scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 scroll-smooth">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[85%] md:max-w-[70%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm
              ${
                msg.sender === "me"
                  ? "bg-slate-900 text-white ml-auto rounded-tr-none"
                  : "bg-white border border-slate-200 text-slate-800 rounded-tl-none"
              }
            `}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Area - Fixed at bottom, safe area for mobile */}
      <div className="shrink-0 px-4 py-3 border-t border-slate-200 bg-white pb-safe">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all placeholder:text-slate-400"
          />

          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-slate-900/10"
          >
            <span className="text-xs font-bold uppercase tracking-wide">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;