import React from "react";
import Image from "next/image";
import {
  FaGlobe,
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaExternalLinkAlt,
  FaCopy,
  FaBolt,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { AiFillSliders } from "react-icons/ai";
import { TbChefHat } from "react-icons/tb";
import { BsCrosshair } from "react-icons/bs";
import { RiGhostLine, RiUserStarLine } from "react-icons/ri";
import { LiaCubesSolid } from "react-icons/lia";

export type CreatorFunding = {
  amountSol: number;
  amountUsd?: number;
  fundedAt?: string;
  fundingWalletAddress?: string;
};

export type PairCardProps = {
  pair_address?: string;
  token_name?: string;
  token_ticker?: string;
  token_image?: string | null;
  protocol?: string;
  open_trading?: string;
  market_cap_usd?: number;
  volume_usd_24h?: number;
  fees_sol?: number;
  tx_count?: number;
  bonding_progress?: number;
  liquidity_sol?: number;
  website?: string | null;
  twitter?: string | null;
  telegram?: string | null;
  discord?: string | null;
  deployer_address?: string;
  creator_funding?: CreatorFunding;
  dev_holds_percent?: number;
  snipers_hold_percent?: number;
  top_10_holders?: number;
  lp_burned?: number;
  freeze_authority?: boolean | null;
  created_at?: string;
  pairType?: "newPairs" | "finalStretch" | "migrated";
};

const fmtUSD = (n?: number) =>
  n ? (n >= 1000 ? `$${(n / 1000).toFixed(2)}K` : `$${n}`) : "$0";
const fmtSOL = (n?: number) => (n ? n.toFixed(1) : "0");
const pct = (n?: number) => (n ? `${(n > 1 ? n : n * 10).toFixed(0)}%` : "0%");
const shortAddr = (a?: string) =>
  a && a.length > 8 ? `${a.slice(0, 4)}...${a.slice(-4)}` : (a ?? "");
const timeAgo = (iso?: string) => {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const s = Math.floor(diff / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  const d = Math.floor(h / 24);
  return `${d}d`;
};

const SimpleIndicator: React.FC<{
  icon: React.ReactNode;
  value: string;
  color?: string;
}> = ({ icon, value, color = "text-emerald-400" }) => (
  <div
    className={`flex items-center text-[12px] ${color} bg-[#101114] border border-[#22242D] rounded-full px-1`}
  >
    {icon}
    <span>{value}</span>
  </div>
);

const SocialIcon: React.FC<{
  href?: string | null;
  icon: React.ReactNode;
  title: string;
}> = ({ href, icon, title }) => (
  <a
    href={href ?? undefined}
    target="_blank"
    rel="noreferrer"
    title={title}
    className={`inline-flex h-6 w-6 items-center justify-center rounded bg-zinc-800/70 hover:bg-zinc-700 transition ${!href ? "opacity-40 pointer-events-none" : ""}`}
  >
    {icon}
  </a>
);

const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <span
    className={`rounded-full bg-zinc-800/70 px-2 py-0.5 text-xs text-zinc-300 ${className ?? ""}`}
  >
    {children}
  </span>
);

const PairCard: React.FC<PairCardProps> = (props) => {
  const {
    pair_address,
    token_name,
    token_ticker,
    token_image,
    protocol,
    open_trading,
    market_cap_usd,
    volume_usd_24h,
    fees_sol,
    tx_count,
    bonding_progress,
    liquidity_sol,
    website,
    twitter,
    telegram,
    discord,
    deployer_address,
    creator_funding,
    dev_holds_percent,
    snipers_hold_percent,
    top_10_holders,
    lp_burned,
    pairType,
  } = props;

  const [imageError, setImageError] = React.useState(false);

  const getBorderColor = () => {
    switch (pairType) {
      case "newPairs":
        return "border-[#53D38E]";
      case "finalStretch":
        return "border-[#E78C19]";
      case "migrated":
        return "border-[#FFB000]";
      default:
        return "border-[#22242D]";
    }
  };

  return (
    <div className="w-full bg-transparent border border-zinc-800 p-1.5 hover:bg-[#191A21] transition-colors cursor-pointer">
      <div className="flex flex-col md:flex-row md:items-start gap-2 min-w-0">
        <div className="flex md:hidden items-start gap-2 w-full">
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div
              className={`flex items-center gap-2 border-1 ${getBorderColor()} rounded-lg p-0.5`}
            >
              <div className="h-16 w-16 overflow-hidden rounded-md border border-zinc-700 bg-zinc-800 flex items-center justify-center">
                {token_image && !imageError ? (
                  <Image
                    src={token_image}
                    alt={token_name || "Token"}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                    onError={() => setImageError(true)}
                    unoptimized
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full">
                    <span className="text-zinc-600 text-xl mb-1">🪙</span>
                    <span className="text-zinc-500 text-[10px] text-center px-1">
                      {token_ticker || "???"}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <span className="text-[9px] text-zinc-400">
              {shortAddr(pair_address)}
            </span>
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-emerald-400 font-medium text-xs">
                {token_ticker || "???"}
              </span>
              <span className="text-zinc-200 font-semibold text-xs truncate">
                {token_name || "Unknown Token"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-xs">
                <span className="text-zinc-400">MC</span>
                <span className="font-semibold text-sky-300">
                  {fmtUSD(market_cap_usd)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center gap-1">
                  <span className="text-zinc-400 text-[11px]">V</span>
                  <Image
                    src="https://axiom.trade/images/usdc-perps.svg"
                    alt="USDC"
                    width={10}
                    height={10}
                    className="w-2.5 h-2.5"
                  />
                  <span className="font-semibold text-[11px]">
                    {fmtUSD(volume_usd_24h)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-zinc-400 text-[11px]">F</span>
                  <Image
                    src="https://axiom.trade/images/sol-fill.svg"
                    alt="SOL"
                    width={10}
                    height={10}
                    className="w-2.5 h-2.5"
                  />
                  <span className="font-semibold text-[11px]">
                    {fmtSOL(fees_sol)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-zinc-400 text-[11px]">TX</span>
                  <span className="font-semibold text-[11px]">{tx_count}</span>
                </div>
              </div>
            </div>
          </div>

          <button className="rounded-full bg-[#4665FF] hover:bg-[#526FFF] text-black font-bold px-2 py-1 text-[11px] flex items-center gap-1 cursor-pointer whitespace-nowrap flex-shrink-0">
            <FaBolt className="h-2.5 w-2.5" /> {fmtSOL(liquidity_sol)}
          </button>
        </div>

        {/* Desktop: Original Image */}
        <div className="hidden md:flex flex-col items-center gap-1 flex-shrink-0">
          <div
            className={`flex items-center gap-2 border-1 ${getBorderColor()} rounded-lg p-0.5`}
          >
            <div className="h-20 w-20 overflow-hidden rounded-md border border-zinc-700 bg-zinc-800 flex items-center justify-center">
              {token_image && !imageError ? (
                <Image
                  src={token_image}
                  alt={token_name || "Token"}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                  unoptimized
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <span className="text-zinc-600 text-2xl mb-1">🪙</span>
                  <span className="text-zinc-500 text-xs text-center px-1">
                    {token_ticker || "???"}
                  </span>
                </div>
              )}
            </div>
          </div>
          <span className="text-[10px] text-zinc-400">
            {shortAddr(pair_address)}
          </span>
        </div>

        <div className="flex-1 min-w-0 flex flex-col">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-emerald-400 font-medium text-sm">
              {token_ticker || "???"}
            </span>
            <span className="text-zinc-200 font-semibold text-sm">
              {token_name || "Unknown Token"}
            </span>
            <button title="Copy" className="text-zinc-400 hover:text-white">
              <FaCopy className="h-3 w-3" />
            </button>
          </div>

          <div className="mt-0 md:mt-1.5 flex items-center gap-2 overflow-x-auto">
            <Pill>{timeAgo(open_trading)}</Pill>
            <SocialIcon href={website} icon={<FaGlobe />} title="Website" />
            <SocialIcon href={twitter} icon={<FaTwitter />} title="Twitter" />
            <SocialIcon
              href={telegram}
              icon={<FaTelegram />}
              title="Telegram"
            />
            <SocialIcon href={discord} icon={<FaDiscord />} title="Discord" />

            <div className="group relative ml-1">
              {/* <button className="inline-flex items-center gap-1 rounded bg-zinc-800/70 px-2 py-0.5 text-xs text-zinc-300 hover:bg-zinc-700">
                <FaWallet className="h-3.5 w-3.5" />
                <span>{shortAddr(deployer_address)}</span>
              </button> */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <TbUsers className="h-4 w-4 text-zinc-400/70" />
                  <p className="text-white text-[14px]">0</p>
                </div>
                <div className="flex items-center gap-1">
                  <AiFillSliders className="h-4 w-4 text-zinc-400/70" />
                  <p className="text-white text-[14px]">0</p>
                </div>
              </div>

              <div className="pointer-events-none absolute left-0 top-7 z-20 hidden w-72 flex-col gap-2 rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-sm text-zinc-200 shadow-xl group-hover:flex">
                <div className="flex items-center justify-between">
                  <span className="truncate">{deployer_address}</span>
                  <a
                    className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Open <FaExternalLinkAlt className="h-3 w-3" />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-2 text-zinc-300">
                  <div className="rounded-lg bg-zinc-800/60 p-2">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs">
                      <FaDollarSign /> Funded
                    </div>
                    <div className="mt-1 text-lg font-semibold">
                      {creator_funding?.amountSol ?? 0} SOL
                    </div>
                    <div className="text-xs text-zinc-400">
                      {fmtUSD(creator_funding?.amountUsd)}
                    </div>
                  </div>
                  <div className="rounded-lg bg-zinc-800/60 p-2">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs">
                      <FaClock /> Funded
                    </div>
                    <div className="mt-1 text-lg font-semibold">
                      {timeAgo(creator_funding?.fundedAt)}
                    </div>
                    <div className="text-[11px] text-zinc-400 truncate">
                      {creator_funding?.fundingWalletAddress}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-2 md:mt-8 flex items-center gap-0.5 overflow-x-auto">
            <SimpleIndicator
              icon={<RiUserStarLine className="h-3 w-3" />}
              value={pct(dev_holds_percent)}
              color="text-emerald-400"
            />
            <SimpleIndicator
              icon={<TbChefHat className="h-3 w-3" />}
              value={pct(snipers_hold_percent)}
              color="text-sky-400"
            />
            <SimpleIndicator
              icon={<BsCrosshair className="h-3 w-3" />}
              value={pct(top_10_holders)}
              color="text-emerald-400"
            />
            <SimpleIndicator
              icon={<RiGhostLine className="h-3 w-3" />}
              value={pct(lp_burned)}
              color="text-green-400"
            />
            <SimpleIndicator
              icon={<LiaCubesSolid className="h-3 w-3" />}
              value={pct(bonding_progress)}
              color="text-emerald-400"
            />
          </div>
        </div>

        {/* Desktop: Stats Column */}
        <div className="hidden md:flex flex-col items-end gap-1.5 flex-shrink-0">
          <div className="flex items-center gap-1 text-sm whitespace-nowrap">
            <span className="text-zinc-400">MC</span>
            <span className="font-semibold text-sky-300">
              {fmtUSD(market_cap_usd)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm whitespace-nowrap">
            <span className="text-zinc-400 text-[12px]">V</span>
            <Image
              src="https://axiom.trade/images/usdc-perps.svg"
              alt="USDC"
              width={12}
              height={12}
              className="w-3 h-3"
            />
            <span className="font-semibold text-[12px]">
              {fmtUSD(volume_usd_24h)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm whitespace-nowrap">
            <div className="flex items-center gap-1">
              <span className="text-zinc-400 text-[12px]">F</span>
              <Image
                src="https://axiom.trade/images/sol-fill.svg"
                alt="SOL"
                width={12}
                height={12}
                className="w-3 h-3"
              />
              <span className="font-semibold text-[12px]">
                {fmtSOL(fees_sol)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-zinc-400 text-[12px]">TX</span>
              <span className="font-semibold text-[12px]">{tx_count}</span>
            </div>
          </div>
          <button className="mt-auto rounded-full bg-[#4665FF] hover:bg-[#526FFF] text-black font-bold px-2.5 py-1 text-[12px] flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
            <FaBolt className="h-3 w-3" /> {fmtSOL(liquidity_sol)} SOL
          </button>
        </div>
      </div>
    </div>
  );
};

export default PairCard;
