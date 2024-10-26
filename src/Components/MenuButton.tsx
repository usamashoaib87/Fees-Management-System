import React, { useState } from "react";

const MenuButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="btn relative lg:w-32 lg:h-12 md:w-30 md:h-11 sm:w-25 sm:h-10 w-25 h-10 rounded-md border-none transition-all duration-500 ease-in-out text-lg font-semibold font-sans flex items-center bg-blue-800 text-[#f5f5f5] hover:shadow-[0_0_20px_0px_#2e2e2e3a] focus:outline-none transform active:translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`icon absolute h-10 flex justify-center items-center transition-all duration-500 ${
          hovered ? "w-[150px]" : "w-[70px]"
        }`}
      >
        <svg viewBox="0 0 175 80" width="35" height="35">
          <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
      </span>
      <span
        className={`text transition-all duration-500 transform text-sm sm:text-base md:text-lg lg:text-xl ${
          hovered ? "opacity-0" : "translate-x-[50px]"
        }`}
      >
        Menu
      </span>
    </button>
  );
};

export default MenuButton;
