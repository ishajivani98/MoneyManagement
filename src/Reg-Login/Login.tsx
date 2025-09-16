import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../Redux/store";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const registeredUser = useSelector((state: RootState) => state.auth.user);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      registeredUser &&
      registeredUser.email === formData.email &&
      registeredUser.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="relative w-full max-w-md p-6 rounded-lg backdrop-blur-md shadow-lg">
        <div className="bg-white bg-opacity-90 rounded-lg shadow dark:bg-gray-800 dark:bg-opacity-90 dark:border dark:border-white">
          <div className="p-6 space-y-8 sm:p-8">
            <h1 className="text-xl font-bold text-center text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="emelia@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm px-5 py-2.5"
              >
                Login
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                create a  account?{" "}
                <a
                  className="font-medium text-green-600 hover:underline dark:text-green-400"
                  href="/"
                >
                  Sign up here
                </a>
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
