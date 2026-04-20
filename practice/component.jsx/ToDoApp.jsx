import InputField from "./inputField";
import Filter from "./Filter";
function ToDoApp() {
  return (
    <div className="bg-slate-100">
      <div className=" flex items-center">
        <h1 className="font-bold text-3xl">TODo App</h1>
        <h3>Organize Your Task efficiently</h3>
      </div>
      <InputField />
      <Filter />
    </div>
  );
}
export default ToDoApp;
