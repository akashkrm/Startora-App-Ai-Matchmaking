import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-900">
          Fundraising 101 for Founders
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="text-sm text-slate-600 hover:text-slate-900 transition"
        >
          Exit
        </button>
      </div>

      {/* Video */}
      <div className="bg-black aspect-video flex items-center justify-center text-white">
        Video Player
      </div>

      {/* Progress */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-600">
            Progress
          </span>
          <span className="text-sm text-slate-600">
            20%
          </span>
        </div>

        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-slate-900 w-1/5"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
