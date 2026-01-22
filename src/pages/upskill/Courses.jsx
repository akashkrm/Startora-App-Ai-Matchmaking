import { useNavigate } from "react-router-dom";
import { PlayCircle } from "lucide-react";

const courses = [
  { id: 1, title: "Startup Valuation 101", author: "Y Combinator", price: "Free", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600" },
  { id: 2, title: "Pitching to VCs", author: "Sequoia Capital", price: "₹499", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600" },
  { id: 3, title: "MVP Development", author: "TechStars", price: "₹999", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600" },
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 pt-6 md:pt-10">

      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900">
            Upskill
          </h1>
          <p className="text-slate-500 mt-1">
            Masterclass content for founders.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((c) => (
          <div
            key={c.id}
            onClick={() => navigate(`/upskill/${c.id}`)}
            className="
              group bg-white rounded-3xl 
              border border-orange-100 
              shadow-sm 
              hover:shadow-[0_20px_40px_rgba(255,140,0,0.25)]
              hover:-translate-y-2 
              transition-all duration-300 
              overflow-hidden cursor-pointer
            "
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent 
                              group-hover:from-black/30 transition-all flex items-center justify-center">
                <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 drop-shadow-lg" />
              </div>

              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 
                              text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                {c.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-slate-500">
                By {c.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
