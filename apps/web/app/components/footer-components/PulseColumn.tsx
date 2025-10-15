"use client";

import React from "react";
import { PiSlidersHorizontalFill } from "react-icons/pi";
import { BiSolidZap } from "react-icons/bi";
import Image from "next/image";
import PairCard from "../PairCard";
import PairCardSkeleton from "../PairCardSkeleton";
import { PairData } from "../../hooks/useWebSocket";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

interface PulseColumnProps {
  title: string;
  count?: number;
  pairs?: PairData[];
  isConnected?: boolean;
  pairType?: "newPairs" | "finalStretch" | "migrated";
}

const dummyPairs = [
  {
    pair_address: "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
    token_name: "Pepe Unchained",
    token_ticker: "PEPU",
    token_image:
      "https://dd.dexscreener.com/ds-data/tokens/solana/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr.png",
    protocol: "Raydium",
    open_trading: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
    market_cap_usd: 125400,
    volume_usd_24h: 45600,
    fees_sol: 1.234,
    tx_count: 234,
    bonding_progress: 0.85,
    liquidity_sol: 12.5,
    website: "https://pepeunchained.com",
    twitter: "https://twitter.com/pepe",
    telegram: "https://t.me/pepe",
    discord: null,
    deployer_address: "DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX6ZKUmG5CNSKK",
    creator_funding: {
      amountSol: 5.2,
      amountUsd: 890,
      fundedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      fundingWalletAddress: "8xKvwN9FmKMQd4MWjvqmXQH8VqJPZWxGY7JkuKQZTQHW",
    },
    dev_holds_percent: 0.08,
    snipers_hold_percent: 0.12,
    top_10_holders: 0.45,
    lp_burned: 1.0,
    freeze_authority: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
  },
  {
    pair_address: "8QcMnECzW7DKD3cD9XZdjqVQqZh4KqR2JD8eSrPxvqRE",
    token_name: "Moon Doge",
    token_ticker: "MDOGE",
    token_image:
      "https://dd.dexscreener.com/ds-data/tokens/solana/8QcMnECzW7DKD3cD9XZdjqVQqZh4KqR2JD8eSrPxvqRE.png",
    protocol: "Raydium",
    open_trading: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
    market_cap_usd: 89300,
    volume_usd_24h: 28900,
    fees_sol: 0.876,
    tx_count: 156,
    bonding_progress: 0.65,
    liquidity_sol: 8.7,
    website: "https://moondoge.io",
    twitter: "https://twitter.com/moondoge",
    telegram: null,
    discord: "https://discord.gg/moondoge",
    deployer_address: "5rTw9FfNHj7CqxgQs8vQ3pQZWQxUyZg4yZqPxQHWMRTY",
    creator_funding: {
      amountSol: 3.8,
      amountUsd: 650,
      fundedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
      fundingWalletAddress: "9xKvwN9FmKMQd4MWjvqmXQH8VqJPZWxGY7JkuKQZTQHW",
    },
    dev_holds_percent: 0.15,
    snipers_hold_percent: 0.18,
    top_10_holders: 0.52,
    lp_burned: 0.95,
    freeze_authority: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
  {
    pair_address: "9ZNTfG4qGxNdHcF7nDUhNnPY8sZ7vR4hMQgJ6PdxVrEk",
    token_name: "Shiba Revolution",
    token_ticker: "SHIBR",
    token_image: null,
    protocol: "Raydium",
    open_trading: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
    market_cap_usd: 156700,
    volume_usd_24h: 67800,
    fees_sol: 2.145,
    tx_count: 389,
    bonding_progress: 0.92,
    liquidity_sol: 18.3,
    website: null,
    twitter: "https://twitter.com/shibrevolution",
    telegram: "https://t.me/shibrevolution",
    discord: "https://discord.gg/shibrev",
    deployer_address: "3mTfG4qGxNdHcF7nDUhNnPY8sZ7vR4hMQgJ6PdxVrEk",
    creator_funding: {
      amountSol: 7.5,
      amountUsd: 1280,
      fundedAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
      fundingWalletAddress: "7xKvwN9FmKMQd4MWjvqmXQH8VqJPZWxGY7JkuKQZTQHW",
    },
    dev_holds_percent: 0.05,
    snipers_hold_percent: 0.09,
    top_10_holders: 0.38,
    lp_burned: 1.0,
    freeze_authority: null,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
  },
  {
    pair_address: "4HjXvN9FmKMQd4MWjvqmXQH8VqJPZWxGY7JkuKQZTQHW",
    token_name: "Solana Kitty",
    token_ticker: "SKIT",
    token_image:
      "https://dd.dexscreener.com/ds-data/tokens/solana/4HjXvN9FmKMQd4MWjvqmXQH8VqJPZWxGY7JkuKQZTQHW.png",
    protocol: "Raydium",
    open_trading: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    market_cap_usd: 234500,
    volume_usd_24h: 98700,
    fees_sol: 3.456,
    tx_count: 567,
    bonding_progress: 0.78,
    liquidity_sol: 25.4,
    website: "https://solanakitty.com",
    twitter: "https://twitter.com/solanakitty",
    telegram: "https://t.me/solanakitty",
    discord: null,
    deployer_address: "6xKvwN9FmKMQd4MWjvqmXQH8VqJPZWxGY7JkuKQZTQHW",
    creator_funding: {
      amountSol: 9.2,
      amountUsd: 1570,
      fundedAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
      fundingWalletAddress: "5xKvwN9FmKMQd4MWjvqmXQH8VqJPZWxGY7JkuKQZTQHW",
    },
    dev_holds_percent: 0.12,
    snipers_hold_percent: 0.15,
    top_10_holders: 0.48,
    lp_burned: 0.88,
    freeze_authority: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
];

const PulseColumn: React.FC<PulseColumnProps> = ({
  title,
  count = 0,
  pairs = [],
  isConnected = false,
  pairType,
}) => {
  const displayPairs = pairs.length > 0 ? pairs : dummyPairs;

  return (
    <TooltipProvider>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="flex items-center justify-between mb-4 border-b border-[#22242D]">
          <div className="flex items-center gap-2">
            <h2 className="text-white text-[16px] font-semibold">{title}</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-between items-center gap-2 border border-[#22242D] rounded-full p-1">
              <div className="flex items-center gap-8">
                <div className="flex items-center text-[12px] gap-2">
                  <BiSolidZap className="w-4 h-4 text-[#777A8C]" />
                  <span className="text-white font-medium">
                    {count || displayPairs.length}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Image
                    src="https://axiom.trade/images/sol-fill.svg"
                    alt="Menu"
                    width={16}
                    height={16}
                  />
                </button>
              </div>

              <div className="w-px h-4 bg-[#22242D]"></div>
              <div className="flex items-center">
                <button className="text-blue-500 text-[12px] font-medium px-1.5 py-1">
                  P1
                </button>
                <button className="text-gray-500 text-[12px] font-medium px-1.5 py-1">
                  P2
                </button>
                <button className="text-gray-500 text-[12px] font-medium px-1.5 py-1">
                  P3
                </button>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-gray-400 transition-colors bg-transparent hover:bg-[#16191F] p-1 rounded-sm cursor-pointer">
                  <PiSlidersHorizontalFill className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Filters</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div
          className="overflow-y-auto flex-1"
          style={{ maxHeight: "calc(100vh - 250px)" }}
        >
          {isConnected ? (
            // Show shimmer skeletons when loading
            [...Array(4)].map((_, index) => (
              <PairCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            // Show actual data when loaded
            displayPairs.map((pair, index) => (
              <PairCard
                key={`${pair.pair_address}-${index}`}
                {...pair}
                pairType={pairType}
              />
            ))
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default PulseColumn;
