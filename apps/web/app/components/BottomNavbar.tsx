import React from "react";
import { FiSettings, FiStar, FiTrendingUp } from "react-icons/fi";

const BottomNavbar = () => {
  return (
    <div className="sticky top-[52px] sm:top-[64px] z-10 bg-[#06070B] border-b border-gray-900">
      <div className="flex space-x-2 sm:space-x-2.5 py-1.5 sm:py-2 ml-2 sm:ml-4 overflow-x-auto scrollbar-hide">
        <FiSettings className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#787A87] flex-shrink-0" />
        <p className="text-gray-600 text-[10px] flex-shrink-0">|</p>
        <FiStar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C8C9CF] flex-shrink-0" />
        <p className="text-gray-600 text-[10px] flex-shrink-0">|</p>
        <FiTrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#787A87] flex-shrink-0" />
        <p className="text-gray-600 text-[10px] flex-shrink-0">|</p>
      </div>
    </div>
  );
};

export default BottomNavbar;
