const EmptyState = ({
  title = "Nothing here yet",
  description = "Once there is activity, it will appear here.",
  actionText,
  onAction
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-600 mb-6 max-w-sm">
        {description}
      </p>
      {actionText && (
        <button
          onClick={onAction}
          className="px-5 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
