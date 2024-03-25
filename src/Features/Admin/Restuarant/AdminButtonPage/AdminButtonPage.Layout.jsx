import { Link } from "react-router-dom";

const AdminButton = () => {
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center  justify-center text-white">
      <div className="bg-gray-800 p-3 sm:p-8 rounded-lg shadow-lg w-10/12 sm:w-1/2 m-4">
        <h1 className="text-4xl sm:text-5xl mb-6 text-center">Admin Page</h1>
        <div className="flex gap-4 justify-evenly">
         <div className="bg-gradient-to-b from-gray-600 to-gray-900 hover:from-gray-700 hover:to-gray-950 text-white font-bold py-3 px-4 rounded">
            <Link to="/loginpage">
                Log In
            </Link>
         </div>
         <div className="bg-gradient-to-b from-gray-600 to-gray-900 hover:from-gray-700 hover:to-gray-950 text-white font-bold py-3 px-4 rounded">
            <Link to="/signupPage">
                Sign Up
            </Link>
         </div>
         </div>
      </div>
    </div>
  );
};

export default AdminButton;
