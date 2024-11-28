import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SupabaseClient } from "../supabase";
const UserLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handlelogin = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const { data, error } = await SupabaseClient.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });
      if (error) throw error;
      console.log("Login successful", data);
      sessionStorage.setItem("authUser", JSON.stringify(data));
      navigate("/home");
    } catch (error) {
      console.log("Error in login", error);
      alert(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h2>
        <form className="space-y-6" onSubmit={handlelogin}>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transform hover:scale-105 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <button
            className="mt-2 w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow-md transform hover:scale-105 transition duration-200"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
