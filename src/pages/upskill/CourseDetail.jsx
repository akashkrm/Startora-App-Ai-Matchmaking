import { useNavigate, useParams } from "react-router-dom";

const CourseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-orange-100 p-8 shadow-lg">

      {/* Header */}
      <div className="mb-6">
        <span className="inline-block mb-3 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold">
          Masterclass
        </span>

        <h1 className="text-3xl font-bold text-slate-900">
          Fundraising 101 for Founders
        </h1>
        <p className="mt-3 text-slate-600 text-lg">
          Learn how to raise angel and seed funding with confidence.
        </p>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-8">
        <span className="px-3 py-1 bg-slate-100 rounded-full">Beginner</span>
        <span className="px-3 py-1 bg-slate-100 rounded-full">1h 20m</span>
        <span className="px-3 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full">
          ₹499
        </span>
      </div>

      {/* Description */}
      <div className="mb-10">
        <h3 className="text-sm font-bold text-slate-500 uppercase mb-3">
          What you will learn
        </h3>
        <ul className="space-y-2 text-slate-700 text-sm">
          <li>✔ How to approach angel investors</li>
          <li>✔ How to structure your pitch</li>
          <li>✔ Common mistakes to avoid</li>
          <li>✔ Valuation basics</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate(`/upskill/${id}/player`)}
          className="flex-1 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:shadow-xl hover:scale-[1.02] transition-all"
        >
          Enroll & Start Learning
        </button>

        <button
          onClick={() => navigate(-1)}
          className="flex-1 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
