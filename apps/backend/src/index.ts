import { WebSocketServer, WebSocket } from 'ws';

interface CreatorFunding {
  amountSol: number;
  amountUsd?: number;
  fundedAt?: string;
  fundingWalletAddress?: string;
}

interface PairData {
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

interface ColumnData {
  newPairs: PairData[];
  finalStretch: PairData[];
  migrated: PairData[];
}

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;
const randomInt = (min: number, max: number) => Math.floor(randomBetween(min, max));
const randomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const generateRandomAddress = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789';
  return Array.from({ length: 44 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const getRandomPicsumImage = () => {
  const randomSeed = `${Date.now()}-${Math.random().toString(36).substring(7)}`;
  return `https://picsum.photos/200/200?random=${randomSeed}`;
};

const tokenNames = [
  'Pepe Unchained', 'Moon Doge', 'Shiba Revolution', 'Solana Kitty', 
  'Rocket Cat', 'Diamond Hands', 'To The Moon', 'Ape Together',
  'Lambo Token', 'Wagmi Coin', 'HODL Forever', 'Pump It Up',
  'Crypto King', 'Degen Life', 'Moon Mission', 'Space Monkey',
  'Lucky Dragon', 'Turbo Bull', 'Mega Whale', 'Alpha Wolf'
];

const tokenTickers = [
  'PEPU', 'MDOGE', 'SHIBR', 'SKIT', 'RCAT', 'DHAND', 'MOON', 'APE',
  'LAMBO', 'WAGMI', 'HODL', 'PUMP', 'KING', 'DEGEN', 'MISS', 'MONK',
  'LUCKY', 'TURBO', 'WHALE', 'ALPHA'
];

const protocols = ['Raydium', 'Orca', 'Jupiter', 'Serum'];

const generateCreatorFunding = (): CreatorFunding => ({
  amountSol: parseFloat(randomBetween(1, 20).toFixed(2)),
  amountUsd: parseFloat(randomBetween(100, 3000).toFixed(2)),
  fundedAt: new Date(Date.now() - randomInt(1000 * 60 * 60, 1000 * 60 * 60 * 24)).toISOString(),
  fundingWalletAddress: generateRandomAddress(),
});

const generatePairData = (ageMinutes: number): PairData => {
  const nameIndex = randomInt(0, tokenNames.length);
  const hasImage = true;
  
  return {
    pair_address: generateRandomAddress(),
    token_name: tokenNames[nameIndex],
    token_ticker: tokenTickers[nameIndex],
    token_image: hasImage ? getRandomPicsumImage() : null,
    protocol: randomElement(protocols),
    open_trading: new Date(Date.now() - ageMinutes * 60 * 1000).toISOString(),
    market_cap_usd: parseFloat(randomBetween(10000, 500000).toFixed(2)),
    volume_usd_24h: parseFloat(randomBetween(5000, 200000).toFixed(2)),
    fees_sol: parseFloat(randomBetween(0.1, 10).toFixed(3)),
    tx_count: randomInt(50, 1000),
    bonding_progress: parseFloat(randomBetween(0.1, 1).toFixed(2)),
    liquidity_sol: parseFloat(randomBetween(5, 50).toFixed(2)),
    website: Math.random() > 0.4 ? `https://${tokenTickers[nameIndex].toLowerCase()}.io` : null,
    twitter: Math.random() > 0.3 ? `https://twitter.com/${tokenTickers[nameIndex].toLowerCase()}` : null,
    telegram: Math.random() > 0.5 ? `https://t.me/${tokenTickers[nameIndex].toLowerCase()}` : null,
    discord: Math.random() > 0.6 ? `https://discord.gg/${tokenTickers[nameIndex].toLowerCase()}` : null,
    deployer_address: generateRandomAddress(),
    creator_funding: generateCreatorFunding(),
    dev_holds_percent: parseFloat(randomBetween(0.01, 0.25).toFixed(2)),
    snipers_hold_percent: parseFloat(randomBetween(0.05, 0.3).toFixed(2)),
    top_10_holders: parseFloat(randomBetween(0.2, 0.7).toFixed(2)),
    lp_burned: parseFloat(randomBetween(0.5, 1).toFixed(2)),
    freeze_authority: Math.random() > 0.7 ? null : Math.random() > 0.5,
    created_at: new Date(Date.now() - ageMinutes * 60 * 1000).toISOString(),
  };
};

const generateColumnData = (): ColumnData => {
  return {
    newPairs: Array.from({ length: 5 }, () => generatePairData(randomInt(1, 30))),
    finalStretch: Array.from({ length: 5 }, () => generatePairData(randomInt(30, 120))),
    migrated: Array.from({ length: 5 }, () => generatePairData(randomInt(120, 480))),
  };
};

const updateColumnData = (data: ColumnData): ColumnData => {
  const updatePair = (pair: PairData): PairData => {
    const changes = Math.random();
    
    if (changes > 0.7) {
      return {
        ...pair,
        market_cap_usd: Math.max(1000, pair.market_cap_usd * randomBetween(0.95, 1.05)),
        volume_usd_24h: Math.max(500, pair.volume_usd_24h * randomBetween(0.9, 1.1)),
        fees_sol: Math.max(0.1, pair.fees_sol * randomBetween(0.95, 1.05)),
        tx_count: pair.tx_count + randomInt(0, 10),
        liquidity_sol: Math.max(1, pair.liquidity_sol * randomBetween(0.98, 1.02)),
      };
    }
    
    return pair;
  };

  const shouldAddNewPair = Math.random() > 0.9;
  let newPairs = data.newPairs.map(updatePair);
  
  if (shouldAddNewPair && newPairs.length < 8) {
    newPairs = [generatePairData(randomInt(1, 5)), ...newPairs];
  }
  
  if (newPairs.length > 6) {
    newPairs = newPairs.slice(0, 6);
  }

  return {
    newPairs,
    finalStretch: data.finalStretch.map(updatePair),
    migrated: data.migrated.map(updatePair),
  };
};

const PORT = process.env.PORT || 8080;
const wss = new WebSocketServer({ port: PORT as number });

let columnData = generateColumnData();

console.log(`WebSocket server started on port ${PORT}`);

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');
  
  ws.send(JSON.stringify(columnData));
  
  const interval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      columnData = updateColumnData(columnData);
      ws.send(JSON.stringify(columnData));
    }
  }, 500);
  
  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
  
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    clearInterval(interval);
  });
});

wss.on('error', (error) => {
  console.error('WebSocket Server error:', error);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing WebSocket server');
  wss.close(() => {
    console.log('WebSocket server closed');
    process.exit(0);
  });
});

