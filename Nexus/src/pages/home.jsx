import React from "react";
import Navbar from "../components/navbar";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-satoshi text-gray-800">Welcome to Nexus</h1>
        <p className="mt-4 text-lg text-gray-600">Your one-stop solution for all your needs.</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HomePage;

