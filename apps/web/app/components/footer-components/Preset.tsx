import React from "react";
import { BiSlider } from "react-icons/bi";

const Preset = () => {
  return (
    <button className="flex items-center bg-[#486FFF]/20 hover:bg-[#6683FF]/30 text-white px-2.5 py-1 rounded-md text-sm font-medium transition-colors gap-1.5 flex-shrink-0 cursor-pointer">
      <BiSlider className="h-4 w-4 text-[#486FFF]" />
      <span className="text-[11px] text-[#486FFF] whitespace-nowrap">PRESET 1</span>
    </button>
  );
};

export default Preset;
