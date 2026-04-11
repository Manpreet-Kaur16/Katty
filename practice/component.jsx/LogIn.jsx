import { Search } from "lucide-react";
import Input from "./Input";
import { useState } from "react";
function LogIn() {
  let [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });

  let [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    terms: "",
  });

  const errorHandle = (currentActiveInputField = null) => {
    let errorMessages = {};
    if (
      (!formData.username ||
        formData.username.length < 3 ||
        formData.username.length > 10) &&
      currentActiveInputField == "username"
    ) {
      errorMessages.username =
        "Username is required and must have at least 4 and maximum 10 characters";
      setError((prev) => ({
        ...prev,
        username: errorMessages.username,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        username: "",
      }));
    }

    if (
      (!formData.email || !formData.email.includes("@")) &&
      currentActiveInputField == "email"
    ) {
      errorMessages.email = "Enter valid email address including @";
      setError((prev) => ({
        ...prev,
        email: errorMessages.email,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }

    if (
      (!formData.password ||
        formData.password.length < 6 ||
        formData.password.length > 10) &&
      currentActiveInputField == "password"
    ) {
      errorMessages.password =
        "Enter valid Password... must have 5-10 chracters.";
      setError((prev) => ({
        ...prev,
        password: errorMessages.password,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
    }

    if (!formData.terms && currentActiveInputField == "terms") {
      errorMessages.terms = "Accept terms first";
      setError((prev) => ({
        ...prev,
        terms: setError.term,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        terms: "",
      }));
    }

    return errorMessages;
  };
  console.log(error, "error message checked here!!");

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let checked = event.target.checked;
    if (name === "username" || name === "email" || name === "password") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }
    console.log(formData);
    errorHandle(name);
  };

  function submitClick() {
    if(formData.username =="" || formData.email=="")
    alert("login Successfull!!");
    console.log(formData);
  }

  return (
    <div className="flex flex-col px-4 py-2 w-[500px] bg-slate-50">
      <div className="flex bg-amber-100 gap-2 flex-col">
        <div>Username:{formData.username}</div>
        <div>Email:{formData.email}</div>
        <div>Password:{formData.password}</div>
      </div>
      {error.username && (
        <p className="text-red-500 text-sm">{error.username}</p>
      )}
      <Input
        label={"Username"}
        placeholder=" Enter Your Username"
        type={"text"}
        name="username"
        onChange={handleInput}
        value={formData.username}
      />
      {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
      <Input
        label={"Email"}
        placeholder=" Enter Email here"
        type={"email"}
        name="email"
        onChange={handleInput}
        value={formData.email}
      />
      {error.password && (
        <p className="text-red-500 text-sm">{error.password}</p>
      )}
      <Input
        label="Password"
        placeholder="Password"
        type={"password"}
        name="password"
        onChange={handleInput}
        value={formData.password}
      />

      <div className="flex gap-2">
        {error.terms && <p className="text-red-500 text-sm">{error.terms}</p>}
        <input
          id="terms"
          type="checkbox"
          className="border border-gray-400 mb-4"
          onChange={handleInput}
          checked={formData.terms}
          name="terms"
        />
        <label htmlFor="terms">I agree terms & conditions</label>
      </div>

      <button
        className={`${formData.terms ? "bg-blue-400" : "bg-gray-400"} rounded-4xl text-white px-2 py-1 w-xs`}
        onClick={submitClick}
      >
        Submit
      </button>
    </div>
  );
}
export default LogIn;
