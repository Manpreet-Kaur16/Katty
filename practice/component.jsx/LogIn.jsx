import { useState } from "react";
import Input from "./Input";

function LogIn() {
  let [terms, setTerms] = useState(false);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    // console.log("--------------------------------");
    // console.log("name", event.target.name);
    // console.log("value", event.target.value);
    // console.log("checked", event.target.checked);
    // console.log("--------------------------------");
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else {
      setTerms(event.target.checked);
    }
  };

  console.log("terms", terms);
  console.log("username", username);
  console.log("email", email);
  console.log("password", password);

  const handleSubmitClick = () => {
    alert("Login successful");
    console.log("username", username);
    console.log("email", email);
    console.log("password", password);
  };

  return (
    <div className="flex flex-col px-4 py-2 w-[500px] bg-slate-50">
      <div className="flex flex-col gap-2 bg-amber-100 border border-gray-300 rounded-md p-2 mb-6">
        <div>Username: {username}</div>
        <div>Email: {email}</div>
        <div>Password: {password}</div>
      </div>

      <Input
        label="Username"
        placeholder="Enter Your Username"
        type="text"
        name="username"
        onChange={handleInputChange}
        value={username}
      />

      <Input
        label="Email"
        placeholder="Enter Email here"
        type="email"
        name="email"
        onChange={handleInputChange}
        value={email}
      />

      <Input
        label="Password"
        placeholder="Password"
        type="password"
        name="password"
        onChange={handleInputChange}
        value={password}
      />

      <div className="flex gap-2">
        <input
          id="terms"
          type="checkbox"
          className="border border-gray-400"
          onChange={handleInputChange}
        />
        <label for="terms">I agree terms & conditions</label>
      </div>

      <button
        onClick={handleSubmitClick}
        disabled={terms === false}
        className={`${terms === true ? "bg-blue-500" : "bg-gray-400"} text-white rounded mt-4`}
      >
        Submit
      </button>
    </div>
  );
}
export default LogIn;
