function InputField() {
  return (
    <div className="flex">
      <div className="flex">
        <h1>Add New Task</h1>
        <input
          type="text"
          placeholder="Enter Your Task Here....."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
      </div>
      <div>
        <button className="bg-blue-500 text-white rounded-xl px-2 py-1">
          Add Task
        </button>
        <button className="bg-red-500 text-white rounded-xl px-2 py-1">
          Clear All ToDo
        </button>
      </div>
    </div>
  );
}
export default InputField;
