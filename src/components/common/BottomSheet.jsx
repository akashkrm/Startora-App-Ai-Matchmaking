const BottomSheet = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
      />

      {/* Sheet */}
      <div className="relative w-full bg-white rounded-t-2xl p-5 max-h-[85vh] overflow-y-auto">
        {title && (
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-900"
            >
              ✕
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
