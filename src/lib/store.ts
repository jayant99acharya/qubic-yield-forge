import { create } from 'zustand';

export interface OracleData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  yield: number;
  category: 'real-estate' | 'commodity' | 'forex';
  allocation: number;
  lastUpdate: Date;
}

export interface UserPortfolio {
  qxBalance: number;
  sharesOwned: number;
  shareValue: number;
  totalValue: number;
  deposits: number[];
  compoundHistory: { timestamp: Date; amount: number; apy: number }[];
}

export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  votesFor: number;
  votesAgainst: number;
  status: 'active' | 'passed' | 'rejected';
  endDate: Date;
}

interface AppState {
  isConnected: boolean;
  walletAddress: string | null;
  isDemoMode: boolean;
  oracleData: OracleData[];
  portfolio: UserPortfolio;
  proposals: GovernanceProposal[];
  currentApy: number;
  totalTvl: number;
  
  // Actions
  connectWallet: () => void;
  disconnectWallet: () => void;
  toggleDemoMode: () => void;
  updateOracleData: (data: OracleData[]) => void;
  deposit: (amount: number) => void;
  withdraw: (shares: number) => void;
  vote: (proposalId: string, support: boolean) => void;
  rebalance: () => void;
}

const initialOracleData: OracleData[] = [
  {
    id: 'rei',
    name: 'Global Real Estate Index',
    symbol: 'REI',
    price: 2847.50,
    change24h: 0.85,
    yield: 12.0,
    category: 'real-estate',
    allocation: 45,
    lastUpdate: new Date(),
  },
  {
    id: 'xau',
    name: 'Gold Spot',
    symbol: 'XAU',
    price: 2024.30,
    change24h: -0.32,
    yield: 10.0,
    category: 'commodity',
    allocation: 30,
    lastUpdate: new Date(),
  },
  {
    id: 'usdtry',
    name: 'USD/TRY Carry',
    symbol: 'USD/TRY',
    price: 32.45,
    change24h: 1.24,
    yield: 8.0,
    category: 'forex',
    allocation: 25,
    lastUpdate: new Date(),
  },
];

const initialPortfolio: UserPortfolio = {
  qxBalance: 10000,
  sharesOwned: 0,
  shareValue: 1.0,
  totalValue: 0,
  deposits: [],
  compoundHistory: [],
};

const initialProposals: GovernanceProposal[] = [
  {
    id: '1',
    title: 'Add Bitcoin Treasury Basket',
    description: 'Proposal to add 10% allocation to BTC-backed treasury instruments for enhanced yield diversification.',
    votesFor: 12500,
    votesAgainst: 3200,
    status: 'active',
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
  {
    id: '2',
    title: 'Increase Real Estate Allocation',
    description: 'Increase real estate index allocation from 45% to 55% based on current yield performance.',
    votesFor: 8900,
    votesAgainst: 7100,
    status: 'active',
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  },
];

export const useAppStore = create<AppState>((set, get) => ({
  isConnected: false,
  walletAddress: null,
  isDemoMode: false,
  oracleData: initialOracleData,
  portfolio: initialPortfolio,
  proposals: initialProposals,
  currentApy: 15.2,
  totalTvl: 2847500,

  connectWallet: () => {
    const mockAddress = '0x' + Math.random().toString(16).slice(2, 10) + '...' + Math.random().toString(16).slice(2, 6);
    set({ isConnected: true, walletAddress: mockAddress });
  },

  disconnectWallet: () => {
    set({ isConnected: false, walletAddress: null });
  },

  toggleDemoMode: () => {
    set((state) => ({ isDemoMode: !state.isDemoMode }));
  },

  updateOracleData: (data) => {
    set({ oracleData: data });
  },

  deposit: (amount) => {
    const state = get();
    const sharesToMint = amount / state.portfolio.shareValue;
    
    set({
      portfolio: {
        ...state.portfolio,
        qxBalance: state.portfolio.qxBalance - amount,
        sharesOwned: state.portfolio.sharesOwned + sharesToMint,
        totalValue: (state.portfolio.sharesOwned + sharesToMint) * state.portfolio.shareValue,
        deposits: [...state.portfolio.deposits, amount],
      },
      totalTvl: state.totalTvl + amount,
    });
  },

  withdraw: (shares) => {
    const state = get();
    const qxAmount = shares * state.portfolio.shareValue;
    
    set({
      portfolio: {
        ...state.portfolio,
        qxBalance: state.portfolio.qxBalance + qxAmount,
        sharesOwned: state.portfolio.sharesOwned - shares,
        totalValue: (state.portfolio.sharesOwned - shares) * state.portfolio.shareValue,
      },
      totalTvl: state.totalTvl - qxAmount,
    });
  },

  vote: (proposalId, support) => {
    const state = get();
    const shares = state.portfolio.sharesOwned;
    
    set({
      proposals: state.proposals.map((p) =>
        p.id === proposalId
          ? {
              ...p,
              votesFor: support ? p.votesFor + shares : p.votesFor,
              votesAgainst: !support ? p.votesAgainst + shares : p.votesAgainst,
            }
          : p
      ),
    });
  },

  rebalance: () => {
    const state = get();
    const totalYield = state.oracleData.reduce((acc, d) => acc + d.yield * d.allocation / 100, 0);
    
    // Simulate yield compound
    const newShareValue = state.portfolio.shareValue * (1 + totalYield / 100 / 365);
    
    set({
      portfolio: {
        ...state.portfolio,
        shareValue: newShareValue,
        totalValue: state.portfolio.sharesOwned * newShareValue,
        compoundHistory: [
          ...state.portfolio.compoundHistory,
          { timestamp: new Date(), amount: state.portfolio.totalValue * (totalYield / 100 / 365), apy: totalYield },
        ],
      },
      currentApy: totalYield,
    });
  },
}));
