# 🚀 YieldForge - Qubic RWA Yield Optimizer

![YieldForge Banner](https://img.shields.io/badge/Qubic-Nostromo%20Launchpad-00D4AA?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Demo%20Ready-success?style=for-the-badge)
![TPS](https://img.shields.io/badge/TPS-15.5M-blue?style=for-the-badge)

## 🏆 Qubic Nostromo Launchpad Hackathon Submission

**Track 1: DeFi & Finance** - Oracle-Powered RWA Yield Optimizer

YieldForge is a cutting-edge DeFi protocol built on Qubic that leverages the network's unprecedented 15.5M TPS and live oracle feeds to optimize yields across Real World Assets (RWAs). Users can earn 15%+ APY through automated rebalancing between real estate indices, commodities, and forex carry trades.

## ✨ Key Features

- **🔮 Live Oracle Integration**: Real-time price feeds from Qubic's decentralized oracle network
- **⚡ Lightning-Fast Rebalancing**: Sub-second portfolio optimization using Qubic's 15.5M TPS
- **💎 IPO Share Model**: Governance tokens launched via Qubic's native IPO mechanism
- **🤖 Auto-Compounding**: Daily yield compounding with minimal gas fees
- **📊 Smart Allocation**: AI-driven allocation across RWA baskets for maximum yield
- **🗳️ DAO Governance**: Share holders vote on new RWA baskets and protocol parameters

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: Tailwind CSS + Shadcn/ui + Framer Motion
- **State Management**: Zustand
- **Smart Contracts**: Qubic C++/WASM (simulated)
- **Oracles**: Qubic Oracle Network (testnet)
- **Web3**: Custom Qubic SDK integration

## 📦 Installation

### Prerequisites

- Node.js 18+ or Bun
- npm/yarn/pnpm/bun package manager
- Git

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/qubic-yield-forge.git
cd qubic-yield-forge
```

2. **Install dependencies**
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

3. **Start the development server**
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🎮 Demo Mode

The application includes a fully-featured demo mode that simulates:

1. **Live Oracle Feeds**: Real-time price updates every 3 seconds
2. **Auto-Rebalancing**: Watch the portfolio automatically adjust allocations
3. **Yield Compounding**: See your shares grow in value over time
4. **Governance Voting**: Participate in protocol decisions

### How to Use Demo Mode

1. Click "Demo Mode" toggle in the navbar
2. Connect wallet (mock Qubic testnet)
3. Request faucet tokens (1000 QX)
4. Deposit QX to receive YieldForge shares
5. Watch live oracle updates and auto-rebalancing
6. Vote on governance proposals

## 🏗️ Project Structure

```
qubic-yield-forge/
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioDashboard.tsx
│   │   ├── OracleFeed.tsx
│   │   ├── RebalanceSimulator.tsx
│   │   └── GovernancePanel.tsx
│   ├── services/          # Blockchain services
│   │   ├── qubicService.ts      # Qubic testnet integration
│   │   └── smartContractService.ts # Smart contract logic
│   ├── lib/
│   │   ├── store.ts       # Zustand state management
│   │   └── utils.ts       # Utility functions
│   └── pages/
│       └── Index.tsx      # Main application page
├── public/
└── package.json
```

## 🚀 Deployment

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/qubic-yield-forge)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/qubic-yield-forge)

## 📊 Key Metrics

- **Target APY**: 15-18%
- **Management Fee**: 0.5% annually
- **Rebalance Frequency**: Dynamic (5% threshold)
- **Compound Interval**: Daily
- **Min Deposit**: 10 QX
- **Gas Fees**: <0.1 QX per transaction

## 🎯 Roadmap

### Phase 1: Hackathon MVP ✅
- [x] Qubic testnet integration
- [x] Oracle price feeds
- [x] Auto-rebalancing logic
- [x] IPO share minting
- [x] Basic governance

### Phase 2: Mainnet Launch
- [ ] Audit smart contracts
- [ ] KYC/AML integration
- [ ] Multi-sig treasury
- [ ] Advanced yield strategies
- [ ] Mobile app

### Phase 3: Expansion
- [ ] Cross-chain bridges
- [ ] Institutional features
- [ ] Derivatives trading
- [ ] Lending/borrowing
- [ ] Insurance pool

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Hackathon Submission

### Problem Statement
RWAs (real estate, commodities) yield 8-15% but require manual rebalancing across fragmented chains. Qubic's speed and oracles enable real-time RWA yield optimization that no other chain can match.

### Solution
YieldForge leverages Qubic's unique features:
- **15.5M TPS**: Instant rebalancing without congestion
- **Live Oracles**: Real-time RWA price feeds
- **UPoW**: Deterministic smart contract execution
- **IPO Model**: Native token distribution mechanism

### Business Model
- **Revenue**: 0.5% management fee on AUM
- **TAM**: $10T RWA market
- **SAM**: $100B DeFi yield optimization
- **SOM**: $1B Qubic ecosystem TVL

### Demo Video
[Watch 60-second demo](https://youtu.be/demo-link)

### Live Demo
[https://yieldforge-qubic.vercel.app](https://yieldforge-qubic.vercel.app)

## 📞 Contact

- **Team**: YieldForge Labs
- **Email**: team@yieldforge.io
- **Twitter**: [@YieldForgeQubic](https://twitter.com/YieldForgeQubic)
- **Discord**: [Join our community](https://discord.gg/yieldforge)

## 🙏 Acknowledgments

- Qubic Network team for the amazing infrastructure
- Nostromo Launchpad for the opportunity
- All contributors and testers

---

**Built with ❤️ for the Qubic Ecosystem**

*Disclaimer: This is a hackathon demo. Not financial advice. DYOR.*
