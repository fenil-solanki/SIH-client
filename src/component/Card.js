import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl border shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`border-b px-4 py-3 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-lg font-semibold text-gray-800 ${className}`}>
      {children}
    </h2>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`px-4 py-3 text-sm text-gray-700 ${className}`}>
      {children}
    </div>
  );
};
