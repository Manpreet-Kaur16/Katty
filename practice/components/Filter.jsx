function Filter() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Filter Tasks
        </h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quick Filter
            </label>
            <select className="status w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="all">All Tasks</option>
              <option value="complete">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Detailed Filter
            </label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="all"
                  value="all"
                  type="radio"
                  name="status"
                  className="mr-2"
                />
                <label className="text-sm">All</label>
              </div>
              <div className="flex items-center">
                <input
                  id="complete"
                  value="complete"
                  type="radio"
                  name="status"
                  className="mr-2"
                />
                <label className="text-sm">Completed</label>
              </div>
              <div className="flex items-center">
                <input
                  id="incomplete"
                  value="incomplete"
                  type="radio"
                  name="status"
                  className="mr-2"
                />
                <label className="text-sm">Incomplete</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Sort & Search
        </h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              id="sortBy"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Sort By</option>
              <option value="sortA-Z">A-Z</option>
              <option value="sortID">ID</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Tasks
            </label>
            <div className="flex gap-2">
              <input
                id="userInput"
                type="text"
                placeholder="Search tasks..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                id="clearSearch"
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
