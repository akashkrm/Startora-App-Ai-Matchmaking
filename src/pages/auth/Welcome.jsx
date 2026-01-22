import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* Image Side */}
      <div className="md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team working" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a]/90 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0b1d3a]/30" />

        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white">
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium border border-white/20">
            ⭐ Trusted by 10,000+ Founders
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="md:w-1/2 flex flex-col justify-center px-8 py-10 md:px-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0b1d3a] leading-[1.1] mb-6">
            Build your dream team <br className="hidden md:block"/> 
            in <span className="text-orange-500">seconds.</span>
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md">
            Connect with founders, investors, and top talent through our AI-powered matchmaking. No noise, just results.
          </p>

          <div className="space-y-4">
            <button 
              onClick={() => navigate("/role")}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
            >
              Get Started
            </button>

            <button 
              onClick={() => navigate("/role")}
              className="w-full py-4 rounded-xl bg-slate-50 text-slate-700 font-bold text-lg border border-slate-200 hover:bg-slate-100 transition-all"
            >
              I already have an account
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
