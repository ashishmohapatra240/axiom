import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Regions = () => {
  return (
    <div className="flex items-center gap-1 text-[11px] text-gray-400 bg-transparent hover:bg-[#181921] rounded-sm px-2 py-1 transition-colors cursor-pointer flex-shrink-0">
      <span className="whitespace-nowrap">GLOBAL</span>
      <FiChevronDown className="w-3.5 h-3.5 text-gray-400" />
    </div>
  );
};

export default Regions;
