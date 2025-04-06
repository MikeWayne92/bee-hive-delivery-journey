
import React, { useState } from "react";

type BeeRole = "scout" | "worker" | "queen" | "messenger";

interface BeeCharacterProps {
  role: BeeRole;
  name: string;
  description: string;
  className?: string;
}

const BeeCharacter: React.FC<BeeCharacterProps> = ({
  role,
  name,
  description,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define specific characteristics based on role
  const getRoleCharacteristics = () => {
    switch (role) {
      case "scout":
        return {
          primaryColor: "#F2B707",
          secondaryColor: "#231F20",
          accessory: "binoculars",
          size: "sm",
        };
      case "worker":
        return {
          primaryColor: "#F2B707",
          secondaryColor: "#231F20",
          accessory: "cap",
          size: "md",
        };
      case "queen":
        return {
          primaryColor: "#F2B707",
          secondaryColor: "#231F20",
          accessory: "crown",
          size: "lg",
        };
      case "messenger":
        return {
          primaryColor: "#F2B707",
          secondaryColor: "#231F20",
          accessory: "bag",
          size: "md",
        };
      default:
        return {
          primaryColor: "#F2B707",
          secondaryColor: "#231F20",
          accessory: "none",
          size: "md",
        };
    }
  };

  const { primaryColor, secondaryColor, accessory, size } = getRoleCharacteristics();

  return (
    <div
      className={`relative flex flex-col items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bee SVG Character */}
      <div className={`animate-bee-fly ${size === "lg" ? "w-24 h-24" : size === "sm" ? "w-16 h-16" : "w-20 h-20"}`}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Bee Body */}
          <ellipse cx="50" cy="50" rx="25" ry="20" fill={primaryColor} />
          <ellipse cx="50" cy="48" rx="22" ry="18" fill={secondaryColor} className="opacity-80" />
          <rect x="28" y="40" width="45" height="16" fill={primaryColor} rx="8" />
          <rect x="33" y="42" width="12" height="3" fill={secondaryColor} rx="1.5" />
          <rect x="50" y="42" width="12" height="3" fill={secondaryColor} rx="1.5" />
          <rect x="33" y="50" width="12" height="3" fill={secondaryColor} rx="1.5" />
          <rect x="50" y="50" width="12" height="3" fill={secondaryColor} rx="1.5" />
          
          {/* Wings */}
          <ellipse cx="40" cy="35" rx="15" ry="10" fill="white" className="opacity-60" />
          <ellipse cx="60" cy="35" rx="15" ry="10" fill="white" className="opacity-60" />
          
          {/* Eyes */}
          <circle cx="42" cy="30" r="3" fill={secondaryColor} />
          <circle cx="58" cy="30" r="3" fill={secondaryColor} />
          <circle cx="43" cy="29" r="1" fill="white" />
          <circle cx="59" cy="29" r="1" fill="white" />
          
          {/* Smile */}
          <path d="M45,40 Q50,45 55,40" fill="none" stroke={secondaryColor} strokeWidth="1.5" />
          
          {/* Antennae */}
          <path d="M42,24 Q40,18 38,17" fill="none" stroke={secondaryColor} strokeWidth="1.5" />
          <path d="M58,24 Q60,18 62,17" fill="none" stroke={secondaryColor} strokeWidth="1.5" />
          <circle cx="38" cy="17" r="1.5" fill={secondaryColor} />
          <circle cx="62" cy="17" r="1.5" fill={secondaryColor} />
          
          {/* Accessories based on role */}
          {accessory === "cap" && (
            <path d="M40,20 H60 Q63,25 60,30 H40 Q37,25 40,20" fill="#8B4513" />
          )}
          {accessory === "crown" && (
            <path d="M40,20 L45,15 L50,20 L55,15 L60,20 Z" fill="#E67E22" />
          )}
          {accessory === "binoculars" && (
            <>
              <rect x="45" y="22" width="10" height="3" fill="#8B4513" rx="1" />
              <circle cx="45" cy="26" r="2" fill="#8B4513" />
              <circle cx="55" cy="26" r="2" fill="#8B4513" />
            </>
          )}
          {accessory === "bag" && (
            <rect x="65" y="45" width="10" height="12" fill="#8B4513" rx="2" />
          )}
        </svg>
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg z-10 w-48 animate-fade-in">
          <div className="text-bee-black">
            <h4 className="font-bold text-bee-honey">{name}</h4>
            <p className="text-sm">{description}</p>
          </div>
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default BeeCharacter;
