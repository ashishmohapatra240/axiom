import React from "react";
import { LuWallet } from "react-icons/lu";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";

const ActiveWallets = () => {
  return (
    <div className="flex items-center bg-[#0D0F14] border border-gray-800 hover:border-gray-700 px-2.5 py-1 rounded-full text-sm transition-colors cursor-pointer gap-1 flex-shrink-0">
      <LuWallet className="h-3.5 w-3.5 text-gray-400" />
      <span className="text-gray-400 text-[11px]">1</span>
      <Image
        src="https://axiom.trade/images/sol-fill.svg"
        alt="SOL"
        width={12}
        height={12}
      />
      <span className="text-gray-400 text-[11px]">1</span>
      <RiArrowDownSLine className="h-4 w-4 text-gray-500" />
    </div>
  );
};

export default ActiveWallets;
