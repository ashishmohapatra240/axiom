import React from "react";
import { FaCircle } from "react-icons/fa6";

const Connection = () => {
  return (
    <div className="flex items-center gap-1.5 bg-[#12AF80]/20 rounded-sm px-2 py-1 text-[11px] text-[#12AF80] whitespace-nowrap flex-shrink-0">
      <FaCircle className="w-2 h-2 flex-shrink-0" />
      <span>Connection is stable</span>
    </div>
  );
};

export default Connection;
