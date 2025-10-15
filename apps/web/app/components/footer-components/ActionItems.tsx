import React from "react";
import { CiSettings } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { RiPulseLine } from "react-icons/ri";
import { TbChartLine } from "react-icons/tb";
import { TooltipContent } from "@/components/ui/tooltip";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function NavIconButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      className="flex items-center gap-1 px-1 py-1.5 text-gray-400 hover:text-white hover:bg-[#15181E] rounded-md transition-all flex-shrink-0 cursor-pointer"
      aria-label={label}
      title={label}
    >
      {icon}
      <span className="text-[10px] font-medium whitespace-nowrap">{label}</span>
    </button>
  );
}

const ActionItems = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger>
            <CiSettings className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Tracker Settings</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <NavIconButton
                icon={<LuWallet className="h-4 w-4" />}
                label="Wallet"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Wallet Tracker</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <NavIconButton
                icon={<MdOutlineExplore className="h-4 w-4" />}
                label="Discover"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Discover Tracker</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <NavIconButton
                icon={<RiPulseLine className="h-4 w-4" />}
                label="Pulse"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Pulse Tracker</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <NavIconButton
                icon={<TbChartLine className="h-4 w-4" />}
                label="PnL"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>PnL Tracker</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default ActionItems;
