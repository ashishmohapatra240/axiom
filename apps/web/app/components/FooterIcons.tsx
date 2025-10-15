import React from "react";
import { RiLayoutTopLine } from "react-icons/ri";
import { RiNotificationLine } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const FooterIcons = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <RiLayoutTopLine className="w-4 h-4 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer flex-shrink-0" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hide Watchlist Ticker</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <RiNotificationLine className="w-4 h-4 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer flex-shrink-0" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notification Settings</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <IoColorPaletteOutline className="w-4 h-4 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer flex-shrink-0" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Customize Theme</p>
          </TooltipContent>
        </Tooltip>

        <div className="w-px h-6 bg-gray-800" />

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://discord.com/invite/axiomtrade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="w-4 h-4 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer flex-shrink-0" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Join Our Discord</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://x.com/axiomexchange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="w-4 h-4 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer flex-shrink-0" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Follow us on X</p>
          </TooltipContent>
        </Tooltip>

        <a
          href="https://docs.axiom.trade/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:bg-[#101217] rounded-sm px-2 py-1 transition-colors cursor-pointer flex-shrink-0"
        >
          <SiGoogledocs className="w-4 h-4 text-gray-400 hover:text-gray-300 transition-colors flex-shrink-0" />
          <span className="text-gray-400 text-[10px] whitespace-nowrap">Docs</span>
        </a>
      </div>
    </TooltipProvider>
  );
};

export default FooterIcons;
