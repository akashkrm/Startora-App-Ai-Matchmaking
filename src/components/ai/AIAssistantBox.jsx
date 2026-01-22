import { useState } from "react";

const AIAssistantBox = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi Rohit, I can help you refine your idea, improve your profile, or suggest team members. What would you like to work on?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Got it. I’ll analyze your input and suggest a structured approach shortly.",
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-18 right-6 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition z-50"
      >
        AI
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-h-[70vh] bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">
              AI Assistant
            </h3>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-slate-900 transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm leading-relaxed px-3 py-2 rounded-xl max-w-[85%]
                  ${
                    msg.sender === "ai"
                      ? "bg-white border border-slate-200 text-slate-800"
                      : "bg-slate-900 text-white ml-auto"
                  }
                `}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="text-xs text-slate-400">AI is thinking...</div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask the AI..."
              className="flex-1 border border-slate-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistantBox;
