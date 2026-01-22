const FilterPanel = ({ filters, setFilters }) => {
  return (
    <div className="space-y-4">
      {/* Role */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Role
        </label>
        <select
          className="mt-1 w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
          value={filters.role}
          onChange={(e) =>
            setFilters({ ...filters, role: e.target.value })
          }
        >
          <option value="">Any</option>
          <option value="Founder">Founder</option>
          <option value="Investor">Investor</option>
          <option value="Talent">Talent</option>
          <option value="Idea Owner">Idea Owner</option>
        </select>
      </div>

      {/* Stage */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Stage
        </label>
        <select
          className="mt-1 w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
          value={filters.stage}
          onChange={(e) =>
            setFilters({ ...filters, stage: e.target.value })
          }
        >
          <option value="">Any</option>
          <option value="Idea">Idea</option>
          <option value="MVP">MVP</option>
          <option value="Early">Early</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Location
        </label>
        <input
          type="text"
          placeholder="City / Country"
          className="mt-1 w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
          value={filters.location}
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default FilterPanel;
