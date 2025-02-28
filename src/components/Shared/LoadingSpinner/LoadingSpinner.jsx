import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[calc(100vh-305px)]">
      <div className="relative w-24 h-24">
        {/* Outer Circle */}
        <div className="absolute w-full h-full rounded-full border-4 border-gray-200"></div>

        {/* Inner Spinner */}
        <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-600 animate-spin"></div>

        {/* Gradient Overlay */}
        <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>

        {/* Loading Text */}
        <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-700">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;