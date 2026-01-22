import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  User, 
  Briefcase, 
  Lightbulb, 
  Rocket, 
  ArrowRight, 
  CheckCircle2,
  Cpu
} from "lucide-react";

// --- Configuration based on Role ---
const getRoleConfig = (role) => {
  switch (role) {
    case "founder":
      return {
        label: "Founder",
        icon: Rocket,
        question: "Tell us about your venture.",
        placeholder: "Startup Name",
        extraField: "startupName",
        color: "bg-indigo-600"
      };
    case "investor":
      return {
        label: "Investor",
        icon: Briefcase,
        question: "What are you looking to fund?",
        placeholder: "Investment Focus (e.g., SaaS, AI)",
        extraField: "focus",
        color: "bg-emerald-600"
      };
    case "talent":
      return {
        label: "Talent",
        icon: User,
        question: "What are your superpowers?",
        placeholder: "Key Skills (e.g., React, Sales)",
        extraField: "skills",
        color: "bg-blue-600"
      };
    case "idea-owner":
      return {
        label: "Idea Owner",
        icon: Lightbulb,
        question: "What's the big idea?",
        placeholder: "Describe your concept...",
        extraField: "idea",
        isTextArea: true,
        color: "bg-amber-500"
      };
    default:
      return { label: "User", icon: User, color: "bg-slate-900" };
  }
};

const Onboarding = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = location.state?.role || "founder";
  const config = getRoleConfig(role);

  const [step, setStep] = useState(1);
  const [loadingText, setLoadingText] = useState("Initializing AI...");

  const [formData, setFormData] = useState({
    name: "",
    startupName: "",
    idea: "",
    skills: "",
    focus: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateProfile = () => {
    if(!formData.name) return; // Basic validation
    setStep(2);

    // Simulate AI "Thinking" steps
    const steps = [
      "Analyzing your inputs...",
      "Optimizing keywords...",
      "Drafting professional bio...",
      "Finalizing profile..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(steps[i]);
      i++;
      if (i >= steps.length) {
        clearInterval(interval);
        setTimeout(() => setStep(3), 800);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 transform -skew-y-2 origin-top-left -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20 -z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
      >
        
        {/* --- LEFT PANEL (Context & Visuals) --- */}
        <div className="md:w-2/5 bg-slate-50 border-r border-slate-100 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl ${config.color} flex items-center justify-center text-white shadow-lg`}>
                <config.icon size={20} />
              </div>
              <span className="font-bold text-slate-900 tracking-tight">Startora AI</span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
              {step === 1 && "Let's build your identity."}
              {step === 2 && "Magic in progress..."}
              {step === 3 && "Your profile is ready."}
            </h2>
            
            <p className="text-slate-500 text-lg leading-relaxed">
              {step === 1 && `We'll use your details to connect you with the right ${role === 'founder' ? 'investors and talent' : 'opportunities'}.`}
              {step === 2 && "Our AI is crafting a compelling bio and structuring your data for maximum visibility."}
              {step === 3 && "Review your AI-generated profile card. You can always edit this later."}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="space-y-4 mt-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300
                  ${step >= s ? `border-slate-900 bg-slate-900 text-white` : "border-slate-200 text-slate-300"}
                `}>
                  {step > s ? <CheckCircle2 size={16} /> : s}
                </div>
                <span className={`text-sm font-medium ${step >= s ? "text-slate-900" : "text-slate-300"}`}>
                  {s === 1 ? "Inputs" : s === 2 ? "AI Processing" : "Preview"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT PANEL (Interactive Form) --- */}
        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative bg-white">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: INPUTS */}
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Your Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Doe"
                      className="mt-2 w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-lg font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all"
                    />
                  </label>

                  {config.extraField && (
                    <label className="block">
                      <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">{config.question}</span>
                      {config.isTextArea ? (
                        <textarea
                          name={config.extraField}
                          value={formData[config.extraField]}
                          onChange={handleChange}
                          rows={4}
                          placeholder={config.placeholder}
                          className="mt-2 w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-lg font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none resize-none transition-all"
                        />
                      ) : (
                        <input
                          type="text"
                          name={config.extraField}
                          value={formData[config.extraField]}
                          onChange={handleChange}
                          placeholder={config.placeholder}
                          className="mt-2 w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-lg font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all"
                        />
                      )}
                    </label>
                  )}
                </div>

                <button
                  onClick={handleGenerateProfile}
                  className="w-full py-4 mt-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <Sparkles size={20} className="text-yellow-400" />
                  <span>Generate with AI</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}

            {/* STEP 2: AI LOADING */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center justify-center text-center h-full"
              >
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
                  <div className="absolute inset-0 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu size={32} className="text-slate-900 animate-pulse" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{loadingText}</h3>
                <p className="text-slate-400">Please wait while we build your profile...</p>
              </motion.div>
            )}

            {/* STEP 3: PREVIEW */}
            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Profile Card Preview */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-slate-100 to-slate-200" />
                  
                  <div className="relative mt-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-white p-1 shadow-md mb-3">
                      <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-2xl font-bold text-slate-400">
                        {formData.name.charAt(0)}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{formData.name}</h3>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mt-2 ${config.color} text-white`}>
                      <config.icon size={12} /> {config.label}
                    </span>
                    
                    <div className="mt-6 w-full text-left bg-slate-50 p-4 rounded-xl">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        <span className="font-semibold text-slate-900">AI Summary: </span>
                        {role === 'founder' && `Visionary founder of ${formData.startupName || 'a stealth startup'}. Building innovative solutions.`}
                        {role === 'investor' && `Strategic investor focused on ${formData.focus || 'high-growth markets'}. Looking for the next unicorn.`}
                        {role === 'talent' && `Skilled professional with expertise in ${formData.skills || 'modern tech stacks'}. Ready to ship.`}
                        {role === 'idea-owner' && `Innovator working on "${formData.idea?.substring(0, 50)}...". Seeking team.`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 text-slate-500 font-bold hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => navigate("/discover")}
                    className="flex-[2] py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                  >
                    Looks Good, Let's Go
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Onboarding;