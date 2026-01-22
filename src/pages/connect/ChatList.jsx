import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const chats = [
  { id: 1, name: "Aman Verma", role: "Founder", msg: "When are you free for a call?", time: "2m", unread: 2, img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100" },
  { id: 2, name: "Neha Sharma", role: "Investor", msg: "Loved the pitch deck! Let's connect.", time: "1h", unread: 0, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
  { id: 3, name: "Rahi M.", role: "Talent", msg: "I have experience with Next.js.", time: "1d", unread: 0, img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" },
];

const ChatList = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 pt-8 md:pt-12 max-w-3xl mx-auto">

      {/* Title */}
      <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">
        Messages
      </h1>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-3.5 text-orange-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full bg-white border border-orange-200 rounded-2xl pl-12 pr-4 py-3 
          focus:outline-none focus:ring-2 focus:ring-orange-400/40 
          shadow-sm hover:shadow-md transition-all"
        />
      </div>

      {/* Chat Cards */}
      <div className="space-y-3">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => navigate(`/connect/${chat.id}`)}
            className="flex items-center gap-4 p-4 rounded-2xl 
            bg-white border border-orange-100 
            hover:border-orange-300 hover:shadow-xl 
            hover:-translate-y-[2px]
            transition-all cursor-pointer"
          >
            {/* Avatar */}
            <div className="relative">
              <img
                src={chat.img}
                alt={chat.name}
                className="w-14 h-14 rounded-full object-cover border border-orange-200"
              />
              {chat.unread > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-white shadow" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-slate-900 truncate">
                  {chat.name}
                </h3>
                <span className="text-xs text-orange-400 font-semibold">
                  {chat.time}
                </span>
              </div>

              <p
                className={`truncate text-sm mt-1 ${
                  chat.unread > 0
                    ? "text-slate-900 font-semibold"
                    : "text-slate-500"
                }`}
              >
                {chat.msg}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
