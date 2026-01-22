const MobileHeader = ({ title, rightAction }) => {
  return (
    <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4">
      <h1 className="text-sm font-semibold text-slate-900">
        {title}
      </h1>
      {rightAction}
    </div>
  );
};

export default MobileHeader;
