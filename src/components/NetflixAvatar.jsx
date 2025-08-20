import React from "react";

const NetflixAvatar = ({
  color = "#ff0000",
  size = 100,
  title = "Profile",
  textColor = "#E5E5E5",
  className = "",
}) => {
  return (
    <svg
      className={className}  
      width={size}
      height={size + 25} 
      viewBox="0 0 100 125"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill={color} rx={10} ry={10} />

  
      <circle cx="30" cy="35" r="6" fill="white" />
      <circle cx="70" cy="35" r="6" fill="white" />

      <path
        d="M30 65 Q50 80 70 65"
        stroke="white"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      <text
        x="50"
        y="115"
        fontSize="14"
        fill={textColor}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        {title}
      </text>
    </svg>
  );
};

export default NetflixAvatar;
