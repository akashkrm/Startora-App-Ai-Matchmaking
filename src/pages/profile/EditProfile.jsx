import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-orange-100 p-8 shadow-lg">
      
      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        Edit Profile
      </h1>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Your name"
          className="w-full bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <textarea
          rows={4}
          placeholder="About you"
          className="w-full bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        {/* Future role fields */}

        <div className="flex gap-4 pt-6">

          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-3 rounded-xl border border-orange-200 text-orange-600 font-semibold hover:bg-orange-50 transition"
          >
            Cancel
          </button>

          <button
            className="flex-1 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-500 transition shadow-lg shadow-orange-500/30"
          >
            Save Changes
          </button>

        </div>
      </div>
    </div>
  );
};

export default EditProfile;
