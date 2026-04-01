import { Search } from "lucide-react";
import Input from "./Input";
function LogIn() {
  return (
    <div className="flex flex-col px-4 py-2 w-[500px] bg-slate-50">
      <Input label={"Username"} placeholder=" Enter Your Username" />
      <Input label={"Email"} placeholder=" Enter Email here" />
      <Input label="Password" placeholder="Password" />

      <div className="flex gap-2">
        <input type="checkbox" className="border border-gray-400" mb-4 />
        <label>I agree terms & conditions</label>
      </div>

      <button className="bg-blue-500 text-white rounded mt-4">Submit</button>
    </div>
  );
}
export default LogIn;
