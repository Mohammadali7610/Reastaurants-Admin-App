import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please enter the same password in both fields.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one number, and one special character.");
      return;
    }

    const existingSignUpData = JSON.parse(localStorage.getItem("signUpData")) || {};

    if (existingSignUpData[email]) {
      alert("This email is already registered. Please use a different email.");
      return;
    }
    if (existingSignUpData[phone]) {
      alert("This Phone Number is already registered. Please use a different phone number.");
      return;
    }

    const signUpData = {
      ...existingSignUpData,
      [email]: {
        phone:phone,
        password: password,
        confirmPassword: confirmPassword
      }
    };

    localStorage.setItem("signUpData", JSON.stringify(signUpData));

    navigate("/addrestaurant");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="bg-gray-800 p-3 sm:p-8 rounded-lg shadow-lg w-10/12 sm:w-1/2 m-4">
        <h2 className="text-lg sm:text-3xl mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2  h-7 sm:h-10 w-full bg-gray-700 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="p-2  h-7 sm:h-10 w-full bg-gray-700 rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2  h-7 sm:h-10 w-full bg-gray-700 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="p-2 h-7 sm:h-10 w-full bg-gray-700 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one number, and one special character.</p>
          </div>
          <div className="w-40 text-center m-auto">
            <button type="submit" className="text-blue-400 hover:text-blue-300">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
