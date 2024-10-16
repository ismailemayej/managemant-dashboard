import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-2 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800">Product Dashboard</h1>
      <p className="text-lg text-gray-600">
        Welcome to the product dashboard. Here you can manage all your products.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
        Add New Product
      </button>
    </div>
  );
};

export default DashboardPage;
