export default function SearchPanel() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const nowString = now.toISOString().slice(0, 16);

  return (
    <div className="p-4">
      {/* Search bar */}
      <div>
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Search
        </label>
        <div className="mt-1 relative flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Date filter */}
      <div className="mt-2">
        <label
          htmlFor="startTime"
          className="block text-sm font-medium text-gray-700"
        >
          Session's start time
        </label>
        <div className="mt-1">
          <input
            type="datetime-local"
            name="startTime"
            id="startTime"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            defaultValue={nowString}
          />
        </div>
      </div>

      {/* Location */}
      <div className="mt-2">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Session's location
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="location"
            id="location"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
