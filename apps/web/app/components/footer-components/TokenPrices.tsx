import React from "react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TokenPrices = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Image
                src="https://axiom.trade/images/btc-fill.svg"
                alt="BTC"
                width={14}
                height={14}
                className="flex-shrink-0"
              />
              <span className="text-[#F7931A] text-[11px] whitespace-nowrap">$112.2K</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Price of BTC in USD</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Image
                src="https://axiom.trade/images/eth-fill.svg"
                alt="ETH"
                width={14}
                height={14}
                className="flex-shrink-0"
              />
              <span className="text-[#497493] text-[11px] whitespace-nowrap">$4102K</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Price of ETH in USD</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Image
                src="https://axiom.trade/images/sol-fill.svg"
                alt="SOL"
                width={14}
                height={14}
                className="flex-shrink-0"
              />
              <span className="text-[#0FC96D] text-[11px] whitespace-nowrap">$203.55K</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Price of SOL in USD</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default TokenPrices;
