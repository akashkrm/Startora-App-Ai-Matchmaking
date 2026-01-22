const mockAlerts = [
  {
    id: 1,
    type: "match",
    title: "New Match",
    description: "You matched with Neha Sharma (Investor).",
    time: "5 min ago"
  },
  {
    id: 2,
    type: "message",
    title: "New Message",
    description: "Aman Verma sent you a message.",
    time: "1 hour ago"
  },
  {
    id: 3,
    type: "ai",
    title: "AI Suggestion",
    description: "We found 3 founders that match your profile.",
    time: "3 hours ago"
  },
  {
    id: 4,
    type: "system",
    title: "Profile Incomplete",
    description: "Complete your profile to get better matches.",
    time: "1 day ago"
  }
];

const getBadgeStyle = (type) => {
  switch (type) {
    case "match":
      return "bg-green-100 text-green-700 border border-green-200";
    case "message":
      return "bg-blue-100 text-blue-700 border border-blue-200";
    case "ai":
      return "bg-orange-100 text-orange-700 border border-orange-200";
    case "system":
      return "bg-slate-100 text-slate-700 border border-slate-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
};

const Alerts = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-orange-100 shadow-xl overflow-hidden">

      {/* Header */}
      <div className="px-6 py-5 border-b border-orange-100 bg-orange-50/40">
        <h1 className="text-2xl font-bold text-slate-900">
          Alerts
        </h1>
        <p className="text-sm text-slate-600">
          Important updates and activity.
        </p>
      </div>

      {/* List */}
      <div className="divide-y divide-orange-100">
        {mockAlerts.map((alert) => (
          <div
            key={alert.id}
            className="px-6 py-5 hover:bg-orange-50 transition flex items-start gap-4"
          >
            {/* Badge */}
            <span
              className={`text-xs px-3 py-1 rounded-full font-bold tracking-wide ${getBadgeStyle(
                alert.type
              )}`}
            >
              {alert.type.toUpperCase()}
            </span>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-900">
                {alert.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                {alert.description}
              </p>
            </div>

            {/* Time */}
            <span className="text-xs text-slate-400 whitespace-nowrap mt-1">
              {alert.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
