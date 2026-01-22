import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// --- Assets & Variants ---
const GRAIN_TEXTURE = "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.15%22/%3E%3C/svg%3E')";

const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { delay: 0.3, duration: 0.6, ease: "easeOut" }
  }
};

const Splash = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Progress Counter Animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for "realistic" loading feel
        return Math.min(prev + Math.floor(Math.random() * 10) + 5, 100);
      });
    }, 150);

    // 2. Navigation Timer
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    // 'fixed inset-0' ensures full screen on ALL devices, blocking scroll
    <div className="fixed inset-0 h-[100dvh] w-full bg-[#050505] flex items-center justify-center overflow-hidden font-sans text-white z-50">
      
      {/* --- LAYER 1: AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Blobs */}
        <motion.div 
           animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-10%] left-[-10%] w-[60vh] h-[60vh] bg-indigo-600 rounded-full blur-[120px] opacity-40 mix-blend-screen" 
        />
        <motion.div 
           animate={{ scale: [1.2, 1, 1.2], rotate: [0, -45, 0] }}
           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[-10%] right-[-10%] w-[70vh] h-[70vh] bg-violet-800 rounded-full blur-[140px] opacity-30 mix-blend-screen" 
        />
        
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: GRAIN_TEXTURE }} />
      </div>

      {/* --- LAYER 2: CENTER CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* 1. Logo Mark */}
        <motion.div 
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="relative mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-white to-slate-300 rounded-[2rem] flex items-center justify-center shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)]">
            <span className="text-4xl font-black text-black">S</span>
          </div>
          {/* Glowing Ring */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 rounded-[2rem] border border-white/20"
          />
        </motion.div>

        {/* 2. Brand Name */}
        <motion.h1 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-2"
        >
          Startora
        </motion.h1>

        {/* 3. Tagline / Status */}
        <motion.p 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-12"
        >
          Ecosystem Loading
        </motion.p>

      </div>

      {/* --- LAYER 3: FOOTER LOADER (Bottom Fixed) --- */}
      <div className="absolute bottom-12 w-full px-12 md:px-0 md:w-64 z-20">
        <div className="flex justify-between items-end mb-2 text-xs font-mono text-slate-500">
           <span>INITIALIZING...</span>
           <span className="text-white font-bold">{progress}%</span>
        </div>
        
        {/* Progress Bar Track */}
        <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden">
          {/* Progress Bar Fill */}
          <motion.div 
            className="h-full bg-white shadow-[0_0_10px_white]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }} // Smooth steps
          />
        </div>
      </div>

    </div>
  );
};

export default Splash;