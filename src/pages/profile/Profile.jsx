import { useNavigate } from "react-router-dom";
import { Edit3, MapPin, Briefcase } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const user = {
    name: "Alex",
    role: "Founder",
    location: "Sydney, Australia",
    about: "Building the LinkedIn for the next generation of builders.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  };

  return (
    <div className="max-w-4xl mx-auto md:pt-10 pb-20">
      <div className="bg-white md:rounded-3xl shadow-lg border border-orange-100 overflow-hidden">

        {/* Cover Photo */}
        <div className="h-40 md:h-56 relative bg-orange-100">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"
            className="w-full h-full object-cover"
            alt="Cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-amber-400/20" />

          <button className="absolute top-4 right-4 bg-white/30 backdrop-blur-md border border-white/40 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/40 transition">
            Edit Cover
          </button>
        </div>

        <div className="px-6 md:px-10 pb-10">
          <div className="relative -mt-16 mb-6 flex flex-col md:flex-row items-end gap-6">
            <img
              src={user.img}
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover bg-white"
              alt="Profile"
            />

            <div className="flex-1 pb-2">
              <h1 className="text-3xl font-bold text-slate-900">
                {user.name}
              </h1>
              <p className="text-slate-500 flex items-center gap-2 mt-1">
                <Briefcase size={14} className="text-orange-500" /> {user.role}
                •
                <MapPin size={14} className="text-orange-500" /> {user.location}
              </p>
            </div>

            <button
              onClick={() => navigate("/profile/edit")}
              className="mb-2 px-6 py-2.5 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-500 transition shadow-lg shadow-orange-500/30"
            >
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">
                About
              </h3>
              <p className="text-slate-600 leading-relaxed bg-orange-50 p-6 rounded-2xl border border-orange-100">
                {user.about}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">
                Badges
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-lg border border-orange-200">
                  EARLY ADOPTER
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-lg border border-amber-200">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
