"use client";

import React, { useRef } from "react";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import BottomProviders from "./footer-components/BottomProviders";
import TokenPrices from "./footer-components/TokenPrices";
import Fees from "./footer-components/Fees";
import Connection from "./Connection";
import Regions from "./footer-components/Regions";
import FooterIcons from "./FooterIcons";
import Preset from "./footer-components/Preset";
import ActiveWallets from "./footer-components/ActiveWallets";
import ActionItems from "./footer-components/ActionItems";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Footer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <TooltipProvider> 
    <div className="sticky bottom-0 z-40 relative flex items-center w-full bg-[#06070B] border-t border-gray-900 overflow-hidden pb-1">
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 flex items-center justify-center w-6 sm:w-8 h-full bg-gradient-to-r from-[#06070B] to-transparent text-gray-400 hover:text-white transition-colors"
        aria-label="Scroll left"
      >
        <IoChevronBackOutline className="h-3 w-3 sm:h-4 sm:w-4" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex items-center w-full h-full overflow-x-auto overflow-y-hidden scrollbar-hide px-6 sm:px-8 lg:px-10"
      >
        <div className="flex items-center gap-2 sm:gap-3 h-full text-xs sm:text-sm">
          <Tooltip>
            <TooltipTrigger>
              <Preset />
            </TooltipTrigger>
            <TooltipContent>
              <p>Trading Settings</p>
            </TooltipContent>
          </Tooltip>
          <div className="w-px h-4 sm:h-6 bg-gray-800" />
          <Tooltip>
            <TooltipTrigger>
              <ActiveWallets />
            </TooltipTrigger>
            <TooltipContent>
              <p>Active Wallets</p>
            </TooltipContent>
          </Tooltip>
          <div className="w-px h-4 sm:h-6 bg-gray-800" />
          <ActionItems />
          <div className="w-px h-4 sm:h-6 bg-gray-800" />
          <BottomProviders />
          <div className="w-px h-4 sm:h-6 bg-gray-800" />
          <TokenPrices />
          <div className="w-px h-4 sm:h-6 bg-gray-800" />
          <Fees />
          <div className="w-px h-4 sm:h-6 bg-gray-800" />
          <Connection />
          <div className="w-px h-4 sm:h-6 bg-gray-800" />
          <Regions />
          <div className="w-px h-4 sm:h-6 bg-gray-800" />
          <FooterIcons />
        </div>
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 flex items-center justify-center w-6 sm:w-8 h-full bg-gradient-to-l from-[#06070B] to-transparent text-gray-400 hover:text-white transition-colors"
        aria-label="Scroll right"
      >
        <IoChevronForwardOutline className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>
    </TooltipProvider>
  );
}
