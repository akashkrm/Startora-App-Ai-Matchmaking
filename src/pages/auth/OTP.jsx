import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, ChevronLeft, ShieldCheck } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "founder";

  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSendCode = (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 1500);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length < 6) return;
    setLoading(true);
    setTimeout(() => {
      navigate("/onboarding", { state: { role } });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex overflow-hidden relative">

      {/* LEFT PANEL */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-between p-8 md:p-12 lg:p-16 relative z-10 bg-white">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">S</div>
          <span className="font-bold text-slate-900 tracking-tight">Startora</span>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <AnimatePresence mode="wait">

            {/* PHONE */}
            {step === "phone" && (
              <motion.div key="phone" variants={fadeIn} initial="hidden" animate="visible" exit="exit">

                <motion.div variants={fadeIn} custom={1} className="mb-10">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                    Let's start <br />
                    with your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-indigo-600">
                      number.
                    </span>
                  </h1>
                  <p className="text-slate-500 text-lg">
                    We'll text you a code to verify you're real.
                  </p>
                </motion.div>

                <form onSubmit={handleSendCode} className="space-y-8">
                  <div className="relative">
                    <input
                      autoFocus
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b-2 border-slate-200 py-4 text-2xl font-medium text-slate-900 focus:outline-none focus:border-orange-500 transition"
                    />
                    <label className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-600">
                      Mobile Number
                    </label>
                  </div>

                  {/* FIXED PURE ORANGE BUTTON */}
                  <button
                    disabled={phone.length < 10 || loading}
                    className="group relative w-full h-16 
                    bg-orange-500 
                    text-white rounded-2xl 
                    shadow-[0_12px_35px_rgba(249,115,22,0.75)] 
                    hover:bg-orange-600
                    hover:shadow-[0_18px_50px_rgba(249,115,22,0.95)] 
                    hover:scale-[1.04] 
                    transition-all duration-300 
                    disabled:opacity-50"
                  >
                    <div className="relative flex items-center justify-between px-8">
                      <span className="font-bold text-lg">Send Code</span>
                      {loading ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-orange-600 transition shadow-md">
                          <ArrowRight size={20} />
                        </div>
                      )}
                    </div>
                  </button>
                </form>
              </motion.div>
            )}

            {/* OTP */}
            {step === "otp" && (
              <motion.div key="otp" variants={fadeIn} initial="hidden" animate="visible" exit="exit">

                <button onClick={() => setStep("phone")} className="flex items-center text-sm text-slate-400 hover:text-orange-500 mb-8">
                  <ChevronLeft size={16} /> Edit number
                </button>

                <motion.div variants={fadeIn} custom={1} className="mb-10">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                    Check your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-indigo-600">
                      messages.
                    </span>
                  </h1>
                  <p className="text-slate-500 text-lg">
                    We sent a code to <span className="font-semibold">{phone}</span>.
                  </p>
                </motion.div>

                <form onSubmit={handleVerify} className="space-y-8">
                  <div>
                    <input
                      autoFocus
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-transparent hover:bg-slate-100 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-400/30 rounded-2xl py-5 px-6 text-3xl font-bold tracking-[0.3em] text-center text-slate-900 transition-all"
                    />

                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <ShieldCheck size={12} /> Secure Verification
                      </span>
                      <button className="text-sm font-semibold text-orange-500 hover:text-orange-600">
                        Resend Code
                      </button>
                    </div>
                  </div>

                  <button
                    disabled={otp.length < 6 || loading}
                    className="group relative w-full h-16 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-xl shadow-orange-500/30 disabled:opacity-50 transition"
                  >
                    <div className="relative flex items-center justify-center gap-3">
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" />
                          <span className="font-bold text-lg">Verifying...</span>
                        </>
                      ) : (
                        <span className="font-bold text-lg">Verify & Continue</span>
                      )}
                    </div>
                  </button>
                </form>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        <div className="text-xs text-slate-400">
          © 2024 Startora Inc. Privacy & Terms
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:flex w-[55%] xl:w-[60%] bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 relative overflow-hidden items-center justify-center">

        <motion.div className="relative z-10 max-w-lg">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              "Startora changed how we build teams."
            </h3>
            <p className="text-orange-200 text-lg mb-8">
              No more cold emails. Just match, chat, and build.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100" className="w-12 h-12 rounded-full border-2 border-orange-400" />
              <div>
                <h4 className="text-white font-bold">Sarah Jenkins</h4>
                <p className="text-orange-300 text-sm">Founder, TechFlow</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 bg-gradient-to-br from-orange-400 to-yellow-400 p-4 rounded-2xl shadow-lg rotate-12">
            🚀
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OTP;
