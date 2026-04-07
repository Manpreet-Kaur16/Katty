import { Search } from "lucide-react";
import Input from "./Input";
import { useState } from "react";
function LogIn() {
  const [terms, setTerms] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInput = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else {
      setTerms(event.target.checked);
    }

    console.log("value", event.target.value);

    console.log(event.target.placeholder);
    console.log(event.target.checked);
  };
  console.log({ username, email, password });

  function submit() {
    if (username != "" && email != "" && password != "" && terms != false) {
      alert("login Successfull!!");
    }
  }

  return (
    <div className="flex flex-col px-4 py-2 w-[500px] bg-slate-50">
      <div className="flex bg-amber-100 gap-2 flex-col">
        <div>Username:{username}</div>
        <div>Email:{email}</div>
        <div>Password:{password}</div>
      </div>
      <Input
        label={"Username"}
        placeholder=" Enter Your Username"
        type={"text"}
        name="username"
        onChange={handleInput}
      />
      <Input
        label={"Email"}
        placeholder=" Enter Email here"
        type={"email"}
        name="email"
        onChange={handleInput}
      />
      <Input
        label="Password"
        placeholder="Password"
        type={"password"}
        name="password"
        onChange={handleInput}
      />

      <div className="flex gap-2">
        <input
          type="checkbox"
          className="border border-gray-400 mb-4"
          onChange={handleInput}
        />
        <label>I agree terms & conditions</label>
      </div>

      <button
        className={`${terms ? "bg-blue-400" : "bg-gray-400"} rounded-4xl text-white px-2 py-1 w-xs`}
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
}
export default LogIn;
