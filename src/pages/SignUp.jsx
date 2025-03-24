import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/seconbg.jpeg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-2xl shadow-lg text-center w-96">
        <div className="flex justify-center mb-4">
          <img src="/logo.svg" alt="Logo" className="w-12 h-12" />
        </div>
        <h2 className="text-white text-2xl font-semibold mb-6">Signup</h2>

        <div className="mb-4">
          <label className="text-white block text-left mb-1">
            Display Name
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-gray-200 text-black outline-none"
            placeholder="Type here"
          />
        </div>
        <div className="mb-4">
          <label className="text-white block text-left mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded-md bg-gray-200 text-black outline-none"
            placeholder="Type here"
          />
        </div>
        <div className="mb-4">
          <label className="text-white block text-left mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded-md bg-gray-200 text-black outline-none"
            placeholder="Type here"
          />
        </div>
        <div className=" flex items-center justify-between gap-2">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md ">
            LogIn
          </button>
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-md">
            Google
          </button>
        </div>
        <p className="text-white text-sm mt-4">
          If you have an account, please
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
