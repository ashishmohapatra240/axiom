import React from "react";
import { LuPill } from "react-icons/lu";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { PiCoin } from "react-icons/pi";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Fees = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1.5 cursor-pointer">
              <LuPill className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-[11px] whitespace-nowrap">$83.9K</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Estimated Migration Price</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1.5 cursor-pointer">
              <MdOutlineLocalGasStation className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-[11px] whitespace-nowrap">0.0013</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Recommended Priority Fee</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1.5 cursor-pointer">
              <PiCoin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-[11px] whitespace-nowrap">0.002%</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Recommended Bribe Fee</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default Fees;
