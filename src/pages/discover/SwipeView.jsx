import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { X, Heart, Info, MapPin, Briefcase } from "lucide-react";

const CARDS = [
  { 
    id: 1, 
    name: "FinFlow", 
    role: "Fintech Startup", 
    desc: "AI-driven financial planning for Gen Z. We help you save while you sleep.", 
    tags: ["Seed Stage", "Mumbai"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 2, 
    name: "Sarah Chen", 
    role: "Angel Investor", 
    desc: "Looking for SaaS B2B early stage companies with strong technical founders.", 
    tags: ["SaaS", "Ex-Google"],
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 3, 
    name: "DevOps Pro", 
    role: "Talent", 
    desc: "Senior DevOps engineer looking for CTO role in a high-growth startup.", 
    tags: ["AWS", "Kubernetes"],
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
];

const Card = ({ data, onSwipe, style }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100) onSwipe("right");
    else if (info.offset.x < -100) onSwipe("left");
  };

  return (
    <motion.div
      style={{ x, rotate, opacity, ...style }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="absolute top-0 w-full md:w-[400px] h-[65vh] md:h-[600px] bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden cursor-grab active:cursor-grabbing"
    >
      {/* 1. Full Image Background for Top Half */}
      <div className="relative h-[60%] w-full">
         <img src={data.img} alt={data.name} className="w-full h-full object-cover pointer-events-none" />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
         
         {/* Name overlay on image */}
         <div className="absolute bottom-4 left-5 text-white">
            <h2 className="text-3xl font-bold leading-tight">{data.name}</h2>
            <p className="text-white/90 font-medium">{data.role}</p>
         </div>
      </div>

      {/* 2. Content Bottom Half */}
      <div className="h-[40%] p-6 flex flex-col justify-between bg-white">
        <div>
            <div className="flex gap-2 mb-4">
                {data.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wide">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base line-clamp-3">
                {data.desc}
            </p>
        </div>
        
        <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
             <div className="w-1/3 h-full bg-slate-900 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

const SwipeView = () => {
  const [cards, setCards] = useState(CARDS);
  const removeCard = (id) => setCards((prev) => prev.filter((c) => c.id !== id));

  return (
    <div className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden md:overflow-visible">
      <AnimatePresence>
        {cards.map((card, index) => (
          <Card key={card.id} data={card} onSwipe={() => removeCard(card.id)} style={{ zIndex: index }} />
        ))}
      </AnimatePresence>
      
      {cards.length === 0 && (
         <div className="text-center p-10">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🎉</div>
            <h3 className="text-xl font-bold text-slate-900">All caught up!</h3>
            <p className="text-slate-500">Check back later for more.</p>
         </div>
      )}

      {/* Floating Action Buttons */}
      <div className="absolute bottom-4 md:-bottom-20 flex items-center gap-6 z-20">
        <button className="w-16 h-16 rounded-full bg-white shadow-xl text-rose-500 flex items-center justify-center hover:scale-110 transition border border-rose-100">
            <X size={28} strokeWidth={3} />
        </button>
        <button className="w-16 h-16 rounded-full bg-indigo-600 shadow-xl shadow-indigo-200 text-white flex items-center justify-center hover:scale-110 transition">
            <Heart size={28} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};
export default SwipeView;