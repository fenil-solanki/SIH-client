import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};
