"use client";

import React from "react";
import Image from "next/image";
import { FiList, FiChevronDown, FiVolume2 } from "react-icons/fi";
import { FaRegKeyboard } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuBookmarkX } from "react-icons/lu";
import { PiCrosshairBold } from "react-icons/pi";
import FooterIcons from "./FooterIcons";
import WalletPopover from "./WalletPopover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

export default function PulseHeading() {
  return (
    <TooltipProvider>
      <div className="sticky top-[76px] sm:top-[92px] z-30 bg-[#06070B] w-full flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-white text-[20px] font-medium">Pulse</h1>
        </div>

        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-[#808080] hover:text-white hover:text-gray-300 cursor-pointer transition-all duration-300 mr-6">
                <FaRegQuestionCircle className="w-4 h-4 text-[#808080]" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Help with Pulse Filters, Settings</p>
            </TooltipContent>
          </Tooltip>

          <button className="bg-[#22242D] hover:bg-[#292B37] text-white px-3 py-1.5 rounded-full flex items-center gap-3 transition-colors cursor-pointer bg-[#22242D] hover:bg-[#292B37] rounded-full group">
            <FiList className="w-4 h-4" />
            <span className="text-sm font-bold">Display</span>
            <FiChevronDown className="w-4 h-4" />
          </button>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-[#808080] hover:text-gray-300 transition-colors cursor-pointer bg-transparent hover:bg-[#16191F] p-2 rounded-full">
                <LuBookmarkX className="w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Blacklist dev, handle, keywords</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-[#808080] hover:text-gray-300 transition-colors cursor-pointer bg-transparent hover:bg-[#16191F] p-2 rounded-full">
                <FaRegKeyboard className="w-4 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pulse Hotkeys</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-[#808080] hover:text-gray-300 transition-colors cursor-pointer bg-transparent hover:bg-[#16191F] p-2 rounded-full">
                <FiVolume2 className="w-5 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Alerts</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-[#808080] hover:text-gray-300 transition-colors cursor-pointer bg-transparent hover:bg-[#16191F] p-2 rounded-full">
                <PiCrosshairBold className="w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Snipe Targets</p>
            </TooltipContent>
          </Tooltip>

          <WalletPopover />
        </div>
      </div>
    </TooltipProvider>
  );
}
