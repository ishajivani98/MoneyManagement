import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Redux/authSlice";

function Registration() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(formData));
    alert("Registration Successful ✅");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen pt-6 bg-gray-100 dark:bg-gray-900">
        <div className="relative w-full max-w-md p-6 rounded-lg dark:border-white backdrop-blur-md shadow-lg">
          <div className="bg-white bg-opacity-80 rounded-lg shadow dark:bg-gray-800 dark:bg-opacity-80 dark:border dark:border-white">
            <div className="p-6 space-y-9 md:space-y-6 sm:p-8">
              <h1
                className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form
                className="space-y-7 md:space-y-8"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Emelia Erickson"
                    required
                  />
                </div>
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
                    id="email"
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
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-1 rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
              </form>

              <div className="text-center text-gray-600 dark:text-white">
                ----------------------or---------------------
              </div>

              <button className="w-full text-white bg-gray-800 hover:bg-gray-600 border focus:ring-1 rounded-lg text-sm px-5 py-2.5 text-center">
                Continue With Google
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Already have an account?{" "}
                <a
                  className="font-medium text-green-600 hover:underline dark:text-green-400"
                  href="/login"
                >
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
