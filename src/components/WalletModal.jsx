import { useState } from 'react'

function WalletModal({ isOpen, onClose, selectedTier }) {
  const [step, setStep] = useState('connect') // 'connect', 'connecting', 'dashboard'
  const [isConnecting, setIsConnecting] = useState(false)

  const wallets = [
    {
      name: 'Phantom',
      icon: <img src="/phatnom logo.png" alt="Phantom" className="w-8 h-8 rounded-lg" />,
      popular: true
    },
    {
      name: 'Solflare',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      )
    },
    {
      name: 'Backpack',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
          </svg>
        </div>
      )
    },
  ]

  // All tier definitions
  const allTiers = [
    {
      id: 'builder',
      name: 'Builder Access',
      level: 'Tier 1',
      tierNum: 1,
      color: 'from-emerald-500 to-teal-500',
      character: '/character 1.png',
    },
    {
      id: 'operator',
      name: 'Operator Access',
      level: 'Tier 2',
      tierNum: 2,
      color: 'from-blue-500 to-cyan-500',
      character: '/character 4.png',
    },
    {
      id: 'partner',
      name: 'Partner Access',
      level: 'Tier 3',
      tierNum: 3,
      color: 'from-accent-pink to-pink-500',
      character: '/character 5.png',
    },
    {
      id: 'inner-circle',
      name: 'Inner Circle',
      level: 'Tier 4',
      tierNum: 4,
      color: 'from-accent-violet to-purple-500',
      character: '/character 6.png',
    },
  ]

  const allFeatures = [
    { id: 'docs', name: 'Launch Documentation', icon: '📄', minTier: 1 },
    { id: 'bundling-basic', name: 'Basic Bundling Tools', icon: '📦', minTier: 1 },
    { id: 'checklists', name: 'Launch Checklists', icon: '✅', minTier: 1 },
    { id: 'community', name: 'Builder Community', icon: '👥', minTier: 1 },
    { id: 'bundling-advanced', name: 'Advanced Bundling', icon: '🔧', minTier: 2 },
    { id: 'playbooks', name: 'Coordination Playbooks', icon: '📋', minTier: 2 },
    { id: 'private-channels', name: 'Private Channels', icon: '🔒', minTier: 2 },
    { id: 'kol-directory', name: 'KOL Directory', icon: '📢', minTier: 2 },
    { id: 'mm-intro', name: 'MM Introductions', icon: '🤝', minTier: 3 },
    { id: 'lp-consulting', name: 'LP Strategy Consulting', icon: '💧', minTier: 3 },
    { id: 'kol-launches', name: 'KOL-Backed Launches', icon: '🚀', minTier: 3 },
    { id: 'team-calls', name: 'Team Strategy Calls', icon: '📞', minTier: 3 },
    { id: 'priority-lp', name: 'Priority Liquidity', icon: '💎', minTier: 4 },
    { id: 'alpha-channels', name: 'Alpha Channels', icon: '🔮', minTier: 4 },
    { id: 'ceo-access', name: 'Direct CEO Access', icon: '👔', minTier: 4 },
    { id: 'backed-launches', name: 'Backed Launches', icon: '⭐', minTier: 4 },
  ]

  // Get tier number from selected tier
  const getTierNum = () => {
    if (!selectedTier) return 0
    const tierMatch = allTiers.find(t => t.id === selectedTier.id)
    return tierMatch ? tierMatch.tierNum : 0
  }

  const currentTierNum = getTierNum()
  const currentTierData = allTiers.find(t => t.tierNum === currentTierNum) || selectedTier

  const handleConnect = async (wallet) => {
    setIsConnecting(true)
    setStep('connecting')

    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 2500))

    setIsConnecting(false)
    setStep('dashboard')
  }

  const handleClose = () => {
    setStep('connect')
    setIsConnecting(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-deep-charcoal/95 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className={`relative w-full bg-slate-dark border border-slate-medium rounded-2xl shadow-2xl overflow-hidden animate-slide-up
                      ${step === 'dashboard' ? 'max-w-4xl max-h-[90vh] overflow-y-auto' : 'max-w-md'}`}>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-light hover:text-soft-white transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Step: Connect Wallet */}
        {step === 'connect' && (
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-pink/20 to-accent-violet/20
                              flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7H18V6C18 4.34 16.66 3 15 3H5C3.34 3 2 4.34 2 6V18C2 19.66 3.34 21 5 21H19C20.66 21 22 19.66 22 18V10C22 8.34 20.66 7 19 7Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-soft-white mb-2">Connect Wallet</h3>
              <p className="text-slate-light">
                {selectedTier
                  ? `Connect to access ${selectedTier.name}`
                  : 'Connect your wallet to check access'}
              </p>
            </div>

            {/* Selected tier preview */}
            {selectedTier && (
              <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${selectedTier.color || 'from-accent-pink to-accent-violet'} bg-opacity-10 border border-slate-medium/50`}>
                <div className="flex items-center gap-4">
                  <img src={selectedTier.character} alt={selectedTier.name} className="w-14 h-14 object-contain" />
                  <div>
                    <div className="text-xs text-slate-light">{selectedTier.level}</div>
                    <div className={`text-lg font-bold bg-gradient-to-r ${selectedTier.color} bg-clip-text text-transparent`}>
                      {selectedTier.name}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {wallets.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => handleConnect(wallet)}
                  className="w-full flex items-center justify-between p-4 rounded-xl
                             bg-slate-dark/50 border border-slate-medium/50
                             hover:border-accent-pink/50 hover:bg-slate-medium/20
                             transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    {wallet.icon}
                    <span className="font-semibold text-soft-white">{wallet.name}</span>
                  </div>
                  {wallet.popular && (
                    <span className="text-xs px-2 py-1 rounded-full bg-accent-pink/20 text-accent-pink font-medium">
                      Popular
                    </span>
                  )}
                </button>
              ))}
            </div>

            <p className="mt-6 text-xs text-center text-slate-light">
              By connecting, you agree to our Terms of Service
            </p>
          </div>
        )}

        {/* Step: Connecting */}
        {step === 'connecting' && (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full border-4 border-slate-medium" />
              <div className="absolute inset-0 rounded-full border-4 border-accent-pink border-t-transparent animate-spin" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent-pink/20 to-accent-violet/20 flex items-center justify-center">
                <img src="/phatnom logo.png" alt="Connecting" className="w-10 h-10 rounded-lg" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-soft-white mb-2">Connecting Wallet</h3>
            <p className="text-slate-light mb-6">Verifying your access to {selectedTier?.name || 'every.dev'}...</p>

            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Wallet connected
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-light">
                <span className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
                Verifying tier access...
              </div>
            </div>
          </div>
        )}

        {/* Step: Dashboard */}
        {step === 'dashboard' && selectedTier && (
          <div className="p-8">
            {/* Header with tier info */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-medium/30">
              <div className="flex items-center gap-4">
                <img src={selectedTier.character} alt={selectedTier.name} className="w-16 h-16 object-contain" />
                <div>
                  <div className="text-sm text-slate-light">Your Access Level</div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${selectedTier.color} bg-clip-text text-transparent`}>
                    {selectedTier.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-400 font-medium">Access Verified</span>
                  </div>
                </div>
              </div>

              {/* Tier badge */}
              <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${selectedTier.color} text-white font-bold`}>
                {selectedTier.level}
              </div>
            </div>

            {/* Quick Actions based on tier */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-soft-white mb-4">Quick Actions</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Discord - All tiers */}
                <a href="#" className="p-4 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/30 hover:border-[#5865F2]/60 transition-all text-center group">
                  <svg className="w-6 h-6 mx-auto mb-2 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <span className="text-sm font-medium text-soft-white">Join Discord</span>
                </a>

                {/* Request Intro - Tier 3+ */}
                <button
                  disabled={currentTierNum < 3}
                  className={`p-4 rounded-xl border transition-all text-center group
                             ${currentTierNum >= 3
                               ? 'bg-accent-pink/20 border-accent-pink/30 hover:border-accent-pink/60 cursor-pointer'
                               : 'bg-slate-medium/20 border-slate-medium/30 opacity-50 cursor-not-allowed'}`}
                >
                  <svg className={`w-6 h-6 mx-auto mb-2 ${currentTierNum >= 3 ? 'text-accent-pink' : 'text-slate-light'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  <span className={`text-sm font-medium ${currentTierNum >= 3 ? 'text-soft-white' : 'text-slate-light'}`}>
                    {currentTierNum >= 3 ? 'Request Intro' : 'Tier 3+'}
                  </span>
                </button>

                {/* Book Call - Tier 4 only */}
                <button
                  disabled={currentTierNum < 4}
                  className={`p-4 rounded-xl border transition-all text-center group
                             ${currentTierNum >= 4
                               ? 'bg-accent-violet/20 border-accent-violet/30 hover:border-accent-violet/60 cursor-pointer'
                               : 'bg-slate-medium/20 border-slate-medium/30 opacity-50 cursor-not-allowed'}`}
                >
                  <svg className={`w-6 h-6 mx-auto mb-2 ${currentTierNum >= 4 ? 'text-accent-violet' : 'text-slate-light'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className={`text-sm font-medium ${currentTierNum >= 4 ? 'text-soft-white' : 'text-slate-light'}`}>
                    {currentTierNum >= 4 ? 'Book Call' : 'Tier 4 Only'}
                  </span>
                </button>

                {/* Direct Chat - Tier 4 only */}
                <button
                  disabled={currentTierNum < 4}
                  className={`p-4 rounded-xl border transition-all text-center group
                             ${currentTierNum >= 4
                               ? 'bg-green-500/20 border-green-500/30 hover:border-green-500/60 cursor-pointer'
                               : 'bg-slate-medium/20 border-slate-medium/30 opacity-50 cursor-not-allowed'}`}
                >
                  <svg className={`w-6 h-6 mx-auto mb-2 ${currentTierNum >= 4 ? 'text-green-500' : 'text-slate-light'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className={`text-sm font-medium ${currentTierNum >= 4 ? 'text-soft-white' : 'text-slate-light'}`}>
                    {currentTierNum >= 4 ? 'Direct Chat' : 'Tier 4 Only'}
                  </span>
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h4 className="text-lg font-bold text-soft-white mb-4">Your Access</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {allFeatures.map((feature) => {
                  const isUnlocked = currentTierNum >= feature.minTier
                  return (
                    <div
                      key={feature.id}
                      className={`p-4 rounded-xl border transition-all
                                 ${isUnlocked
                                   ? 'bg-slate-dark/50 border-slate-medium/50 hover:border-accent-pink/50'
                                   : 'bg-slate-dark/20 border-slate-medium/20 opacity-40'}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-2xl">{feature.icon}</span>
                        {isUnlocked ? (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-medium">
                            Unlocked
                          </span>
                        ) : (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-medium/50 text-slate-light font-medium">
                            Tier {feature.minTier}
                          </span>
                        )}
                      </div>
                      <h5 className={`text-sm font-semibold ${isUnlocked ? 'text-soft-white' : 'text-slate-light'}`}>
                        {feature.name}
                      </h5>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Upgrade prompt if not max tier */}
            {currentTierNum < 4 && (
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-accent-pink/10 to-accent-violet/10 border border-accent-pink/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-soft-white mb-1">Want more access?</h4>
                    <p className="text-sm text-slate-light">
                      Upgrade to {allTiers[currentTierNum]?.name || 'a higher tier'} to unlock more features
                    </p>
                  </div>
                  <a
                    href="#tiers"
                    onClick={handleClose}
                    className="px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-violet text-white font-semibold rounded-xl
                               hover:shadow-lg hover:shadow-accent-pink/30 transition-all whitespace-nowrap"
                  >
                    View All Tiers
                  </a>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-medium/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <img src="/phatnom logo.png" alt="Phantom" className="w-5 h-5 rounded" />
                <p className="text-xs text-slate-light">
                  Connected: 0x...{Math.random().toString(16).slice(2, 6)}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-sm text-slate-light hover:text-accent-pink transition-colors"
              >
                Disconnect
              </button>
            </div>
          </div>
        )}

        {/* No tier selected - generic connect */}
        {step === 'dashboard' && !selectedTier && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-soft-white mb-2">Wallet Connected!</h3>
            <p className="text-slate-light mb-6">Select a tier to see what you can access.</p>
            <a
              href="#tiers"
              onClick={handleClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-violet
                         text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-pink/30 transition-all"
            >
              View Access Tiers
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default WalletModal
