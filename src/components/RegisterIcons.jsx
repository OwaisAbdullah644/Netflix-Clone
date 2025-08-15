import React from "react";

const RegisterIcons = ({ strokeWidth = 1 }) => {
  return (
    <div className="flex items-center gap-1">
      {/* MacBook (smaller than TV) */}
      <svg
        className="w-14 h-14"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      >
        <rect x="4" y="5" width="16" height="11" rx="1" />
        <path d="M2 18h20" />
      </svg>

      {/* TV (with upside-down antenna as stand) */}
      <svg
        className="w-16 h-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      >
        <rect x="2" y="5" width="20" height="12" rx="1" />
        <path d="M2 17h20" />
        {/* Stand shaped like inverted antenna */}
        <path d="M8 21l4-3 4 3" />
      </svg>

      {/* Tablet + Smartphone Group (no spacing between) */}
      <div className="flex items-center gap-0">
        {/* Tablet */}
        <svg
          className="w-14 h-14"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <circle cx="12" cy="18" r="0.5" />
        </svg>

        {/* Smartphone (smaller) */}
        <svg
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        >
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <circle cx="12" cy="18" r="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default RegisterIcons;
