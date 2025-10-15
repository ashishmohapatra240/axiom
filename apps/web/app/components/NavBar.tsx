"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { IoIosStarOutline } from "react-icons/io";
import { RiNotificationLine } from "react-icons/ri";
import { LuWallet } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItemClass =
    "flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] justify-start items-center [transition:none] duration-0 hover:bg-[#486FFF]/20 hover:text-[#486FFF] hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px] text-[14px] font-medium";

  const getNavItemClass = (isSelected: boolean) => {
    return `${navItemClass} ${isSelected ? "text-[#486FFF]" : "text-white"}`;
  };

  const navigationItems = [
    { href: "/", label: "Discover" },
    { href: "/pulse", label: "Pulse" },
    { href: "/trackers", label: "Trackers" },
    { href: "/perpetuals", label: "Perpetuals" },
    { href: "/yield", label: "Yield" },
    { href: "/vision", label: "Vision" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/rewards", label: "Rewards" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#06070B] border-b border-gray-900 overflow-visible flex flex-row w-full h-[52px] sm:h-[64px] min-h-[48px] sm:min-h-[64px] px-[12px] sm:px-[16px] lg:px-[24px] gap-[8px] sm:gap-[16px] lg:gap-[24px] justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <Image src="/logo.svg" alt="Axiom" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
            <Image src="/logo-text.svg" alt="Axiom" width={80} height={80} className="hidden 3xl:block w-16 sm:w-20 lg:w-24 h-auto" />
          </div>

          <div className="hidden xl:flex items-center mx-2 2xl:mx-4">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={getNavItemClass(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 xl:gap-4 flex-shrink-0 z-10">
          <div className="relative hidden md:block">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search by token or CA..."
              className="bg-transparent hover:bg-[#101217] text-gray-400 placeholder-gray-500 pl-10 pr-4 py-2 rounded-full text-[12px] border border-gray-800 w-40 lg:w-52 xl:w-64 font-sans focus:outline-none"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs border border-gray-700 px-1.5 py-0.5 rounded-full hidden lg:block">
              /
            </kbd>
          </div>

          <button className="md:hidden bg-[#22242D] rounded-full p-1.5">
            <FiSearch className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <button className="hidden sm:block bg-[#486FFF] hover:bg-[#6683FF] text-black font-bold px-2.5 sm:px-3.5 py-1.5 rounded-full text-[12px] sm:text-[14px] transition-colors cursor-pointer font-axiom font-sans whitespace-nowrap">
            Deposit
          </button>

          <button className="hidden lg:block bg-[#22242D] rounded-full p-1.5">
            <IoIosStarOutline className="h-5 w-5" />
          </button>

          <button className="hidden lg:block bg-[#22242D] rounded-full p-1.5">
            <RiNotificationLine className="h-5 w-5" />
          </button>

          <div className="flex items-center bg-[#22242D] rounded-full py-1">
            <div className="flex items-center gap-1.5 sm:gap-3 border-l border-gray-800 pl-2 sm:pl-4">
              <button className="flex items-center gap-1 sm:gap-2">
                <LuWallet className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <Image
                  src="https://axiom.trade/images/sol-fill.svg"
                  alt="Solana"
                  width={16}
                  height={16}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                />
                <span className="text-[12px] sm:text-[14px]">0</span>
              </button>

              <button className="hidden sm:flex items-center gap-2">
                <Image
                  src="https://axiom.trade/images/usdc-perps.svg"
                  alt="USDC"
                  width={16}
                  height={16}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                />
                <span className="text-[12px] sm:text-[14px]">0</span>
                <RiArrowDownSLine className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              </button>
            </div>
          </div>

          <button className="bg-[#22242D] rounded-full p-1.5">
            <RiUserSettingsLine className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <button 
            className="xl:hidden bg-[#22242D] rounded-full p-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <FiMenu className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="xl:hidden sticky top-[52px] sm:top-[64px] z-40 border-b border-gray-900 bg-[#06070B] overflow-y-auto max-h-[60vh]">
          <div className="flex flex-col p-4 gap-1">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${getNavItemClass(pathname === item.href)} w-full justify-start`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
