import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInPageForAdmin = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedSignUpData = JSON.parse(localStorage.getItem("signUpData"));

    if (!storedSignUpData) {
      alert("No user data found. Please sign up first.");
      return;
    }

    let userData;

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone)) {
      userData = storedSignUpData[emailOrPhone];
    } else {
      userData = Object.values(storedSignUpData).find(user => user.phone === emailOrPhone);
    }

    if (!userData) {
      alert("Invalid email or phone.");
      return;
    }

    if (userData.password !== password) {
      alert("Invalid password.");
      return;
    }

    navigate("/addrestaurant");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="bg-gray-800 p-3 sm:p-8 rounded-lg shadow-lg  w-10/12 sm:w-1/2 m-4">
        <h2 className="text-lg sm:text-3xl mb-6">Log in your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="emailOrPhone" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">
              Email or phone
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              className="p-2 h-7 sm:h-10 w-full bg-gray-700 rounded-md"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
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
              className="p-2 h-7 sm:h-10 w-full bg-gray-700 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-40 text-center m-auto">
            <button type="submit" className="text-blue-400 hover:text-blue-300">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInPageForAdmin;
