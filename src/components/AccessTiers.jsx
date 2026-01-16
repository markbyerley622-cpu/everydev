function AccessTiers({ onSelectTier }) {
  const tiers = [
    {
      id: 'builder',
      name: 'Builder Access',
      level: 'Tier 1',
      tokenAmount: 'TBD',
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-500/70',
      bgGlow: 'bg-emerald-500/5',
      character: '/character 1.png',
      benefits: [
        { category: 'Tools', items: ['Launch resources & documentation', 'Starter bundling tools', 'Basic launch checklists'] },
        { category: 'Liquidity', items: ['Educational liquidity guides'] },
        { category: 'Community', items: ['Access to builder community'] },
      ],
      description: 'Essential access for developers starting their journey.'
    },
    {
      id: 'operator',
      name: 'Operator Access',
      level: 'Tier 2',
      tokenAmount: 'TBD',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500/70',
      bgGlow: 'bg-blue-500/5',
      character: '/character 4.png',
      benefits: [
        { category: 'Tools', items: ['Advanced token bundling tools', 'Launch coordination playbooks', 'Market-making strategy guides'] },
        { category: 'Liquidity', items: ['Liquidity coordination access', 'Entry-level MM introductions'] },
        { category: 'Cabals', items: ['Private builder channels', 'Operator network access'] },
        { category: 'KOL', items: ['KOL directory access'] },
      ],
      description: 'Everything in Tier 1, plus advanced coordination tools.'
    },
    {
      id: 'partner',
      name: 'Partner Access',
      level: 'Tier 3',
      tokenAmount: 'TBD',
      color: 'from-accent-pink to-pink-500',
      borderColor: 'border-accent-pink/30',
      hoverBorder: 'hover:border-accent-pink/70',
      bgGlow: 'bg-accent-pink/5',
      character: '/character 5.png',
      popular: true,
      benefits: [
        { category: 'Tools', items: ['Full tooling suite access', 'Custom launch frameworks', 'Priority support channels'] },
        { category: 'Liquidity', items: ['Liquidity support pathways', 'Trusted MM introductions', 'LP strategy consulting'] },
        { category: 'Cabals', items: ['Elite cabal membership', 'Partner-only channels'] },
        { category: 'KOL', items: ['KOL-backed launch access', 'Coordinated promotion'] },
        { category: 'Team Access', items: ['Direct calls with team', 'Strategy sessions'] },
      ],
      description: 'Everything in Tier 2, plus direct team and KOL access.'
    },
    {
      id: 'inner-circle',
      name: 'Inner Circle',
      level: 'Tier 4',
      tokenAmount: 'TBD',
      color: 'from-accent-violet to-purple-500',
      borderColor: 'border-accent-violet/30',
      hoverBorder: 'hover:border-accent-violet/70',
      bgGlow: 'bg-accent-violet/5',
      character: '/character 6.png',
      benefits: [
        { category: 'Tools', items: ['Early access to new tools', 'Beta features', 'Custom development support'] },
        { category: 'Liquidity', items: ['Priority liquidity allocation', 'Deep liquidity partnerships', 'Institutional MM access'] },
        { category: 'Cabals', items: ['Inner Circle membership', 'Deal flow access', 'Alpha channels'] },
        { category: 'KOL', items: ['KOL deal coordination', 'Tier 1 KOL network', 'Backed launches'] },
        { category: 'Team Access', items: ['Direct CEO access', 'Priority partnerships', 'Co-launch opportunities'] },
        { category: 'Market Making', items: ['Full MM support', 'Market strategy execution', 'Launch backing'] },
      ],
      description: 'Maximum access. Priority everything. Inner circle only.'
    },
  ]

  const categoryIcons = {
    Tools: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    Liquidity: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Cabals: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    KOL: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    'Team Access': (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    'Market Making': (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Community: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  }

  return (
    <section id="tiers" className="section-padding relative bg-gradient-to-b from-deep-charcoal via-slate-dark/30 to-deep-charcoal">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent-pink text-sm font-semibold tracking-wider uppercase">
            Token-Gated Access
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-white">
            Access <span className="gradient-text">Tiers</span>
          </h2>
          <p className="text-lg text-slate-light max-w-2xl mx-auto">
            Hold more tokens, unlock deeper access. Each tier builds on the previous,
            giving you more tools, connections, and opportunities.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-6">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className="relative"
            >
              {/* Popular badge - positioned outside the card */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-accent-pink to-accent-violet
                               rounded-full text-sm font-bold text-white z-30 whitespace-nowrap shadow-xl shadow-accent-pink/40
                               animate-pulse-slow">
                  Most Popular
                </div>
              )}
              <div
                className={`tier-card glass-card ${tier.borderColor} ${tier.hoverBorder}
                           group cursor-pointer transform hover:-translate-y-2 transition-all duration-500
                           ${tier.popular ? 'ring-2 ring-accent-pink/50 pt-10' : ''}`}
                onClick={() => onSelectTier(tier)}
              >

              {/* Tier header */}
              <div className="relative mb-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${tier.color} text-white mb-3`}>
                  {tier.level}
                </div>
                <h3 className="text-xl font-bold text-soft-white">{tier.name}</h3>
                <p className="text-sm text-slate-light mt-1">{tier.description}</p>
              </div>

              {/* Character image */}
              <div className="relative h-32 mb-6 flex items-center justify-center">
                <div className={`absolute inset-0 ${tier.bgGlow} rounded-xl`} />
                <img
                  src={tier.character}
                  alt={tier.name}
                  className="relative z-10 h-full w-auto object-contain
                           group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Token requirement */}
              <div className="mb-6 p-3 rounded-xl bg-slate-dark/50 border border-slate-medium/30">
                <div className="text-xs text-slate-light mb-1">Required Holdings</div>
                <div className={`text-lg font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.tokenAmount} EVERY
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {tier.benefits.map((benefit, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-slate-light">{categoryIcons[benefit.category]}</span>
                      <span className="text-xs font-semibold text-slate-light uppercase tracking-wider">
                        {benefit.category}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {benefit.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-soft-white/80">
                          <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-r ${tier.color} bg-clip-text`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full mt-6 py-3 rounded-xl font-semibold text-white
                           bg-gradient-to-r ${tier.color} opacity-90 hover:opacity-100
                           transition-all duration-300 transform hover:scale-105`}
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectTier(tier)
                }}
              >
                Connect & Access
              </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-light">
            Token amounts are examples only. Final tier thresholds will be announced at launch.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AccessTiers
