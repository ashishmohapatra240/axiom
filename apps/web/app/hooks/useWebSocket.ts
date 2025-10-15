"use client";

import { useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export interface CreatorFunding {
  amountSol: number;
  amountUsd?: number;
  fundedAt?: string;
  fundingWalletAddress?: string;
}

export interface PairData {
  pair_address: string;
  token_name: string;
  token_ticker: string;
  token_image: string | null;
  protocol: string;
  open_trading: string;
  market_cap_usd: number;
  volume_usd_24h: number;
  fees_sol: number;
  tx_count: number;
  bonding_progress: number;
  liquidity_sol: number;
  website: string | null;
  twitter: string | null;
  telegram: string | null;
  discord: string | null;
  deployer_address: string;
  creator_funding: CreatorFunding;
  dev_holds_percent: number;
  snipers_hold_percent: number;
  top_10_holders: number;
  lp_burned: number;
  freeze_authority: boolean | null;
  created_at: string;
}

export interface ColumnData {
  newPairs: PairData[];
  finalStretch: PairData[];
  migrated: PairData[];
}

interface UseWebSocketReturn {
  data: ColumnData | undefined;
  isLoading: boolean;
}

export const useWebSocket = (url: string): UseWebSocketReturn => {
  const queryClient = useQueryClient();
  const wsRef = useRef<WebSocket | null>(null);

  const { data, isLoading } = useQuery<ColumnData>({
    queryKey: ["websocket-data"],
    queryFn: () => ({
      newPairs: [],
      finalStretch: [],
      migrated: [],
    }),
    staleTime: Infinity,
  });

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onmessage = (event) => {
      const parsedData: ColumnData = JSON.parse(event.data);
      queryClient.setQueryData(["websocket-data"], parsedData);
    };

    return () => {
      ws.close();
    };
  }, [url, queryClient]);

  return { data, isLoading };
};
