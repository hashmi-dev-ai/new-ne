import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SupabaseClient } from "../supabase";
const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(register);
    try {
      const { data, error } = await SupabaseClient.auth.signUp({
        email: register.email,
        password: register.password,
        options: {
          data: {
            fullname: register.fullname,
          },
        },
      });
      if (error) throw error;
      console.log("Register successful", data);
      // navigate('/login');
    } catch (error) {
      console.log("Error in register", error);
      alert(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div className="space-y-2">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={register.fullname}
              onChange={(e) =>
                setRegister({ ...register, fullname: e.target.value })
              }
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
            />
          </div>
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
              value={register.email}
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
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
              value={register.password}
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transform hover:scale-105 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <button
            className="mt-2 w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow-md transform hover:scale-105 transition duration-200"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
