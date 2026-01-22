import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Sparkles, SlidersHorizontal } from "lucide-react";
import SwipeView from "./SwipeView";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

const Discover = () => {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-slate-50 flex flex-col">

      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(#fed7aa 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-200/40 rounded-full blur-[120px]"
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div 
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="relative z-10 flex-1 flex flex-col w-full px-6 md:px-12 pt-6 pb-4"
>

        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <motion.div variants={itemVariants}>
             <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-orange-200 shadow-sm text-xs font-bold text-orange-600 uppercase tracking-wider">
                  <Sparkles size={12} /> Curated For You
                </span>
             </div>
             <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
               Discover <br className="md:hidden"/> <span className="text-orange-400">Greatness.</span>
             </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3">
             <button 
                onClick={() => setFilterActive(!filterActive)}
                className={`
                  group flex items-center gap-2 px-5 py-3 rounded-2xl font-bold transition-all duration-300 border
                  ${filterActive 
                    ? "bg-orange-600 text-white border-orange-600 shadow-xl" 
                    : "bg-white text-slate-600 border-orange-200 hover:border-orange-400 hover:shadow-lg"}
                `}
             >
                <SlidersHorizontal
                  size={18}
                  className={
                    filterActive
                      ? "text-white"
                      : "text-orange-400 group-hover:text-orange-600 transition-colors"
                  }
                />
                <span>Filters</span>
                {filterActive && (
                  <span className="ml-1 flex h-2 w-2 rounded-full bg-yellow-400"></span>
                )}
             </button>
          </motion.div>
        </div>

        {/* SWIPE AREA WRAPPER */}
        <motion.div 
          variants={itemVariants}
          className="flex-1 relative flex items-center justify-center min-h-[500px]"
        >
          <div className="absolute w-[600px] h-[600px] border border-orange-200 rounded-full opacity-50 pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] border border-orange-200 rounded-full opacity-30 pointer-events-none" />

          <div className="w-full h-full flex items-center justify-center z-20">
             <SwipeView />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 text-xs font-bold text-orange-300 uppercase tracking-widest"
          >
             <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-orange-300"></span>
                <span>Drag Right to Like</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-orange-300"></span>
                <span>Drag Left to Pass</span>
             </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Discover;
