import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("authUser");
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Hi{" "}
            {
              JSON.parse(sessionStorage.getItem("authUser"))?.user
                ?.user_metadata?.fullname
            }
          </h1>
          <p className="text-gray-600 mb-4">
            Welcome back! We're delighted to see you again on your dashboard.
          </p>
          <p className="text-gray-600">
            You are successfully logged in. This is your personal dashboard
            where you can manage your account and access features.
          </p>
        </div>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
