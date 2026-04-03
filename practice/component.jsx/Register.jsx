import { useState } from "react";
import Input from "./Input";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmitClick = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration successful");
    console.log("Registration data:", formData);
  };

  const isFormValid =
    formData.terms &&
    formData.fullName &&
    formData.username &&
    formData.email &&
    formData.password &&
    formData.confirmPassword;

  return (
    <div className="flex flex-col px-4 py-2 w-[500px] bg-slate-50">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Register</h2>

      <div className="flex flex-col gap-2 bg-green-100 border border-gray-300 rounded-md p-2 mb-6">
        <div>Full Name: {formData.fullName}</div>
        <div>Username: {formData.username}</div>
        <div>Email: {formData.email}</div>
        <div>Password: {formData.password}</div>
      </div>

      <Input
        label="Full Name"
        placeholder="Enter Your Full Name"
        type="text"
        name="fullName"
        onChange={handleInputChange}
        value={formData.fullName}
      />

      <Input
        label="Username"
        placeholder="Enter Your Username"
        type="text"
        name="username"
        onChange={handleInputChange}
        value={formData.username}
      />

      <Input
        label="Email"
        placeholder="Enter Email here"
        type="email"
        name="email"
        onChange={handleInputChange}
        value={formData.email}
      />

      <Input
        label="Password"
        placeholder="Password"
        type="password"
        name="password"
        onChange={handleInputChange}
        value={formData.password}
      />

      <Input
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        name="confirmPassword"
        onChange={handleInputChange}
        value={formData.confirmPassword}
      />

      <div className="flex gap-2">
        <input
          id="register-terms"
          type="checkbox"
          name="terms"
          className="border border-gray-400"
          onChange={handleInputChange}
          checked={formData.terms}
        />
        <label htmlFor="register-terms">I agree terms & conditions</label>
      </div>

      <button
        onClick={handleSubmitClick}
        disabled={!isFormValid}
        className={`${isFormValid ? "bg-green-500" : "bg-gray-400"} text-white rounded mt-4 py-2`}
      >
        Register
      </button>
    </div>
  );
}

export default Register;
