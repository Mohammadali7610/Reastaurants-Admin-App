import React from "react";
import headerLogo from "./assests/Header-logo.png"
import style from "./assests/style/style.css"

const Header = () => {
  return (
    <header className=" text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={headerLogo} alt="Zomato Logo" className="w-32 h-auto mr-2" />
      </div>
      <nav className="">
        <ul className="flex space-x-4">
          <li className="cursor-pointer">Advertise</li>
          <li className="nav-login cursor-pointer   rounded-md border px-3 flex justify-center items-center">Login</li>
          <li className="hover:bg-blue-700 cursor-pointer  flex justify-center items-center bg-blue-500 rounded-md w-32 text-center h-8">Creat Account</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



