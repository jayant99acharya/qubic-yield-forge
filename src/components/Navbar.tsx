import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isConnected, walletAddress, connectWallet, disconnectWallet, isDemoMode, toggleDemoMode } = useAppStore();

  const navItems = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Oracle Feed', href: '#oracles' },
    { label: 'Rebalancer', href: '#rebalancer' },
    { label: 'Governance', href: '#governance' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-primary">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-foreground">
              YIELD<span className="text-primary">FORGE</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Demo Mode Toggle */}
            <button
              onClick={toggleDemoMode}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-semibold transition-all",
                isDemoMode
                  ? "bg-primary/20 text-primary border border-primary/50"
                  : "bg-muted text-muted-foreground border border-border"
              )}
            >
              {isDemoMode ? '● DEMO LIVE' : 'Demo Mode'}
            </button>

            {/* Wallet Button */}
            {isConnected ? (
              <div className="flex items-center gap-2">
                <div className="glass-card px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-mono text-foreground">{walletAddress}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={disconnectWallet}>
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button variant="hero" size="default" onClick={connectWallet}>
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-card mt-2 p-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <button
                onClick={toggleDemoMode}
                className={cn(
                  "w-full px-3 py-2 rounded-lg text-sm font-semibold transition-all",
                  isDemoMode
                    ? "bg-primary/20 text-primary border border-primary/50"
                    : "bg-muted text-muted-foreground border border-border"
                )}
              >
                {isDemoMode ? '● DEMO LIVE' : 'Enable Demo Mode'}
              </button>
              {isConnected ? (
                <Button variant="outline" className="w-full" onClick={disconnectWallet}>
                  Disconnect ({walletAddress})
                </Button>
              ) : (
                <Button variant="hero" className="w-full" onClick={connectWallet}>
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
