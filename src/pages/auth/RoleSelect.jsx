import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const roles = [
  {
    id: "founder",
    title: "Founder",
    desc: "Building a startup and looking for co-founders, investors, or early team members."
  },
  {
    id: "investor",
    title: "Investor",
    desc: "Exploring early-stage startups to invest time or capital."
  },
  {
    id: "talent",
    title: "Talent",
    desc: "Looking to join a startup as a developer, designer, or operator."
  },
  {
    id: "idea-owner",
    title: "Idea Owner",
    desc: "Have an idea and want help shaping or executing it."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
};

const RoleSelect = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const selectedRole = roles.find(r => r.id === selected);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-[#0b1d3a] mb-3">
            Choose your role
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            We’ll personalize your experience based on how you plan to use Startora.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {roles.map(role => {
            const isActive = selected === role.id;

            return (
              <motion.div
                key={role.id}
                variants={item}
                onClick={() => setSelected(role.id)}
                className={`
                  relative cursor-pointer rounded-2xl border p-6 transition-all
                  ${isActive
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-slate-200 hover:border-orange-300"}
                `}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0b1d3a] mb-1">
                      {role.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {role.desc}
                    </p>
                  </div>

                  {/* Check */}
                  <div
                    className={`
                      w-6 h-6 rounded-full border flex items-center justify-center transition
                      ${isActive
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-slate-300 text-transparent"}
                    `}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div variants={item} className="flex justify-center h-14">
          {selected ? (
            <button
              onClick={() =>
                navigate("/otp", { state: { role: selected } })
              }
              className="
                flex items-center gap-2 px-8 py-3 rounded-xl
                bg-gradient-to-r from-orange-500 to-orange-600
                text-white font-semibold
                shadow-lg hover:shadow-xl transition
              "
            >
              Continue as {selectedRole?.title}
              <ArrowRight size={18} />
            </button>
          ) : (
            <p className="text-sm text-slate-400">
              Select a role to continue
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RoleSelect;
