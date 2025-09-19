// src/pages/LandingPage.tsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#022c22] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">Expensify</h1>
        <button className="px-5 py-2 rounded-full bg-white text-[#022c22] font-semibold">
          <a
            href="/login"
          >
            Sign in
          </a>
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-snug">
            The <span className="text-green-400">fastest</span> way <br />
            to do your expenses
          </h2>
          <ul className="space-y-3 text-lg">
            <li>✔ All inclusive. Manage expenses, book travel, reimburse employees.</li>
            <li>✔ Corporate cards with cash back on every US purchase.</li>
            <li>✔ 45+ integrations like QuickBooks, Xero, Workday, and more.</li>
          </ul>

          {/* Options */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-green-500 px-6 py-3 rounded-lg font-medium hover:bg-green-600">
              Organize my own expenses
            </button>
            <button className="bg-green-500 px-6 py-3 rounded-lg font-medium hover:bg-green-600">
              Manage 1-9 employees
            </button>
            <button className="bg-green-500 px-6 py-3 rounded-lg font-medium hover:bg-green-600">
              Manage 10+ employees
            </button>
          </div>

          {/* Email input */}
          {/*<div className="flex mt-6">*/}
          {/*  <input*/}
          {/*    type="text"*/}
          {/*    placeholder="Enter your email or phone number"*/}
          {/*    className="px-4 py-3 rounded-l-lg w-full text-black focus:outline-none"*/}
          {/*  />*/}
          {/*  <button className="bg-green-500 px-6 py-3 rounded-r-lg hover:bg-green-600 font-semibold">*/}
          {/*    Get Started*/}
          {/*  </button>*/}
        {/*</div>*/}

          <button className="flex items-center gap-2 mt-4 bg-white text-black px-6 py-3 rounded-lg">
            <FcGoogle size={22} /> Get started with Google
          </button>
        </div>

        {/* Right Content (Mockup) */}
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2 flex justify-center">
          <div className="bg-white text-black rounded-xl p-6 shadow-xl w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Reports</h3>
            <div className="space-y-2">
              {["Velocitech Systems", "Nitro Fuel Supply", "Hairpin Nutrition"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span>{item}</span>
                    <span className="text-gray-500">Supplies</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rating */}
      <div className="flex justify-center items-center py-6 text-lg">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < 4 ? "text-yellow-400" : "text-gray-400"} />
          ))}
          <span>4.5 (4,889 reviews)</span>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
