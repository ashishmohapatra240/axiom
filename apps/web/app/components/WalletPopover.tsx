"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiWalletLine } from "react-icons/ri";
import { FiChevronDown, FiCopy, FiSettings } from "react-icons/fi";
import { BsStack } from "react-icons/bs";
import Image from "next/image";
import { MdOutlineRocketLaunch } from "react-icons/md";

interface WalletItem {
  id: string;
  name: string;
  address: string;
  isOn: boolean;
  stackCount: number;
  walletCount: number;
}

export default function WalletPopover() {
  const [selectedWallets, setSelectedWallets] = useState<string[]>([
    "axiom-main",
  ]);
  const [wallets] = useState<WalletItem[]>([
    {
      id: "axiom-main",
      name: "Axiom Main",
      address: "Cos2M",
      isOn: false,
      stackCount: 0,
      walletCount: 0,
    },
    {
      id: "wallet",
      name: "Wallet",
      address: "R4Si6",
      isOn: false,
      stackCount: 0,
      walletCount: 0,
    },
  ]);

  const toggleWallet = (id: string) => {
    setSelectedWallets((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const allSelected = selectedWallets.length === wallets.length;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedWallets([]);
    } else {
      setSelectedWallets(wallets.map((w) => w.id));
    }
  };

  const selectAllWithBalance = () => {
    setSelectedWallets(
      wallets
        .filter((w) => w.stackCount > 0 || w.walletCount > 0)
        .map((w) => w.id)
    );
  };

  return (
    <TooltipProvider>
      <Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <button className="bg-transparent hover:bg-[#101217] text-white px-3 py-1 rounded-full flex items-center gap-1 transition-colors cursor-pointer border border-[#22242D]">
                <RiWalletLine className="w-4 h-4" />
                <span className="text-[12px] font-medium">
                  {selectedWallets.length}
                </span>
                <Image
                  src="https://axiom.trade/images/sol-fill.svg"
                  alt="SOL"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-medium">0</span>
                <FiChevronDown className="w-4 h-4" />
              </button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Active Wallets</p>
          </TooltipContent>
        </Tooltip>
        <PopoverContent className="w-[360px] p-0 bg-[#18181A] border-2 border-[#25262D]" align="end">
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#1f2029]">
            <div className="flex items-center gap-2 py-1">
              <button
                onClick={toggleSelectAll}
                className="px-2 py-1 rounded-full text-[12px] font-medium text-white bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors cursor-pointer border border-[#25262D]"
              >
                {allSelected ? "Unselect All" : "Select All"}
              </button>
              <button
                onClick={selectAllWithBalance}
                className="px-2 py-1 rounded-full text-[12px] font-medium text-[#6b7280] bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors cursor-pointer disabled:cursor-not-allowed border border-[#25262D]"
              >
                Select All with Balance
              </button>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-[12px] text-[#6b7280] hover:text-white transition-colors cursor-pointer">
                  <FiSettings className="w-3 h-3" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-center">
                  Multi <br /> Wallet
                  <br /> Buy <br /> Settings
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="py-1">
            {wallets.map((wallet, index) => (
              <div key={wallet.id}>
                <div className="flex items-center gap-2 px-3 pb-1.5 hover:bg-[#1B1B1E] transition-colors">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center transition-all cursor-pointer ${
                        selectedWallets.includes(wallet.id)
                          ? wallet.id === "axiom-main"
                            ? "bg-[#F7931A] border-2 border-[#0a0a0a]"
                            : "bg-blue-500 border-2 border-[#0a0a0a]"
                          : "border-2 border-[#3f4146] bg-transparent"
                      }`}
                      onClick={() => toggleWallet(wallet.id)}
                    ></div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-1">
                      <span
                        className={`text-[14px] font-medium ${wallet.id === "axiom-main" ? "text-[#F7931A]" : "text-white"}`}
                      >
                        {wallet.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <MdOutlineRocketLaunch className="w-4 h-4 text-[#6b7280]" />
                        <span className="text-[12px] text-[#6b7280]">Off</span>
                      </div>
                      <span className="text-[12px] text-[#6b7280] font-mono">
                        {wallet.address}
                      </span>
                      <button className="text-[12px] text-[#6b7280] hover:text-white transition-colors cursor-pointer">
                        <FiCopy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 border border-[#22242D] rounded-full px-2 py-1 mr-4">
                    <div className="rounded-full bg-[#1A1A1D] flex items-center justify-center">
                      <Image
                        src="https://axiom.trade/images/sol-fill.svg"
                        alt="SOL"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-sm text-white font-medium">0</span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 border border-[#22242D] rounded-full px-2 py-1">
                    <div className="relative">
                      <Image
                        src="/icons/tokens.svg"
                        alt="SOL"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-sm text-white font-medium">0</span>
                  </div>
                </div>
                {index < wallets.length - 1 && (
                  <div className="border-t border-[#1f2029] mx-3"></div>
                )}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
}
