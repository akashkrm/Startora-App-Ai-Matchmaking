import { Link, useLocation } from "react-router-dom";
import { Home, MessageCircle, Zap, User, Bell, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { to: "/discover", icon: Home, label: "Discover" },
    { to: "/connect", icon: MessageCircle, label: "Connect" },
    { to: "/upskill", icon: Zap, label: "Upskill" },
    { to: "/profile", icon: User, label: "Profile" },
    { to: "/alerts", icon: Bell, label: "Alerts" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-slate-200 z-50 transition ${
        scrolled ? "shadow-lg shadow-slate-200" : ""
      }`}
    >
      <div className="h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg text-slate-900">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center text-white shadow-md">
            S
          </div>
          Startora
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = location.pathname.startsWith(link.to);
            const Icon = link.icon;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 text-sm font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-slate-600 hover:text-orange-500"
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">

          <button className="relative hidden md:block">
            <Bell className="w-5 h-5 text-slate-600 hover:text-orange-500" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full" />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-orange-50"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-white shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-3">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname.startsWith(link.to);

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition-all
                      ${
                        isActive
                          ? "bg-orange-50 text-orange-500 shadow-md"
                          : "text-slate-700 hover:bg-orange-50 hover:text-orange-500 hover:shadow-md"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Sidebar;
