import { Outlet, useLocation, Link } from "react-router-dom";
import { Home, MessageCircle, Zap, User, Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import AIAssistantBox from "../ai/AIAssistantBox";

/* ===== SIDEBAR NAME BUT NAVBAR DESIGN ===== */
const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/discover", icon: Home, label: "Discover" },
    { to: "/connect", icon: MessageCircle, label: "Connect" },
    { to: "/upskill", icon: Zap, label: "Upskill" },
    { to: "/profile", icon: User, label: "Profile" },
    { to: "/alerts", icon: Bell, label: "Alerts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-slate-200 z-50">

      {/* Top bar */}
      <div className="h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white">
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
                className={`flex items-center gap-2 text-sm font-medium ${
                  isActive
                    ? "text-indigo-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <span className="hidden md:block text-sm text-slate-600">Alex</span>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden border-t bg-white shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 font-medium"
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

/* ===== APP LAYOUT ===== */
const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar />

      <div className="pt-16 min-h-screen transition-all duration-300">
        <main className="w-full pb-28 md:pb-8">

          <Outlet />
        </main>
      </div>

      <AIAssistantBox />

    </div>
  );
};

export default AppLayout;
